'use client';

import React, { useState } from 'react';
import { DeadlockHero } from '../types/deadlock';
import { DEADLOCK_ITEMS } from '../data/items';
import { DEADLOCK_HEROES } from '../data/heroes';
import { HERO_MATCHUPS_BY_SOURCE } from '../lib/matchups';
import { ItemCard } from './ItemCard';
import {
  ShieldAlert,
  Swords,
  Zap,
  Target,
  AlertTriangle,
  Lightbulb,
  Crosshair,
  Layers,
  Flame,
  CheckCircle2,
  X
} from 'lucide-react';

interface HeroDetailViewProps {
  hero: DeadlockHero;
  onClose: () => void;
  onSelectHeroById?: (heroId: string) => void;
}

export const HeroDetailView: React.FC<HeroDetailViewProps> = ({
  hero,
  onClose,
  onSelectHeroById
}) => {
  const [activeTab, setActiveTab] = useState<'counter' | 'play' | 'stats'>('counter');
  const [itemCategoryFilter, setItemCategoryFilter] = useState<'all' | 'weapon' | 'vitality' | 'spirit'>('all');
  const heroMatchups = HERO_MATCHUPS_BY_SOURCE.get(hero.id)?.values() ?? [];

  const filteredItemCounters = hero.counterplay.itemCounters.filter((ic) => {
    const item = DEADLOCK_ITEMS[ic.itemId];
    if (!item) return false;
    if (itemCategoryFilter === 'all') return true;
    return item.category === itemCategoryFilter;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-8 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Hero Banner */}
        <div className="relative bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-amber-950/40 p-6 md:p-8 border-b border-neutral-800 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-600 to-purple-800 border-2 border-amber-500/60 flex items-center justify-center font-black text-3xl sm:text-4xl text-amber-100 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              {hero.name.slice(0, 2).toUpperCase()}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {hero.name}
                </h1>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {hero.role}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Dificultad: {hero.difficulty}
                </span>
              </div>
              <p className="text-sm text-neutral-400 mt-1 italic">{hero.title}</p>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
                {hero.playstyleOverview}
              </p>
            </div>
          </div>

          {/* Selector de Pestañas de Navegación */}
          <div className="flex items-center gap-2 mt-6 border-b border-neutral-800/80 -mb-6 md:-mb-8 pt-2">
            <button
              onClick={() => setActiveTab('counter')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === 'counter'
                  ? 'border-red-500 text-red-400 bg-red-950/20'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              Cómo Hacerle Counter
            </button>

            <button
              onClick={() => setActiveTab('play')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === 'play'
                  ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Swords className="w-4 h-4" />
              Cómo Jugarlo (Guía y Builds)
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === 'stats'
                  ? 'border-purple-500 text-purple-400 bg-purple-950/20'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              Estadísticas y Habilidades
            </button>
          </div>
        </div>

        {/* Contenido scrolleable de la pestaña */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-neutral-950/80">
          {/* TAB 1: CÓMO HACERLE COUNTER */}
          {activeTab === 'counter' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Reglas de Oro contra este Campeón */}
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/40">
                <div className="flex items-center gap-2 text-red-400 font-bold text-base mb-3">
                  <AlertTriangle className="w-5 h-5" />
                  Estrategia Táctica General para Vencer a {hero.name}
                </div>
                <ul className="space-y-2">
                  {hero.counterplay.generalAdvice.map((advice, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filtro de Ítems Counter */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-amber-400" />
                      Ítems de Counter Recomendados (Parche Actual)
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Ítems específicos de la tienda que anulan directamente su kit.
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800 text-xs">
                    {(['all', 'weapon', 'vitality', 'spirit'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setItemCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                          itemCategoryFilter === cat
                            ? 'bg-neutral-800 text-white shadow-sm'
                            : 'text-neutral-400 hover:text-neutral-200'
                        }`}
                      >
                        {cat === 'all'
                          ? 'Todos'
                          : cat === 'weapon'
                          ? '🟠 Arma'
                          : cat === 'vitality'
                          ? '🟢 Vitalidad'
                          : '🟣 Espíritu'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid de Ítems Counter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItemCounters.map((ic, i) => {
                    const item = DEADLOCK_ITEMS[ic.itemId];
                    if (!item) return null;
                    return (
                      <ItemCard
                        key={i}
                        item={item}
                        priority={ic.priority}
                        timing={ic.timing}
                        counterReason={ic.counterExplanation}
                        countersAbility={ic.countersAbility}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Campeones Fuertes Contra Él (Matchups) */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Swords className="w-5 h-5 text-red-400" />
                  Héroes con Ventaja Directa (Counters en Línea y Teamfight)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[...heroMatchups].map((hm) => (
                    <div
                      key={hm.heroId}
                      onClick={() => onSelectHeroById && onSelectHeroById(hm.heroId)}
                      className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white group-hover:text-amber-400 transition-colors capitalize">
                          {DEADLOCK_HEROES.find((candidate) => candidate.id === hm.heroId)?.name ?? hm.heroId}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            hm.conflicted
                              ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                              : hm.advantage === 'Fuerte Contra'
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                              : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                          }`}
                        >
                          {hm.conflicted ? 'Cruce incierto' : hm.advantage}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">{hm.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consejos de Posicionamiento */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 space-y-1.5">
                <div className="font-bold text-neutral-200 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Consejos de Posicionamiento y Mapa:
                </div>
                {hero.counterplay.positioningTips.map((tip, i) => (
                  <p key={i} className="text-neutral-400 pl-6">
                    • {tip}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CÓMO JUGARLO (HOW TO PLAY) */}
          {activeTab === 'play' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Plan de Partida: Early vs Mid/Late */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Crosshair className="w-4 h-4" />
                    Fase de Líneas (Early Game)
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {hero.howToPlay.lanePhaseTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    Mid Game y Peleas de Equipo
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {hero.howToPlay.midLateGamePlan.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prioridad de Habilidades (Skill Order) */}
              <div className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  Prioridad para Subir Habilidades (Skill Level Order)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {hero.howToPlay.skillPriority.map((p, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs"
                    >
                      <span className="font-bold text-amber-400 block mb-1">Paso {i + 1}</span>
                      <p className="text-neutral-300">{p}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Combos Mecánicos */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Swords className="w-5 h-5 text-amber-400" />
                  Combos y Secuencias de Botones
                </h4>
                <div className="space-y-3">
                  {hero.howToPlay.coreCombos.map((combo, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-neutral-900/90 border border-amber-900/30"
                    >
                      <div className="font-bold text-amber-300 text-sm mb-1">{combo.name}</div>
                      <div className="p-2 rounded bg-neutral-950 font-mono text-xs text-emerald-300 border border-neutral-800 mb-2">
                        {combo.sequence}
                      </div>
                      <p className="text-xs text-neutral-300">{combo.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progresión de Build de Ítems */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Progresión de Builds por Cantidad de Almas (Souls)
                </h4>
                <div className="space-y-4">
                  {hero.howToPlay.buildGuide.map((stage, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-neutral-100">{stage.phase}</span>
                        <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/40">
                          {stage.soulsEstimate}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3">{stage.notes}</p>

                      <div className="flex flex-wrap gap-2">
                        {stage.items.map((itId, j) => {
                          const item = DEADLOCK_ITEMS[itId];
                          if (!item) return null;
                          return (
                            <span
                              key={j}
                              className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                                item.category === 'weapon'
                                  ? 'bg-amber-950/60 text-amber-300 border-amber-700/60'
                                  : item.category === 'vitality'
                                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
                                  : 'bg-purple-950/60 text-purple-300 border-purple-700/60'
                              }`}
                            >
                              {item.name} ({item.cost} Souls)
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ESTADÍSTICAS Y HABILIDADES (STATS & KIT) */}
          {activeTab === 'stats' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Panel de Estadísticas Base */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Atributos y Estadísticas Base</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-mono uppercase">DPS de Arma</div>
                    <div className="text-xl font-black text-amber-400">{hero.stats.dps}</div>
                    <div className="text-[10px] text-neutral-400">
                      {hero.stats.bulletDamage} daño/bala • {hero.stats.fireRate}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-mono uppercase">Cargador</div>
                    <div className="text-xl font-black text-amber-300">{hero.stats.magazineSize}</div>
                    <div className="text-[10px] text-neutral-400">Balas por recarga</div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-mono uppercase">Salud Máxima</div>
                    <div className="text-xl font-black text-emerald-400">{hero.stats.maxHealth}</div>
                    <div className="text-[10px] text-neutral-400">Regen: {hero.stats.healthRegen}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-mono uppercase">Resistencias</div>
                    <div className="text-base font-bold text-neutral-200">
                      Bala: <span className="text-amber-400">{hero.stats.bulletResist}</span>
                    </div>
                    <div className="text-base font-bold text-neutral-200">
                      Espíritu: <span className="text-purple-400">{hero.stats.spiritResist}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-mono uppercase">Movilidad</div>
                    <div className="text-xl font-black text-blue-400">{hero.stats.moveSpeed}</div>
                    <div className="text-[10px] text-neutral-400">{hero.stats.stamina} Barras de Stamina</div>
                  </div>
                </div>
              </div>

              {/* Kit de las 4 Habilidades */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Kit de Habilidades</h4>
                <div className="space-y-4">
                  {hero.abilities.map((ab, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col md:flex-row md:items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 font-mono font-bold text-xs flex items-center justify-center text-amber-300">
                            {ab.slot}
                          </span>
                          <h5 className="text-base font-bold text-white">{ab.name}</h5>
                          <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                            {ab.type}
                          </span>
                          {ab.cooldown && (
                            <span className="text-xs font-mono text-neutral-400">
                              CD: {ab.cooldown}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                          {ab.description}
                        </p>
                      </div>

                      <div className="md:w-80 p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs">
                        <div className="font-bold text-red-300 mb-1 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Cómo contrarrestar esta habilidad:
                        </div>
                        <p className="text-neutral-300 leading-normal">{ab.counterTip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
