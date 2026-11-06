export type ItemCategory = 'weapon' | 'vitality' | 'spirit';

export interface DeadlockItem {
  id: string;
  name: string;
  category: ItemCategory;
  tier: 1 | 2 | 3 | 4 | 5;
  cost: number;
  type: 'Activo' | 'Pasivo';
  cooldown?: string;
  description: string;
  tags: string[];
}

export interface Ability {
  slot: '1' | '2' | '3' | '4 (Ult)';
  name: string;
  type: 'Activa' | 'Pasiva' | 'Canalizada' | 'Activa / Pasiva';
  cooldown?: string;
  description: string;
  counterTip: string;
}

export interface ItemCounterRecommendation {
  itemId: string;
  priority: 'Esencial' | 'Situacional' | 'Late Game';
  timing: 'Early Game' | 'Mid Game' | 'Late Game';
  counterExplanation: string;
  countersAbility?: string;
}

export interface HeroCounterMatchup {
  heroId: string;
  advantage: 'Fuerte Contra' | 'Débil Contra' | 'Skill Matchup';
  reason: string;
}

export interface HeroBuildStage {
  phase: string;
  soulsEstimate: string;
  items: string[];
  notes: string;
}

export interface DeadlockHero {
  id: string;
  name: string;
  title: string;
  role: 'Carry' | 'Brawler' | 'Iniciador' | 'Asesino' | 'Soporte / Utilidad' | 'Mago de Control';
  difficulty: 'Fácil' | 'Media' | 'Difícil' | 'Experto';
  attackType: 'Balas Rápidas' | 'Hitscan Preciso' | 'Escopeta Melee' | 'Ráfaga de Espíritu';
  avatarUrl: string;
  description: string;
  playstyleOverview: string;

  stats: {
    dps: number;
    bulletDamage: number;
    magazineSize: number;
    fireRate: string;
    maxHealth: number;
    healthRegen: string;
    bulletResist: string;
    spiritResist: string;
    moveSpeed: string;
    stamina: number;
  };

  abilities: Ability[];

  counterplay: {
    generalAdvice: string[];
    itemCounters: ItemCounterRecommendation[];
    heroCounters: HeroCounterMatchup[];
    heroMatchups?: HeroCounterMatchup[];
    positioningTips: string[];
  };

  howToPlay: {
    lanePhaseTips: string[];
    midLateGamePlan: string[];
    skillPriority: string[];
    coreCombos: {
      name: string;
      sequence: string;
      explanation: string;
    }[];
    buildGuide: HeroBuildStage[];
  };
}
