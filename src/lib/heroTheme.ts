import type { DeadlockHero } from '../types/deadlock';

export interface RoleTheme {
  emoji: string;
  gradient: string;
  soft: string;
  text: string;
  dot: string;
}

const ROLE_THEMES: Record<string, RoleTheme> = {
  Carry: {
    emoji: '⚔️',
    gradient: 'from-rose-500 via-red-500 to-orange-500',
    soft: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    text: 'text-rose-300',
    dot: 'bg-rose-400',
  },
  Brawler: {
    emoji: '🥊',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    soft: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
  },
  Asesino: {
    emoji: '🗡️',
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-600',
    soft: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25',
    text: 'text-fuchsia-300',
    dot: 'bg-fuchsia-400',
  },
  Iniciador: {
    emoji: '🌀',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    soft: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    text: 'text-cyan-300',
    dot: 'bg-cyan-400',
  },
  'Soporte / Utilidad': {
    emoji: '💚',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    soft: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  'Mago de Control': {
    emoji: '🔮',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    soft: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
    text: 'text-violet-300',
    dot: 'bg-violet-400',
  },
};

const DEFAULT_ROLE: RoleTheme = {
  emoji: '🎯',
  gradient: 'from-slate-500 via-slate-600 to-slate-700',
  soft: 'bg-slate-500/10 text-slate-300 border-slate-500/25',
  text: 'text-slate-300',
  dot: 'bg-slate-400',
};

export function getRoleTheme(role: string): RoleTheme {
  return ROLE_THEMES[role] ?? DEFAULT_ROLE;
}

export const ROLE_FILTERS = [
  'Todos',
  'Carry',
  'Brawler',
  'Asesino',
  'Iniciador',
  'Soporte / Utilidad',
  'Mago de Control',
] as const;

export interface DifficultyTheme {
  label: string;
  className: string;
  bars: number;
  color: string;
}

const DIFFICULTY_THEMES: Record<string, DifficultyTheme> = {
  Fácil: {
    label: 'Fácil',
    className: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    bars: 1,
    color: 'bg-emerald-400',
  },
  Media: {
    label: 'Media',
    className: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    bars: 2,
    color: 'bg-amber-400',
  },
  Difícil: {
    label: 'Difícil',
    className: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    bars: 3,
    color: 'bg-rose-400',
  },
  Experto: {
    label: 'Experto',
    className: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
    bars: 4,
    color: 'bg-purple-400',
  },
};

export function getDifficultyTheme(difficulty: string): DifficultyTheme {
  return (
    DIFFICULTY_THEMES[difficulty] ?? {
      label: difficulty,
      className: 'bg-neutral-800 text-neutral-300 border-neutral-700',
      bars: 0,
      color: 'bg-neutral-500',
    }
  );
}

/** Iniciales estables para el avatar (sin imágenes externas). */
export function heroInitials(hero: Pick<DeadlockHero, 'name'>): string {
  const clean = hero.name.replace(/^The\s+/i, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '??';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
