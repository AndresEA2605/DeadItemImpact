import { DEADLOCK_HEROES } from '../data/heroes';
import type { HeroCounterMatchup } from '../types/deadlock';

export interface NormalizedHeroMatchup extends HeroCounterMatchup {
  conflicted: boolean;
  sourceCount: number;
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

const KNOWN_HERO_IDS = new Set(DEADLOCK_HEROES.map(({ id }) => id));

function getMatchupRecords(hero: (typeof DEADLOCK_HEROES)[number]): readonly HeroCounterMatchup[] {
  if (hero.counterplay.heroCounters.length > 0) return hero.counterplay.heroCounters;
  return hero.counterplay.heroMatchups ?? [];
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
    const conflicted = advantages.size > 1 || validEntries.length !== entries.length;
    const representative = validEntries[0] ?? entries[0];
    const reasons = [...new Set(validEntries.map(({ reason }) => reason.trim()).filter(Boolean))];

    return {
      ...representative,
      heroId,
      advantage: conflicted ? 'Skill Matchup' : representative.advantage,
      reason: conflicted
        ? 'Cruce incierto: los datos locales contienen ventajas incompatibles.'
        : reasons[0] ?? 'No hay una explicación disponible para este cruce.',
      conflicted,
      sourceCount: entries.length,
    };
  });
}

export function validateHeroMatchups(): MatchupDataIssue[] {
  const issues: MatchupDataIssue[] = [];

  for (const source of DEADLOCK_HEROES) {
    const grouped = new Map<string, HeroCounterMatchup[]>();

    for (const matchup of getMatchupRecords(source)) {
      const matchupHeroId = matchup.heroId?.trim();
      if (!matchupHeroId) {
        issues.push({ code: 'empty-hero-id', sourceHeroId: source.id, message: 'El cruce no tiene heroId.' });
        continue;
      }
      if (matchupHeroId === source.id) {
        issues.push({ code: 'self-matchup', sourceHeroId: source.id, matchupHeroId, message: 'Un héroe no puede tener un cruce consigo mismo.' });
      } else if (!KNOWN_HERO_IDS.has(matchupHeroId)) {
        issues.push({ code: 'unknown-hero', sourceHeroId: source.id, matchupHeroId, message: 'El cruce apunta a un héroe que no existe.' });
      }
      if (!VALID_ADVANTAGES.has(matchup.advantage)) {
        issues.push({ code: 'invalid-advantage', sourceHeroId: source.id, matchupHeroId, message: 'La ventaja del cruce no es válida.' });
      }
      if (!matchup.reason?.trim()) {
        issues.push({ code: 'missing-reason', sourceHeroId: source.id, matchupHeroId, message: 'El cruce no explica la ventaja.' });
      }

      const entries = grouped.get(matchupHeroId) ?? [];
      entries.push(matchup);
      grouped.set(matchupHeroId, entries);
    }

    for (const [matchupHeroId, entries] of grouped) {
      if (entries.length < 2) continue;
      const hasConflict = new Set(entries.map(({ advantage }) => advantage)).size > 1;
      issues.push({
        code: hasConflict ? 'duplicate-conflict' : 'duplicate-entry',
        sourceHeroId: source.id,
        matchupHeroId,
        message: hasConflict
          ? 'Hay entradas duplicadas con ventajas opuestas.'
          : 'El mismo cruce aparece repetido.',
      });
    }
  }

  return issues;
}

export const HERO_MATCHUP_DATA_ISSUES = validateHeroMatchups();

if (process.env.NODE_ENV !== 'production' && HERO_MATCHUP_DATA_ISSUES.length > 0) {
  console.warn('[Deadlock Hub] Se encontraron problemas en los datos de cruces:', HERO_MATCHUP_DATA_ISSUES);
}

export const HERO_MATCHUPS_BY_SOURCE = new Map(
  DEADLOCK_HEROES.map((hero) => [
    hero.id,
    new Map(
      normalizeHeroMatchups(getMatchupRecords(hero), hero.id)
        .map((matchup) => [matchup.heroId, matchup] as const),
    ),
  ] as const),
);
