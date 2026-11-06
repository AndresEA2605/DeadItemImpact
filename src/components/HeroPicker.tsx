'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DeadlockHero } from '../types/deadlock';
import { getRoleTheme, ROLE_FILTERS } from '../lib/heroTheme';
import { HeroArt } from './GameImage';
import { Check, Search, X } from 'lucide-react';

interface HeroPickerProps {
  open: boolean;
  onClose: () => void;
  heroes: DeadlockHero[];
  title: string;
  subtitle?: string;
  selectedId?: string;
  selectedIds?: string[];
  onPick: (hero: DeadlockHero) => void;
  multi?: boolean;
  max?: number;
}

export const HeroPicker: React.FC<HeroPickerProps> = ({
  open,
  onClose,
  heroes,
  title,
  subtitle,
  selectedId,
  selectedIds,
  onPick,
  multi = false,
  max = 6,
}) => {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<string>('Todos');
  const searchRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Bloqueo estricto del scroll de fondo en móviles (evita que la pantalla se baje)
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;
    const prevOverflow = document.body.style.overflow;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;
      document.body.style.overflow = prevOverflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const selectedSet = useMemo(
    () => new Set(multi ? selectedIds ?? [] : selectedId ? [selectedId] : []),
    [multi, selectedIds, selectedId]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return heroes.filter((h) => {
      const matchRole = role === 'Todos' || h.role === role;
      const matchQuery =
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.role.toLowerCase().includes(q) ||
        h.title.toLowerCase().includes(q);
      return matchRole && matchQuery;
    });
  }, [heroes, query, role]);

  if (!open) return null;

  const atMax = multi && (selectedIds?.length ?? 0) >= max;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#0b0c10] sm:bg-black/80 sm:backdrop-blur-md sm:items-center sm:justify-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative flex h-full w-full flex-col overflow-hidden bg-[#0e0f13] sm:h-auto sm:max-h-[86vh] sm:max-w-2xl sm:rounded-3xl sm:border sm:border-white/10 sm:shadow-2xl"
      >
        {/* Header fijo superior */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-4 py-3.5 sm:px-6">
          <div className="min-w-0 pr-2">
            <h2 className="text-base font-bold text-white sm:text-lg">{title}</h2>
            {subtitle && <p className="truncate text-[11px] text-white/50">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar selector"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-white/80 transition hover:bg-white/[0.14] active:scale-95"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Barra de búsqueda (sin auto-focus para que el teclado móvil no tape los héroes) */}
        <div className="shrink-0 border-b border-white/[0.06] p-3 sm:px-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar héroe..."
              autoComplete="off"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 pl-10 pr-9 text-sm text-white placeholder-white/35 outline-none transition focus:border-white/20 focus:bg-white/[0.07]"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-white/40 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filtros horizontales por rol con scroll suave en móvil */}
          <div className="scrollbar-none mt-2.5 flex gap-1.5 overflow-x-auto pb-0.5">
            {ROLE_FILTERS.map((r) => {
              const active = role === r;
              return (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  aria-pressed={active}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition active:scale-95 ${
                    active
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.09] hover:text-white'
                  }`}
                >
                  {r === 'Todos' ? 'Todos' : r}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contador de héroes */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white/45 sm:px-6">
          <span>{filtered.length} héroe{filtered.length === 1 ? '' : 's'}</span>
          {multi && (
            <span className="text-amber-300 font-bold">
              {selectedIds?.length ?? 0}/{max} seleccionados
            </span>
          )}
        </div>

        {/* Grilla scrollable de héroes con botones táctiles grandes */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-6 pt-1 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {filtered.map((h) => {
              const active = selectedSet.has(h.id);
              const disabled = multi && atMax && !active;
              return (
                <button
                  key={h.id}
                  onClick={() => !disabled && onPick(h)}
                  disabled={disabled}
                  aria-pressed={active}
                  aria-label={`${h.name}, ${h.role}`}
                  className={`relative flex min-h-[96px] flex-col items-center justify-center gap-1.5 rounded-2xl border p-2 transition active:scale-95 ${
                    active
                      ? 'border-emerald-400/60 bg-emerald-500/15 shadow-[0_0_15px_rgba(52,211,153,0.15)] ring-2 ring-emerald-400/30'
                      : disabled
                        ? 'border-white/5 bg-white/[0.02] opacity-35 cursor-not-allowed'
                        : 'border-white/[0.08] bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <HeroArt hero={h} className="h-12 w-12 rounded-xl" sizes="48px" decorative />
                  <span className="line-clamp-1 w-full text-center text-[11px] font-bold leading-tight text-white/90">
                    {h.name}
                  </span>
                  <span className="text-[9px] text-white/45 truncate max-w-full">
                    {h.role}
                  </span>
                  {active && (
                    <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-black">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-16 text-center">
              <Search className="h-8 w-8 text-white/20" />
              <p className="text-sm font-semibold text-white/60">No se encontraron héroes</p>
              <p className="text-xs text-white/40">Prueba con otro nombre o selecciona &quot;Todos&quot;.</p>
            </div>
          )}
        </div>

        {/* Footer fijo para multi-selección */}
        {multi && (
          <div className="shrink-0 border-t border-white/[0.08] bg-[#0e0f13] p-3 pb-safe sm:p-4">
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-amber-400 py-3 text-center text-xs font-bold uppercase tracking-wider text-black shadow-lg transition active:scale-[0.98] hover:bg-amber-300"
            >
              Confirmar selección ({selectedIds?.length ?? 0}/{max})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
