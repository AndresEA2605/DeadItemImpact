'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { MouseEvent } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Plus,
  RefreshCw,
  Search,
  Shield,
  Swords,
  X,
} from 'lucide-react';
import { CompactStoreItem } from './CompactStoreItem';
import { HeroArt, ItemArt } from './GameImage';
import { HeroPicker } from './HeroPicker';
import { DEADLOCK_HEROES } from '../data/heroes';
import { DEADLOCK_ITEMS } from '../data/items';
import { formatSouls } from '../lib/format';
import { HERO_MATCHUPS_BY_SOURCE } from '../lib/matchups';
import type { DeadlockHero, DeadlockItem, ItemCategory, ItemCounterRecommendation } from '../types/deadlock';

const POLL_INTERVAL = 20_000;
const REQUEST_TIMEOUT = 5_000;
const LOCAL_GAME_STATUS_URL = 'http://127.0.0.1:3000/api/game-status';

function isLoopbackHost(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
}

function subscribeToPageOrigin(): () => void {
  return () => {};
}

function getHostedPageSnapshot(): boolean {
  return typeof window !== 'undefined' && !isLoopbackHost(window.location.hostname);
}

function getServerPageSnapshot(): boolean {
  return false;
}

function requestGameStatus(signal: AbortSignal, useLocalBridge: boolean): Promise<Response> {
  if (!useLocalBridge) {
    return fetch('/api/game-status', { cache: 'no-store', signal });
  }

  return fetch(LOCAL_GAME_STATUS_URL, {
    cache: 'no-store',
    mode: 'cors',
    signal,
    targetAddressSpace: 'loopback',
  } as RequestInit & { targetAddressSpace: 'loopback' });
}

const MAP_LABELS: Record<string, string> = {
  dl_hideout: 'Zona de práctica',
  dl_midtown: 'Midtown',
  hero_testing: 'Pruebas de héroes',
  new_player_basics: 'Tutorial para nuevos jugadores',
  start: 'Inicio',
};

function getMapLabel(mapName: string): string {
  const normalized = mapName.toLocaleLowerCase().replace(/\.(?:bsp|vpk)$/i, '');
  return MAP_LABELS[normalized] ?? normalized.replace(/^dl_/, '').replace(/[_-]+/g, ' ');
}

interface GameStatus {
  isRunning: boolean;
  processId: number | null;
  inMatch: boolean;
  gameMode?: 'closed' | 'lobby' | 'practice' | 'match' | 'unknown';
  mapName?: string | null;
  logFresh?: boolean;
  detectedHeroes: string[];
  timestamp?: string;
}

interface BuildSuggestion {
  itemId: string;
  signals: string[];
  observedFrom: string[];
}

interface LiveMatchPanelProps {
  active: boolean;
  playerHeroId?: string;
  onMatchDetected: () => void;
  onPlayerHeroChange: (hero: DeadlockHero) => void;
}

interface RivalContextMenu {
  heroId: string;
  left: number;
  top: number;
}

const BUILD_COUNTERS: { signal: string; pattern: RegExp; itemIds: string[] }[] = [
  { signal: 'curación y robo de vida', pattern: /curaci[oó]n|robo[- ]de[- ]vida|regeneraci[oó]n/, itemIds: ['healbane', 'toxic-bullets', 'spirit-burn'] },
  { signal: 'salud adicional', pattern: /salud extra|salud m[aá]xima|vida m[aá]xima/, itemIds: ['decay', 'tankbuster'] },
  { signal: 'resistencia a balas', pattern: /resistencia a balas/, itemIds: ['bullet-resist-shredder'] },
  { signal: 'resistencia espiritual', pattern: /resistencia (?:al |a )?esp[ií]ritu/, itemIds: ['spirit-shredder', 'spirit-rend'] },
  { signal: 'daño de arma', pattern: /daño de arma|cadencia de disparo|velocidad de disparo/, itemIds: ['bullet-resilience', 'metal-skin'] },
  { signal: 'daño espiritual', pattern: /daño espiritual|poder espiritual/, itemIds: ['spirit-resilience', 'divine-barrier'] },
];

const BUILD_CATEGORY_COUNTERS: Record<ItemCategory, { label: string; itemIds: string[]; reason: string }> = {
  weapon: {
    label: 'Arma / Fuerza',
    itemIds: ['return-fire', 'metal-skin', 'bullet-resilience'],
    reason: 'Reduce daño de armas.',
  },
  vitality: {
    label: 'Vida / Vitalidad',
    itemIds: ['healbane', 'toxic-bullets', 'decay'],
    reason: 'Corta curación y castiga salud alta.',
  },
  spirit: {
    label: 'Espíritu',
    itemIds: ['spirit-resilience', 'debuff-reducer', 'divine-barrier'],
    reason: 'Mitiga daño espiritual.',
  },
};

function getBuildSuggestions(observedItems: DeadlockItem[]): BuildSuggestion[] {
  const suggestions = new Map<string, BuildSuggestion>();

  for (const observed of observedItems) {
    const searchable = `${observed.tags.join(' ')} ${observed.description}`.toLocaleLowerCase();
    for (const rule of BUILD_COUNTERS) {
      if (!rule.pattern.test(searchable)) continue;
      for (const itemId of rule.itemIds) {
        if (!DEADLOCK_ITEMS[itemId]) continue;
        const suggestion = suggestions.get(itemId) ?? { itemId, signals: [], observedFrom: [] };
        if (!suggestion.signals.includes(rule.signal)) suggestion.signals.push(rule.signal);
        if (!suggestion.observedFrom.includes(observed.name)) suggestion.observedFrom.push(observed.name);
        suggestions.set(itemId, suggestion);
      }
    }
  }

  return Array.from(suggestions.values()).sort(
    (first, second) => second.signals.length - first.signals.length
  );
}

export function LiveMatchPanel({ active, playerHeroId, onMatchDetected, onPlayerHeroChange }: LiveMatchPanelProps) {
  const [status, setStatus] = useState<GameStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [statusError, setStatusError] = useState('');
  const [refreshToken, setRefreshToken] = useState(0);
  const hostedApp = useSyncExternalStore(
    subscribeToPageOrigin,
    getHostedPageSnapshot,
    getServerPageSnapshot,
  );
  const [localBridgeConnected, setLocalBridgeConnected] = useState(false);
  const [connectingLocalBridge, setConnectingLocalBridge] = useState(false);
  const hasCompletedRead = useRef(false);
  const previousMode = useRef<GameStatus['gameMode'] | undefined>(undefined);
  const enemySelectionTouched = useRef(false);
  const playerHeroIdRef = useRef(playerHeroId);
  const onMatchDetectedRef = useRef(onMatchDetected);
  const [autoSelected, setAutoSelected] = useState(false);
  const [enemyIds, setEnemyIds] = useState<string[]>([]);
  const [laneEnemyIds, setLaneEnemyIds] = useState<string[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [ownPickerOpen, setOwnPickerOpen] = useState(false);
  const [lanePickerOpen, setLanePickerOpen] = useState(false);
  const [rivalContextMenu, setRivalContextMenu] = useState<RivalContextMenu | null>(null);
  const [itemQuery, setItemQuery] = useState('');
  const [observedItemIds, setObservedItemIds] = useState<string[]>([]);
  const [selectedBuildCategory, setSelectedBuildCategory] = useState<ItemCategory | 'auto'>('auto');

  useEffect(() => {
    playerHeroIdRef.current = playerHeroId;
    onMatchDetectedRef.current = onMatchDetected;
  }, [playerHeroId, onMatchDetected]);

  useEffect(() => {
    if (!rivalContextMenu) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setRivalContextMenu(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [rivalContextMenu]);

  useEffect(() => {
    let mounted = true;
    let inFlight = false;
    let pendingController: AbortController | null = null;

    if (hostedApp && !localBridgeConnected) return;

    const poll = async () => {
      if (inFlight) return;
      inFlight = true;
      pendingController = new AbortController();
      const timeout = window.setTimeout(() => pendingController?.abort(), REQUEST_TIMEOUT);
      if (hasCompletedRead.current) setRefreshing(true);
      else setLoading(true);

      try {
        const response = await requestGameStatus(pendingController.signal, hostedApp);
        if (!response.ok) throw new Error(`Estado del juego: ${response.status}`);
        const nextStatus: GameStatus = await response.json();
        if (mounted) {
          setStatus(nextStatus);
          setStatusError('');

          if (nextStatus.gameMode === 'match') {
            if (previousMode.current !== 'match') onMatchDetectedRef.current();
            if (!enemySelectionTouched.current) {
              const detectedIds = nextStatus.detectedHeroes
                .filter((id) => id !== playerHeroIdRef.current && DEADLOCK_HEROES.some((hero) => hero.id === id))
                .slice(0, 6);
              if (detectedIds.length > 0) {
                setEnemyIds(detectedIds);
                setLaneEnemyIds(detectedIds.slice(0, 2));
                setAutoSelected(true);
              }
            }
          } else {
            enemySelectionTouched.current = false;
            previousMode.current = nextStatus.gameMode;
          }
          previousMode.current = nextStatus.gameMode;
        }
      } catch (error) {
        if (mounted) {
          setStatusError(
            error instanceof Error && error.name === 'AbortError'
              ? 'La lectura tardó más de 5 segundos.'
              : hostedApp
                ? 'Se perdió la conexión con este PC. Revisa que Deadlock Hub local siga abierto.'
                : 'No se pudo leer el estado del juego.'
          );
        }
      } finally {
        window.clearTimeout(timeout);
        pendingController = null;
        inFlight = false;
        if (mounted) {
          hasCompletedRead.current = true;
          setLoading(false);
          setRefreshing(false);
        }
      }
    };

    void poll();
    const interval = window.setInterval(poll, POLL_INTERVAL);
    return () => {
      mounted = false;
      window.clearInterval(interval);
      pendingController?.abort();
    };
  }, [hostedApp, localBridgeConnected, refreshToken]);

  const connectLocalBridge = async () => {
    setConnectingLocalBridge(true);
    setStatusError('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const response = await requestGameStatus(controller.signal, true);
      if (!response.ok) throw new Error(`Estado local: ${response.status}`);
      const nextStatus: GameStatus = await response.json();
      setStatus(nextStatus);
      setLocalBridgeConnected(true);
      setStatusError('');
    } catch {
      setStatusError(
        'No pude conectar con tu PC. Inicia Deadlock Hub local con “bun run dev” y permite el acceso a la red local cuando el navegador lo solicite.'
      );
    } finally {
      window.clearTimeout(timeout);
      setConnectingLocalBridge(false);
      setLoading(false);
    }
  };

  const detectedHeroes = useMemo(
    () => (status?.detectedHeroes ?? [])
      .filter((id) => id !== playerHeroId)
      .map((id) => DEADLOCK_HEROES.find((candidate) => candidate.id === id))
      .filter((candidate): candidate is DeadlockHero => Boolean(candidate)),
    [playerHeroId, status]
  );
  const enemyHeroes = useMemo(
    () => enemyIds.filter((id) => id !== playerHeroId).map((id) => DEADLOCK_HEROES.find((candidate) => candidate.id === id))
      .filter((candidate): candidate is DeadlockHero => Boolean(candidate)),
    [enemyIds, playerHeroId]
  );
  const manualEnemyHeroes = useMemo(
    () => enemyHeroes.filter((enemy) => !detectedHeroes.some((candidate) => candidate.id === enemy.id)),
    [detectedHeroes, enemyHeroes]
  );
  const laneEnemyHeroes = useMemo(
    () => laneEnemyIds.map((id) => DEADLOCK_HEROES.find((candidate) => candidate.id === id))
      .filter((candidate): candidate is DeadlockHero => Boolean(candidate)),
    [laneEnemyIds]
  );
  const myHero = useMemo(
    () => DEADLOCK_HEROES.find((candidate) => candidate.id === playerHeroId) ?? null,
    [playerHeroId]
  );
  const contextHero = useMemo(
    () => rivalContextMenu ? DEADLOCK_HEROES.find((candidate) => candidate.id === rivalContextMenu.heroId) ?? null : null,
    [rivalContextMenu]
  );
  const ownMatchupEntries = useMemo(() => {
    if (!playerHeroId) return [];
    // Prioritizar rivales de línea y luego los de la partida
    const allEnemies = [
      ...laneEnemyHeroes,
      ...enemyHeroes.filter((e) => !laneEnemyIds.includes(e.id)),
    ];
    return allEnemies.flatMap((enemy) => {
      // Tomar la perspectiva del jugador contra este rival
      const entry = HERO_MATCHUPS_BY_SOURCE.get(playerHeroId)?.get(enemy.id);
      return entry ? [{ enemy, entry }] : [];
    });
  }, [enemyHeroes, laneEnemyHeroes, playerHeroId, laneEnemyIds]);

  const counterThreats = useMemo(() => {
    if (!myHero || !playerHeroId) return [];
    // Todos los enemigos conocidos
    const allEnemies = [
      ...laneEnemyHeroes,
      ...enemyHeroes.filter((e) => !laneEnemyIds.includes(e.id)),
    ];

    return allEnemies.flatMap((enemy) => {
      const isLaneEnemy = laneEnemyIds.includes(enemy.id);
      // Perspectiva del jugador: ¿este rival me hace counter a mí?
      const myAgainstEnemy = HERO_MATCHUPS_BY_SOURCE.get(playerHeroId)?.get(enemy.id);
      const enemyAgainstMy = HERO_MATCHUPS_BY_SOURCE.get(enemy.id)?.get(playerHeroId);

      const isThreat =
        myAgainstEnemy?.advantage === 'Débil Contra' ||
        enemyAgainstMy?.advantage === 'Fuerte Contra';

      if (!isThreat) return [];

      const itemIds = myAgainstEnemy?.recommendedItemIds ?? enemyAgainstMy?.recommendedItemIds ?? [];
      const items = itemIds
        .map((id) => DEADLOCK_ITEMS[id])
        .filter((item): item is DeadlockItem => Boolean(item));

      const whyReason =
        myAgainstEnemy?.reason ??
        `${enemy.name} tiene ventaja con sus habilidades de control y burst.`;
      const solution =
        myAgainstEnemy?.solution ??
        `Compra ${items[0]?.name || 'ítems defensivos'} y no aceptes duelos directos.`;

      return [{
        enemy,
        isLaneEnemy,
        whyReason,
        solution,
        keyItems: items.slice(0, 3),
      }];
    });
  }, [myHero, playerHeroId, enemyHeroes, laneEnemyHeroes, laneEnemyIds]);

  const matchupAdvice = useMemo(() => {
    if (!myHero || !playerHeroId) return null;
    const laneMatchups = laneEnemyHeroes
      .map((enemy) => HERO_MATCHUPS_BY_SOURCE.get(playerHeroId)?.get(enemy.id))
      .filter(Boolean);

    const hasDanger = laneMatchups.some((m) => m?.advantage === 'Débil Contra');
    const hasAdvantage = laneMatchups.some((m) => m?.advantage === 'Fuerte Contra');
    const phaseAdvice = laneEnemyHeroes.length > 0
      ? myHero.howToPlay.lanePhaseTips[0]
      : status?.gameMode === 'match'
      ? myHero.howToPlay.midLateGamePlan[0]
      : myHero.howToPlay.lanePhaseTips[0];

    if (laneMatchups.some((m) => m?.conflicted)) {
      return {
        label: laneEnemyHeroes.length > 0 ? 'Cruce de línea incierto' : 'Cruce incierto',
        tone: 'border-amber-300/20 bg-amber-300/[0.05] text-amber-100/80',
        action: phaseAdvice,
      };
    }

    if (hasDanger) {
      return {
        label: laneEnemyHeroes.length > 0 ? 'El rival de línea tiene ventaja' : 'El rival tiene ventaja directa',
        tone: 'border-rose-400/25 bg-rose-400/[0.06] text-rose-100/80',
        action: 'Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.',
      };
    }

    if (hasAdvantage) {
      return {
        label: laneEnemyHeroes.length > 0 ? 'Tienes ventaja en fase de líneas' : 'Tienes ventaja táctica',
        tone: 'border-emerald-300/25 bg-emerald-300/[0.06] text-emerald-100/80',
        action: 'Presiona la línea con tu kit y busca el last hit agresivo con melee.',
      };
    }

    return {
      label: laneEnemyHeroes.length > 0 ? 'Línea igualada por habilidad' : 'Duelo parejo (50/50)',
      tone: 'border-white/10 bg-white/[0.03] text-white/70',
      action: phaseAdvice,
    };
  }, [laneEnemyHeroes, myHero, playerHeroId, status?.gameMode]);

  const enemyTeamAnalysis = useMemo(() => {
    if (enemyHeroes.length === 0) return null;

    let spiritCount = 0;
    let bulletCount = 0;
    const aerialHeroes: string[] = [];
    const healingHeroes: string[] = [];
    const channelerHeroes: string[] = [];

    for (const enemy of enemyHeroes) {
      if (enemy.attackType.includes('Espíritu')) spiritCount++;
      if (
        enemy.attackType.includes('Balas') ||
        enemy.attackType.includes('Hitscan') ||
        enemy.attackType.includes('Escopeta')
      ) bulletCount++;

      if (['vindicta', 'grey-talon', 'lash'].includes(enemy.id)) {
        aerialHeroes.push(enemy.name);
      }
      if (['abrams', 'infernus', 'kelvin', 'shiv'].includes(enemy.id)) {
        healingHeroes.push(enemy.name);
      }
      if (['seven', 'bebop', 'mcginnis'].includes(enemy.id)) {
        channelerHeroes.push(enemy.name);
      }
    }

    const total = spiritCount + bulletCount || 1;
    const bulletPercent = Math.round((bulletCount / total) * 100);
    const spiritPercent = 100 - bulletPercent;

    const tacticalNotes: { text: string; icon: string; tone: string }[] = [];

    if (bulletCount >= 4) {
      tacticalNotes.push({
        text: 'Predomina daño de Balas: Bullet Armor o Metal Skin recomendados.',
        icon: '🛡️',
        tone: 'text-amber-200/90',
      });
    } else if (spiritCount >= 4) {
      tacticalNotes.push({
        text: 'Predomina daño de Espíritu: Spirit Armor o Superior Stamina esenciales.',
        icon: '⚡',
        tone: 'text-purple-200/90',
      });
    } else {
      tacticalNotes.push({
        text: 'Daño mixto: ajusta armaduras según tu rival de línea.',
        icon: '⚖️',
        tone: 'text-sky-200/90',
      });
    }

    if (healingHeroes.length >= 2) {
      tacticalNotes.push({
        text: `Alta curación (${healingHeroes.join(', ')}): compra Healbane o Decay.`,
        icon: '🩸',
        tone: 'text-rose-200/90',
      });
    }

    if (aerialHeroes.length > 0) {
      tacticalNotes.push({
        text: `Amenaza aérea (${aerialHeroes.join(', ')}): usa Knockdown para derribar.`,
        icon: '🎯',
        tone: 'text-emerald-200/90',
      });
    }

    if (channelerHeroes.length > 0) {
      tacticalNotes.push({
        text: `Canalizadores (${channelerHeroes.join(', ')}): Knockdown para interrumpir ult.`,
        icon: '⛔',
        tone: 'text-indigo-200/90',
      });
    }

    return {
      bulletPercent,
      spiritPercent,
      tacticalNotes: tacticalNotes.slice(0, 3),
    };
  }, [enemyHeroes]);

  const openingBuild = useMemo(() => {
    const stage = myHero?.howToPlay.buildGuide[0];
    if (!stage) return null;
    return {
      ...stage,
      items: stage.items.map((id) => DEADLOCK_ITEMS[id]).filter((item): item is DeadlockItem => Boolean(item)),
    };
  }, [myHero]);
  const observedItems = useMemo(
    () => observedItemIds.map((id) => DEADLOCK_ITEMS[id]).filter((item): item is DeadlockItem => Boolean(item)),
    [observedItemIds]
  );
  const buildSuggestions = useMemo(() => getBuildSuggestions(observedItems), [observedItems]);
    const observedCategoryCounts = useMemo(() => {
      const counts: Record<ItemCategory, number> = { weapon: 0, vitality: 0, spirit: 0 };
      observedItems.forEach((item) => { counts[item.category] += 1; });
      return counts;
    }, [observedItems]);
    const dominantBuildCategory = useMemo(() => {
      const highest = Math.max(...Object.values(observedCategoryCounts));
      if (highest === 0) return null;
      const leaders = (Object.keys(observedCategoryCounts) as ItemCategory[])
        .filter((category) => observedCategoryCounts[category] === highest);
      return leaders.length === 1 ? leaders[0] : null;
    }, [observedCategoryCounts]);
    const activeBuildCategory = selectedBuildCategory === 'auto' ? dominantBuildCategory : selectedBuildCategory;
    const categoryCounterItems = useMemo(
      () => activeBuildCategory
        ? BUILD_CATEGORY_COUNTERS[activeBuildCategory].itemIds
          .map((id) => DEADLOCK_ITEMS[id])
          .filter((item): item is DeadlockItem => Boolean(item))
        : [],
      [activeBuildCategory]
    );
    const categoryCounterIds = useMemo(() => new Set(categoryCounterItems.map((item) => item.id)), [categoryCounterItems]);
    const specificBuildSuggestions = useMemo(
      () => buildSuggestions.filter((suggestion) => !categoryCounterIds.has(suggestion.itemId)),
      [buildSuggestions, categoryCounterIds]
    );
  const enemyItemSuggestions = useMemo(() => {
    const suggestions = new Map<string, { recommendation: ItemCounterRecommendation; heroes: string[]; laneHeroes: string[] }>();
    for (const enemy of enemyHeroes) {
      const isLaneEnemy = laneEnemyIds.includes(enemy.id);
      for (const recommendation of enemy.counterplay.itemCounters) {
        const current = suggestions.get(recommendation.itemId);
        if (current) {
          if (!current.heroes.includes(enemy.name)) current.heroes.push(enemy.name);
          if (isLaneEnemy && !current.laneHeroes.includes(enemy.name)) current.laneHeroes.push(enemy.name);
          if (recommendation.priority === 'Esencial') current.recommendation = recommendation;
        } else {
          suggestions.set(recommendation.itemId, {
            recommendation,
            heroes: [enemy.name],
            laneHeroes: isLaneEnemy ? [enemy.name] : [],
          });
        }
      }
    }
    return Array.from(suggestions.entries())
      .map(([itemId, data]) => ({ item: DEADLOCK_ITEMS[itemId], ...data }))
      .filter((entry) => Boolean(entry.item))
      .sort((first, second) => {
        const priority = (value: ItemCounterRecommendation['priority']) =>
          value === 'Esencial' ? 0 : value === 'Situacional' ? 1 : 2;
        return second.laneHeroes.length - first.laneHeroes.length ||
          priority(first.recommendation.priority) - priority(second.recommendation.priority) ||
          second.heroes.length - first.heroes.length;
      })
      .slice(0, 6);
  }, [enemyHeroes, laneEnemyIds]);
  const filteredItems = useMemo(() => {
    const query = itemQuery.trim().toLocaleLowerCase();
    if (query.length < 2) return [];
    return Object.values(DEADLOCK_ITEMS)
      .filter((item) => !observedItemIds.includes(item.id) && item.name.toLocaleLowerCase().includes(query))
      .slice(0, 5);
  }, [itemQuery, observedItemIds]);
  const modeTitle = status?.gameMode === 'practice'
    ? 'Zona de práctica'
    : status?.gameMode === 'lobby'
      ? 'En sala'
      : status?.gameMode === 'match'
        ? 'Partida en curso'
        : hostedApp && !localBridgeConnected
          ? 'Conexión local pendiente'
          : status?.isRunning
          ? 'Deadlock abierto · modo sin confirmar'
          : 'Deadlock no detectado';
  const mapLabel = status?.mapName ? getMapLabel(status.mapName) : null;
  const showMapLabel = Boolean(mapLabel && mapLabel.toLocaleLowerCase() !== modeTitle.toLocaleLowerCase());

  const toggleEnemy = (candidate: DeadlockHero) => {
    if (candidate.id === playerHeroId) return;
    enemySelectionTouched.current = true;
    setAutoSelected(false);
    if (enemyIds.includes(candidate.id)) {
      setEnemyIds((current) => current.filter((id) => id !== candidate.id));
      setLaneEnemyIds((current) => current.filter((id) => id !== candidate.id));
    } else if (enemyIds.length < 6) {
      setEnemyIds((current) => current.includes(candidate.id) ? current : [...current, candidate.id]);
    }
  };

  const toggleLaneEnemy = (candidate: DeadlockHero) => {
    if (candidate.id === playerHeroId) return;
    if (!enemyIds.includes(candidate.id)) return;
    const selected = laneEnemyIds.includes(candidate.id);
    if (selected) {
      setLaneEnemyIds((current) => current.filter((id) => id !== candidate.id));
      return;
    }
    if (laneEnemyIds.length >= 2) return;
    enemySelectionTouched.current = true;
    setAutoSelected(false);
    setLaneEnemyIds((current) => [...current, candidate.id]);
  };

  const openRivalMenu = (event: MouseEvent<HTMLElement>, candidate: DeadlockHero) => {
    event.preventDefault();
    const menuWidth = 224;
    const menuHeight = enemyIds.includes(candidate.id) ? 148 : 104;
    setRivalContextMenu({
      heroId: candidate.id,
      left: Math.max(8, Math.min(event.clientX, window.innerWidth - menuWidth - 8)),
      top: Math.max(8, Math.min(event.clientY, window.innerHeight - menuHeight - 8)),
    });
  };

  const addRivalAndLane = (candidate: DeadlockHero) => {
    if (enemyIds.includes(candidate.id)) {
      toggleLaneEnemy(candidate);
      return;
    }
    if (enemyIds.length >= 6 || laneEnemyIds.length >= 2 || candidate.id === playerHeroId) return;
    enemySelectionTouched.current = true;
    setAutoSelected(false);
    setEnemyIds((current) => [...current, candidate.id]);
    setLaneEnemyIds((current) => [...current, candidate.id]);
  };

  const removeRival = (candidate: DeadlockHero) => {
    enemySelectionTouched.current = true;
    setEnemyIds((current) => current.filter((id) => id !== candidate.id));
    setLaneEnemyIds((current) => current.filter((id) => id !== candidate.id));
    setAutoSelected(false);
  };

  const addObservedItem = (item: DeadlockItem) => {
    setObservedItemIds((current) => [...current, item.id]);
    setItemQuery('');
  };

  const selectPlayerHero = (selected: DeadlockHero) => {
    if (enemyIds.includes(selected.id)) {
      enemySelectionTouched.current = true;
      setEnemyIds((current) => current.filter((id) => id !== selected.id));
      setLaneEnemyIds((current) => current.filter((id) => id !== selected.id));
      setAutoSelected(false);
    }
    onPlayerHeroChange(selected);
    setOwnPickerOpen(false);
  };

  return (
    <section className={`${active ? 'block' : 'hidden'} screen mx-auto max-w-5xl pb-10 pt-5`} aria-label="Zona de partida">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[12px] font-medium uppercase text-white/40">Lectura local · actualiza cada 20 s</p>
          <h1 className="text-2xl font-semibold text-white">Zona de partida</h1>
        </div>
        {hostedApp && !localBridgeConnected ? (
          <button
            onClick={() => void connectLocalBridge()}
            disabled={connectingLocalBridge}
            className="press inline-flex min-h-10 items-center gap-2 rounded-full bg-amber-300 px-4 text-[12px] font-semibold text-neutral-950 hover:bg-amber-200 disabled:opacity-60"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${connectingLocalBridge ? 'animate-spin' : ''}`} />
            {connectingLocalBridge ? 'Conectando…' : 'Conectar este PC'}
          </button>
        ) : (
          <button
            onClick={() => setRefreshToken((token) => token + 1)}
            disabled={refreshing || loading}
            aria-label="Actualizar detección"
            title="Actualizar ahora"
            className="press flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-white/70 hover:bg-white/[0.12] disabled:opacity-40"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing || loading ? 'animate-spin' : ''}`} />
          </button>
        )}
      </div>

      {hostedApp && !localBridgeConnected && (
        <div className="mb-4 rounded-2xl border border-amber-200/15 bg-amber-200/[0.045] p-3.5 text-[12px] leading-relaxed text-white/65">
          La web necesita permiso para consultar Deadlock en tu PC. Deja abierto el servidor local del proyecto y pulsa <span className="font-semibold text-white/85">Conectar este PC</span>.
        </div>
      )}

      {loading && !status && !(hostedApp && !localBridgeConnected) ? (
        <div className="animate-pulse space-y-3" aria-label="Cargando estado del juego">
          <div className="h-20 rounded-2xl bg-white/[0.06]" />
          <div className="h-36 rounded-2xl bg-white/[0.04]" />
          <div className="h-24 rounded-2xl bg-white/[0.04]" />
        </div>
      ) : (
        <>
          {statusError && (
            <p role="status" className="mt-3 flex items-center gap-2 text-[12px] text-amber-100/85">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {statusError}
            </p>
          )}

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <div className="min-w-0">
                <div className="mb-2 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h2 className="flex items-center gap-2 text-[14px] font-semibold text-white/90">
                  <Swords className="h-4 w-4 text-amber-300" />
                  Rivales
                  <span className="text-[12px] text-white/50">{enemyHeroes.length}/6</span>
                  {autoSelected && <span className="text-[11px] font-medium text-amber-200/90">Auto · confirma</span>}
                </h2>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-white/60">
                  <span className={`inline-flex items-center gap-1.5 font-medium ${status?.gameMode === 'match' ? 'text-emerald-200' : status?.gameMode === 'practice' ? 'text-sky-200' : status?.gameMode === 'lobby' ? 'text-amber-200' : 'text-white/60'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${status?.gameMode === 'match' ? 'bg-emerald-400 soft-pulse' : status?.gameMode === 'practice' ? 'bg-sky-300' : status?.gameMode === 'lobby' ? 'bg-amber-300' : 'bg-white/30'}`} />
                    {modeTitle}
                  </span>
                  {showMapLabel && mapLabel && (
                    <span className="inline-flex items-center gap-1 text-white/50">
                      <MapPin className="h-3 w-3" />
                      {mapLabel}
                    </span>
                  )}
                  {status?.isRunning && !status.logFresh && (
                    <span className="text-amber-200/80" title="Agrega -condebug en las opciones de lanzamiento de Deadlock y reinicia el juego.">
                      Sin registro en vivo · activa -condebug en Steam
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => setPickerOpen(true)}
              className="press group mt-2 flex w-full items-center justify-between rounded-2xl bg-amber-400 px-4 py-3.5 text-left text-[14px] font-semibold text-[#17120a] shadow-[0_8px_24px_rgba(245,158,11,0.12)] transition hover:bg-amber-300 active:scale-[0.99]"
            >
              <span className="flex items-center gap-2.5">
                <Plus className="h-4 w-4" strokeWidth={2.5} />
                {enemyHeroes.length > 0 ? 'Añadir o editar rivales' : 'Añadir rivales'}
              </span>
              <span className="rounded-full bg-black/[0.1] px-2.5 py-1 text-[11px] font-bold tabular-nums">{enemyHeroes.length}/6</span>
            </button>

            {detectedHeroes.length > 0 && (
              <div className="mt-3">
                <p className="mb-2 text-[12px] text-white/65">
                  {autoSelected ? 'Confirma qué héroes son rivales.' : 'Marca los héroes del equipo enemigo.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {detectedHeroes.map((candidate) => {
                    const selected = enemyIds.includes(candidate.id);
                    const selectedLane = laneEnemyIds.includes(candidate.id);
                    return (
                      <span
                        key={candidate.id}
                        onContextMenu={(event) => openRivalMenu(event, candidate)}
                        className={`inline-flex items-center rounded-full border ${selected ? 'border-emerald-300/50 bg-emerald-300/10' : 'border-white/[0.12] bg-white/[0.045]'}`}
                      >
                        <button
                          onClick={() => toggleEnemy(candidate)}
                          aria-pressed={selected}
                          className={`press inline-flex items-center gap-2 py-1.5 pl-1.5 pr-2.5 text-[12px] font-medium ${selected ? 'text-emerald-100' : 'text-white/75'}`}
                        >
                          <HeroArt hero={candidate} className="h-7 w-7 rounded-full" sizes="28px" decorative />
                          {candidate.name}
                          {selected && <Check className="h-3 w-3" />}
                        </button>
                        <button
                          onClick={() => toggleLaneEnemy(candidate)}
                          disabled={!selected && !selectedLane}
                          aria-label={selectedLane ? `Quitar ${candidate.name} de rivales de línea` : `Marcar ${candidate.name} como rival de línea`}
                          aria-pressed={selectedLane}
                          title={selectedLane ? 'Quitar de rivales de línea' : 'Marcar rival de línea'}
                          className={`press mr-1 flex h-7 w-7 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-30 ${selectedLane ? 'bg-sky-300/20 text-sky-100' : selected ? 'text-white/45 hover:bg-white/[0.08] hover:text-white/80' : 'text-white/20'}`}
                        >
                          <MapPin className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {manualEnemyHeroes.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {manualEnemyHeroes.map((enemy) => (
                  <span key={enemy.id} onContextMenu={(event) => openRivalMenu(event, enemy)} className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] py-1 pl-1.5 pr-1">
                    <button
                      onClick={() => toggleEnemy(enemy)}
                      title={`Quitar a ${enemy.name}`}
                      className="press inline-flex items-center gap-2 pr-2 text-[12px] font-medium text-white/80"
                    >
                      <HeroArt hero={enemy} className="h-8 w-8 rounded-full" sizes="32px" decorative />
                      {enemy.name}
                      <X className="h-3 w-3 text-white/35" />
                    </button>
                    <button
                      onClick={() => toggleLaneEnemy(enemy)}
                      disabled={!laneEnemyIds.includes(enemy.id) && laneEnemyIds.length >= 2}
                      aria-label={laneEnemyIds.includes(enemy.id) ? `Quitar ${enemy.name} de la línea` : `Marcar ${enemy.name} de línea`}
                      aria-pressed={laneEnemyIds.includes(enemy.id)}
                      title={laneEnemyIds.includes(enemy.id) ? 'Quitar de línea' : 'Marcar rival de línea'}
                      className={`press flex h-7 w-7 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-30 ${laneEnemyIds.includes(enemy.id) ? 'bg-sky-300/20 text-sky-100' : 'text-white/40 hover:bg-white/[0.08] hover:text-white/80'}`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            ) : detectedHeroes.length === 0 ? (
              <p className="mt-3 text-[12px] text-white/55">Sin candidatos detectados. Pulsa Añadir rivales.</p>
            ) : null}

            {/* Análisis táctico del equipo rival */}
            {enemyTeamAnalysis && (
              <div className="mt-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-white/70">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-white/50 text-[10px]">
                    <span>📊</span> Perfil de daño enemigo
                  </span>
                  <span className="text-[10px] text-white/50 font-mono">
                    🔫 Balas {enemyTeamAnalysis.bulletPercent}% · ⚡ Espíritu {enemyTeamAnalysis.spiritPercent}%
                  </span>
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08] flex">
                  <div
                    className="h-full bg-amber-400 transition-all duration-300"
                    style={{ width: `${enemyTeamAnalysis.bulletPercent}%` }}
                    title={`Balas: ${enemyTeamAnalysis.bulletPercent}%`}
                  />
                  <div
                    className="h-full bg-purple-400 transition-all duration-300"
                    style={{ width: `${enemyTeamAnalysis.spiritPercent}%` }}
                    title={`Espíritu: ${enemyTeamAnalysis.spiritPercent}%`}
                  />
                </div>

                <div className="mt-2.5 space-y-1.5 text-[11px]">
                  {enemyTeamAnalysis.tacticalNotes.map((note, idx) => (
                    <p key={idx} className={`flex items-start gap-1.5 ${note.tone} leading-tight`}>
                      <span className="shrink-0">{note.icon}</span>
                      <span>{note.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Build rival observada & registro de compras */}
            <div className="mt-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Search className="h-3.5 w-3.5 text-white/40" />
                  <h3 className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Build rival observada</h3>
                </div>
                {observedItems.length > 0 && (
                  <button
                    onClick={() => setObservedItemIds([])}
                    className="text-[10px] font-medium text-white/45 hover:text-rose-300 transition"
                  >
                    Limpiar ({observedItems.length})
                  </button>
                )}
              </div>
              <p className="mb-2.5 text-[11px] leading-snug text-white/55">
                Registra los ítems que veas comprar para recibir counters de respuesta.
              </p>

              <div className="relative">
                <input
                  type="search"
                  value={itemQuery}
                  onChange={(event) => setItemQuery(event.target.value)}
                  placeholder="Buscar compra rival (ej. Bullet Armor, Warp Stone...)"
                  className="h-10 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 text-[13px] text-white outline-none placeholder:text-white/40 focus:border-white/20"
                />
                {filteredItems.length > 0 && (
                  <div className="absolute inset-x-0 top-full z-20 mt-1 max-h-56 overflow-y-auto rounded-xl border border-white/[0.1] bg-[#17191c] shadow-2xl">
                    {filteredItems.map((item) => (
                      <button key={item.id} onClick={() => addObservedItem(item)} className="press flex w-full items-center gap-2.5 px-3 py-2 text-left hover:bg-white/[0.06]">
                        <ItemArt item={item} className="h-7 w-7 rounded-lg bg-white/[0.05]" sizes="28px" />
                        <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-white/80">{item.name}</span>
                        <span className="text-[10px] text-white/40">{formatSouls(item.cost)}</span>
                        <Plus className="h-3.5 w-3.5 text-white/40" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {observedItems.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {observedItems.map((item) => (
                    <button key={item.id} onClick={() => setObservedItemIds((current) => current.filter((id) => id !== item.id))} className="press inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] py-1 pl-1.5 pr-2 text-[10px] text-white/65 hover:border-rose-400/30" title={`Quitar ${item.name}`}>
                      <ItemArt item={item} className="h-4 w-4 rounded-full" sizes="16px" />
                      {item.name}
                      <X className="h-3 w-3 text-white/35 hover:text-rose-300" />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-3">
                <p className="mb-1.5 text-[11px] font-semibold text-white/60">Categoría de build predominante</p>
                <div role="group" aria-label="Categoría de la build rival" className="flex gap-0.5 rounded-lg bg-white/[0.04] p-1">
                  <button
                    onClick={() => setSelectedBuildCategory('auto')}
                    aria-pressed={selectedBuildCategory === 'auto'}
                    className={`press min-w-0 flex-1 rounded-md px-1.5 py-1.5 text-[11px] font-semibold ${selectedBuildCategory === 'auto' ? 'bg-white/[0.12] text-white' : 'text-white/55 hover:text-white/80'}`}
                  >
                    {dominantBuildCategory && selectedBuildCategory === 'auto'
                      ? BUILD_CATEGORY_COUNTERS[dominantBuildCategory].label.split(' / ')[0]
                      : 'Auto'}
                  </button>
                  {(['weapon', 'vitality', 'spirit'] as const).map((category) => {
                    const selected = selectedBuildCategory === category;
                    const label = category === 'weapon' ? 'Arma' : category === 'vitality' ? 'Vida' : 'Espíritu';
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedBuildCategory(category)}
                        aria-pressed={selected}
                        className={`press flex min-w-0 flex-1 items-center justify-center gap-1 rounded-md px-1.5 py-1.5 text-[11px] font-semibold ${selected ? 'bg-white/[0.12] text-white' : 'text-white/55 hover:text-white/80'}`}
                      >
                        {label}
                        <span className="text-[10px] opacity-60 font-mono">{observedCategoryCounts[category]}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-1.5 text-[10.5px] leading-tight text-white/50">
                  {observedItems.length === 0
                    ? 'Añade compras para detectar la tendencia de daño rival.'
                    : selectedBuildCategory === 'auto' && dominantBuildCategory
                      ? `Predomina ${BUILD_CATEGORY_COUNTERS[dominantBuildCategory].label} (${observedCategoryCounts[dominantBuildCategory]}).`
                      : selectedBuildCategory === 'auto'
                        ? 'Empate. Elige una categoría manual.'
                        : `Elegida: ${BUILD_CATEGORY_COUNTERS[selectedBuildCategory].label}.`}
                </p>
              </div>

              {categoryCounterItems.length > 0 && activeBuildCategory && (
                <div className="mt-3 border-t border-white/[0.07] pt-2.5">
                  <p className="text-[11px] font-semibold text-white/85">
                    Counters recomendados para {BUILD_CATEGORY_COUNTERS[activeBuildCategory].label.split(' / ')[0]}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {categoryCounterItems.map((item, index) => (
                      <span key={item.id} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10.5px] text-white/85">
                        <ItemArt item={item} className="h-4 w-4 rounded" sizes="16px" />
                        <span className="font-medium">{item.name}</span>
                        <span className="text-[9.5px] text-white/45 font-mono">{formatSouls(item.cost)}</span>
                        {index === 0 && <span className="ml-0.5 rounded bg-emerald-400/20 px-1 py-0.2 text-[8.5px] font-bold text-emerald-300">1°</span>}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {specificBuildSuggestions.length > 0 && (
                <details className="group mt-2.5 border-t border-white/[0.07] pt-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-medium text-white/60 hover:text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Shield className="h-3 w-3 text-emerald-300/70" />
                      Counters por efecto detectado ({specificBuildSuggestions.length})
                    </span>
                    <ChevronDown className="h-3 w-3 transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 flex flex-col gap-1.5">
                    {specificBuildSuggestions.slice(0, 4).map((suggestion) => {
                      const item = DEADLOCK_ITEMS[suggestion.itemId];
                      return (
                        <div key={item.id} className="flex items-center gap-2 rounded-lg bg-white/[0.025] border border-white/[0.05] p-1.5">
                          <ItemArt item={item} className="h-6 w-6 rounded" sizes="24px" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold text-white/85 truncate">{item.name}</p>
                            <p className="text-[9.5px] text-white/50 truncate">Responde a {suggestion.signals.join(', ')}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </details>
              )}
            </div>
          </div>

            </div>

            <div className="min-w-0 border-t border-white/[0.08] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[14px] font-semibold text-white/85">Cruce</h2>
                <button
                  onClick={() => setOwnPickerOpen(true)}
                  className="press rounded-full bg-white/[0.08] px-3 py-1.5 text-[11px] font-semibold text-white/75 hover:bg-white/[0.13]"
                >
                  {myHero ? 'Cambiar héroe' : 'Elegir mi héroe'}
                </button>
              </div>

              {myHero ? (
                <div className="mt-3">
                  <div className="flex items-center gap-2.5">
                    <HeroArt hero={myHero} className="h-9 w-9 shrink-0 rounded-full" sizes="36px" decorative />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-white/90">{myHero.name}</p>
                      <p className="truncate text-[11px] text-white/55">{myHero.role}</p>
                    </div>
                  </div>

                  {laneEnemyHeroes.length > 0 && (
                    <p className="mt-2 text-[11px] text-sky-100/70">Línea contra {laneEnemyHeroes.map((enemy) => enemy.name).join(', ')}</p>
                  )}

                  {matchupAdvice && (
                    <div className={`mt-3 rounded-xl border p-3 ${matchupAdvice.tone}`}>
                      <p className="text-[12px] font-bold text-white/90">{matchupAdvice.label}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-white/70">{matchupAdvice.action}</p>
                    </div>
                  )}

                  {/* Detalle exhaustivo de rivales que te hacen counter */}
                  {counterThreats.length > 0 && (
                    <div className="mt-3.5 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">
                          {counterThreats.length === 1 ? '1 rival te hace counter directo' : (counterThreats.length + ' rivales te hacen counter')}
                        </span>
                      </div>

                      {counterThreats.map(({ enemy, isLaneEnemy, whyReason, solution, keyItems }) => (
                        <div key={enemy.id} className="rounded-xl border border-rose-500/30 bg-rose-950/25 p-3.5 shadow-sm">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <HeroArt hero={enemy} className="h-8 w-8 rounded-lg shadow" sizes="32px" decorative />
                              <div>
                                <span className="text-[13px] font-bold text-white">{enemy.name}</span>
                                <span className="ml-1.5 text-[11px] text-white/50">· {enemy.role}</span>
                              </div>
                            </div>
                            {isLaneEnemy ? (
                              <span className="rounded-full bg-rose-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-rose-200 border border-rose-400/50">
                                ⚔️ En tu línea
                              </span>
                            ) : (
                              <span className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] font-medium text-white/60">
                                En la partida
                              </span>
                            )}
                          </div>

                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px]">
                            <div className="rounded-lg bg-rose-500/10 border border-rose-500/25 p-2.5">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                                <span>⚔️</span> Peligro rival
                              </p>
                              <p className="mt-1 text-white/90 text-[11.5px] leading-relaxed">
                                {whyReason}
                              </p>
                            </div>
                            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/25 p-2.5">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                                <span>🛡️</span> Respuesta táctica
                              </p>
                              <p className="mt-1 text-emerald-100 text-[11.5px] leading-relaxed">
                                {solution}
                              </p>
                            </div>
                          </div>

                          {keyItems.length > 0 && (
                            <div className="mt-2.5 flex items-center gap-2 border-t border-white/[0.08] pt-2">
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-200/70">Ítems recomendados:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {keyItems.map((item) => (
                                  <span key={item.id} className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.07] px-2 py-0.5 text-[10.5px] text-amber-100 font-medium border border-white/[0.08]">
                                    <ItemArt item={item} className="h-4 w-4 rounded" sizes="16px" />
                                    {item.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {enemyItemSuggestions[0] && (
                    <div className="mt-3 flex items-center gap-2.5 border-t border-white/[0.07] pt-3">
                      <ItemArt item={enemyItemSuggestions[0].item} className="h-10 w-10 shrink-0 rounded-xl" sizes="40px" />
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase text-amber-200/80">Compra clave</p>
                        <p className="truncate text-[12px] font-semibold text-white/85">{enemyItemSuggestions[0].item.name}</p>
                        <p className="text-[10px] text-white/45">{formatSouls(enemyItemSuggestions[0].item.cost)} almas</p>
                      </div>
                    </div>
                  )}

                  {openingBuild && (
                    <div className="mt-3 border-t border-white/[0.07] pt-3">
                      <p className="text-[10px] font-semibold text-white/55">Inicio de build · {openingBuild.soulsEstimate}</p>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                        {openingBuild.items.slice(0, 3).map((item) => (
                          <span key={item.id} className="inline-flex items-center gap-1.5 text-[10px] text-white/70">
                            <ItemArt item={item} className="h-5 w-5 rounded-full" sizes="20px" />
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {myHero.howToPlay.coreCombos[0] && (
                    <p className="mt-3 border-t border-white/[0.07] pt-3 text-[11px] leading-relaxed text-white/65">
                      <span className="font-semibold text-white/80">Combo:</span>{' '}
                      {myHero.howToPlay.coreCombos[0].sequence}
                    </p>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-[12px] text-white/55">Elige tu héroe para ver el matchup y la compra clave.</p>
              )}
            </div>
          </div>

          {enemyHeroes.length > 0 && (
            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[14px] font-semibold text-white/85">Counters recomendados para la partida</h2>
                <span className="text-[11px] text-amber-200/80">{laneEnemyHeroes.length > 0 ? 'Línea primero' : `${enemyHeroes.length} héroes`}</span>
              </div>

              {enemyItemSuggestions[0] && (
                <div className="mt-3 flex items-center gap-3">
                  <ItemArt item={enemyItemSuggestions[0].item} className="h-12 w-12 shrink-0 rounded-xl bg-white/[0.05]" sizes="48px" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase text-amber-200/80">Compra primero · {enemyItemSuggestions[0].recommendation.priority}</p>
                    <p className="mt-0.5 truncate text-[14px] font-semibold text-white/90">{enemyItemSuggestions[0].item.name}</p>
                    <p className="text-[11px] text-white/50">{formatSouls(enemyItemSuggestions[0].item.cost)} almas · contra {enemyItemSuggestions[0].laneHeroes.length > 0 ? enemyItemSuggestions[0].laneHeroes.join(', ') : enemyItemSuggestions[0].heroes.join(', ')}</p>
                  </div>
                </div>
              )}

              {enemyItemSuggestions.length > 1 && (
                <div className="scrollbar-none mt-3 flex gap-3 overflow-x-auto pb-1">
                  {enemyItemSuggestions.slice(1, 4).map(({ item, recommendation }) => (
                    <div key={item.id} className="flex shrink-0 items-center gap-2 border-l border-white/[0.1] pl-3">
                      <ItemArt item={item} className="h-8 w-8 rounded-lg" sizes="32px" />
                      <div>
                        <p className="text-[12px] font-medium text-white/75">{item.name}</p>
                        <p className="text-[10px] text-white/45">{formatSouls(item.cost)} · {recommendation.priority}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <details className="group mt-3 border-t border-white/[0.08] pt-2">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[12px] font-medium text-white/60">
                  Ver motivos y todos los counters ({enemyItemSuggestions.length})
                  <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
                </summary>
                <div className="mt-3 flex flex-col gap-2">
                  {enemyItemSuggestions.map(({ item, recommendation, heroes, laneHeroes }) => (
                    <CompactStoreItem
                      key={item.id}
                      item={item}
                      priority={recommendation.priority}
                      reason={`${laneHeroes.length > 0 ? `Línea: ${laneHeroes.join(', ')}. ` : ''}Contra ${heroes.join(', ')}. ${recommendation.counterExplanation}`}
                      countersMultiple={heroes}
                    />
                  ))}
                </div>
              </details>
            </div>
          )}

          <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-white/30">
            <Clock3 className="h-3 w-3" />
            Lectura automática de héroes cada 20 segundos · compras: registro manual
          </div>
        </>
      )}

      <HeroPicker
        key={`own-hero-picker-${ownPickerOpen}`}
        open={ownPickerOpen}
        onClose={() => setOwnPickerOpen(false)}
        heroes={DEADLOCK_HEROES}
        title="Elige tu héroe"
        subtitle="La selección también se usa en la ficha del héroe"
        selectedId={playerHeroId}
        onPick={selectPlayerHero}
      />

      <HeroPicker
        key={`lane-picker-${lanePickerOpen}`}
        open={lanePickerOpen}
        onClose={() => setLanePickerOpen(false)}
        heroes={enemyHeroes}
        title="Elige rivales de línea"
        subtitle="Elige hasta dos de los rivales del partido"
        selectedIds={laneEnemyIds}
        onPick={toggleLaneEnemy}
        multi
        max={Math.min(2, enemyHeroes.length)}
      />

      <HeroPicker
        key={`enemy-picker-${pickerOpen}`}
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        heroes={DEADLOCK_HEROES.filter((candidate) => candidate.id !== playerHeroId)}
        title="Selecciona los rivales"
        subtitle="El registro no distingue los equipos"
        selectedIds={enemyIds}
        onPick={toggleEnemy}
        multi
        max={6}
      />
    </section>
  );
}
