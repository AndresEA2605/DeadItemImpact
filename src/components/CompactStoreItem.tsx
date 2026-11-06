'use client';

import React, { useEffect, useState } from 'react';
import { DeadlockItem } from '../types/deadlock';
import { ItemArt } from './GameImage';
import { ChevronRight, Sparkles, X } from 'lucide-react';
import { formatSouls } from '../lib/format';

interface CompactStoreItemProps {
  item: DeadlockItem;
  priority?: 'Esencial' | 'Situacional' | 'Late Game';
  reason?: string;
  countersHeroName?: string;
  countersMultiple?: string[];
}

const CATEGORY_LABEL: Record<DeadlockItem['category'], string> = {
  weapon: 'Arma',
  vitality: 'Vitalidad',
  spirit: 'Espíritu',
};

const CATEGORY_DOT: Record<DeadlockItem['category'], string> = {
  weapon: 'bg-amber-400',
  vitality: 'bg-emerald-400',
  spirit: 'bg-violet-400',
};

const PRIORITY_LABEL: Record<string, string> = {
  Esencial: 'Prioritario',
  Situacional: 'Situacional',
  'Late Game': 'Late game',
};

const PRIORITY_TONE: Record<string, string> = {
  Esencial: 'text-amber-300/90',
  Situacional: 'text-sky-300/90',
  'Late Game': 'text-violet-300/90',
};

/** Separa los stats embebidos ("+X · +Y — prosa") de la descripción. */
function splitDescription(description: string): { stats: string[]; prose: string } {
  const [head, ...rest] = description.split(' — ');
  const prose = rest.join(' — ').trim();
  const stats = head
    .split(' · ')
    .map((s) => s.trim())
    .filter((s) => /^[+-]?\d/.test(s));
  if (stats.length === 0) return { stats: [], prose: description.trim() };
  return { stats, prose };
}

export const CompactStoreItem: React.FC<CompactStoreItemProps> = ({
  item,
  priority,
  reason,
  countersHeroName,
  countersMultiple,
}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { stats, prose } = splitDescription(item.description);

  useEffect(() => {
    if (!sheetOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSheetOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [sheetOpen]);

  return (
    <>
      <button
        onClick={() => setSheetOpen(true)}
        aria-label={`Ver detalles de ${item.name}`}
        className="press flex w-full items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-left"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] p-1">
          <ItemArt item={item} className="h-full w-full" sizes="44px" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5">
            <span className="truncate text-[13px] font-semibold leading-tight text-white/95">
              {item.name}
            </span>
            <span className={`h-1 w-1 shrink-0 rounded-full ${CATEGORY_DOT[item.category]}`} aria-hidden="true" />
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/40">
            <span className="font-medium uppercase tracking-wide">
              {item.tier === 5 ? 'Legendario' : `T${item.tier}`} · {CATEGORY_LABEL[item.category]}
            </span>
            <span className="inline-flex items-center gap-0.5 font-mono text-white/55">
              <Sparkles className="h-2.5 w-2.5" />
              {formatSouls(item.cost)}
            </span>
            {priority && (
              <span className={`font-medium ${PRIORITY_TONE[priority] ?? 'text-white/50'}`}>
                · {PRIORITY_LABEL[priority] ?? priority}
              </span>
            )}
          </span>
          {reason && (
            <span className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/55">{reason}</span>
          )}
        </span>

        <ChevronRight className="h-4 w-4 shrink-0 text-white/25" />
      </button>

      {sheetOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/65 backdrop-blur-md sm:items-center sm:px-4"
          onClick={() => setSheetOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
            onClick={(e) => e.stopPropagation()}
            className="sheet w-full max-w-lg overflow-hidden rounded-t-[28px] border border-white/10 bg-[#111215] shadow-2xl sm:rounded-[28px]"
          >
            <div className="flex justify-center pb-1 pt-3 sm:hidden">
              <div className="h-1 w-9 rounded-full bg-white/20" />
            </div>

            <div className="scrollbar-none max-h-[82dvh] overflow-y-auto overscroll-contain px-5 pb-safe pt-3">
              <div className="flex items-start gap-3.5">
                <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-1.5">
                  <ItemArt item={item} className="h-full w-full" sizes="68px" />
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-white">
                    {item.name}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/45">
                    <span className="font-medium text-white/60">
                      {item.tier === 5 ? 'Legendario' : `Tier ${item.tier}`} · {CATEGORY_LABEL[item.category]}
                    </span>
                    <span className="text-white/20">·</span>
                    <span>
                      {item.type === 'Activo' ? `Activo${item.cooldown ? ` · ${item.cooldown}` : ''}` : 'Pasivo'}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-amber-300/90">
                      <Sparkles className="h-2.5 w-2.5" />
                      {formatSouls(item.cost)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSheetOpen(false)}
                  aria-label="Cerrar"
                  className="press flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {stats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {stats.map((stat, i) => (
                    <span
                      key={`${stat}-${i}`}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 py-1 font-mono text-[10.5px] font-medium text-white/75"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              )}

              {prose && (
                <p className="mt-4 text-[12.5px] leading-relaxed text-white/70">{prose}</p>
              )}

              {reason && (
                <div className="mt-3 rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-300/80">
                    Por qué importa aquí
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-white/70">{reason}</p>
                  {countersHeroName && (
                    <p className="mt-1.5 text-[10.5px] text-white/40">
                      Counter directo a <span className="font-medium text-amber-200/90">{countersHeroName}</span>
                    </p>
                  )}
                  {countersMultiple && countersMultiple.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {countersMultiple.map((name, i) => (
                        <span
                          key={`${name}-${i}`}
                          className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium capitalize text-white/60"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5 pb-1">
                  {item.tags.slice(0, 8).map((tag, i) => (
                    <span
                      key={`${tag}-${i}`}
                      className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[9.5px] font-medium text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
