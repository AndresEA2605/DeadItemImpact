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

  // Bloqueo de scroll + Escape + foco inicial.
  // El reset de filtros se resuelve remontando el componente con `key` al abrir.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    const timer = window.setTimeout(() => searchRef.current?.focus(), 120);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(timer);
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
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 sheet-backdrop sm:items-center sm:px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="slide-in relative flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0f1014] shadow-2xl sm:max-h-[82dvh] sm:max-w-2xl sm:rounded-3xl"
      >
        {/* Handle (mobile) */}
        <div className="flex justify-center pb-1 pt-3 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-neutral-700" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 px-4 pb-3 pt-2 sm:px-5 sm:pt-5">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-black leading-tight text-white">{title}</h2>
            {subtitle && <p className="mt-0.5 text-[11px] text-neutral-400">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar selector"
            className="tap -mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-800/80 text-neutral-300 transition active:scale-90"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Buscador */}
        <div className="px-4 sm:px-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar héroe por nombre, rol o estilo…"
              autoComplete="off"
              className="w-full rounded-2xl border border-white/8 bg-neutral-900 py-3 pl-10 pr-9 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-neutral-500 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filtros por rol */}
        <div className="mt-3 flex flex-wrap gap-1.5 px-4 pb-1 sm:px-5">
          {ROLE_FILTERS.map((r) => {
            const active = role === r;
            return (
              <button
                key={r}
                onClick={() => setRole(r)}
                aria-pressed={active}
                aria-label={`Filtrar por ${r}`}
                title={r}
                className={`tap rounded-full border px-2.5 py-1 text-[10px] font-bold transition active:scale-95 ${
                  active
                    ? 'border-white/40 bg-white text-black'
                    : 'border-white/8 bg-neutral-900/70 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {r === 'Todos' ? 'Todos' : `${getRoleTheme(r).emoji} ${r === 'Soporte / Utilidad' ? 'Soporte' : r === 'Mago de Control' ? 'Control' : r}`}
              </button>
            );
          })}
        </div>

        {/* Resultados */}
        <div className="mt-2 flex items-center justify-between px-4 pb-1 sm:px-5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            {filtered.length} héroe{filtered.length === 1 ? '' : 's'}
          </span>
          {multi && (
            <span className="text-[10px] font-semibold text-neutral-500">
              {selectedIds?.length ?? 0}/{max} seleccionados
            </span>
          )}
        </div>

        <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-4 pt-1 sm:px-4">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {filtered.map((h) => {
              const theme = getRoleTheme(h.role);
              const active = selectedSet.has(h.id);
              const disabled = multi && atMax && !active;
              return (
                <button
                  key={h.id}
                  onClick={() => !disabled && onPick(h)}
                  disabled={disabled}
                  aria-pressed={active}
                  aria-label={`${h.name}, ${h.role}`}
                  className={`tap group relative flex min-h-[88px] flex-col items-center justify-center gap-1.5 rounded-2xl border p-2 transition-all active:scale-[0.97] ${
                    active
                      ? 'border-white/45 bg-white/[0.08] shadow-[0_0_18px_rgba(255,255,255,0.07)]'
                      : disabled
                        ? 'border-white/5 bg-neutral-900/40 opacity-40'
                        : 'border-white/7 bg-neutral-900/70 hover:border-white/20 hover:bg-neutral-900'
                  }`}
                >
                  <HeroArt hero={h} className="h-11 w-11 rounded-xl" sizes="44px" decorative />
                  <span className="line-clamp-1 w-full text-center text-[10px] font-bold leading-tight text-neutral-200">
                    {h.name}
                  </span>
                  <span className="text-[10px] opacity-80" aria-hidden="true">
                    {theme.emoji}
                  </span>
                  {active && (
                    <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-12 text-center">
              <Search className="h-7 w-7 text-neutral-700" />
              <p className="text-sm font-semibold text-neutral-400">Sin resultados</p>
              <p className="text-xs text-neutral-600">Prueba con otro nombre o cambia el filtro de rol.</p>
            </div>
          )}
        </div>

        {/* Footer multi */}
        {multi && (
          <div className="border-t border-white/8 bg-[#0f1014] px-4 py-3 pb-safe sm:px-5">
            <button
              onClick={onClose}
              className="tap w-full rounded-2xl bg-white py-3 text-sm font-semibold text-black transition active:scale-[0.98]"
            >
              Listo · {selectedIds?.length ?? 0} enemigo{(selectedIds?.length ?? 0) === 1 ? '' : 's'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
