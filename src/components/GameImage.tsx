'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { DeadlockHero, DeadlockItem } from '../types/deadlock';
import { getRoleTheme, heroInitials } from '../lib/heroTheme';

type HeroVariant = 'icon' | 'card' | 'vertical';

const HERO_SRC: Record<HeroVariant, (id: string) => string> = {
  icon: (id) => `/heroes/${id}.png`,
  card: (id) => `/heroes/${id}-card.png`,
  vertical: (id) => `/heroes/${id}-vertical.png`,
};

interface HeroArtProps {
  hero: DeadlockHero;
  variant?: HeroVariant;
  className?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
}

/**
 * Retrato de héroe con asset local original del juego y fallback estable.
 * `icon` = cabeza 128px · `card` = arte de carta 280×380 · `vertical` = arte vertical.
 */
export function HeroArt({
  hero,
  variant = 'icon',
  className = '',
  sizes = '96px',
  priority = false,
  decorative = false,
}: HeroArtProps) {
  const [failed, setFailed] = useState(false);
  const theme = getRoleTheme(hero.role);

  return (
    <span className={`relative block overflow-hidden ${className}`}>
      {failed ? (
        <span
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${theme.gradient}`}
          aria-hidden="true"
        >
          <span className="text-[0.82em] font-semibold tracking-tight text-white/95">
            {heroInitials(hero)}
          </span>
        </span>
      ) : (
        <Image
          src={HERO_SRC[variant](hero.id)}
          alt={decorative ? '' : hero.name}
          aria-hidden={decorative || undefined}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${
            variant === 'card' ? 'object-[50%_18%]' : 'object-center'
          }`}
        />
      )}
    </span>
  );
}

const ITEM_FALLBACK: Record<DeadlockItem['category'], string> = {
  weapon: 'from-amber-500/35 to-orange-700/20 text-amber-200',
  vitality: 'from-emerald-500/35 to-teal-700/20 text-emerald-200',
  spirit: 'from-violet-500/35 to-fuchsia-700/20 text-violet-200',
};

interface ItemArtProps {
  item: DeadlockItem;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** Icono original de ítem con fallback por categoría. */
export function ItemArt({ item, className = '', sizes = '48px', priority = false }: ItemArtProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`relative block shrink-0 overflow-hidden ${className}`}>
      {failed ? (
        <span
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${ITEM_FALLBACK[item.category]}`}
          aria-hidden="true"
        >
          <span className="text-[0.8em] font-semibold">{item.name.slice(0, 1)}</span>
        </span>
      ) : (
        <Image
          src={`/items/${item.id}.png`}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-contain"
        />
      )}
    </span>
  );
}
