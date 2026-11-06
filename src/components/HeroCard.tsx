'use client';

import React from 'react';
import { DeadlockHero } from '../types/deadlock';
import { DEADLOCK_ITEMS } from '../data/items';
import { ShieldAlert, Swords, Heart, Zap, ChevronRight, Crosshair } from 'lucide-react';

interface HeroCardProps {
  hero: DeadlockHero;
  isSelected?: boolean;
  onSelect: (hero: DeadlockHero) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, isSelected, onSelect }) => {
  // Obtener los 3 principales counters para mostrar rápido
  const topCounters = hero.counterplay.itemCounters.slice(0, 3).map((ic) => ({
    ...ic,
    item: DEADLOCK_ITEMS[ic.itemId]
  }));

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Fácil':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      case 'Media':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      case 'Difícil':
      default:
        return 'text-red-400 bg-red-950/40 border-red-800/40';
    }
  };

  return (
    <div
      onClick={() => onSelect(hero)}
      className={`group cursor-pointer rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between ${
        isSelected
          ? 'bg-neutral-900 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/50'
          : 'bg-neutral-900/60 hover:bg-neutral-900/90 border-neutral-800 hover:border-neutral-700 hover:shadow-xl'
      }`}
    >
      <div>
        {/* Cabecera del Héroe */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar estilizado con iniciales */}
            <div className="relative w-13 h-13 rounded-xl bg-gradient-to-br from-amber-600/40 to-purple-800/40 border border-neutral-700/80 flex items-center justify-center font-black text-2xl text-amber-200 shadow-inner group-hover:scale-105 transition-transform">
              {hero.name.slice(0, 2).toUpperCase()}
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-neutral-900" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-neutral-100 group-hover:text-amber-400 transition-colors">
                  {hero.name}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 font-medium italic">{hero.title}</p>
            </div>
          </div>

          <span
            className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${getDifficultyColor(
              hero.difficulty
            )}`}
          >
            {hero.difficulty}
          </span>
        </div>

        {/* Badges de Rol y Ataque */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700/60">
            {hero.role}
          </span>
          <span className="px-2 py-0.5 rounded-full text-xs text-neutral-400 bg-neutral-950/60 border border-neutral-800 flex items-center gap-1">
            <Crosshair className="w-3 h-3 text-neutral-500" />
            {hero.attackType}
          </span>
        </div>

        {/* Breve descripción */}
        <p className="mt-2.5 text-xs text-neutral-300 line-clamp-2 leading-relaxed">
          {hero.description}
        </p>

        {/* Resumen de Estadísticas Clave */}
        <div className="grid grid-cols-3 gap-2 mt-3.5 py-2 px-3 rounded-xl bg-neutral-950/50 border border-neutral-800/80 text-xs">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Heart className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">Salud</div>
              <div className="font-bold">{hero.stats.maxHealth}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Swords className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">DPS</div>
              <div className="font-bold">{hero.stats.dps}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">Stamina</div>
              <div className="font-bold">{hero.stats.stamina} Bars</div>
            </div>
          </div>
        </div>

        {/* Counters Directos Rápidos */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 mb-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Ítems Counter Esenciales:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {topCounters.map(
              (c, i) =>
                c.item && (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${
                      c.item.category === 'weapon'
                        ? 'bg-amber-950/50 text-amber-300 border border-amber-700/50'
                        : c.item.category === 'vitality'
                        ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-700/50'
                        : 'bg-purple-950/50 text-purple-300 border border-purple-700/50'
                    }`}
                  >
                    {c.item.name}
                  </span>
                )
            )}
          </div>
        </div>
      </div>

      {/* Botón de inspeccionar */}
      <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-amber-400 transition-colors">
        <span>Ver Guía de Counter y Cómo Jugar</span>
        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
