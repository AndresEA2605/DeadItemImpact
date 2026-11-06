import React from 'react';

interface ItemIconProps {
  itemId: string;
  category: 'weapon' | 'vitality' | 'spirit';
  className?: string;
  size?: number;
}

export const ItemIcon: React.FC<ItemIconProps> = ({
  itemId,
  category,
  className = 'w-12 h-12',
  size,
}) => {
  const catConfig = {
    weapon: {
      outer: 'from-amber-700 via-amber-600 to-orange-600',
      inner: 'from-amber-500/30 to-transparent',
      ring: 'ring-amber-500/40',
      shadow: 'shadow-amber-900/50',
    },
    vitality: {
      outer: 'from-emerald-800 via-emerald-700 to-teal-600',
      inner: 'from-emerald-400/30 to-transparent',
      ring: 'ring-emerald-500/40',
      shadow: 'shadow-emerald-900/50',
    },
    spirit: {
      outer: 'from-purple-900 via-purple-700 to-indigo-700',
      inner: 'from-purple-400/30 to-transparent',
      ring: 'ring-purple-500/40',
      shadow: 'shadow-purple-900/50',
    },
  }[category];

  // SVG paths optimizados por ítem (más reconocibles)
  const getIcon = (): { path: string; extraElements?: React.ReactNode } => {
    switch (itemId) {
      case 'knockdown':
        return {
          path: 'M12 3L4 10.5h5V17h6v-6.5h5L12 3zM5 19h14v2H5v-2z',
        };
      case 'metal-skin':
        return {
          path: 'M12 2L4 5.5v6C4 16.8 7.5 21.3 12 23c4.5-1.7 8-6.2 8-11.5V5.5L12 2zm0 2.2l6 2.6v7.7c0 3.5-2.4 6.8-6 8.3-3.6-1.5-6-4.8-6-8.3V6.8l6-2.6z',
        };
      case 'return-fire':
        return {
          path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 8.5l-5.5 5.5-2.5-2.5 1.4-1.4 1.1 1.1 4.1-4.1 1.4 1.4z',
          extraElements: (
            <>
              <path
                d='M17 7l-3-3v2h-5a2 2 0 00-2 2v1h2V8h5v2l3-3z'
                fill='currentColor'
                opacity='0.9'
              />
            </>
          ),
        };
      case 'toxic-bullets':
        return {
          path: 'M12 2a5 5 0 015 5c0 3-5 10-5 10S7 10 7 7a5 5 0 015-5zm0 3a2 2 0 100 4 2 2 0 000-4zm-5 14h10v2H7v-2z',
        };
      case 'decay':
        return {
          path: 'M12 3c-1.5 2.5-5 5-5 9a5 5 0 0010 0c0-4-3.5-6.5-5-9zm0 10a2 2 0 110-4 2 2 0 010 4z',
          extraElements: (
            <path
              d='M5 20c0 1.1 3.1 2 7 2s7-.9 7-2c0-.8-1.8-1.5-4.5-1.8v-1H9.5v1C6.8 18.5 5 19.2 5 20z'
              fill='currentColor'
              opacity='0.7'
            />
          ),
        };
      case 'curse':
        return {
          path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c5.52 0 10 4.48 10 10 0 1.9-.52 3.68-1.42 5.2L6.8 3.42A9.96 9.96 0 0112 2zm0 18c-5.52 0-10-4.48-10-10 0-1.9.52-3.68 1.42-5.2l13.78 13.78A9.96 9.96 0 0112 20z',
        };
      case 'debuff-remover':
        return {
          path: 'M19.78 4.22L17.5 6.5A7 7 0 0117 19H7L4.22 21.78 2.81 20.37 20.37 2.81l1.41 1.41zM7 5h10a7 7 0 010 14l-3-3H7L4.5 13.5A7 7 0 017 5z',
          extraElements: (
            <path d='M12 8l-4 4h3v4h2v-4h3l-4-4z' fill='currentColor' />
          ),
        };
      case 'unstoppable':
        return {
          path: 'M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm-1 14l-3.5-3.5 1.4-1.4L11 12.2l5.1-5.1 1.4 1.4L11 15z',
        };
      case 'silencer':
        return {
          path: 'M18 7H6a2 2 0 00-2 2v6a2 2 0 002 2h2l4 4 4-4h2a2 2 0 002-2V9a2 2 0 00-2-2zm-7 8v-2H9v-2h2V9h2v2h2v2h-2v2h-2z',
        };
      case 'phantom-strike':
        return {
          path: 'M13 3v7h7l-9 11v-7H4L13 3z',
        };
      case 'healbane':
        return {
          path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
          extraElements: (
            <path
              d='M12 8v4m-2-2h4'
              stroke='#ff4444'
              strokeWidth='2'
              strokeLinecap='round'
              fill='none'
            />
          ),
        };
      case 'slowing-hex':
        return {
          path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        };
      case 'warp-stone':
        return {
          path: 'M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z',
        };
      case 'colossus':
        return {
          path: 'M12 2C9.24 2 7 4.24 7 7c0 2.85 2.01 5.22 4.7 5.87V15H9v2h2v1H9v2h6v-2h-2v-1h2v-2h-2v-2.13A6.01 6.01 0 0017 7c0-2.76-2.24-5-5-5z',
        };
      case 'alchemical-fire':
        return {
          path: 'M12 2c0 0-5 5.5-5 10a5 5 0 0010 0c0-4.5-5-10-5-10zm-1 13.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z',
        };
      case 'crippling-headshot':
        return {
          path: 'M12 2a9 9 0 110 18A9 9 0 0112 2zm0 2a7 7 0 100 14A7 7 0 0012 4zm0 2a5 5 0 110 10A5 5 0 0112 6zm0 2a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z',
        };
      case 'ricochet':
        return {
          path: 'M19.07 4.93L17.66 6.34A7.93 7.93 0 0120 12a8 8 0 01-8 8 8 8 0 01-8-8c0-4.08 3.05-7.44 7-7.93V7L15 4l-4-3v2.07a10 10 0 00-9 9.93 10 10 0 0010 10 10 10 0 0010-10c0-3.03-1.35-5.74-3.5-7.6l1.57-1.47z',
        };
      case 'siphon-bullets':
        return {
          path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z',
        };
      case 'silence-wave':
        return {
          path: 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03V16c1.48-.73 2.5-2.25 2.5-4zm-14.5 0a9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9zm11.5 0c0 1.38-1.12 2.5-2.5 2.5A2.5 2.5 0 019 12a2.5 2.5 0 012.5-2.5A2.5 2.5 0 0115.5 12z',
        };
      case 'mystic-slow':
        return {
          path: 'M6 2v6l2 2-2 2v6l6-5 6 5v-6l-2-2 2-2V2l-6 5-6-5z',
        };
      case 'basic-magazine':
        return {
          path: 'M7 3h10a1 1 0 011 1v3H6V4a1 1 0 011-1zM6 8v13h12V8H6zm5 9v-4H9l3-5 3 5h-2v4h-2z',
        };
      case 'hollow-point-ward':
        return {
          path: 'M12 1L4 4v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V4l-8-3zm0 2.2l6 2.3v5.5c0 4.3-2.9 8.3-6 9.8-3.1-1.5-6-5.5-6-9.8V5.5l6-2.3z',
        };
      case 'extra-health':
        return {
          path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
        };
      case 'healing-rite':
        return {
          path: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm1 11H9v-2h4V7h2v4h4v2h-4v4h-2v-4z',
        };
      case 'extra-spirit':
        return {
          path: 'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2V13H8v-2h2.5V8h2v3H15v2h-2.5v3.5z',
        };
      case 'kinetic-dash':
        return {
          path: 'M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z',
        };
      default:
        return {
          path: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z',
        };
    }
  };

  const { path, extraElements } = getIcon();
  const inlineSizeStyle = size ? { width: size, height: size } : undefined;

  return (
    <div
      className={`relative rounded-xl bg-gradient-to-br ${catConfig.outer} flex items-center justify-center ring-1 ${catConfig.ring} shadow-lg ${catConfig.shadow} shrink-0 overflow-hidden ${className}`}
      style={inlineSizeStyle}
    >
      {/* Inner glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${catConfig.inner} rounded-xl pointer-events-none`}
      />
      {/* SVG Icon */}
      <svg
        viewBox='0 0 24 24'
        className='w-[58%] h-[58%] relative z-10 drop-shadow-sm'
        fill='white'
        aria-hidden='true'
      >
        <path d={path} />
        {extraElements}
      </svg>
    </div>
  );
};
