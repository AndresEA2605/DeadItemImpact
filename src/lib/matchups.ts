import { DEADLOCK_HEROES } from '../data/heroes';
import { DEADLOCK_ITEMS } from '../data/items';
import { HERO_MATCHUPS_BIDIRECTIONAL } from '../data/matchups-override';
import { HERO_TACTICAL_PROFILES } from '../data/hero-tactics';
import { getPreciseClashExplanation } from './clash-mechanics';
import type { DeadlockHero, DeadlockItem, HeroCounterMatchup } from '../types/deadlock';

export interface NormalizedHeroMatchup extends HeroCounterMatchup {
  conflicted: boolean;
  sourceCount: number;
  solution: string;
  recommendedItemIds: string[];
}

export interface MatchupDataIssue {
  code: 'empty-hero-id' | 'self-matchup' | 'unknown-hero' | 'invalid-advantage' | 'missing-reason' | 'duplicate-entry' | 'duplicate-conflict';
  sourceHeroId: string;
  matchupHeroId?: string;
  message: string;
}

const VALID_ADVANTAGES = new Set<HeroCounterMatchup['advantage']>([
  'Fuerte Contra',
  'Débil Contra',
  'Skill Matchup',
]);

const KNOWN_HEROES_MAP = new Map(DEADLOCK_HEROES.map((h) => [h.id, h] as const));
const KNOWN_HERO_IDS = new Set(DEADLOCK_HEROES.map(({ id }) => id));

// Obtiene los ítems contraataque únicos sin duplicados
function getArchetypeCounterItems(target: DeadlockHero): string[] {
  const profile = HERO_TACTICAL_PROFILES[target.id];
  const items: string[] = [];

  if (profile) {
    if (profile.primaryCounterItem) items.push(profile.primaryCounterItem);
    if (profile.secondaryCounterItems?.length) items.push(...profile.secondaryCounterItems);
  }

  const customCounters = target.counterplay?.itemCounters?.map((ic) => ic.itemId) ?? [];
  items.push(...customCounters);

  return [...new Set(items)].filter((id) => Boolean(DEADLOCK_ITEMS[id])).slice(0, 3);
}

// Genera consejos mecánicos precisos con nombres exactos de habilidades
function generateTacticalSolution(
  source: DeadlockHero,
  target: DeadlockHero,
  advantage: HeroCounterMatchup['advantage']
): { solution: string; reason: string } {
  return getPreciseClashExplanation(source, target, advantage);
}

// Genera un cruce analítico sin duplicados
function synthesizeMatchup(source: DeadlockHero, target: DeadlockHero): NormalizedHeroMatchup {
  let advantage: HeroCounterMatchup['advantage'] = 'Skill Matchup';

  const sourceRole = source.role;
  const targetRole = target.role;
  const sourceAttack = source.attackType;
  const targetAttack = target.attackType;

  // Lógica de ventaja por mecánicas
  if (sourceAttack === 'Hitscan Preciso' && targetAttack === 'Escopeta Melee') {
    advantage = 'Fuerte Contra';
  } else if (sourceAttack === 'Escopeta Melee' && targetAttack === 'Hitscan Preciso') {
    advantage = 'Débil Contra';
  } else if (sourceRole === 'Asesino' && (targetRole === 'Mago de Control' || targetRole === 'Soporte / Utilidad')) {
    advantage = 'Fuerte Contra';
  } else if ((sourceRole === 'Mago de Control' || sourceRole === 'Soporte / Utilidad') && targetRole === 'Asesino') {
    advantage = 'Débil Contra';
  } else if (sourceRole === 'Brawler' && targetRole === 'Asesino') {
    advantage = 'Fuerte Contra';
  } else if (sourceRole === 'Asesino' && targetRole === 'Brawler') {
    advantage = 'Débil Contra';
  } else if (sourceRole === 'Iniciador' && targetRole === 'Carry') {
    advantage = 'Fuerte Contra';
  } else if (sourceRole === 'Carry' && targetRole === 'Iniciador') {
    advantage = 'Débil Contra';
  } else {
    advantage = 'Skill Matchup';
  }

  const { solution, reason } = generateTacticalSolution(source, target, advantage);
  const recommendedItemIds = getArchetypeCounterItems(target);

  return {
    heroId: target.id,
    advantage,
    reason,
    solution,
    recommendedItemIds,
    conflicted: false,
    sourceCount: 1,
  };
}

export function normalizeHeroMatchups(
  matchups: readonly HeroCounterMatchup[],
  sourceHeroId?: string,
): NormalizedHeroMatchup[] {
  const grouped = new Map<string, HeroCounterMatchup[]>();

  for (const matchup of matchups) {
    const heroId = matchup.heroId?.trim();
    if (!heroId || heroId === sourceHeroId || !KNOWN_HERO_IDS.has(heroId)) continue;

    const entries = grouped.get(heroId) ?? [];
    entries.push(matchup);
    grouped.set(heroId, entries);
  }

  return Array.from(grouped, ([heroId, entries]) => {
    const validEntries = entries.filter((entry) => VALID_ADVANTAGES.has(entry.advantage));
    const advantages = new Set(validEntries.map((entry) => entry.advantage));
    const conflicted = advantages.size > 1;
    const representative = validEntries[0] ?? entries[0];
    const reasons = [...new Set(validEntries.map(({ reason }) => reason?.trim()).filter(Boolean))];
    const targetHero = KNOWN_HEROES_MAP.get(heroId);

    const advantage = conflicted ? 'Skill Matchup' : representative.advantage;
    const recommendedItemIds = targetHero ? getArchetypeCounterItems(targetHero) : [];
    const sourceHero = sourceHeroId ? KNOWN_HEROES_MAP.get(sourceHeroId) : undefined;
    const tactical = sourceHero && targetHero
      ? generateTacticalSolution(sourceHero, targetHero, advantage)
      : { solution: 'Adapta tu entrada según sus enfriamientos.', reason: reasons[0] ?? '' };

    // Si la razón original era vaga o repetitiva, sustituir por la explicación precisa
    const rawReason = representative.reason ?? '';
    const isVague =
      !rawReason ||
      rawReason.length < 35 ||
      rawReason.includes('desplazar') ||
      rawReason.includes('desplazarse') ||
      rawReason.includes('posicional') ||
      rawReason.includes('posicionamiento') ||
      rawReason.includes('intercambio corto') ||
      rawReason.includes('situación mala');
    const finalReason = isVague ? tactical.reason : rawReason;
    const finalSolution = tactical.solution;

    return {
      ...representative,
      heroId,
      advantage,
      reason: finalReason,
      solution: finalSolution,
      recommendedItemIds: representative.recommendedItemIds?.length ? representative.recommendedItemIds : recommendedItemIds,
      conflicted: false,
      sourceCount: entries.length,
    };
  });
}

function buildCompleteMatchupsMap(): Map<string, Map<string, NormalizedHeroMatchup>> {
  const fullMap = new Map<string, Map<string, NormalizedHeroMatchup>>();

  for (const sourceHero of DEADLOCK_HEROES) {
    const heroMap = new Map<string, NormalizedHeroMatchup>();
    const curatedList = HERO_MATCHUPS_BIDIRECTIONAL.get(sourceHero.id) ?? [];
    const normalizedCurated = normalizeHeroMatchups(curatedList, sourceHero.id);

    for (const matchup of normalizedCurated) {
      heroMap.set(matchup.heroId, matchup);
    }

    for (const targetHero of DEADLOCK_HEROES) {
      if (targetHero.id === sourceHero.id) continue;
      if (!heroMap.has(targetHero.id)) {
        heroMap.set(targetHero.id, synthesizeMatchup(sourceHero, targetHero));
      }
    }

    fullMap.set(sourceHero.id, heroMap);
  }

  return fullMap;
}

export const HERO_MATCHUPS_BY_SOURCE = buildCompleteMatchupsMap();

export interface TacticalMatchupDetail {
  sourceHero: DeadlockHero;
  targetHero: DeadlockHero;
  advantage: HeroCounterMatchup['advantage'];
  userPerspective: 'favorable' | 'unfavorable' | 'skill';
  statusBadge: {
    label: string;
    tone: string;
    iconType: 'shield' | 'swords' | 'alert';
  };
  whyReason: string;
  solutionHowToPlay: string;
  recommendedItems: {
    item: DeadlockItem;
    explanation: string;
  }[];
}

export function getTacticalMatchup(sourceHero: DeadlockHero, targetHero: DeadlockHero): TacticalMatchupDetail {
  const matchup = HERO_MATCHUPS_BY_SOURCE.get(sourceHero.id)?.get(targetHero.id) ?? synthesizeMatchup(sourceHero, targetHero);

  let userPerspective: 'favorable' | 'unfavorable' | 'skill' = 'skill';
  let statusBadge: {
    label: string;
    tone: string;
    iconType: 'shield' | 'swords' | 'alert';
  } = {
    label: 'Duelo Parejo (50/50)',
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
    iconType: 'swords',
  };

  if (matchup.advantage === 'Fuerte Contra') {
    userPerspective = 'favorable';
    statusBadge = {
      label: `Ventaja Favorable (${sourceHero.name})`,
      tone: 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300',
      iconType: 'swords',
    };
  } else if (matchup.advantage === 'Débil Contra') {
    userPerspective = 'unfavorable';
    statusBadge = {
      label: `Desventaja Crítica (${targetHero.name})`,
      tone: 'border-rose-400/35 bg-rose-400/10 text-rose-300',
      iconType: 'alert',
    };
  }

  const items: { item: DeadlockItem; explanation: string }[] = [];
  const itemIds = matchup.recommendedItemIds?.length
    ? matchup.recommendedItemIds
    : getArchetypeCounterItems(targetHero);

  for (const id of itemIds) {
    const item = DEADLOCK_ITEMS[id];
    if (!item) continue;
    const customRec = targetHero.counterplay?.itemCounters?.find((ic) => ic.itemId === id);
    items.push({
      item,
      explanation: customRec?.counterExplanation ?? item.description,
    });
  }

  return {
    sourceHero,
    targetHero,
    advantage: matchup.advantage,
    userPerspective,
    statusBadge,
    whyReason: matchup.reason,
    solutionHowToPlay: matchup.solution,
    recommendedItems: items.slice(0, 3),
  };
}
