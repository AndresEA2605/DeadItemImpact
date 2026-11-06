// src/lib/clash-mechanics.ts
// Generador de explicaciones mecánicas precisas para cruces de Deadlock.
// Explica EXACTAMENTE qué habilidad se usa, cómo interactúa y cómo contrarrestarla.

import type { DeadlockHero } from '../types/deadlock';

interface SpecificClash {
  reason: string;
  solution: string;
}

// Interacciones emblemáticas con nombres exactos de habilidades y mecánicas reales
// Textos directos, concisos y tácticos (máx 12-15 palabras)
const SPECIFIC_HERO_CLASHES: Record<string, Record<string, SpecificClash>> = {
  // THE DOORMAN
  'the-doorman': {
    lash: {
      reason: 'Lash salta tus umbrales con Grapple y te estrella con Death Slam.',
      solution: 'Pelea bajo techos bajos y activa Unstoppable contra su agarre.',
    },
    bebop: {
      reason: 'Bebop te saca del portal con Hook y te desintegra con Hyper Beam.',
      solution: 'Coloca portales tras esquinas para bloquear el tiro recto del gancho.',
    },
    yamato: {
      reason: 'Yamato cruza tus umbrales con Flying Strike e inmune por Shadow Transformation.',
      solution: 'No intercambies a melee durante su ultimate; sal por portal y espera 5s.',
    },
  },

  // LASH
  lash: {
    'the-doorman': {
      reason: 'Doorman escapa por umbrales a tus caídas y te ralentiza en pasillos.',
      solution: 'Cae con Ground Strike anticipando la boca de salida de su portal.',
    },
    seven: {
      reason: 'Seven queda inmóvil canalizando Storm Cloud y es vulnerable a derribos.',
      solution: 'Usa Knockdown o cáele con Death Slam para cancelarle la tormenta al instante.',
    },
    haze: {
      reason: 'Haze te duerme en vuelo con Sleep Dagger y te derrite con Bullet Dance.',
      solution: 'Activa Metal Skin para anular sus balas y cáele encima al terminar su ult.',
    },
    dynamo: {
      reason: 'Dynamo frena tu salto aéreo absorbiéndote en Singularity.',
      solution: 'Inicia con Unstoppable para no ser absorbido o espera a que gaste su ult.',
    },
  },

  // ABRAMS
  abrams: {
    haze: {
      reason: 'Haze evade tu carga y te derrite con el daño continuo de Bullet Dance.',
      solution: 'Activa Metal Skin al oír su ult, haz parry y castiga con Shoulder Charge.',
    },
    seven: {
      reason: 'Seven te desgasta a distancia con rayos y frena tu avance con Static Charge.',
      solution: 'Usa Knockdown para tirarlo de Storm Cloud y embístele en esquinas cerradas.',
    },
    vindicta: {
      reason: 'Vindicta vuela fuera del rango de escopeta y te fija al suelo con Stake.',
      solution: 'Tírala con Knockdown y remátala con Shoulder Charge contra una pared.',
    },
  },

  // SEVEN
  seven: {
    vindicta: {
      reason: 'Vindicta te fusila a distancia con Assassinate si flotas en Storm Cloud.',
      solution: 'Canaliza Storm Cloud tras coberturas elevadas o deríbala con Knockdown.',
    },
    bebop: {
      reason: 'Bebop te engancha con Hook mientras flotas en Storm Cloud y cancela tu ult.',
      solution: 'Cúbrete tras chimeneas antes de la tormenta o activa Unstoppable.',
    },
  },

  // HAZE
  haze: {
    abrams: {
      reason: 'Abrams resiste tus balas con Infernal Resilience y te aturde contra muros.',
      solution: 'Guarda distancia con saltos, duérmelo con Sleep Dagger y vigila su Metal Skin.',
    },
    metal_skin_users: {
      reason: 'Metal Skin anula todo el daño de tu Bullet Dance durante 3.5 segundos.',
      solution: 'Baitéa su Metal Skin con ráfagas cortas; tira Bullet Dance cuando expire.',
    },
  },

  // KELVIN
  kelvin: {
    infernus: {
      reason: 'Infernus depende de correr con Flame Dash y curarse con Afterburn.',
      solution: 'Aplica Healbane o Decay y enciérralo en Frozen Shelter cuando corra.',
    },
  },

  // BEBOP
  bebop: {
    vindicta: {
      reason: 'Vindicta vuela en línea recta y es un blanco fácil para tu Hook.',
      solution: 'Engánchala en pleno vuelo y conéctale Uppercut antes de que toque el suelo.',
    },
  },
};

/**
 * Devuelve la explicación mecánica exacta y no vaga del choque entre dos héroes.
 */
export function getPreciseClashExplanation(
  source: DeadlockHero,
  target: DeadlockHero,
  advantage: 'Fuerte Contra' | 'Débil Contra' | 'Skill Matchup'
): { reason: string; solution: string } {
  // 1. Revisar si hay un choque específico curado
  const specific = SPECIFIC_HERO_CLASHES[source.id]?.[target.id];
  if (specific) {
    return specific;
  }

  // 2. Si no hay entrada directa, generar la explicación mecánica exacta según sus habilidades reales
  const sourceUlt = source.abilities.find((a) => a.slot.includes('Ult'))?.name ?? source.abilities[3]?.name ?? 'su ultimate';
  const sourceMain = source.abilities[0]?.name ?? 'su habilidad principal';
  const targetUlt = target.abilities.find((a) => a.slot.includes('Ult'))?.name ?? target.abilities[3]?.name ?? 'su ultimate';
  const targetMain = target.abilities[0]?.name ?? 'su habilidad principal';

  // Analizar interacciones mecánicas reales de Deadlock:
  
  // Caso Aéreos vs Terrestres / Knockdown
  if (['vindicta', 'grey-talon'].includes(target.id)) {
    if (advantage === 'Fuerte Contra') {
      return {
        reason: `${source.name} castiga su fragilidad aérea: en tierra no escapa de ${sourceMain}.`,
        solution: `Usa Knockdown para tirarla del aire y córtale los ángulos de tiro.`,
      };
    } else {
      return {
        reason: `${target.name} gana altura con vuelo y te hostiga con ${targetUlt} a distancia.`,
        solution: `Compra Knockdown para derribarla y pelea en zonas techadas.`,
      };
    }
  }

  // Caso Canalizadores Inmóviles (Seven, Bebop con rayo, McGinnis con cohetes)
  if (['seven', 'bebop', 'mcginnis'].includes(target.id)) {
    if (advantage === 'Fuerte Contra') {
      return {
        reason: `${target.name} queda inmóvil canalizando ${targetUlt} y vendido ante tu avance.`,
        solution: `Guarda Knockdown o aturdimiento y cancela su ${targetUlt} al instante.`,
      };
    } else {
      return {
        reason: `${target.name} destruye en área si te atrapa en abierto con ${targetUlt}.`,
        solution: `Rompe línea de visión con muros y usa Knockdown o Silencer para cancelar su ult.`,
      };
    }
  }

  // Caso Asesinos de Balas continuas (Haze, Wraith)
  if (['haze', 'wraith'].includes(target.id)) {
    if (advantage === 'Fuerte Contra') {
      return {
        reason: `${source.name} mitiga las balas de ${target.name} y la destruye en melee al caer su ráfaga.`,
        solution: `Activa Metal Skin durante ${targetUlt} y contraataca con ${sourceMain}.`,
      };
    } else {
      return {
        reason: `${target.name} te embosca a alta cadencia y te derrite con ${targetUlt}.`,
        solution: `Equípate con Metal Skin para ser inmune a sus balas y dashea fuera de su ángulo.`,
      };
    }
  }

  // Caso Sustain y Tanques a Melee (Abrams, Infernus, Shiv, Kelvin)
  if (['abrams', 'infernus', 'shiv', 'kelvin'].includes(target.id)) {
    if (advantage === 'Fuerte Contra') {
      return {
        reason: `${source.name} corta la curación de ${target.name} y castiga su rango cuerpo a cuerpo.`,
        solution: `Aplica Healbane o Decay desde el primer disparo y haz kiting hacia atrás.`,
      };
    } else {
      return {
        reason: `${target.name} resiste tu daño inicial y te gana por desgaste con ${targetMain}.`,
        solution: `No aceptes duelos largos a melee; compra Healbane o Toxic Bullets para cortar su cura.`,
      };
    }
  }

  // Caso Portales y Manipuladores Espaciales (The Doorman, Paradox, Pocket)
  if (['the-doorman', 'paradox', 'pocket'].includes(target.id)) {
    return {
      reason: `${target.name} altera el posicionamiento con ${targetMain} y ${targetUlt}.`,
      solution: `No persigas a ciegas por sus zonas de salto; usa Warp Stone para recolocarte.`,
    };
  }

  // Caso General Preciso
  if (advantage === 'Fuerte Contra') {
    return {
      reason: `${source.name} presiona con ${sourceMain}: el kit de ${target.name} no resiste tu daño inicial.`,
      solution: `Inicia combate cuando ${target.name} gaste ${targetMain} y castiga su recarga.`,
    };
  }

  if (advantage === 'Débil Contra') {
    return {
      reason: `${target.name} tiene ventaja con ${targetMain} y fuerza duelos con ${targetUlt}.`,
      solution: `Baitéa su ${targetMain} con amagos y ataca solo con su habilidad en enfriamiento.`,
    };
  }

  return {
    reason: `Duelo de reflejos: quien conecte primero su control (${sourceMain} vs ${targetMain}) gana.`,
    solution: `Guarda estamina para esquivar su ${targetMain} y responde a su fallo con tu combo.`,
  };
}
