'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { ArrowLeft, ChevronRight, Coins, LockKeyhole, Search, Shield, Swords, UserRound } from 'lucide-react';
import { HeroPicker } from '../components/HeroPicker';
import { LiveMatchPanel } from '../components/LiveMatchPanel';
import { HeroArt, ItemArt } from '../components/GameImage';
import { DEADLOCK_HEROES } from '../data/heroes';
import { DEADLOCK_ITEMS } from '../data/items';
import { getRoleTheme, ROLE_FILTERS } from '../lib/heroTheme';
import { HERO_MATCHUPS_BY_SOURCE } from '../lib/matchups';
import type { DeadlockHero } from '../types/deadlock';

const PRIORITY_ORDER = { Esencial: 0, Situacional: 1, 'Late Game': 2 };
const TIMING_LABEL = { 'Early Game': 'Inicio', 'Mid Game': 'Medio', 'Late Game': 'Final' };
const PLAYER_HERO_STORAGE_KEY = 'deadlock-player-hero';

function subscribeToPlayerHero(onStoreChange: () => void) {
  const handleChange = () => onStoreChange();
  window.addEventListener('storage', handleChange);
  window.addEventListener('deadlock-player-hero-change', handleChange);
  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener('deadlock-player-hero-change', handleChange);
  };
}

function getStoredPlayerHeroId(): string | null {
  try {
    return window.localStorage.getItem(PLAYER_HERO_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerPlayerHeroId(): null {
  return null;
}

export default function Home() {
  const [hero, setHero] = useState<DeadlockHero | null>(null);
  const [chosenPlayerHero, setChosenPlayerHero] = useState<DeadlockHero | null>(null);
  const storedPlayerHeroId = useSyncExternalStore(subscribeToPlayerHero, getStoredPlayerHeroId, getServerPlayerHeroId);
  const storedPlayerHero = DEADLOCK_HEROES.find((candidate) => candidate.id === storedPlayerHeroId) ?? null;
  const playerHero = chosenPlayerHero ?? storedPlayerHero;
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<string>('Todos');
  const [playerPickerOpen, setPlayerPickerOpen] = useState(false);
  const [view, setView] = useState<'heroes' | 'match'>('heroes');

  const selectPlayerHero = (selected: DeadlockHero) => {
    setChosenPlayerHero(selected);
    try {
      window.localStorage.setItem(PLAYER_HERO_STORAGE_KEY, selected.id);
      window.dispatchEvent(new Event('deadlock-player-hero-change'));
    } catch { /* la selección en memoria sigue disponible */ }
  };

  const filteredHeroes = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return DEADLOCK_HEROES.filter((candidate) => {
      const matchesRole = role === 'Todos' || candidate.role === role;
      const matchesSearch =
        !search ||
        candidate.name.toLocaleLowerCase().includes(search) ||
        candidate.title.toLocaleLowerCase().includes(search) ||
        candidate.role.toLocaleLowerCase().includes(search);
      return matchesRole && matchesSearch;
    });
  }, [query, role]);

  const counterItems = useMemo(() => {
    if (!hero) return [];
    const seen = new Set<string>();
    return hero.counterplay.itemCounters
      .filter(({ itemId }) => {
        if (seen.has(itemId) || !DEADLOCK_ITEMS[itemId]) return false;
        seen.add(itemId);
        return true;
      })
      .sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority])
      .slice(0, 3);
  }, [hero]);

  const heroMatchups = useMemo(
    () => hero ? [...(HERO_MATCHUPS_BY_SOURCE.get(hero.id)?.values() ?? [])] : [],
    [hero],
  );
  const matchupEntries = playerHero
    ? [HERO_MATCHUPS_BY_SOURCE.get(hero?.id ?? '')?.get(playerHero.id)].filter((entry) => entry !== undefined)
    : [];
  const matchupAdvantages = [...new Set(matchupEntries.map((entry) => entry.advantage))];
  const weakMatchups = useMemo(() => {
    if (!hero) return [];
    const unique = new Map<string, DeadlockHero>();
    heroMatchups.forEach((entry) => {
      if (entry.conflicted) return;
      if (entry.advantage !== 'Débil Contra' || unique.has(entry.heroId)) return;
      const counterHero = DEADLOCK_HEROES.find((candidate) => candidate.id === entry.heroId);
      if (counterHero) unique.set(entry.heroId, counterHero);
    });
    return Array.from(unique.values()).slice(0, 4);
  }, [hero, heroMatchups]);

  const selectHero = (selected: DeadlockHero) => {
    setHero(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const matchupLabel = () => {
    if (!playerHero || !hero) return null;
    if (playerHero.id === hero.id) return 'Elige otro héroe para comparar el cruce.';
    if (matchupEntries.length === 0) return 'Aún no hay datos de este cruce.';
    if (matchupEntries.some((entry) => entry.conflicted)) return 'Cruce incierto: los datos locales se contradicen.';
    if (matchupAdvantages.length > 1) return 'Los datos disponibles para este cruce son mixtos.';
    if (matchupAdvantages[0] === 'Débil Contra') return `${playerHero.name} tiene ventaja contra ${hero.name}.`;
    if (matchupAdvantages[0] === 'Fuerte Contra') return `${hero.name} tiene ventaja contra ${playerHero.name}.`;
    return 'Cruce parejo: la ejecución decide la ventaja.';
  };

  return (
    <main className="min-h-[100dvh] px-4 pb-10 pt-safe sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <header className="flex h-16 items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-[10px] font-black tracking-tight text-black">DL</span>
            <span className="text-[13px] font-semibold text-white/90">Deadlock <span className="text-white/40">Field Guide</span></span>
          </div>
          {hero && (
            <button
              onClick={() => setHero(null)}
              className="press inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-medium text-white/60 hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Atrás
            </button>
          )}
        </header>

        <nav role="tablist" aria-label="Secciones principales" className="mx-auto mt-3 grid max-w-sm grid-cols-2 rounded-xl border border-white/[0.07] bg-white/[0.035] p-1">
          {([
            { id: 'heroes', label: 'Héroes', icon: Search },
            { id: 'match', label: 'Partida', icon: Swords },
          ] as const).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={view === id}
              onClick={() => setView(id)}
              className={`press flex items-center justify-center gap-2 rounded-lg py-2 text-[12px] font-medium ${view === id ? 'bg-white/[0.1] text-white' : 'text-white/45 hover:text-white/75'}`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </nav>

        {view === 'heroes' && (!hero ? (
          <section className="screen pb-8 pt-8 sm:pt-12" aria-label="Buscar campeón">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 text-[11px] font-medium uppercase text-white/35">Deadlock · Guía de campo</p>
                <h1 className="text-2xl font-semibold text-white sm:text-3xl">Elige un héroe</h1>
              </div>
              <span className="pb-1 text-[12px] tabular-nums text-white/35">{filteredHeroes.length} héroes</span>
            </div>

            <label className="glass flex h-12 items-center gap-3 rounded-2xl border border-white/[0.09] px-4 transition focus-within:border-white/20">
              <Search className="h-4 w-4 shrink-0 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nombre o rol"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-white/35"
              />
              {query && <button onClick={() => setQuery('')} aria-label="Limpiar búsqueda" className="text-[12px] text-white/45 hover:text-white">Limpiar</button>}
            </label>

            <div className="scrollbar-none mt-4 flex gap-1.5 overflow-x-auto pb-1" aria-label="Filtrar por rol">
              {ROLE_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setRole(filter)}
                  aria-pressed={role === filter}
                  className={`press shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium transition ${
                    role === filter ? 'bg-white text-black' : 'bg-white/[0.055] text-white/55 hover:bg-white/[0.09] hover:text-white/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6">
              {filteredHeroes.map((candidate, index) => {
                const theme = getRoleTheme(candidate.role);
                return (
                  <button
                    key={candidate.id}
                    onClick={() => selectHero(candidate)}
                    aria-label={`Ver ficha de ${candidate.name}`}
                    className="press rise group relative aspect-[0.78] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#17191c] text-left"
                    style={{ animationDelay: `${Math.min(index * 24, 240)}ms` }}
                  >
                    <span className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.04]">
                      <HeroArt hero={candidate} variant="vertical" className="h-full w-full" sizes="(max-width: 640px) 32vw, 160px" decorative />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" aria-hidden="true" />
                    <span className="absolute inset-x-0 bottom-0 p-2.5">
                      <span className="block truncate text-[12px] font-semibold text-white">{candidate.name}</span>
                      <span className={`mt-0.5 block truncate text-[10px] ${theme.text}`}>{candidate.role}</span>
                    </span>
                    <ChevronRight className="absolute right-2 top-2 h-4 w-4 text-white/65 opacity-0 transition group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>

            {filteredHeroes.length === 0 && (
              <p className="py-16 text-center text-sm text-white/45">No hay héroes que coincidan con la búsqueda.</p>
            )}
          </section>
        ) : (
          <section className="screen mx-auto max-w-2xl pb-8 pt-5" aria-label={`Ficha de ${hero.name}`}>
            <article className="credential credential-in overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#131518]">
              <header className="flex items-center gap-3.5 border-b border-white/[0.08] px-5 py-4 sm:px-6">
                <HeroArt hero={hero} className="h-12 w-12 shrink-0 rounded-2xl" sizes="48px" priority decorative />
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase text-white/45">{hero.role} · {hero.difficulty}</p>
                  <h1 className="truncate text-2xl font-semibold text-white">{hero.name}</h1>
                  <p className="truncate text-[11px] text-white/50">{hero.title}</p>
                </div>
              </header>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="mt-4">
                  <h2 className="mb-2.5 text-[11px] font-semibold uppercase text-white/45">Ítems para contrarrestarlo</h2>
                  <div className="grid grid-cols-3 gap-2">
                  {counterItems.map(({ itemId, priority, timing }) => {
                    const item = DEADLOCK_ITEMS[itemId];
                    const essential = priority === 'Esencial';
                    const priorityLabel = essential ? 'Sí o sí' : priority === 'Situacional' ? 'Priorizar' : 'Más tarde';
                    const priorityTone = essential
                      ? 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300'
                      : priority === 'Situacional'
                        ? 'border-amber-400/30 bg-amber-400/10 text-amber-200'
                        : 'border-white/10 bg-white/[0.05] text-white/50';
                    return (
                      <div key={itemId} className={`flex min-w-0 flex-col items-center rounded-2xl border px-2 py-3 text-center ${essential ? 'essential-glow border-emerald-400/30 bg-emerald-400/[0.055]' : 'border-white/[0.08] bg-white/[0.035]'}`}>
                        <span className="relative h-14 w-14 overflow-hidden rounded-xl bg-white/[0.06] sm:h-16 sm:w-16">
                          <ItemArt item={item} className="h-full w-full" sizes="64px" />
                        </span>
                        <span className="mt-2 line-clamp-2 text-[10px] font-semibold leading-tight text-white/85 sm:text-[11px]">{item.name}</span>
                        <span className={`mt-2 inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[9px] font-semibold ${priorityTone}`}>
                          {essential && <span className="soft-pulse h-1.5 w-1.5 rounded-full bg-emerald-300" />}
                          {priorityLabel}
                        </span>
                        <span className="mt-1 text-[9px] text-white/40">{TIMING_LABEL[timing]}</span>
                        <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-white/80">
                          <Coins className="h-3 w-3 text-white/45" />
                          {item.cost.toLocaleString('es-ES')} almas
                        </span>
                      </div>
                    );
                  })}
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.08] pt-4">
                  <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase text-white/45">
                    <Shield className="h-3.5 w-3.5" />
                    Cómo contrarrestar sus habilidades
                  </h2>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {hero.abilities.map((ability) => (
                      <div key={`${ability.slot}-${ability.name}`} className="flex gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.09] text-[10px] font-semibold text-white/75">
                          {ability.slot.replace(' (Ult)', '')}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-white/90">{ability.name}</p>
                          <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-white/65">{ability.counterTip}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {weakMatchups.length > 0 && (
                  <div className="mt-4 border-t border-white/[0.08] pt-4">
                    <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase text-white/45">
                      <Swords className="h-3.5 w-3.5" />
                      Héroes que lo ponen en aprietos
                    </h2>
                    <div className="mt-2 flex gap-2 overflow-x-auto">
                      {weakMatchups.map((counterHero) => (
                        <button
                          key={counterHero.id}
                          onClick={() => setHero(counterHero)}
                          className="press flex shrink-0 items-center gap-2 rounded-full bg-white/[0.05] py-1 pl-1 pr-3 text-[11px] font-medium text-white/75 hover:bg-white/[0.1]"
                        >
                          <HeroArt hero={counterHero} className="h-7 w-7 rounded-full" sizes="28px" decorative />
                          {counterHero.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      {playerHero ? (
                        <HeroArt hero={playerHero} className="h-9 w-9 shrink-0 rounded-xl" sizes="36px" />
                      ) : (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-white/45">
                          <UserRound className="h-4 w-4" />
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase text-white/40">Mi héroe</p>
                        <p className="truncate text-[12px] font-semibold text-white/85">{playerHero?.name ?? 'Sin seleccionar'}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPlayerPickerOpen(true)}
                      className="press shrink-0 rounded-full bg-white/[0.09] px-3 py-2 text-[11px] font-semibold text-white/80 hover:bg-white/[0.14]"
                    >
                      {playerHero ? 'Cambiar' : 'Elegir'}
                    </button>
                  </div>
                  {playerHero && <p className="mt-2.5 border-t border-white/[0.07] pt-2.5 text-[11px] leading-relaxed text-white/60">{matchupLabel()}</p>}
                </div>

                <button disabled title="Disponible en una actualización futura" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] py-3 text-[12px] font-medium text-white/35 disabled:cursor-not-allowed">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Información avanzada
                </button>
              </div>
            </article>
          </section>
        ))}
      </div>

      <LiveMatchPanel
        active={view === 'match'}
        playerHeroId={playerHero?.id}
        onMatchDetected={() => setView('match')}
        onPlayerHeroChange={selectPlayerHero}
      />

      <HeroPicker
        key={`player-picker-${playerPickerOpen}`}
        open={playerPickerOpen}
        onClose={() => setPlayerPickerOpen(false)}
        heroes={DEADLOCK_HEROES}
        title="Elige tu héroe"
        subtitle={hero ? `Compara tu cruce con ${hero.name}` : undefined}
        selectedId={playerHero?.id}
        onPick={(selected) => {
          selectPlayerHero(selected);
          setPlayerPickerOpen(false);
        }}
      />
    </main>
  );
}
