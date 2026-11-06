'use client';

import React from 'react';
import { DeadlockItem } from '../types/deadlock';
import { Shield, Zap, Crosshair, Sparkles } from 'lucide-react';
import { formatSouls } from '../lib/format';

interface ItemCardProps {
  item: DeadlockItem;
  priority?: 'Esencial' | 'Situacional' | 'Late Game';
  timing?: string;
  counterReason?: string;
  countersAbility?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  priority,
  timing,
  counterReason,
  countersAbility
}) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'weapon':
        return {
          border: 'border-amber-500/40 hover:border-amber-400',
          badgeBg: 'bg-amber-950/70 text-amber-300 border-amber-600/50',
          accent: 'text-amber-400',
          glow: 'group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]',
          icon: Crosshair
        };
      case 'vitality':
        return {
          border: 'border-emerald-500/40 hover:border-emerald-400',
          badgeBg: 'bg-emerald-950/70 text-emerald-300 border-emerald-600/50',
          accent: 'text-emerald-400',
          glow: 'group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]',
          icon: Shield
        };
      case 'spirit':
      default:
        return {
          border: 'border-purple-500/40 hover:border-purple-400',
          badgeBg: 'bg-purple-950/70 text-purple-300 border-purple-600/50',
          accent: 'text-purple-400',
          glow: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]',
          icon: Zap
        };
    }
  };

  const styles = getCategoryStyles(item.category);
  const CategoryIcon = styles.icon;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl bg-neutral-900/90 p-4 border transition-all duration-200 ${styles.border} ${styles.glow} backdrop-blur-sm`}
    >
      <div>
        {/* Header con categoría, tier y costo de almas */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider border ${styles.badgeBg}`}
            >
              <CategoryIcon className="w-3 h-3" />
              {item.category} • {item.tier === 5 ? 'LEG' : `T${item.tier}`}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {item.type} {item.cooldown ? `(${item.cooldown})` : ''}
            </span>
          </div>

          <div className="flex items-center gap-1 font-mono text-xs font-semibold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {formatSouls(item.cost)} Souls
          </div>
        </div>

        {/* Nombre del ítem */}
        <h4 className="text-lg font-bold text-neutral-100 group-hover:text-amber-200 transition-colors">
          {item.name}
        </h4>

        {/* Descripción del ítem */}
        <p className="mt-1 text-xs text-neutral-300 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Razón del counterplay si existe */}
        {counterReason && (
          <div className="mt-3 p-2.5 rounded-lg bg-red-950/30 border border-red-800/40 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-red-300 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              ¿Por qué es Counter? {countersAbility && (
                <span className="text-neutral-400 font-normal">
                  (Anula: <strong className="text-amber-300 font-medium">{countersAbility}</strong>)
                </span>
              )}
            </div>
            <p className="text-neutral-200 leading-normal">{counterReason}</p>
          </div>
        )}
      </div>

      {/* Footer con prioridad y timing */}
      {(priority || timing) && (
        <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-xs font-medium">
          {priority && (
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                priority === 'Esencial'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : priority === 'Situacional'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }`}
            >
              {priority}
            </span>
          )}

          {timing && (
            <span className="text-neutral-400 text-[11px]">
              Comprar en: <span className="text-neutral-200 font-medium">{timing}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
