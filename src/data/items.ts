import { DeadlockItem } from '../types/deadlock';

// Datos actualizados el 5 de noviembre de 2026.
// Fuente: deadlock.wiki, catálogo de la tienda (173 ítems vigentes).
export const DEADLOCK_ITEMS: Record<string, DeadlockItem> = {
  "close-quarters": {
    "id": "close-quarters",
    "name": "Close Quarters",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+20% Resistencia Cuerpo a Cuerpo — Inflige Daño de Arma adicional cuando estás cerca de tu objetivo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "extended-magazine": {
    "id": "extended-magazine",
    "name": "Extended Magazine",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+30% Munición Máxima · +8% Daño de Arma.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "cadencia",
      "daño"
    ]
  },
  "headshot-booster": {
    "id": "headshot-booster",
    "name": "Headshot Booster",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "cooldown": "9s",
    "description": "+30 Salud Extra — Tu próximo disparo en la cabeza contra un héroe enemigo inflige daño adicional con arma.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "daño"
    ]
  },
  "high-velocity-rounds": {
    "id": "high-velocity-rounds",
    "name": "High-Velocity Rounds",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+45% Velocidad de Bala · +8% Daño de Arma.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "daño"
    ]
  },
  "monster-rounds": {
    "id": "monster-rounds",
    "name": "Monster Rounds",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+25% Daño de Arma contra PNJ · +25% Resistencia a Balas contra PNJ · +1 Regeneración Fuera de Combate.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "resistencia",
      "daño"
    ]
  },
  "rapid-rounds": {
    "id": "rapid-rounds",
    "name": "Rapid Rounds",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+9% Cadencia de Disparo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "cadencia"
    ]
  },
  "restorative-shot": {
    "id": "restorative-shot",
    "name": "Restorative Shot",
    "category": "weapon",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "cooldown": "6s",
    "description": "+6% Daño de Arma — Tu próxima bala te curará según el objetivo al que golpees.",
    "tags": [
      "arma",
      "pasivo",
      "tier-1",
      "curación",
      "daño"
    ]
  },
  "active-reload": {
    "id": "active-reload",
    "name": "Active Reload",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "12s",
    "description": "+20% Munición Máxima — Mientras recargas, presionar Recargar durante la parte resaltada finalizará instantáneamente tu recarga y te otorgará Cadencia de Disparo, Robo de Vida de Balas y Velocidad de Movimiento.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "robo-de-vida",
      "cadencia",
      "movilidad"
    ]
  },
  "fleetfoot": {
    "id": "fleetfoot",
    "name": "Fleetfoot",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "16s",
    "description": "+6% Daño de Arma · +35% Distancia de Deslizamiento · +6% Resistencia a Balas — Elimina la penalización de Velocidad de Movimiento al disparar.",
    "tags": [
      "arma",
      "activo",
      "tier-2",
      "resistencia",
      "daño",
      "movilidad"
    ]
  },
  "intensifying-magazine": {
    "id": "intensifying-magazine",
    "name": "Intensifying Magazine",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+20% Munición Máxima — Aumenta el daño del arma a medida que disparas continuamente tu arma.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "cadencia",
      "daño"
    ]
  },
  "kinetic-dash": {
    "id": "kinetic-dash",
    "name": "Kinetic Dash",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+1 Estamina · +12% Recuperación de Estamina — Cuando haces Dash-Jump, obtienes Cadencia de Disparo y munición adicional hasta tu próxima recarga. Dura hasta 7s.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "cadencia"
    ]
  },
  "long-range": {
    "id": "long-range",
    "name": "Long Range",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+8% Alcance Efectivo del Arma · +0,75 m Velocidad de Sprint — Inflige Daño de Arma adicional cuando estás más allá de una distancia mínima de tu objetivo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "daño",
      "movilidad"
    ]
  },
  "melee-charge": {
    "id": "melee-charge",
    "name": "Melee Charge",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "5s",
    "description": "+50% Distancia de Cuerpo a Cuerpo Pesado · +10% Daño Cuerpo a Cuerpo · +6% Resistencia a Balas — Tu próximo ataque cuerpo a cuerpo pesado contra un enemigo causa mayor daño.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "mystic-shot": {
    "id": "mystic-shot",
    "name": "Mystic Shot",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "8s",
    "description": "+7 Poder Espiritual — Tu próxima bala inflige Daño Espiritual adicional.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "daño"
    ]
  },
  "opening-rounds": {
    "id": "opening-rounds",
    "name": "Opening Rounds",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+60% Velocidad de Bala · +8% Daño de Arma · +7 Poder Espiritual — Tus ataques tienen Daño de Arma adicional contra enemigos con más del 50% de salud.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "daño"
    ]
  },
  "recharging-rush": {
    "id": "recharging-rush",
    "name": "Recharging Rush",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "25s",
    "description": "+20% Munición Máxima · +10% Daño de Arma — Infligir un daño significativo con el arma repone una carga por cada una de tus habilidades cargadas.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "cadencia",
      "daño"
    ]
  },
  "slowing-bullets": {
    "id": "slowing-bullets",
    "name": "Slowing Bullets",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "Tus balas generan una ralentización de movimiento en los enemigos.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "ralentización"
    ]
  },
  "spirit-shredder": {
    "id": "spirit-shredder",
    "name": "Spirit Shredder",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "Tus balas aplican una desventaja que reduce la Resistencia Espíritu del objetivo y te otorga a ti y a tus aliados Robo de Vida espiritual contra ellos.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "robo-de-vida",
      "resistencia"
    ]
  },
  "split-shot": {
    "id": "split-shot",
    "name": "Split Shot",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "27s",
    "description": "Haz que tu arma dispare multidisparo. Golpear a más de un héroe por ataque otorgará una bonificación de Daño de Arma acumulable. Los objetivos solo se pueden alcanzar una vez por disparo múltiple.",
    "tags": [
      "arma",
      "activo",
      "tier-2",
      "daño"
    ]
  },
  "stalker": {
    "id": "stalker",
    "name": "Stalker",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "6s",
    "description": "-50% Distancia del Sonido de Pasos · +50 Salud Extra — Infligir daño con arma a corta distancia abre una herida y te otorga Velocidad de Movimiento adicional. Los enemigos heridos reciben Daño Espiritual con el tiempo, tienen una Resistencia a Balas reducida y se revelan a través de las paredes.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "resistencia",
      "daño",
      "movilidad"
    ]
  },
  "swift-striker": {
    "id": "swift-striker",
    "name": "Swift Striker",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+20% Cadencia de Disparo · +0,75 m Velocidad de Sprint.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "cadencia",
      "movilidad"
    ]
  },
  "titanic-magazine": {
    "id": "titanic-magazine",
    "name": "Titanic Magazine",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+100% Munición Máxima · +14% Daño de Arma.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "cadencia",
      "daño"
    ]
  },
  "weakening-headshot": {
    "id": "weakening-headshot",
    "name": "Weakening Headshot",
    "category": "weapon",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+60 Salud Extra — Acertar un tiro en la cabeza reduce su Resistencia a Balas.",
    "tags": [
      "arma",
      "pasivo",
      "tier-2",
      "resistencia"
    ]
  },
  "alchemical-fire": {
    "id": "alchemical-fire",
    "name": "Alchemical Fire",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "30s",
    "description": "+10 Poder Espiritual — Lanza un frasco que explota al contacto, creando un área que aumenta el Daño Espiritual por segundo y reduce la Resistencia a Balas del enemigo. 50% menos efectivo que los no héroes.",
    "tags": [
      "arma",
      "activo",
      "tier-3",
      "resistencia",
      "daño"
    ]
  },
  "ballistic-enchantment": {
    "id": "ballistic-enchantment",
    "name": "Ballistic Enchantment",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "Imbuye una habilidad con mayor alcance. Infligir daño con esa habilidad te otorga un mayor Daño de Arma por cada héroe único golpeado. Tiene un efecto reducido en los no héroes.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "daño"
    ]
  },
  "berserker": {
    "id": "berserker",
    "name": "Berserker",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+8% Resistencia a Balas — El daño de tu arma aumenta a medida que sufres daño sostenido.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "resistencia",
      "daño"
    ]
  },
  "blood-tribute": {
    "id": "blood-tribute",
    "name": "Blood Tribute",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "description": "+8% Resistencia a Debuffs · +8% Resistencia Espiritual · +4 Regeneración Fuera de Combate — Alternar: Sacrifica continuamente la salud para mejorar la Cadencia de Disparo, la resistencia a las desventajas y la Velocidad de Movimiento.",
    "tags": [
      "arma",
      "activo",
      "tier-3",
      "resistencia",
      "cadencia",
      "movilidad"
    ]
  },
  "burst-fire": {
    "id": "burst-fire",
    "name": "Burst Fire",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "9s",
    "description": "+50% Distancia de Deslizamiento · +10% Cadencia de Disparo — Gana brevemente Cadencia de Disparo y Velocidad de Movimiento cuando una de tus balas alcanza a un héroe.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "cadencia",
      "movilidad"
    ]
  },
  "cultist-sacrifice": {
    "id": "cultist-sacrifice",
    "name": "Cultist Sacrifice",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "270s",
    "description": "+2 Regeneración Fuera de Combate · +30% Daño de Arma contra PNJ · +30% Resistencia a Balas contra PNJ — Apunta a un NPC enemigo y consúmelo para obtener un 170% de bonificación de almas y otorga una poderosa mejora duradera.",
    "tags": [
      "arma",
      "activo",
      "tier-3",
      "resistencia",
      "economía",
      "daño"
    ]
  },
  "escalating-resilience": {
    "id": "escalating-resilience",
    "name": "Escalating Resilience",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+35% Munición Máxima · +75 Salud Extra · +18% Daño de Arma — Otorga Resistencia a Balas cuando tus balas alcanzan a un héroe. Cada disparo solo puede otorgar una acumulación.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "resistencia",
      "cadencia",
      "daño"
    ]
  },
  "express-shot": {
    "id": "express-shot",
    "name": "Express Shot",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "8s",
    "description": "+60% Velocidad de Bala · +8% Daño de Arma — Tu próximo ataque se disparará dos veces en rápida sucesión con mayor daño y velocidad. Este ataque consume munición extra.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "cadencia",
      "daño"
    ]
  },
  "headhunter": {
    "id": "headhunter",
    "name": "Headhunter",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "8s",
    "description": "+5% Daño de Arma · +50 Salud Extra — Tu próximo disparo en la cabeza contra un héroe enemigo inflige daño adicional con arma, te cura y otorga brevemente Velocidad de Movimiento adicional.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "curación",
      "daño",
      "movilidad"
    ]
  },
  "heroic-aura": {
    "id": "heroic-aura",
    "name": "Heroic Aura",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "22s",
    "description": "+1,5 m Velocidad de Sprint — Proporciona Resistencia a Balas a las unidades amigas cercanas.",
    "tags": [
      "arma",
      "activo",
      "tier-3",
      "resistencia",
      "movilidad"
    ]
  },
  "hollow-point": {
    "id": "hollow-point",
    "name": "Hollow Point",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+4,5 Regeneración Fuera de Combate · +125 Salud Extra — Cuando tengas más del 65% de salud, inflige Daño de Arma adicional y tus balas reducirán la Resistencia a Balas del enemigo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "resistencia",
      "daño"
    ]
  },
  "hunters-aura": {
    "id": "hunters-aura",
    "name": "Hunter's Aura",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+100 Salud Extra · +0,75 m Velocidad de Sprint — Reduce la Resistencia a Balas y la Cadencia de Disparo de los enemigos cercanos. Si solo hay un héroe enemigo cerca, este efecto se duplica.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "resistencia",
      "cadencia",
      "movilidad"
    ]
  },
  "point-blank": {
    "id": "point-blank",
    "name": "Point Blank",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+75 Salud Extra · +30% Resistencia Cuerpo a Cuerpo — Cuando estás cerca de tu objetivo, obtienes Daño de Arma y tus balas aplican una ralentización de movimiento.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "ralentización",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "shadow-weave": {
    "id": "shadow-weave",
    "name": "Shadow Weave",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "37s",
    "description": "+5 Regeneración Fuera de Combate · +2 m Velocidad de Sprint — Vuélvete sigiloso. Cada vez que recibes daño mientras estás en sigilo, eres revelado brevemente.",
    "tags": [
      "arma",
      "activo",
      "tier-3",
      "invisibilidad",
      "daño",
      "movilidad"
    ]
  },
  "sharpshooter": {
    "id": "sharpshooter",
    "name": "Sharpshooter",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+20% Alcance Efectivo del Arma · +25% Zoom del Arma · +60% Velocidad de Bala · +10% Daño de Arma · +1 m Velocidad de Sprint · -0,7 m Velocidad de Movimiento — Inflige Daño de Arma adicional cuando estás más allá de una distancia mínima de tu objetivo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "daño",
      "movilidad"
    ]
  },
  "spirit-rend": {
    "id": "spirit-rend",
    "name": "Spirit Rend",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "2s",
    "description": "+75 Salud Extra — Tus balas aplican una desventaja que reduce la Resistencia Espíritu del objetivo y te otorga a ti y a tus aliados Robo de Vida espiritual contra ellos.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "robo-de-vida",
      "resistencia"
    ]
  },
  "tesla-bullets": {
    "id": "tesla-bullets",
    "name": "Tesla Bullets",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "0.2s",
    "description": "Tus balas tienen la posibilidad de impactar a tu objetivo. El impacto saltará a un enemigo cercano.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3"
    ]
  },
  "toxic-bullets": {
    "id": "toxic-bullets",
    "name": "Toxic Bullets",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "Tus balas acumulan un sangrado en los enemigos, lo que hace que pierdan un porcentaje de su Salud Máxima con el tiempo. También reduce la Curación Recibida en el objetivo sangrante.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "curación"
    ]
  },
  "weighted-shots": {
    "id": "weighted-shots",
    "name": "Weighted Shots",
    "category": "weapon",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+30% Daño de Arma · +22% Resistencia a Debuffs · -14% Recuperación de Estamina · -0,5 m Velocidad de Movimiento — Tus balas generan una ralentización de movimiento en los enemigos.",
    "tags": [
      "arma",
      "pasivo",
      "tier-3",
      "ralentización",
      "resistencia",
      "daño",
      "movilidad"
    ]
  },
  "armor-piercer": {
    "id": "armor-piercer",
    "name": "Armor Piercer",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+60% Velocidad de Bala · +8% Daño de Arma — Tus balas tienen la posibilidad de volverse inevitables, atravesar a los enemigos e ignorar su Resistencia a Balas.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "capacitor": {
    "id": "capacitor",
    "name": "Capacitor",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "0.2s",
    "description": "+5% Cadencia de Disparo — Tus balas tienen la posibilidad de impactar a tu objetivo. El impacto saltará a un enemigo cercano.",
    "tags": [
      "arma",
      "activo",
      "tier-4",
      "cadencia"
    ]
  },
  "crippling-headshot": {
    "id": "crippling-headshot",
    "name": "Crippling Headshot",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+125 Salud Extra — Acertar un tiro en la cabeza reducirá su bala, su Resistencia Espíritu y su Curación Recibida.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "curación",
      "resistencia"
    ]
  },
  "crushing-fists": {
    "id": "crushing-fists",
    "name": "Crushing Fists",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "5s",
    "description": "+60% Distancia de Cuerpo a Cuerpo Pesado · +22% Daño Cuerpo a Cuerpo · +12% Resistencia a Balas — Tu próximo ataque cuerpo a cuerpo pesado contra un enemigo causa mayor daño.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "frenzy": {
    "id": "frenzy",
    "name": "Frenzy",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "16s",
    "description": "+160 Salud Extra · +15% Cadencia de Disparo · +10% Robo de Vida de Balas — Mientras tengas menos del 50% de salud, obtendrás bonificaciones de estadísticas durante un tiempo y las desventajas existentes se reducirán.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "robo-de-vida",
      "cadencia"
    ]
  },
  "glass-cannon": {
    "id": "glass-cannon",
    "name": "Glass Cannon",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+85% Daño de Arma · -13% Salud Máxima — Cada muerte de un héroe otorga una Cadencia de Disparo permanente (hasta un máximo de 8 veces). La muerte resulta en la pérdida de 1 pila.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "cadencia",
      "daño"
    ]
  },
  "lucky-shot": {
    "id": "lucky-shot",
    "name": "Lucky Shot",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+30% Munición Máxima — Tus balas tienen la posibilidad de potenciarse, lo que hace que causen Daño de Arma adicional al impactar. El daño adicional no puede ser crítico.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "cadencia",
      "daño"
    ]
  },
  "ricochet": {
    "id": "ricochet",
    "name": "Ricochet",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+18% Cadencia de Disparo — Tus balas rebotarán en los enemigos cercanos a tu objetivo, aplicando cualquier efecto de bala e infligiendo un porcentaje del daño original.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "cadencia",
      "daño"
    ]
  },
  "silencer": {
    "id": "silencer",
    "name": "Silencer",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+12% Resistencia Espiritual — Tus balas reducen el Daño Espiritual saliente del objetivo.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "spellslinger": {
    "id": "spellslinger",
    "name": "Spellslinger",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+5% Reducción de Enfriamiento de Habilidades — Mientras estás en combate, cada vez que lanzas una habilidad o un ítem, obtienes una ventaja acumulable que mejora la Cadencia de Disparo y la velocidad de recarga. Cada pila actualiza la duración.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "enfriamiento",
      "cadencia"
    ]
  },
  "spiritual-overflow": {
    "id": "spiritual-overflow",
    "name": "Spiritual Overflow",
    "category": "weapon",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+13% Duración de Habilidades · +15% Robo de Vida Espiritual · +90 Salud Extra · +8 Poder Espiritual — Obtén Cadencia de Disparo, Poder Espiritual y Robo de Vida espiritual adicionales al cargar cuando disparas a los héroes.",
    "tags": [
      "arma",
      "pasivo",
      "tier-4",
      "robo-de-vida",
      "cadencia"
    ]
  },
  "haunting-shot": {
    "id": "haunting-shot",
    "name": "Haunting Shot",
    "category": "weapon",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "2.5s",
    "description": "Tu próxima bala aplica una poderosa desventaja que reduce el daño, la curación y la Velocidad de Movimiento del enemigo. También inflige Daño Espiritual adicional según la salud actual del objetivo. La bala es más grande y atraviesa los objetivos.",
    "tags": [
      "arma",
      "pasivo",
      "legendario",
      "curación",
      "daño"
    ]
  },
  "infinite-rounds": {
    "id": "infinite-rounds",
    "name": "Infinite Rounds",
    "category": "weapon",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "description": "+200% Velocidad de Bala · +35% Cadencia de Disparo — Tus balas tienen la posibilidad de volverse inevitables, atravesar a los enemigos e ignorar su Resistencia a Balas.",
    "tags": [
      "arma",
      "pasivo",
      "legendario",
      "resistencia",
      "cadencia"
    ]
  },
  "runed-gauntlets": {
    "id": "runed-gauntlets",
    "name": "Runed Gauntlets",
    "category": "weapon",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "10s",
    "description": "+150% Distancia de Cuerpo a Cuerpo Pesado · +50% Resistencia Cuerpo a Cuerpo · +30% Daño Cuerpo a Cuerpo — Atraviesa la parada.",
    "tags": [
      "arma",
      "pasivo",
      "legendario",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "extra-health": {
    "id": "extra-health",
    "name": "Extra Health",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+210 Salud Extra.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1"
    ]
  },
  "extra-regen": {
    "id": "extra-regen",
    "name": "Extra Regen",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+2,5 Regeneración de Salud · +1,5 Regeneración Fuera de Combate.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1"
    ]
  },
  "extra-stamina": {
    "id": "extra-stamina",
    "name": "Extra Stamina",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+1 Estamina · +12% Recuperación de Estamina.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1"
    ]
  },
  "grit": {
    "id": "grit",
    "name": "Grit",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Activo",
    "cooldown": "60s",
    "description": "+1 Regeneración Fuera de Combate — Gana una barrera por un corto período de tiempo.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-1",
      "escudo"
    ]
  },
  "healing-rite": {
    "id": "healing-rite",
    "name": "Healing Rite",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Activo",
    "cooldown": "70s",
    "description": "Otorga regeneración y velocidad de sprint al objetivo. Se disipa si recibes daño de jugadores u objetivos enemigos. Puede ser autolanzable.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-1",
      "daño",
      "movilidad"
    ]
  },
  "melee-lifesteal": {
    "id": "melee-lifesteal",
    "name": "Melee Lifesteal",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "cooldown": "8s",
    "description": "+12% Daño Cuerpo a Cuerpo — Tu próximo ataque cuerpo a cuerpo te cura. Esta curación tiene una efectividad del 30% frente a no héroes. El enfriamiento es 1,5 veces mayor para los golpes ligeros cuerpo a cuerpo.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1",
      "curación",
      "enfriamiento",
      "daño",
      "melee"
    ]
  },
  "rebuttal": {
    "id": "rebuttal",
    "name": "Rebuttal",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "-1,25 s Enfriamiento de Parry · +18% Resistencia Cuerpo a Cuerpo · +75 Salud Extra — En una parada exitosa contra un héroe enemigo, te curas por el daño rechazado y devuelves ese daño al objetivo, y obtienes temporalmente un mayor daño.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1",
      "curación",
      "resistencia",
      "enfriamiento",
      "daño"
    ]
  },
  "sprint-boots": {
    "id": "sprint-boots",
    "name": "Sprint Boots",
    "category": "vitality",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+2 m Velocidad de Sprint · +2 Regeneración Fuera de Combate.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-1",
      "movilidad"
    ]
  },
  "battle-vest": {
    "id": "battle-vest",
    "name": "Battle Vest",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+18% Resistencia a Balas · +3 Regeneración Fuera de Combate — Mientras tengas más del 65% de salud, obtendrás daño con arma y cadencia de disparo adicional.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "resistencia",
      "cadencia",
      "daño"
    ]
  },
  "bullet-lifesteal": {
    "id": "bullet-lifesteal",
    "name": "Bullet Lifesteal",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+15% Robo de Vida de Balas · +90 Salud Extra · +10% Daño de Arma.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "robo-de-vida",
      "daño"
    ]
  },
  "debuff-reducer": {
    "id": "debuff-reducer",
    "name": "Debuff Reducer",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+90 Salud Extra — Reduce la duración de todos los efectos negativos que se te aplican.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2"
    ]
  },
  "enchanters-emblem": {
    "id": "enchanters-emblem",
    "name": "Enchanter's Emblem",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+18% Resistencia Espiritual · +2 Regeneración Fuera de Combate — Mientras tengas más del 65% de salud, obtendrás una bonificación de espíritu y reducción de enfriamiento.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "resistencia",
      "enfriamiento"
    ]
  },
  "enduring-speed": {
    "id": "enduring-speed",
    "name": "Enduring Speed",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+2 m Velocidad de Movimiento · +2 Regeneración Fuera de Combate — Reduce el efecto de las penalizaciones de Velocidad de Movimiento del enemigo.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "movilidad"
    ]
  },
  "guardian-ward": {
    "id": "guardian-ward",
    "name": "Guardian Ward",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "60s",
    "description": "+8% Alcance de Habilidades · +1,5 Regeneración Fuera de Combate — Proporciona al objetivo una barrera y una Velocidad de Movimiento temporal. Puede ser autolanzable. El enfriamiento se reduce a la mitad cuando se lanza sobre otra persona.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-2",
      "enfriamiento",
      "escudo",
      "movilidad"
    ]
  },
  "healbane": {
    "id": "healbane",
    "name": "Healbane",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+7 Poder Espiritual — Tu Daño Espiritual reduce la Curación Recibida del enemigo. Si un héroe enemigo muere bajo este efecto, recibirás una gran curación.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "curación",
      "daño"
    ]
  },
  "healing-booster": {
    "id": "healing-booster",
    "name": "Healing Booster",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+2 Regeneración Fuera de Combate — Aumenta la eficacia de su curación.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "curación"
    ]
  },
  "reactive-barrier": {
    "id": "reactive-barrier",
    "name": "Reactive Barrier",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "55s",
    "description": "+1 Regeneración Fuera de Combate — Gana una barrera cuando estás aturdido, encadenado, inmovilizado, dormido o silenciado.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "control",
      "escudo"
    ]
  },
  "restorative-locket": {
    "id": "restorative-locket",
    "name": "Restorative Locket",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "20s",
    "description": "+8% Resistencia Espiritual — Cuando un enemigo usa una habilidad dentro de un rango de 32 m de ti, almacena una pila de restauración. Consume todas las acumulaciones para curarte y reponer hasta 3 de resistencia según la cantidad de acumulaciones que tengas.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-2",
      "curación",
      "resistencia"
    ]
  },
  "return-fire": {
    "id": "return-fire",
    "name": "Return Fire",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "23s",
    "description": "+10% Resistencia a Balas — Dispara automáticamente una bala hacia cualquier atacante que te dañe con sus habilidades o arma.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-2",
      "resistencia",
      "daño"
    ]
  },
  "spirit-lifesteal": {
    "id": "spirit-lifesteal",
    "name": "Spirit Lifesteal",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+15% Robo de Vida Espiritual · +90 Salud Extra · +8 Poder Espiritual.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "robo-de-vida"
    ]
  },
  "spirit-shielding": {
    "id": "spirit-shielding",
    "name": "Spirit Shielding",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "45s",
    "description": "+2,5 Regeneración Fuera de Combate — Gana una barrera cada vez que recibes un Daño Espiritual significativo de héroes enemigos en un período de tiempo reducido.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "escudo",
      "daño"
    ]
  },
  "trophy-collector": {
    "id": "trophy-collector",
    "name": "Trophy Collector",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "-15% Daño de Arma contra PNJ · +2 m Velocidad de Sprint · +2 Regeneración Fuera de Combate — Cada vez que consigas una asistencia o mates, obtendrás sprint adicional, rango de habilidad y generación pasiva de alma. Este efecto se acumula y persiste hasta la muerte.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "daño",
      "movilidad"
    ]
  },
  "weapon-shielding": {
    "id": "weapon-shielding",
    "name": "Weapon Shielding",
    "category": "vitality",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "cooldown": "35s",
    "description": "+2,5 Regeneración Fuera de Combate — Gana una barrera cada vez que recibes un daño significativo con armas de héroes enemigos en un período de tiempo reducido.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-2",
      "escudo",
      "daño"
    ]
  },
  "bullet-resilience": {
    "id": "bullet-resilience",
    "name": "Bullet Resilience",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+35% Resistencia a Balas · +5 Regeneración Fuera de Combate — Cuando tu salud está por debajo del 50%, obtienes Resistencia a Balas adicional.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "resistencia"
    ]
  },
  "counterspell": {
    "id": "counterspell",
    "name": "Counterspell",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "23s",
    "description": "+50 Salud Extra · +5 Poder Espiritual — Tu próxima parada te protegerá del daño y los efectos de las habilidades y ítems enemigos. Con un hechizo exitoso, evita curarte y ganar Velocidad de Movimiento y espíritu.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "curación",
      "daño",
      "movilidad"
    ]
  },
  "dispel-magic": {
    "id": "dispel-magic",
    "name": "Dispel Magic",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "45s",
    "description": "+10% Resistencia Espiritual — Purga todos los efectos negativos que no sean definitivos y que se te apliquen actualmente. Si se eliminó algún efecto, cúrate y obtén una bonificación de Velocidad de Movimiento. No se puede usar mientras está aturdido o dormido.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "curación",
      "control",
      "resistencia",
      "movilidad"
    ]
  },
  "fortitude": {
    "id": "fortitude",
    "name": "Fortitude",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+375 Salud Extra — Después de no recibir daño durante un período, obtienes regeneración de salud.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "daño"
    ]
  },
  "fury-trance": {
    "id": "fury-trance",
    "name": "Fury Trance",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "18s",
    "description": "+15% Robo de Vida de Balas · +100 Salud Extra · +10% Daño de Arma — Otorga Cadencia de Disparo, Resistencia Espíritu y Velocidad de Movimiento, y elimina la penalización de Velocidad de Movimiento al disparar, pero te silencia y desactiva el uso de resistencia y la regeneración.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "curación",
      "robo-de-vida",
      "control",
      "resistencia"
    ]
  },
  "healing-nova": {
    "id": "healing-nova",
    "name": "Healing Nova",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "60s",
    "description": "+5% Alcance de Habilidades · +8 Poder Espiritual — Cúrate a ti mismo y a tus aliados cercanos.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "curación"
    ]
  },
  "lifestrike": {
    "id": "lifestrike",
    "name": "Lifestrike",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "4s",
    "description": "+16% Daño Cuerpo a Cuerpo · +125 Salud Extra — Tu ataque cuerpo a cuerpo aplica movimiento lento y te cura por un porcentaje del daño cuerpo a cuerpo infligido más una cantidad fija. Esta curación tiene una efectividad del 40% frente a no héroes. El enfriamiento es 1,5 veces mayor para los golpes ligeros cuerpo a cuerpo.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "curación",
      "ralentización",
      "enfriamiento",
      "daño"
    ]
  },
  "majestic-leap": {
    "id": "majestic-leap",
    "name": "Majestic Leap",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "45s",
    "description": "Lánzate al aire y concédete una barrera. Mientras estás en el aire, puedes usar el activo nuevamente para descender más rápido. No se puede usar durante 5 segundos si es atacado por un héroe enemigo.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "escudo"
    ]
  },
  "metal-skin": {
    "id": "metal-skin",
    "name": "Metal Skin",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "24s",
    "description": "+12% Resistencia a Balas — Vuélvete inmune a las balas.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "resistencia"
    ]
  },
  "rescue-beam": {
    "id": "rescue-beam",
    "name": "Rescue Beam",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "60s",
    "description": "+0,75 m Velocidad de Sprint · +6% Alcance de Habilidades — Cura a un héroe aliado objetivo y a ti mismo por un porcentaje de Salud Máxima. Una vez, mientras te recuperas, puedes atraer al objetivo hacia ti. Puede ser autolanzable.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "curación",
      "movilidad"
    ]
  },
  "spirit-resilience": {
    "id": "spirit-resilience",
    "name": "Spirit Resilience",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+30% Resistencia Espiritual · +3 Regeneración Fuera de Combate — Cuando la salud está por debajo del 50%, obtienes Resistencia Espíritu adicional.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "resistencia"
    ]
  },
  "stamina-mastery": {
    "id": "stamina-mastery",
    "name": "Stamina Mastery",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+2 Estamina · +18% Recuperación de Estamina · +23% Distancia de Salto Aéreo/Dash — Permite un uso adicional de Air Jump o Air Dash antes de aterrizar.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3"
    ]
  },
  "veil-walker": {
    "id": "veil-walker",
    "name": "Veil Walker",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "15s",
    "description": "+125 Salud Extra · +6 Poder Espiritual — Caminar a través de un velo cósmico te otorga sigilo, curación y mayor Velocidad de Movimiento.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-3",
      "curación",
      "invisibilidad",
      "movilidad"
    ]
  },
  "warp-stone": {
    "id": "warp-stone",
    "name": "Warp Stone",
    "category": "vitality",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "16s",
    "description": "Teletransportarse hacia adelante y obtener Resistencia a Balas.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-3",
      "resistencia"
    ]
  },
  "cheat-death": {
    "id": "cheat-death",
    "name": "Cheat Death",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "90s",
    "description": "+200 Salud Extra · +15% Resistencia a Balas — Cuando recibas daño letal, en su lugar, vuélvete temporalmente inmune a la muerte y elimina todas las desventajas que no sean de aturdimiento. Mientras eres inmune a la muerte, infliges daño reducido y tienes curación reducida.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "curación",
      "control",
      "resistencia",
      "daño"
    ]
  },
  "colossus": {
    "id": "colossus",
    "name": "Colossus",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "37s",
    "description": "+25% Salud Base · +15% Daño de Arma — Crece en tamaño, ganando Resistencia a Balas, Resistencia Espíritu y daño cuerpo a cuerpo. Los enemigos cercanos sufren de lentitud y tienen una velocidad de carrera reducida.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "ralentización",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "divine-barrier": {
    "id": "divine-barrier",
    "name": "Divine Barrier",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "55s",
    "description": "+10% Alcance de Habilidades · +1,5 Regeneración Fuera de Combate — Elimina todas las desventajas que no sean de aturdimiento del objetivo y proporciónale una barrera y Velocidad de Movimiento. Puede ser autolanzable. El enfriamiento se reduce a la mitad cuando se lanza sobre otra persona.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "control",
      "enfriamiento",
      "escudo",
      "movilidad"
    ]
  },
  "diviners-kevlar": {
    "id": "diviners-kevlar",
    "name": "Diviner's Kevlar",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "40s",
    "description": "+15% Duración de Habilidades · +10% Reducción de Enfriamiento de Ultimate — Al lanzar una habilidad máxima, obtienes una barrera y un Poder Espiritual temporal.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "enfriamiento",
      "escudo"
    ]
  },
  "healing-tempo": {
    "id": "healing-tempo",
    "name": "Healing Tempo",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+25% Curación Realizada · +10% Resistencia Espiritual · +6 Regeneración de Salud · +4 Regeneración Fuera de Combate — Aplicar curación a ti mismo o a un aliado otorga al objetivo cadencia de disparo adicional y Velocidad de Movimiento adicional. No se aplica a la regeneración innata ni a los robos de vida pasivos de bala/espíritu.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "curación",
      "robo-de-vida",
      "resistencia",
      "cadencia"
    ]
  },
  "indomitable": {
    "id": "indomitable",
    "name": "Indomitable",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "55s",
    "description": "+10% Resistencia a Balas · +10% Resistencia Espiritual · +2 Regeneración Fuera de Combate — El siguiente Aturdimiento, Encadenamiento, Inmovilización, Dormir, Silencio o Miedo se limpia automáticamente. Cuando esto sucede, obtienes una barrera y todos los enfriamientos de tus habilidades se reducen en un 20%.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "control",
      "resistencia",
      "enfriamiento",
      "escudo"
    ]
  },
  "infuser": {
    "id": "infuser",
    "name": "Infuser",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "30s",
    "description": "+15% Robo de Vida Espiritual · +10% Resistencia Espiritual · +100 Salud Extra · +8 Poder Espiritual — Gana Robo de Vida espiritual y Poder Espiritual.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "robo-de-vida",
      "resistencia"
    ]
  },
  "inhibitor": {
    "id": "inhibitor",
    "name": "Inhibitor",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+10% Daño de Arma · +150 Salud Extra — Tus balas se acumulan para reducir el daño causado por el objetivo y aplicar una Reducción de Curación.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "curación",
      "daño"
    ]
  },
  "juggernaut": {
    "id": "juggernaut",
    "name": "Juggernaut",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+50% Resistencia a Ralentizaciones · +2,5 m Velocidad de Movimiento · +25% Resistencia Cuerpo a Cuerpo · +15 Regeneración de Salud — Los enemigos que te disparan ven reducida su Cadencia de Disparo.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "ralentización",
      "resistencia",
      "cadencia",
      "movilidad"
    ]
  },
  "leech": {
    "id": "leech",
    "name": "Leech",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+30% Robo de Vida Espiritual · +30% Robo de Vida de Balas · +180 Salud Extra · +12% Daño de Arma · +12 Poder Espiritual.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "robo-de-vida",
      "daño"
    ]
  },
  "phantom-strike": {
    "id": "phantom-strike",
    "name": "Phantom Strike",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "35s",
    "description": "+15% Daño de Arma · +8 Poder Espiritual — Teletransportate a un objetivo enemigo y tíralo al suelo. Infligir daño, reducir la Velocidad de Movimiento y desarmar.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "control",
      "daño",
      "movilidad"
    ]
  },
  "plated-armor": {
    "id": "plated-armor",
    "name": "Plated Armor",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+130 Salud Extra — Obtenga la oportunidad de desviar las balas entrantes, evitando todo Daño de Arma o evitando todos los efectos de impacto de las balas.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "daño"
    ]
  },
  "siphon-bullets": {
    "id": "siphon-bullets",
    "name": "Siphon Bullets",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "1.2s",
    "description": "+15% Daño de Arma · +10% Resistencia a Balas — Tus balas roban temporalmente Max HP de los enemigos. Los enemigos recuperan la salud robada cuando expira el perjuicio.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "spellbreaker": {
    "id": "spellbreaker",
    "name": "Spellbreaker",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "9s",
    "description": "+18% Resistencia Espiritual · +25% Resistencia a Debuffs · +90 Salud Extra — La siguiente instancia de Daño Espiritual alto que recibas se reduce significativamente.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "unstoppable": {
    "id": "unstoppable",
    "name": "Unstoppable",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "60s",
    "description": "+25% Resistencia a Debuffs · +125 Salud Extra — Suprime temporalmente los efectos de estado negativos y te vuelves inmune a Aturdir, Silenciar, Dormir, Inmovilizar y Desarmar. No se puede utilizar mientras está aturdido o dormido.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "control",
      "resistencia"
    ]
  },
  "vampiric-burst": {
    "id": "vampiric-burst",
    "name": "Vampiric Burst",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "30s",
    "description": "+15% Robo de Vida de Balas · +10% Resistencia a Balas · +100 Salud Extra · +10% Daño de Arma — Otorga Robo de Vida, Cadencia de Disparo y munición. Esta munición adicional no está limitada por el tamaño máximo del cargador.",
    "tags": [
      "vitalidad",
      "activo",
      "tier-4",
      "robo-de-vida",
      "resistencia",
      "cadencia",
      "daño"
    ]
  },
  "witchmail": {
    "id": "witchmail",
    "name": "Witchmail",
    "category": "vitality",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "1s",
    "description": "+22% Resistencia Espiritual · +14 Poder Espiritual — Recibir fuertes golpes de Daño Espiritual de un enemigo reduce el enfriamiento de una habilidad aleatoria.",
    "tags": [
      "vitalidad",
      "pasivo",
      "tier-4",
      "resistencia",
      "enfriamiento",
      "daño"
    ]
  },
  "celestial-blessing": {
    "id": "celestial-blessing",
    "name": "Celestial Blessing",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "30s",
    "description": "Aplica una limpieza extremadamente poderosa que repone a tus aliados a nivel mundial.",
    "tags": [
      "vitalidad",
      "activo",
      "legendario"
    ]
  },
  "cloak-of-opportunity": {
    "id": "cloak-of-opportunity",
    "name": "Cloak of Opportunity",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "12s",
    "description": "Bloquea la siguiente desventaja que aplicaría bloqueo de movimiento, aturdir, encadenar, inmovilizar o dormir y volverte Imparable. También obtienes una barrera y Velocidad de Movimiento adicional.",
    "tags": [
      "vitalidad",
      "pasivo",
      "legendario",
      "control",
      "escudo",
      "movilidad"
    ]
  },
  "electric-slippers": {
    "id": "electric-slippers",
    "name": "Electric Slippers",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "0.3s",
    "description": "+2 Estamina · +80% Distancia de Deslizamiento — Al deslizarte, esquiva las balas, gana Cadencia de Disparo e inflige daño a los enemigos que te rodean. El enfriamiento es por objetivo.",
    "tags": [
      "vitalidad",
      "pasivo",
      "legendario",
      "enfriamiento",
      "cadencia",
      "daño"
    ]
  },
  "eternal-gift": {
    "id": "eternal-gift",
    "name": "Eternal Gift",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "165s",
    "description": "Gana periódicamente una mejora estadística permanente aleatoria.",
    "tags": [
      "vitalidad",
      "pasivo",
      "legendario"
    ]
  },
  "nullification-burst": {
    "id": "nullification-burst",
    "name": "Nullification Burst",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "18s",
    "description": "+40% Resistencia a Debuffs · +300 Salud Extra — Elimina cualquier beneficio positivo y previene el uso de resistencia y los efectos curativos en los enemigos.",
    "tags": [
      "vitalidad",
      "activo",
      "legendario",
      "curación",
      "resistencia"
    ]
  },
  "seraphim-wings": {
    "id": "seraphim-wings",
    "name": "Seraphim Wings",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "description": "+120% Recuperación de Estamina · -70% Escala de Gravedad · +100% Control Aéreo · +50% Aceleración Aérea — Cuando estás en el aire, infliges más daño y recibes menos daño. Permite Air Dash y Jumping ilimitados.",
    "tags": [
      "vitalidad",
      "pasivo",
      "legendario",
      "daño"
    ]
  },
  "shadow-strike": {
    "id": "shadow-strike",
    "name": "Shadow Strike",
    "category": "vitality",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "description": "+3 Estamina · +350 Salud Extra — Vuélvete invisible al usar resistencia sin rango de detección. Hacer un ataque cuerpo a cuerpo mientras eres invisible hará que les robes la Resistencia a Balas y al espíritu y les inflijas daño con el tiempo.",
    "tags": [
      "vitalidad",
      "activo",
      "legendario",
      "resistencia",
      "invisibilidad",
      "daño",
      "melee"
    ]
  },
  "extra-charge": {
    "id": "extra-charge",
    "name": "Extra Charge",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+1 Cargas de Habilidad Extra · +7 Poder Espiritual Extra para Habilidades con Cargas.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1"
    ]
  },
  "extra-spirit": {
    "id": "extra-spirit",
    "name": "Extra Spirit",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+10 Poder Espiritual.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1"
    ]
  },
  "golden-goose-egg": {
    "id": "golden-goose-egg",
    "name": "Golden Goose Egg",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Activo",
    "description": "-12% Penalización de Daño · +1 m Velocidad de Sprint · +1 Regeneración Fuera de Combate — Incuba el huevo, ganando almas y beneficios permanentes. El valor del huevo crece cuanto más tiempo lo conservas. Obtén una mejora permanente por cada 80 almas acumuladas al nacer.",
    "tags": [
      "espíritu",
      "activo",
      "tier-1",
      "economía",
      "daño",
      "movilidad"
    ]
  },
  "mystic-burst": {
    "id": "mystic-burst",
    "name": "Mystic Burst",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "Se carga con el tiempo con Daño Espiritual adicional, lo que hace que las habilidades que infligen más de 80 de daño causen daño adicional.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1",
      "daño"
    ]
  },
  "mystic-expansion": {
    "id": "mystic-expansion",
    "name": "Mystic Expansion",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "Imbuye una habilidad para aumentar su alcance y radio de efecto.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1"
    ]
  },
  "mystic-regeneration": {
    "id": "mystic-regeneration",
    "name": "Mystic Regeneration",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "description": "+50 Salud Extra — Infligir Daño Espiritual a héroes enemigos te otorga regeneración adicional. Se acumula al infligir daño a diferentes héroes.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1",
      "curación",
      "daño"
    ]
  },
  "rusted-barrel": {
    "id": "rusted-barrel",
    "name": "Rusted Barrel",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Activo",
    "cooldown": "16s",
    "description": "+60 Salud Extra · +0,5 m Velocidad de Sprint — Apunta a un enemigo para reducir su Cadencia de Disparo y Resistencia a Balas.",
    "tags": [
      "espíritu",
      "activo",
      "tier-1",
      "resistencia",
      "cadencia",
      "movilidad"
    ]
  },
  "spirit-strike": {
    "id": "spirit-strike",
    "name": "Spirit Strike",
    "category": "spirit",
    "tier": 1,
    "cost": 800,
    "type": "Pasivo",
    "cooldown": "8s",
    "description": "Cuando realizas un ataque cuerpo a cuerpo ligero o pesado contra un héroe, inflige Daño Espiritual adicional con el ataque y reduce la Resistencia Espíritu del objetivo. El enfriamiento es 2 veces más largo para los golpes ligeros cuerpo a cuerpo.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-1",
      "resistencia",
      "enfriamiento",
      "daño",
      "melee"
    ]
  },
  "arcane-surge": {
    "id": "arcane-surge",
    "name": "Arcane Surge",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+1 Estamina · +12% Recuperación de Estamina — Después de Dash-Jump, la siguiente habilidad que uses dentro de 7 segundos tendrá rango, duración y Poder Espiritual adicionales.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2"
    ]
  },
  "bullet-resist-shredder": {
    "id": "bullet-resist-shredder",
    "name": "Bullet Resist Shredder",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+9% Resistencia a Balas · +9% Daño de Arma — Reduce la Resistencia a Balas de los enemigos cuando infliges Daño Espiritual.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "resistencia",
      "daño"
    ]
  },
  "cold-front": {
    "id": "cold-front",
    "name": "Cold Front",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "25s",
    "description": "+6% Resistencia Espiritual — Libera una explosión de hielo en expansión que inflige Daño Espiritual y ralentiza a los objetivos que golpea.",
    "tags": [
      "espíritu",
      "activo",
      "tier-2",
      "ralentización",
      "resistencia",
      "daño"
    ]
  },
  "compress-cooldown": {
    "id": "compress-cooldown",
    "name": "Compress Cooldown",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "Imbuye una habilidad para reducir su enfriamiento.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "enfriamiento"
    ]
  },
  "duration-extender": {
    "id": "duration-extender",
    "name": "Duration Extender",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "Imbuye la capacidad de aumentar su duración.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2"
    ]
  },
  "improved-spirit": {
    "id": "improved-spirit",
    "name": "Improved Spirit",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+18 Poder Espiritual · +1,5 Regeneración Fuera de Combate.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2"
    ]
  },
  "mystic-slow": {
    "id": "mystic-slow",
    "name": "Mystic Slow",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+50 Salud Extra · +0,75 m Velocidad de Sprint — Cuando el objetivo recibe Daño Espiritual, su Velocidad de Movimiento se reduce.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "daño",
      "movilidad"
    ]
  },
  "mystic-vulnerability": {
    "id": "mystic-vulnerability",
    "name": "Mystic Vulnerability",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+8% Resistencia Espiritual — Cuando un enemigo sufre Daño Espiritual, su Resistencia Espíritu se reduce.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "resistencia",
      "daño"
    ]
  },
  "quicksilver-reload": {
    "id": "quicksilver-reload",
    "name": "Quicksilver Reload",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "Tu habilidad imbuida se carga con el tiempo con Daño Espiritual adicional, Cadencia de Disparo adicional y recarga balas cuando se usa.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "cadencia",
      "daño"
    ]
  },
  "slowing-hex": {
    "id": "slowing-hex",
    "name": "Slowing Hex",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "29s",
    "description": "+0,5 m Velocidad de Sprint — Ralentiza el movimiento del objetivo enemigo. También silencia sus elementos y habilidades basados ​​en movimiento. Aumenta la gravedad del objetivo. No afecta el uso de resistencia del objetivo.",
    "tags": [
      "espíritu",
      "activo",
      "tier-2",
      "ralentización",
      "control",
      "movilidad"
    ]
  },
  "spirit-sap": {
    "id": "spirit-sap",
    "name": "Spirit Sap",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Activo",
    "cooldown": "22s",
    "description": "+50 Salud Extra — Apunta a un enemigo para reducir su Resistencia Espíritu y su Poder Espiritual.",
    "tags": [
      "espíritu",
      "activo",
      "tier-2",
      "resistencia"
    ]
  },
  "suppressor": {
    "id": "suppressor",
    "name": "Suppressor",
    "category": "spirit",
    "tier": 2,
    "cost": 1600,
    "type": "Pasivo",
    "description": "+6 Poder Espiritual · +8% Resistencia a Balas — Cuando infliges Daño Espiritual a los enemigos, también reduces su Cadencia de Disparo.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-2",
      "resistencia",
      "cadencia",
      "daño"
    ]
  },
  "decay": {
    "id": "decay",
    "name": "Decay",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "30s",
    "description": "+8 Poder Espiritual · +65 Salud Extra — Inflige daño a lo largo del tiempo a un objetivo, infligiendo daño según su salud actual. El daño de Decay no es letal y no aplica efectos de elementos.",
    "tags": [
      "espíritu",
      "activo",
      "tier-3",
      "daño"
    ]
  },
  "disarming-hex": {
    "id": "disarming-hex",
    "name": "Disarming Hex",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "16s",
    "description": "+75 Salud Extra · +0,75 m Velocidad de Sprint — Desarma al objetivo enemigo y reduce su Resistencia a Balas.",
    "tags": [
      "espíritu",
      "activo",
      "tier-3",
      "control",
      "resistencia",
      "movilidad"
    ]
  },
  "greater-expansion": {
    "id": "greater-expansion",
    "name": "Greater Expansion",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+10% Resistencia Espiritual — Aumenta el alcance y el radio de efecto de tus habilidades y ítems.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "resistencia"
    ]
  },
  "knockdown": {
    "id": "knockdown",
    "name": "Knockdown",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "35s",
    "description": "+75 Salud Extra · +5% Alcance de Habilidades — Aplica un aturdimiento después de 2 s. La duración del aturdimiento aumenta contra objetivos en el aire. Aumenta la gravedad del objetivo mientras dure el aturdimiento.",
    "tags": [
      "espíritu",
      "activo",
      "tier-3",
      "control"
    ]
  },
  "radiant-regeneration": {
    "id": "radiant-regeneration",
    "name": "Radiant Regeneration",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "6s",
    "description": "+90 Salud Extra — Infligir Daño Espiritual a héroes enemigos te otorga regeneración adicional. Se acumula al infligir daño a diferentes héroes.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "curación",
      "daño"
    ]
  },
  "rapid-recharge": {
    "id": "rapid-recharge",
    "name": "Rapid Recharge",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+2 Cargas de Habilidad Extra · +30% Menos Tiempo Entre Cargas · +14% Reducción de Enfriamiento para Habilidades con Cargas · +14 Poder Espiritual Extra para Habilidades con Cargas.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "enfriamiento"
    ]
  },
  "silence-wave": {
    "id": "silence-wave",
    "name": "Silence Wave",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Activo",
    "cooldown": "42s",
    "description": "+90 Salud Extra — Lanza un proyectil en expansión que silencia a los enemigos durante un breve período y causa daño de impacto. El silencio no interrumpe las habilidades de canalización.",
    "tags": [
      "espíritu",
      "activo",
      "tier-3",
      "control",
      "daño"
    ]
  },
  "spirit-snatch": {
    "id": "spirit-snatch",
    "name": "Spirit Snatch",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "6s",
    "description": "+7% Daño Cuerpo a Cuerpo · +75 Salud Extra — Cuando realizas un ataque cuerpo a cuerpo ligero o pesado contra un héroe, el ataque causa Daño Espiritual adicional y roba Resistencia Espíritu y Poder Espiritual. Los efectos se reducen en un 30% para los golpes ligeros cuerpo a cuerpo.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "superior-cooldown": {
    "id": "superior-cooldown",
    "name": "Superior Cooldown",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+4 Regeneración Fuera de Combate — Reduce el enfriamiento de tus habilidades.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "enfriamiento"
    ]
  },
  "superior-duration": {
    "id": "superior-duration",
    "name": "Superior Duration",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+8% Resistencia a Balas — Aumenta la duración de tus habilidades y ítems.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "resistencia"
    ]
  },
  "surge-of-power": {
    "id": "surge-of-power",
    "name": "Surge of Power",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "14s",
    "description": "Imbuye una habilidad con Poder Espiritual permanente. Cuando se usa esa habilidad, obtienes Velocidad de Movimiento adicional y mantienes la velocidad máxima mientras atacas.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "movilidad"
    ]
  },
  "tankbuster": {
    "id": "tankbuster",
    "name": "Tankbuster",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "description": "+50 Salud Extra — Se carga con el tiempo con Daño Espiritual adicional, lo que hace que las habilidades que infligen más de 165 de daño causen daño adicional. Ignora la resistencia del espíritu.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "resistencia",
      "daño"
    ]
  },
  "torment-pulse": {
    "id": "torment-pulse",
    "name": "Torment Pulse",
    "category": "spirit",
    "tier": 3,
    "cost": 3200,
    "type": "Pasivo",
    "cooldown": "1.4s",
    "description": "+100 Salud Extra · +22% Resistencia Cuerpo a Cuerpo — Periódicamente inflige Daño Espiritual a los dos enemigos más cercanos.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-3",
      "resistencia",
      "daño",
      "melee"
    ]
  },
  "arctic-blast": {
    "id": "arctic-blast",
    "name": "Arctic Blast",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "24s",
    "description": "+10% Resistencia Espiritual — Libera una explosión de hielo en expansión que inflige Daño Espiritual, congela y luego ralentiza a los objetivos que golpea. Los objetivos ralentizados tienen congelada su regeneración de resistencia.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "ralentización",
      "resistencia",
      "daño"
    ]
  },
  "boundless-spirit": {
    "id": "boundless-spirit",
    "name": "Boundless Spirit",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+15% Poder Espiritual · +30 Poder Espiritual · +75 Salud Extra · +4 Regeneración Fuera de Combate.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4"
    ]
  },
  "cursed-relic": {
    "id": "cursed-relic",
    "name": "Cursed Relic",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "55s",
    "description": "Maldice a un enemigo: interrumpe, silencia, desarma e impide el uso de ítems. Elimina todos los buffs que no sean de ultimate. Tu propio daño se reduce mientras dure.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "control",
      "daño"
    ]
  },
  "echo-shard": {
    "id": "echo-shard",
    "name": "Echo Shard",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "30s",
    "description": "+5% Resistencia Espiritual · +5% Resistencia a Balas — Restablece el enfriamiento de la habilidad imbuida no ultimate. El enfriamiento de este ítem aumenta con el enfriamiento de la habilidad imbuida.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "resistencia",
      "enfriamiento"
    ]
  },
  "escalating-exposure": {
    "id": "escalating-exposure",
    "name": "Escalating Exposure",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "0.7s",
    "description": "-8% Resistencia Espiritual al Recibir Daño Espiritual · +17% Resistencia Espiritual — Infligir Daño Espiritual aplica un amplificador espiritual acumulable que aumenta el Daño Espiritual al objetivo.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "ethereal-shift": {
    "id": "ethereal-shift",
    "name": "Ethereal Shift",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "description": "Entra instantáneamente en un estado vacío y te vuelves invulnerable por un breve período.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4"
    ]
  },
  "focus-lens": {
    "id": "focus-lens",
    "name": "Focus Lens",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "40s",
    "description": "+10% Cadencia de Disparo — Apunta a un enemigo para silenciarlo. Una parte de todo el daño infligido durante el silencio se aplica al objetivo cuando el silencio desaparece.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "control",
      "cadencia",
      "daño"
    ]
  },
  "lightning-scroll": {
    "id": "lightning-scroll",
    "name": "Lightning Scroll",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "-24% Velocidad de Movimiento al Recibir Daño Espiritual · +50 Salud Extra · +0,75 m Velocidad de Sprint — El daño de tu habilidad máxima aplica un aturdimiento y causa Daño Espiritual adicional después de un breve retraso.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "control",
      "daño",
      "movilidad"
    ]
  },
  "magic-carpet": {
    "id": "magic-carpet",
    "name": "Magic Carpet",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "32s",
    "description": "+15% Duración de Habilidades · +125 Salud Extra · +14 Poder Espiritual · -15% Escala de Gravedad · +25% Control Aéreo — Invoca una alfombra mágica que te hará volar. Mientras vuelas eres inmune a las ralentizaciones y al realizar cualquier acción se descartará la alfombra. No se pueden usar habilidades mientras se invoca la alfombra.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "ralentización"
    ]
  },
  "mercurial-magnum": {
    "id": "mercurial-magnum",
    "name": "Mercurial Magnum",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+20% Munición Máxima · +7 Poder Espiritual — Tu habilidad imbuida se carga con el tiempo con Daño Espiritual adicional, Cadencia de Disparo adicional y recarga balas cuando se usa. Hasta tu próxima recarga, tus balas infligen Daño Espiritual adicional según tu Poder Espiritual.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "cadencia",
      "daño"
    ]
  },
  "mystic-reverb": {
    "id": "mystic-reverb",
    "name": "Mystic Reverb",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "cooldown": "6.25s",
    "description": "+8% Robo de Vida Espiritual — Imbuye una habilidad con Lifesteal y aplica ralentización en un objetivo golpeado e inflige un porcentaje adicional del daño infligido a los enemigos alrededor del objetivo después de un breve retraso.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "robo-de-vida",
      "ralentización",
      "daño"
    ]
  },
  "refresher": {
    "id": "refresher",
    "name": "Refresher",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "300s",
    "description": "Restablece el enfriamiento de todas tus habilidades y restaura todas tus cargas.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "curación",
      "enfriamiento"
    ]
  },
  "scourge": {
    "id": "scourge",
    "name": "Scourge",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "35s",
    "description": "+100 Salud Extra — Aplica Resistencia Espíritu, resistencia a desventajas y un aura en un objetivo amistoso que inflige daño a los enemigos proporcionalmente a su Salud Máxima. Se reducen las desventajas existentes en el objetivo. Puede ser autolanzable.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "resistencia",
      "daño"
    ]
  },
  "spirit-burn": {
    "id": "spirit-burn",
    "name": "Spirit Burn",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+6% Alcance de Habilidades — Infligir un Daño Espiritual significativo a un enemigo en 5 segundos provoca una explosión que causa daño y quema a ese enemigo. Mientras arden, los enemigos sufren daño con el tiempo y reciben una curación reducida. El enfriamiento es por enemigo, por lo que cada objetivo solo puede quemarse una vez por enfriamiento. Inflige la mitad de daño a los que no son héroes.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "curación",
      "enfriamiento",
      "daño"
    ]
  },
  "transcendent-cooldown": {
    "id": "transcendent-cooldown",
    "name": "Transcendent Cooldown",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Pasivo",
    "description": "+4 Regeneración Fuera de Combate — Reduce el enfriamiento de tus habilidades y ítems.",
    "tags": [
      "espíritu",
      "pasivo",
      "tier-4",
      "enfriamiento"
    ]
  },
  "vortex-web": {
    "id": "vortex-web",
    "name": "Vortex Web",
    "category": "spirit",
    "tier": 4,
    "cost": 6400,
    "type": "Activo",
    "cooldown": "42s",
    "description": "+8% Alcance de Habilidades · +0,75 m Velocidad de Sprint — Lanza una granada de vacío, atrae a todos los enemigos a un área pequeña y aplica Maleficio de ralentización. lanzamiento alternativo a la unidad objetivo directamente.",
    "tags": [
      "espíritu",
      "activo",
      "tier-4",
      "ralentización",
      "control",
      "movilidad"
    ]
  },
  "frostbite-charm": {
    "id": "frostbite-charm",
    "name": "Frostbite Charm",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "10s",
    "description": "La habilidad imbuida tiene su enfriamiento reducido y gana Poder Espiritual. Cuando la habilidad causa daño, congela al objetivo y aplica daño adicional. El enfriamiento es por objetivo.",
    "tags": [
      "espíritu",
      "activo",
      "legendario",
      "enfriamiento",
      "daño"
    ]
  },
  "mystic-conduit": {
    "id": "mystic-conduit",
    "name": "Mystic Conduit",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "cooldown": "25s",
    "description": "Proporciona a ti y a tus aliados una poderosa aura centrada en el espíritu. Tiene valores reducidos en los aliados.",
    "tags": [
      "espíritu",
      "pasivo",
      "legendario"
    ]
  },
  "mystical-piano": {
    "id": "mystical-piano",
    "name": "Mystical Piano",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "23s",
    "description": "Después de un breve retraso, los enemigos en el área objetivo quedarán aturdidos y perderán su Estamina. Después del aturdimiento quedarán desorientados.",
    "tags": [
      "espíritu",
      "activo",
      "legendario",
      "control"
    ]
  },
  "omnicharge-signet": {
    "id": "omnicharge-signet",
    "name": "Omnicharge Signet",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Pasivo",
    "description": "+70% Menos Tiempo Entre Cargas · +30% Reducción de Enfriamiento para Habilidades con Cargas · +50 Poder Espiritual Extra para Habilidades con Cargas — Imbuye cualquier habilidad activa que no sea ultimate con cargas de habilidad adicionales. Las habilidades ya cargadas reciben más cargos de bonificación.",
    "tags": [
      "espíritu",
      "pasivo",
      "legendario",
      "enfriamiento"
    ]
  },
  "prism-blast": {
    "id": "prism-blast",
    "name": "Prism Blast",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "40s",
    "description": "Entras en un estado de vacío y te vuelves inalcanzable e invencible durante un breve período, durante el cual los láseres explotan y giran a tu alrededor.",
    "tags": [
      "espíritu",
      "activo",
      "legendario"
    ]
  },
  "shrink-ray": {
    "id": "shrink-ray",
    "name": "Shrink Ray",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "30s",
    "description": "Reduce el tamaño del modelo y otorga Velocidad de Movimiento al objetivo. Permite el uso de túneles en este modo. Puede ser autolanzable.",
    "tags": [
      "espíritu",
      "activo",
      "legendario",
      "movilidad"
    ]
  },
  "unstable-concoction": {
    "id": "unstable-concoction",
    "name": "Unstable Concoction",
    "category": "spirit",
    "tier": 5,
    "cost": 9999,
    "type": "Activo",
    "cooldown": "25s",
    "description": "Consume un brebaje que te otorga Imparable y mayor velocidad, salud, espíritu y Daño de Arma. Después de un breve período, mueres y explotas, aturdiendo a los enemigos cercanos e infligiendo daño según tu Salud Máxima. Morir de esta manera reduce el tiempo de reaparición en un 50%.",
    "tags": [
      "espíritu",
      "activo",
      "legendario",
      "control",
      "daño"
    ]
  }
};
