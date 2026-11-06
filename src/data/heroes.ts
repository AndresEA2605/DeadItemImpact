import { DeadlockHero } from '../types/deadlock';

// Datos actualizados el 5 de noviembre de 2026.
// Fuente: deadlock.wiki (parche de juego del 4 de noviembre de 2026).
export const DEADLOCK_HEROES: DeadlockHero[] = [
  {
    "id": "abrams",
    "name": "Abrams",
    "title": "El Matón Imparable",
    "role": "Brawler",
    "difficulty": "Fácil",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/abrams.png",
    "description": "Abrams es un personaje duro y contundente que se centra en enfrentarse a los enemigos en combate cuerpo a cuerpo. Abrams es un gigante en el campo de batalla, aprovecha el poder oscuro de su Tomo para extraer vida de los enemigos cercanos y utiliza su resiliencia infernal para eliminar el daño que recibe.",
    "playstyleOverview": "Luchador de corto alcance: gana intercambios con sustain y presión constante. Entra cuando el enemigo ya haya gastado su control principal. Su kit gira en torno a Siphon Life y Shoulder Charge, con Seismic Impact como herramienta decisiva.",
    "stats": {
      "dps": 54,
      "bulletDamage": 3.78,
      "magazineSize": 9,
      "fireRate": "1.587 rps",
      "maxHealth": 800,
      "healthRegen": "1.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.4 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Siphon Life",
        "type": "Activa",
        "cooldown": "42s",
        "description": "Drena la salud de los enemigos cercanos, lo que inflige Daño Espiritual con el tiempo y cura una parte del daño infligido.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "2",
        "name": "Shoulder Charge",
        "type": "Activa",
        "cooldown": "33s",
        "description": "Carga hacia adelante, arrastrando a los enemigos que golpeas.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Infernal Resilience",
        "type": "Pasiva",
        "description": "Obtén atributos defensivos adicionales.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Seismic Impact",
        "type": "Activa",
        "cooldown": "215s",
        "description": "Salta alto en el aire antes de estrellarte contra el suelo, causando Daño Espiritual y aturdiendo.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Abrams desde el primer intercambio.",
          "countersAbility": "Siphon Life"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Abrams por acumular vida y regeneración.",
          "countersAbility": "Siphon Life"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Abrams.",
          "countersAbility": "Siphon Life"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Abrams quiere matarte.",
          "countersAbility": "Siphon Life"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Abrams, incluidos control y daño prolongado.",
          "countersAbility": "Siphon Life"
        }
      ],
      "heroCounters": [
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Abrams: su ventana de daño corta y su baja salud le deja expuesto a que Abrams pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Abrams: sus casteos largos y su poca salud le deja expuesto a que Abrams pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Abrams: sus casteos largos y su poca salud le deja expuesto a que Abrams pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Abrams, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Abrams, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "grey-talon",
          "advantage": "Débil Contra",
          "reason": "Grey Talon puede castigar desde lejos antes de que se acerque mejor que Abrams, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Siphon Life para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Abrams pierde mucho valor cuando lo flanquean.",
        "Guarda Shoulder Charge para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Seismic Impact pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Siphon Life.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Siphon Life — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Infernal Resilience — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Shoulder Charge — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Seismic Impact siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Siphon Life → Shoulder Charge → básicos → Seismic Impact",
          "explanation": "Abre con Siphon Life para fijar o exponer al objetivo, sigue con Shoulder Charge y usa Seismic Impact cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Shoulder Charge → Siphon Life → Seismic Impact",
          "explanation": "Fuerza la respuesta con Shoulder Charge, encadena Siphon Life y cierra con Seismic Impact. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Seismic Impact → Shoulder Charge",
          "explanation": "Usa Seismic Impact para sobrevivir al primer control y Shoulder Charge para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "sprint-boots",
            "melee-lifesteal"
          ],
          "notes": "Aguanta la línea y tradea con sustain. No persigas kills que te alejen de tu carry."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "battle-vest",
            "bullet-resilience",
            "healbane",
            "fortitude"
          ],
          "notes": "Empieza a iniciar peleas cortas. Healbane también sirve para negar el sustain enemigo."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "siphon-bullets",
            "plated-armor",
            "juggernaut"
          ],
          "notes": "Tu trabajo es absorber cooldowns. Colossus convierte tu tamaño en control de zona."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "leech",
            "unstoppable",
            "cheat-death",
            "inhibitor"
          ],
          "notes": "Build de frontline completa: sé el último en morir y aplica reducción de daño y curación."
        }
      ]
    }
  },
  {
    "id": "apollo",
    "name": "Apollo",
    "title": "La Hoja de Ixia",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/apollo.png",
    "description": "Apollo es un héroe esgrimista de gran movilidad que ataca objetivos aislados con golpes de precisión. Como heredero del trono de Ixia, lucha en el Ritual para demostrar su habilidad y honrar su apellido.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Disengaging Sigil y Riposte, con Itani Lo Sahn como herramienta decisiva.",
    "stats": {
      "dps": 48.69,
      "bulletDamage": 18.5,
      "magazineSize": 15,
      "fireRate": "2.632 rps",
      "maxHealth": 770,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Disengaging Sigil",
        "type": "Activa",
        "cooldown": "12s",
        "description": "Dibuja una esfera de sigilo frente a ti y luego salta hacia atrás mientras explota, dañando y ralentizando a los enemigos atrapados en ella.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Riposte",
        "type": "Activa",
        "cooldown": "22s",
        "description": "Prepárate para desviar el próximo ataque entrante.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Flawless Advance",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Realiza una serie de estocadas en cualquier dirección, lanzando puñaladas penetrantes delante de ti.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Itani Lo Sahn",
        "type": "Activa",
        "cooldown": "145s",
        "description": "Carga y realiza un corte de largo alcance.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "No golpees cuerpo a cuerpo sin baitear el parry. Runed Gauntlets atraviesa la parada y castiga la reacción."
      ],
      "itemCounters": [
        {
          "itemId": "slowing-hex",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Ralentiza y silencia la movilidad de Apollo, impidiendo que entre o escape.",
          "countersAbility": "Disengaging Sigil"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Apollo y corta su movilidad o su escape.",
          "countersAbility": "Disengaging Sigil"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Apollo: apaga su ventana de daño o su escape.",
          "countersAbility": "Disengaging Sigil"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Apollo te elimine antes de reaccionar.",
          "countersAbility": "Disengaging Sigil"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Apollo y aumenta bajo el 50% de salud.",
          "countersAbility": "Disengaging Sigil"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Apollo: sus casteos largos y su poca salud le deja expuesto a que Apollo pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Apollo: sus casteos largos y su poca salud le deja expuesto a que Apollo pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Apollo: su escaso daño en duelos individuales le deja expuesto a que Apollo pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Apollo, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Apollo, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Apollo, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Disengaging Sigil para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Apollo pierde mucho valor cuando lo flanquean.",
        "Guarda Riposte para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Itani Lo Sahn pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Disengaging Sigil.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Flawless Advance — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Disengaging Sigil — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Riposte — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Itani Lo Sahn siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Disengaging Sigil → Riposte → básicos → Itani Lo Sahn",
          "explanation": "Abre con Disengaging Sigil para fijar o exponer al objetivo, sigue con Riposte y usa Itani Lo Sahn cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Riposte → Disengaging Sigil → Itani Lo Sahn",
          "explanation": "Fuerza la respuesta con Riposte, encadena Disengaging Sigil y cierra con Itani Lo Sahn. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Flawless Advance → Riposte",
          "explanation": "Usa Flawless Advance para sobrevivir al primer control y Riposte para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "restorative-shot"
          ],
          "notes": "Farmea lateralmente y busca objetivos con poca salud. No entres primero."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "burst-fire",
            "fleetfoot",
            "bullet-lifesteal",
            "kinetic-dash"
          ],
          "notes": "Tu ventana es después del control enemigo. Entra por el flanco y sal con vida."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "glass-cannon",
            "crippling-headshot",
            "silencer",
            "spiritual-overflow"
          ],
          "notes": "Cada entrada debe terminar en eliminación. Reduce resistencias antes de comprometerte."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "ricochet",
            "cheat-death"
          ],
          "notes": "Daño máximo con una red de seguridad. Cheat Death te da una segunda entrada."
        }
      ]
    }
  },
  {
    "id": "baba",
    "name": "Baba",
    "title": "La Bruja del Banquillo",
    "role": "Brawler",
    "difficulty": "Difícil",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/baba.png",
    "description": "Baba es una bruja hechicera y agotadora de espíritus que usa su banco de piernas largas para pelear en las primeras líneas del Ritual. Baba, que arroja té hirviendo, hilo maldito y migas de pan a partes iguales, es una fuerza cacareante a tener en cuenta.",
    "playstyleOverview": "Luchador de corto alcance: gana intercambios con sustain y presión constante. Entra cuando el enemigo ya haya gastado su control principal. Su kit gira en torno a Threadsap y Granny Long Legs, con Feed The Birds como herramienta decisiva.",
    "stats": {
      "dps": 28.39,
      "bulletDamage": 8.8,
      "magazineSize": 15,
      "fireRate": "3.226 rps",
      "maxHealth": 780,
      "healthRegen": "2.5/s",
      "bulletResist": "-7%",
      "spiritResist": "8%",
      "moveSpeed": "6.5 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Threadsap",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Teje un hilo desaliñado que sigue tu punto de mira antes de irrumpir en su camino, causando Daño Espiritual y robando espíritu enemigo, cuya efectividad ha aumentado para Baba.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Granny Long Legs",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Las piernas de tu banco se extienden, otorgando Velocidad de Movimiento adicional, saltos más altos, resistencia a desventajas y resistencia cuerpo a cuerpo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Baba's Brew",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Prepara una taza de té que aplica un efecto mágico en un área cuando se lanza, cíclicamente a lo largo del tiempo en un orden aleatorio entre una barrera calmante, Silencio o una quemadura abrasadora que causa Daño Espiritual con el tiempo y reduce la Resistencia Espíritu.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Feed The Birds",
        "type": "Activa",
        "cooldown": "150s",
        "description": "Cubra los objetivos frente a usted con pan, agregando un apilamiento lento.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Dispel Magic y Debuff Reducer acortan las maldiciones; Counterspell puede negar la habilidad clave.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "debuff-reducer",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Baba, incluidos control y daño prolongado.",
          "countersAbility": "Threadsap"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Baba, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Threadsap"
        },
        {
          "itemId": "counterspell",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Puedes negar con parry la habilidad o ítem clave de Baba y curarte al hacerlo.",
          "countersAbility": "Threadsap"
        },
        {
          "itemId": "healbane",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Baba desde el primer intercambio.",
          "countersAbility": "Threadsap"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Baba por acumular vida y regeneración.",
          "countersAbility": "Threadsap"
        }
      ],
      "heroCounters": [
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Baba: su ventana de daño corta y su baja salud le deja expuesto a que Baba pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Baba: sus casteos largos y su poca salud le deja expuesto a que Baba pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Baba: sus casteos largos y su poca salud le deja expuesto a que Baba pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Baba, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Baba, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "grey-talon",
          "advantage": "Débil Contra",
          "reason": "Grey Talon puede castigar desde lejos antes de que se acerque mejor que Baba, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Threadsap para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Baba pierde mucho valor cuando lo flanquean.",
        "Guarda Granny Long Legs para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Feed The Birds pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Threadsap.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Threadsap — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Granny Long Legs — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Baba's Brew — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Feed The Birds siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Threadsap → Granny Long Legs → básicos → Feed The Birds",
          "explanation": "Abre con Threadsap para fijar o exponer al objetivo, sigue con Granny Long Legs y usa Feed The Birds cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Granny Long Legs → Threadsap → Feed The Birds",
          "explanation": "Fuerza la respuesta con Granny Long Legs, encadena Threadsap y cierra con Feed The Birds. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Baba's Brew → Granny Long Legs",
          "explanation": "Usa Baba's Brew para sobrevivir al primer control y Granny Long Legs para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "mystic-shot",
            "extra-spirit",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Mezcla poke de habilidad y arma; no dependas de una sola fuente de daño."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "opening-rounds",
            "spirit-shredder",
            "improved-spirit",
            "kinetic-dash"
          ],
          "notes": "Reduce resistencias y convierte tus básicos en daño espiritual sostenido."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "spiritual-overflow",
            "escalating-exposure",
            "burst-fire",
            "boundless-spirit"
          ],
          "notes": "Tu pico llega con el combo completo; busca peleas donde puedas castear dos rotaciones."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "mercurial-magnum",
            "leech",
            "refresher",
            "glass-cannon"
          ],
          "notes": "Build híbrida de cierre: daño de arma y espiritual con una segunda rotación."
        }
      ]
    }
  },
  {
    "id": "bebop",
    "name": "Bebop",
    "title": "El Gancho del Puerto",
    "role": "Iniciador",
    "difficulty": "Fácil",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/bebop.png",
    "description": "Bebop es un héroe aislante y disruptivo con un brazo extensible para atraer a cualquier otro héroe a su lado. Un golem educado y correcto, lucha tanto en deportes sangrientos como en el Ritual para encontrar una cura para su creador.",
    "playstyleOverview": "Iniciador: abre peleas con control y fija objetivos clave. Coordina con tu equipo antes de comprometerte. Su kit gira en torno a Exploding Uppercut y Sticky Bomb, con Hyper Beam como herramienta decisiva.",
    "stats": {
      "dps": 59.29,
      "bulletDamage": 4.98,
      "magazineSize": 66,
      "fireRate": "11.91 rps",
      "maxHealth": 880,
      "healthRegen": "2.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.45 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Exploding Uppercut",
        "type": "Activa",
        "cooldown": "22s",
        "description": "Inflige daño cuerpo a cuerpo a los enemigos cercanos y aplica retroceso.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      },
      {
        "slot": "2",
        "name": "Sticky Bomb",
        "type": "Activa",
        "cooldown": "18s",
        "description": "Coloca una bomba que explota después de un tiempo y causa Daño Espiritual a los enemigos cercanos.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      },
      {
        "slot": "3",
        "name": "Grapple Arm",
        "type": "Activa",
        "cooldown": "23s",
        "description": "Lanza una mano mecánica que tira del primer personaje que golpea y lo atrae.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Hyper Beam",
        "type": "Canalizada",
        "cooldown": "120s",
        "description": "Canaliza un poderoso torrente de energía que causa Daño Espiritual y se aplica lentamente.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Mantén una distancia lateral y guarda Reactive Barrier para el gancho; Unstoppable evita el follow-up.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Bebop quiere matarte.",
          "countersAbility": "Exploding Uppercut"
        },
        {
          "itemId": "unstoppable",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Niega aturdimientos, silencios, sueños, raíces y desarmes durante la ventana clave del combo de Bebop.",
          "countersAbility": "Exploding Uppercut"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Bebop.",
          "countersAbility": "Exploding Uppercut"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Bebop te elimine antes de reaccionar.",
          "countersAbility": "Exploding Uppercut"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Bebop y aumenta bajo el 50% de salud.",
          "countersAbility": "Exploding Uppercut"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Bebop: sus casteos largos y su poca salud le deja expuesto a que Bebop pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Bebop: sus casteos largos y su poca salud le deja expuesto a que Bebop pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Bebop: su escaso daño en duelos individuales le deja expuesto a que Bebop pueda iniciar el combate y fijar al objetivo."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Exploding Uppercut para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Bebop pierde mucho valor cuando lo flanquean.",
        "Guarda Sticky Bomb para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Hyper Beam pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Exploding Uppercut.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Sticky Bomb — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Exploding Uppercut — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Grapple Arm — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Hyper Beam siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Exploding Uppercut → Sticky Bomb → básicos → Hyper Beam",
          "explanation": "Abre con Exploding Uppercut para fijar o exponer al objetivo, sigue con Sticky Bomb y usa Hyper Beam cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Sticky Bomb → Exploding Uppercut → Hyper Beam",
          "explanation": "Fuerza la respuesta con Sticky Bomb, encadena Exploding Uppercut y cierra con Hyper Beam. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Grapple Arm → Sticky Bomb",
          "explanation": "Usa Grapple Arm para sobrevivir al primer control y Sticky Bomb para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-stamina",
            "sprint-boots",
            "healing-rite"
          ],
          "notes": "Farmea seguro y busca ángulos de engage. No inicies sin tu equipo detrás."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "kinetic-dash",
            "majestic-leap",
            "reactive-barrier",
            "bullet-resilience"
          ],
          "notes": "Tu ventana es el primer control. Entra, fija un objetivo y sal antes de que te enfoquen."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "phantom-strike",
            "unstoppable",
            "fortitude"
          ],
          "notes": "Inicia con cooldowns defensivos listos; Phantom Strike aísla al objetivo clave."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "cheat-death",
            "leech",
            "juggernaut",
            "indomitable"
          ],
          "notes": "Aguanta el contraataque después del engage. Indomitable limpia el primer control enemigo."
        }
      ]
    }
  },
  {
    "id": "billy",
    "name": "Billy",
    "title": "La Cabra de la Rabia",
    "role": "Brawler",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/billy.png",
    "description": "Billy es un héroe furioso y caótico con un gran murciélago con púas, una cabeza de cabra con cuernos y una furia desbordante contra todo y cualquier cosa. Lucha contra \"El Hombre\" y puede que incluso luche por un cambio positivo en el mundo; pero él siempre paga sus impuestos.",
    "playstyleOverview": "Luchador de corto alcance: gana intercambios con sustain y presión constante. Entra cuando el enemigo ya haya gastado su control principal. Su kit gira en torno a Bashdown y Rising Ram, con Chain Gang como herramienta decisiva.",
    "stats": {
      "dps": 74.12,
      "bulletDamage": 6.3,
      "magazineSize": 30,
      "fireRate": "11.77 rps",
      "maxHealth": 820,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Bashdown",
        "type": "Activa",
        "cooldown": "35s",
        "description": "Golpea tu bate contra el suelo, derribando a los enemigos y causando daño cuerpo a cuerpo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Rising Ram",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Carga de cabeza contra un enemigo y envíalo por el aire junto con Billy.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Blasted",
        "type": "Pasiva",
        "description": "Pasiva: los golpes cuerpo a cuerpo restauran la munición e infligen destrucción a la víctima durante 7 segundos.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Chain Gang",
        "type": "Activa",
        "cooldown": "175s",
        "description": "Encadena a los enemigos cercanos hacia ti.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "Close Quarters y Rebuttal castigan a los héroes de cuerpo a cuerpo; mantén el rango y golpea en el parry."
      ],
      "itemCounters": [
        {
          "itemId": "metal-skin",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Inmunidad a balas durante la ventana de ráfaga de Billy.",
          "countersAbility": "Bashdown"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Billy quiere matarte.",
          "countersAbility": "Bashdown"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Billy.",
          "countersAbility": "Bashdown"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Billy.",
          "countersAbility": "Bashdown"
        },
        {
          "itemId": "majestic-leap",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te saca del área y te da un escudo; rompe el setup de Billy.",
          "countersAbility": "Bashdown"
        }
      ],
      "heroCounters": [
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Billy: su ventana de daño corta y su baja salud le deja expuesto a que Billy pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Billy: sus casteos largos y su poca salud le deja expuesto a que Billy pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Billy: sus casteos largos y su poca salud le deja expuesto a que Billy pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Billy, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Billy, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "grey-talon",
          "advantage": "Débil Contra",
          "reason": "Grey Talon puede castigar desde lejos antes de que se acerque mejor que Billy, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Bashdown para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Billy pierde mucho valor cuando lo flanquean.",
        "Guarda Rising Ram para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Chain Gang pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Bashdown.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Bashdown — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Blasted — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Rising Ram — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Chain Gang siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Bashdown → Rising Ram → básicos → Chain Gang",
          "explanation": "Abre con Bashdown para fijar o exponer al objetivo, sigue con Rising Ram y usa Chain Gang cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Rising Ram → Bashdown → Chain Gang",
          "explanation": "Fuerza la respuesta con Rising Ram, encadena Bashdown y cierra con Chain Gang. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Chain Gang → Rising Ram",
          "explanation": "Usa Chain Gang para sobrevivir al primer control y Rising Ram para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "close-quarters",
            "extra-health",
            "melee-lifesteal",
            "sprint-boots"
          ],
          "notes": "Domina el cuerpo a cuerpo y usa tus golpes para sostenerte en línea."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "melee-charge",
            "bullet-lifesteal",
            "fleetfoot",
            "reactive-barrier"
          ],
          "notes": "Mezcla daño y resistencia. Busca intercambios cortos donde tus golpes peguen primero."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crushing-fists",
            "siphon-bullets",
            "colossus",
            "escalating-resilience"
          ],
          "notes": "Conviértete en amenaza de primera línea; tus golpes pesados deben castigar a los carries."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "runed-gauntlets",
            "leech",
            "juggernaut",
            "frenzy"
          ],
          "notes": "Cierre de bruiser: entra, golpea y aguanta. Frenzy se activa justo cuando te enfocan."
        }
      ]
    }
  },
  {
    "id": "calico",
    "name": "Calico",
    "title": "La Sombra de la Calle",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/calico.png",
    "description": "Calico es una sombría heroína asesina que acecha las calles en la forma de su gato antes de emboscar a los enemigos con garras y bombas. Ex cazadora de monstruos convertida en asesina a sueldo, ha decidido que matar a uno de los Patrones sería una excelente oportunidad de marketing.",
    "playstyleOverview": "Asesino de flanqueo: espera a que el enemigo use su control y elimina objetivos aislados. Evita ser el primero en entrar. Su kit gira en torno a Gloom Bombs y Leaping Slash, con Return to Shadows como herramienta decisiva.",
    "stats": {
      "dps": 78.86,
      "bulletDamage": 1.84,
      "magazineSize": 12,
      "fireRate": "4.762 rps",
      "maxHealth": 730,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.8 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Gloom Bombs",
        "type": "Activa",
        "cooldown": "14s",
        "description": "Lanza un grupo de bombas que detonan después de un retraso y causan Daño Espiritual.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Leaping Slash",
        "type": "Activa",
        "cooldown": "13s",
        "description": "Corre hacia adelante antes de cortar a todos los enemigos en un círculo, causando daño cuerpo a cuerpo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Ava",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Vuélvete a las sombras y posee a Ava.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Return to Shadows",
        "type": "Activa",
        "cooldown": "115s",
        "description": "Conviértete instantáneamente en las sombras, volviéndose inalcanzable, ganando Velocidad de Movimiento adicional e infligiendo Daño Espiritual.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "No persigas a ciegas: fuerza la revelación con Return Fire y castiga la ventana posterior con Knockdown o Cursed Relic.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "return-fire",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Devuelve daño automáticamente y castiga a Calico cuando intenta entrar o salir de la invisibilidad.",
          "countersAbility": "Gloom Bombs"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Calico y corta su movilidad o su escape.",
          "countersAbility": "Gloom Bombs"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Calico: apaga su ventana de daño o su escape.",
          "countersAbility": "Gloom Bombs"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Calico te elimine antes de reaccionar.",
          "countersAbility": "Gloom Bombs"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Calico y aumenta bajo el 50% de salud.",
          "countersAbility": "Gloom Bombs"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Calico: sus casteos largos y su poca salud le deja expuesto a que Calico pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Calico: sus casteos largos y su poca salud le deja expuesto a que Calico pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Calico: su escaso daño en duelos individuales le deja expuesto a que Calico pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Calico, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Calico, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "billy",
          "advantage": "Débil Contra",
          "reason": "Billy puede pelear en corto y ganar el intercambio de daño mejor que Calico, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Gloom Bombs para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Calico pierde mucho valor cuando lo flanquean.",
        "Guarda Leaping Slash para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Return to Shadows pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Gloom Bombs.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Gloom Bombs — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Leaping Slash — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Ava — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Return to Shadows siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Gloom Bombs → Leaping Slash → básicos → Return to Shadows",
          "explanation": "Abre con Gloom Bombs para fijar o exponer al objetivo, sigue con Leaping Slash y usa Return to Shadows cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Leaping Slash → Gloom Bombs → Return to Shadows",
          "explanation": "Fuerza la respuesta con Leaping Slash, encadena Gloom Bombs y cierra con Return to Shadows. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Ava → Leaping Slash",
          "explanation": "Usa Ava para sobrevivir al primer control y Leaping Slash para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "restorative-shot"
          ],
          "notes": "Farmea lateralmente y busca objetivos con poca salud. No entres primero."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "burst-fire",
            "fleetfoot",
            "bullet-lifesteal",
            "kinetic-dash"
          ],
          "notes": "Tu ventana es después del control enemigo. Entra por el flanco y sal con vida."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "glass-cannon",
            "crippling-headshot",
            "silencer",
            "spiritual-overflow"
          ],
          "notes": "Cada entrada debe terminar en eliminación. Reduce resistencias antes de comprometerte."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "ricochet",
            "cheat-death"
          ],
          "notes": "Daño máximo con una red de seguridad. Cheat Death te da una segunda entrada."
        }
      ]
    }
  },
  {
    "id": "celeste",
    "name": "Celeste",
    "title": "La Luz del Carnaval",
    "role": "Mago de Control",
    "difficulty": "Difícil",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/celeste.png",
    "description": "Celeste es una heroína deslumbrante y disruptiva, que flota sobre el campo de batalla y lanza sus habilidades con una brillante maravilla. Ella lucha en el Ritual para salvar el alma de su compañero de feria, con la esperanza de mantener en secreto su verdadera identidad como Unicornio de los cazadores furtivos de la Manzana Maldita.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Light Eater y Dazzling Trick, con Shining Wonder como herramienta decisiva.",
    "stats": {
      "dps": 31.03,
      "bulletDamage": 18,
      "magazineSize": 8,
      "fireRate": "1.724 rps",
      "maxHealth": 690,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.2 m/s",
      "stamina": 4
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Light Eater",
        "type": "Activa",
        "cooldown": "20s",
        "description": "Explota a los enemigos formando un cono frente a ti con un destello de luz.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Dazzling Trick",
        "type": "Activa",
        "cooldown": "38s",
        "description": "Rodéate de un prisma protector.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Radiant Daggers",
        "type": "Activa",
        "cooldown": "33s",
        "description": "Invoca un rayo de luz del cielo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Shining Wonder",
        "type": "Activa",
        "cooldown": "170s",
        "description": "Lanza un orbe de luz mortal que inflige Daño Espiritual y se aplica lento y reduce la distancia de carrera al impactar.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Decay y Cursed Relic reducen o eliminan barreras y buffs; sin eso, sus escudos absorben tu burst."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Celeste quiere matarte.",
          "countersAbility": "Light Eater"
        },
        {
          "itemId": "fortitude",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Regeneración fuerte tras salir de combate: recuperas la vida que Celeste intenta quitarte por poke.",
          "countersAbility": "Light Eater"
        },
        {
          "itemId": "healing-rite",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Regeneración y velocidad sostenidas para aguantar el poke de Celeste en línea.",
          "countersAbility": "Light Eater"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Celeste.",
          "countersAbility": "Light Eater"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Celeste.",
          "countersAbility": "Light Eater"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Celeste: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Celeste pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Celeste: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Celeste pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Celeste: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Celeste pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Celeste, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Celeste, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Celeste, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Light Eater para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Celeste pierde mucho valor cuando lo flanquean.",
        "Guarda Dazzling Trick para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Shining Wonder pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Light Eater.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Light Eater — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Radiant Daggers — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Dazzling Trick — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Shining Wonder siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Light Eater → Dazzling Trick → básicos → Shining Wonder",
          "explanation": "Abre con Light Eater para fijar o exponer al objetivo, sigue con Dazzling Trick y usa Shining Wonder cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Dazzling Trick → Light Eater → Shining Wonder",
          "explanation": "Fuerza la respuesta con Dazzling Trick, encadena Light Eater y cierra con Shining Wonder. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Radiant Daggers → Dazzling Trick",
          "explanation": "Usa Radiant Daggers para sobrevivir al primer control y Dazzling Trick para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "deadman-danny",
    "name": "Deadman Danny",
    "title": "El Cohete sin Freno",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/deadman-danny.png",
    "description": "Deadman Danny es un héroe atrevido y explosivo con un lanzacohetes, un cohete propulsor y una serie de habilidades adicionales con cohetes para volar a sus oponentes.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Strix Salvo y Chimera Mk1, con Close The Deal como herramienta decisiva.",
    "stats": {
      "dps": 60,
      "bulletDamage": 15,
      "magazineSize": 14,
      "fireRate": "4 rps",
      "maxHealth": 730,
      "healthRegen": "3.25/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.4 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Strix Salvo",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Lanza una salva de misiles espirituales que se clavan en el suelo a lo largo de una línea.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Chimera Mk1",
        "type": "Activa",
        "cooldown": "21s",
        "description": "-0.45 Mantenga presionado Saltar / manto para volar, acumulando calor.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Jettison Fuel",
        "type": "Activa",
        "cooldown": "22s",
        "description": "Rocía combustible que inflige daño al arma a lo largo del tiempo y destruye la Resistencia a Balas, generando una enorme explosión que inflige Daño Espiritual y te lanza hacia atrás.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Close The Deal",
        "type": "Activa",
        "cooldown": "135s",
        "description": "Agarra a un enemigo y hazle una demostración práctica, volando alto en el aire antes de estrellarte contra el suelo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Cheat Death o Ethereal Shift niegan la ejecución; úsalos cuando tu salud baje del umbral."
      ],
      "itemCounters": [
        {
          "itemId": "slowing-hex",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Ralentiza y silencia la movilidad de Deadman Danny, impidiendo que entre o escape.",
          "countersAbility": "Strix Salvo"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Deadman Danny y corta su movilidad o su escape.",
          "countersAbility": "Strix Salvo"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Deadman Danny: apaga su ventana de daño o su escape.",
          "countersAbility": "Strix Salvo"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Deadman Danny.",
          "countersAbility": "Strix Salvo"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Deadman Danny.",
          "countersAbility": "Strix Salvo"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Deadman Danny: sus casteos largos y su poca salud le deja expuesto a que Deadman Danny pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Deadman Danny: sus casteos largos y su poca salud le deja expuesto a que Deadman Danny pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Deadman Danny: su escaso daño en duelos individuales le deja expuesto a que Deadman Danny pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Deadman Danny, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Deadman Danny, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Deadman Danny, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Strix Salvo para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Deadman Danny pierde mucho valor cuando lo flanquean.",
        "Guarda Chimera Mk1 para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Close The Deal pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Strix Salvo.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Strix Salvo — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Jettison Fuel — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Chimera Mk1 — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Close The Deal siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Strix Salvo → Chimera Mk1 → básicos → Close The Deal",
          "explanation": "Abre con Strix Salvo para fijar o exponer al objetivo, sigue con Chimera Mk1 y usa Close The Deal cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Chimera Mk1 → Strix Salvo → Close The Deal",
          "explanation": "Fuerza la respuesta con Chimera Mk1, encadena Strix Salvo y cierra con Close The Deal. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Jettison Fuel → Chimera Mk1",
          "explanation": "Usa Jettison Fuel para sobrevivir al primer control y Chimera Mk1 para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "mystic-shot",
            "extra-spirit",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Mezcla poke de habilidad y arma; no dependas de una sola fuente de daño."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "opening-rounds",
            "spirit-shredder",
            "improved-spirit",
            "kinetic-dash"
          ],
          "notes": "Reduce resistencias y convierte tus básicos en daño espiritual sostenido."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "spiritual-overflow",
            "escalating-exposure",
            "burst-fire",
            "boundless-spirit"
          ],
          "notes": "Tu pico llega con el combo completo; busca peleas donde puedas castear dos rotaciones."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "mercurial-magnum",
            "leech",
            "refresher",
            "glass-cannon"
          ],
          "notes": "Build híbrida de cierre: daño de arma y espiritual con una segunda rotación."
        }
      ]
    }
  },
  {
    "id": "the-doorman",
    "name": "The Doorman",
    "title": "El Anfitrión del Umbral",
    "role": "Mago de Control",
    "difficulty": "Experto",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/the-doorman.png",
    "description": "El portero es un héroe apropiado, educado y divino que evoca portales conectados en las calles y envía a sus enemigos a una aterradora dimensión de bolsillo de su hotel favorito. Como un \"dios novato\", The Doorman está aquí simplemente para observar a la humanidad; aunque tal vez sea conveniente una visita a sus viejos amigos.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Call Bell y Doorway, con Hotel Guest como herramienta decisiva.",
    "stats": {
      "dps": 38.1,
      "bulletDamage": 24,
      "magazineSize": 8,
      "fireRate": "1.587 rps",
      "maxHealth": 755,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.9 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Call Bell",
        "type": "Activa",
        "cooldown": "18s",
        "description": "Lanza una campana de llamada que causa Daño Espiritual al impactar.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Doorway",
        "type": "Activa",
        "cooldown": "45s",
        "description": "Coloca dos puertas conectadas en el mundo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Luggage Cart",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Envía un carro de equipaje que inflige Daño Espiritual y arrastra a los héroes enemigos a lo largo de su camino.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Hotel Guest",
        "type": "Activa",
        "cooldown": "140s",
        "description": "Envía el cuerpo físico del objetivo como huésped del Hotel Baroness.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Unstoppable y Reactive Barrier evitan el desplazamiento forzado; juega pegado a muros para no quedar aislado.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Controla la visión y usa Warp Stone para no quedar atrapado en sus rotaciones.",
        "Evita pelear sin visión y obliga a The Doorman a gastar su habilidad principal antes de comprometerte."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que The Doorman quiere matarte.",
          "countersAbility": "Call Bell"
        },
        {
          "itemId": "unstoppable",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Niega aturdimientos, silencios, sueños, raíces y desarmes durante la ventana clave del combo de The Doorman.",
          "countersAbility": "Call Bell"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de The Doorman.",
          "countersAbility": "Call Bell"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de The Doorman.",
          "countersAbility": "Call Bell"
        },
        {
          "itemId": "majestic-leap",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te saca del área y te da un escudo; rompe el setup de The Doorman.",
          "countersAbility": "Call Bell"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante The Doorman: su necesidad de estar en rango corto para hacer daño le deja expuesto a que The Doorman pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante The Doorman: su necesidad de estar en rango corto para hacer daño le deja expuesto a que The Doorman pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante The Doorman: su necesidad de estar en rango corto para hacer daño le deja expuesto a que The Doorman pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que The Doorman, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que The Doorman, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que The Doorman, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Call Bell para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: The Doorman pierde mucho valor cuando lo flanquean.",
        "Guarda Doorway para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Hotel Guest pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Call Bell.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Call Bell — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Doorway — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Luggage Cart — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Hotel Guest siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Call Bell → Doorway → básicos → Hotel Guest",
          "explanation": "Abre con Call Bell para fijar o exponer al objetivo, sigue con Doorway y usa Hotel Guest cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Doorway → Call Bell → Hotel Guest",
          "explanation": "Fuerza la respuesta con Doorway, encadena Call Bell y cierra con Hotel Guest. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Luggage Cart → Doorway",
          "explanation": "Usa Luggage Cart para sobrevivir al primer control y Doorway para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "drifter",
    "name": "Drifter",
    "title": "El Cazador Nocturno",
    "role": "Asesino",
    "difficulty": "Experto",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/drifter.png",
    "description": "Drifter es un héroe sediento de sangre que acecha las calles de La Manzana Maldita. Puede cazar a sus víctimas únicamente con olor a sangre, marcando y destrozando objetivos aislados en una noche eterna.",
    "playstyleOverview": "Asesino de flanqueo: espera a que el enemigo use su control y elimina objetivos aislados. Evita ser el primero en entrar. Su kit gira en torno a Rend y Stalker's Mark, con Eternal Night como herramienta decisiva.",
    "stats": {
      "dps": 45.58,
      "bulletDamage": 20.1,
      "magazineSize": 12,
      "fireRate": "2.268 rps",
      "maxHealth": 755,
      "healthRegen": "3.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.9 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Rend",
        "type": "Activa",
        "cooldown": "16s",
        "description": "Desliza a los enemigos en un cono delante de ti y les inflige Daño Espiritual.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      },
      {
        "slot": "2",
        "name": "Stalker's Mark",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Envía una marca que sangra al primer objetivo que golpea, causando Daño Espiritual con el tiempo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Bloodscent",
        "type": "Pasiva",
        "description": "Los héroes aislados dejan un rastro a medida que se mueven y emiten los latidos de su corazón desde lejos.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Eternal Night",
        "type": "Activa",
        "cooldown": "145s",
        "description": "Rodea a los héroes enemigos cercanos en la oscuridad, limitando gravemente su visión de otras unidades.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "No persigas a ciegas: fuerza la revelación con Return Fire y castiga la ventana posterior con Knockdown o Cursed Relic.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Juega cerca de tu equipo y usa visión propia; Return Fire y Knockdown castigan la reaparición."
      ],
      "itemCounters": [
        {
          "itemId": "return-fire",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Devuelve daño automáticamente y castiga a Drifter cuando intenta entrar o salir de la invisibilidad.",
          "countersAbility": "Rend"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Drifter y corta su movilidad o su escape.",
          "countersAbility": "Rend"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Drifter: apaga su ventana de daño o su escape.",
          "countersAbility": "Rend"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Drifter, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Rend"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Drifter, incluidos control y daño prolongado.",
          "countersAbility": "Rend"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Drifter: sus casteos largos y su poca salud le deja expuesto a que Drifter pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Drifter: sus casteos largos y su poca salud le deja expuesto a que Drifter pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Drifter: su escaso daño en duelos individuales le deja expuesto a que Drifter pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Drifter, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Drifter, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "billy",
          "advantage": "Débil Contra",
          "reason": "Billy puede pelear en corto y ganar el intercambio de daño mejor que Drifter, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Rend para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Drifter pierde mucho valor cuando lo flanquean.",
        "Guarda Stalker's Mark para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Eternal Night pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Rend.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Stalker's Mark — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Rend — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Bloodscent — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Eternal Night siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Rend → Stalker's Mark → básicos → Eternal Night",
          "explanation": "Abre con Rend para fijar o exponer al objetivo, sigue con Stalker's Mark y usa Eternal Night cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Stalker's Mark → Rend → Eternal Night",
          "explanation": "Fuerza la respuesta con Stalker's Mark, encadena Rend y cierra con Eternal Night. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Eternal Night → Stalker's Mark",
          "explanation": "Usa Eternal Night para sobrevivir al primer control y Stalker's Mark para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "restorative-shot"
          ],
          "notes": "Farmea lateralmente y busca objetivos con poca salud. No entres primero."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "burst-fire",
            "fleetfoot",
            "bullet-lifesteal",
            "kinetic-dash"
          ],
          "notes": "Tu ventana es después del control enemigo. Entra por el flanco y sal con vida."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "glass-cannon",
            "crippling-headshot",
            "silencer",
            "spiritual-overflow"
          ],
          "notes": "Cada entrada debe terminar en eliminación. Reduce resistencias antes de comprometerte."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "ricochet",
            "cheat-death"
          ],
          "notes": "Daño máximo con una red de seguridad. Cheat Death te da una segunda entrada."
        }
      ]
    }
  },
  {
    "id": "dynamo",
    "name": "Dynamo",
    "title": "El Profesor del Vacío",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/dynamo.png",
    "description": "El Profesor Dynamo es un héroe amigable y solidario que se complace en curar a sus aliados, teletransportarlos fuera (o hacia) el peligro y transformarse en una singularidad en el momento justo. Un momento de descuido vaporizó el cuerpo del profesor, por lo que ahora busca un deseo de los Patronos para recuperar su forma física.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Kinetic Pulse y Quantum Entanglement, con Singularity como herramienta decisiva.",
    "stats": {
      "dps": 48,
      "bulletDamage": 12.6,
      "magazineSize": 20,
      "fireRate": "3.81 rps",
      "maxHealth": 880,
      "healthRegen": "1.75/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Kinetic Pulse",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Libera un pulso de energía que viaja por el suelo, causando Daño Espiritual y aplicando derribo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Quantum Entanglement",
        "type": "Activa",
        "cooldown": "20s",
        "description": "Vuélvete inalcanzable brevemente mientras te teletransportas a la ubicación objetivo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Rejuvenating Aurora",
        "type": "Canalizada",
        "cooldown": "48s",
        "description": "Mientras canalizas, restaura la salud con el tiempo para ti y tus aliados cercanos.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Singularity",
        "type": "Activa",
        "cooldown": "250s",
        "description": "Crea una singularidad en tus manos, infligiendo Daño Espiritual a lo largo del tiempo, aplicando aturdimiento y atrayendo a los enemigos cercanos.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "No pelees en pasillos ni agrupado: Ethereal Shift y Majestic Leap te dan una salida del combo de equipo."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Dynamo quiere matarte.",
          "countersAbility": "Kinetic Pulse"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Dynamo, incluidos control y daño prolongado.",
          "countersAbility": "Kinetic Pulse"
        },
        {
          "itemId": "unstoppable",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Niega aturdimientos, silencios, sueños, raíces y desarmes durante la ventana clave del combo de Dynamo.",
          "countersAbility": "Kinetic Pulse"
        },
        {
          "itemId": "healbane",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Dynamo desde el primer intercambio.",
          "countersAbility": "Kinetic Pulse"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Dynamo.",
          "countersAbility": "Kinetic Pulse"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Dynamo: su dependencia de invocaciones y enfriamientos le deja expuesto a que Dynamo pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Dynamo: su dependencia de invocaciones y enfriamientos le deja expuesto a que Dynamo pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Dynamo: su dependencia de invocaciones y enfriamientos le deja expuesto a que Dynamo pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Dynamo, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Dynamo, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Dynamo, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Kinetic Pulse para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Dynamo pierde mucho valor cuando lo flanquean.",
        "Guarda Quantum Entanglement para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Singularity pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Kinetic Pulse.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Kinetic Pulse — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Rejuvenating Aurora — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Quantum Entanglement — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Singularity siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Kinetic Pulse → Quantum Entanglement → básicos → Singularity",
          "explanation": "Abre con Kinetic Pulse para fijar o exponer al objetivo, sigue con Quantum Entanglement y usa Singularity cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Quantum Entanglement → Kinetic Pulse → Singularity",
          "explanation": "Fuerza la respuesta con Quantum Entanglement, encadena Kinetic Pulse y cierra con Singularity. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Rejuvenating Aurora → Quantum Entanglement",
          "explanation": "Usa Rejuvenating Aurora para sobrevivir al primer control y Quantum Entanglement para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "graves",
    "name": "Graves",
    "title": "La Necromante del Jarro",
    "role": "Mago de Control",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/graves.png",
    "description": "Graves es un héroe mortal e invocador con talento para desviar esencia vital en el campo de batalla. Invoca demonios feroces, cabezas muertas móviles y fisuras espirituales mientras lucha, robando el poder de sus enemigos, tanto vivos como muertos.",
    "playstyleOverview": "Invocador de zona: crea presión constante con invocaciones y controla espacios. Mantén tus invocaciones activas antes de pelear. Su kit gira en torno a Grasping Hands y Borrowed Decree, con Borrowed Decree como herramienta decisiva.",
    "stats": {
      "dps": 35.29,
      "bulletDamage": 3.6,
      "magazineSize": 40,
      "fireRate": "9.804 rps",
      "maxHealth": 730,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Jar of Dead",
        "type": "Pasiva",
        "description": "Pasivo: recoge la muerte cuando algo muera cerca y guárdalo en tu Jar of Dead.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "2",
        "name": "Grasping Hands",
        "type": "Activa",
        "cooldown": "34s",
        "description": "Descubre una línea de manos agarradoras, invocando a un Ghoul y dejando una grieta.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Essence Theft",
        "type": "Pasiva",
        "description": "Tu arma roba Daño de Arma y Resistencia Espíritu con el tiempo, hasta una cantidad máxima por objetivo.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Borrowed Decree",
        "type": "Activa",
        "cooldown": "140s",
        "description": "Innato: Las habilidades pueden convocar Ghouls que avanzan arrastrando los pies hacia la base enemiga, causando…",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Limpia invocaciones con daño en área (Ricochet, Tesla Bullets) antes de pelear contra el héroe.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "ricochet",
          "priority": "Esencial",
          "timing": "Late Game",
          "counterExplanation": "Limpia las invocaciones de Graves y aplica tus efectos de bala a varios objetivos.",
          "countersAbility": "Jar of Dead"
        },
        {
          "itemId": "tesla-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El daño en cadena elimina invocaciones y presiona a Graves cuando se esconde detrás de ellas.",
          "countersAbility": "Jar of Dead"
        },
        {
          "itemId": "alchemical-fire",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El área reduce Resistencia a Balas y limpia invocaciones; castiga la zona que crea Graves.",
          "countersAbility": "Jar of Dead"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Graves, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Jar of Dead"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Graves, incluidos control y daño prolongado.",
          "countersAbility": "Jar of Dead"
        }
      ],
      "heroCounters": [
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Graves: su escaso daño en duelos individuales le deja expuesto a que Graves pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "ivy",
          "advantage": "Fuerte Contra",
          "reason": "Ivy sufre ante Graves: su escaso daño en duelos individuales le deja expuesto a que Graves pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "kelvin",
          "advantage": "Fuerte Contra",
          "reason": "Kelvin sufre ante Graves: su escaso daño en duelos individuales le deja expuesto a que Graves pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Graves, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Graves, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "dynamo",
          "advantage": "Débil Contra",
          "reason": "Dynamo puede sostener a su equipo y negar la eliminación mejor que Graves, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Grasping Hands para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Graves pierde mucho valor cuando lo flanquean.",
        "Guarda Borrowed Decree para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Borrowed Decree pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Grasping Hands.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Grasping Hands — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Essence Theft — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Jar of Dead — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Borrowed Decree siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Grasping Hands → Borrowed Decree → básicos → Borrowed Decree",
          "explanation": "Abre con Grasping Hands para fijar o exponer al objetivo, sigue con Borrowed Decree y usa Borrowed Decree cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Borrowed Decree → Grasping Hands → Borrowed Decree",
          "explanation": "Fuerza la respuesta con Borrowed Decree, encadena Grasping Hands y cierra con Borrowed Decree. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Borrowed Decree → Borrowed Decree",
          "explanation": "Usa Borrowed Decree para sobrevivir al primer control y Borrowed Decree para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "grey-talon",
    "name": "Grey Talon",
    "title": "El Arquero del Bosque",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/grey-talon.png",
    "description": "Gray Talon es un héroe místico que empuña un arco y acosa a sus enemigos con flechas y espíritu desde larga distancia. Utiliza trampas y vuelos breves para mantener la distancia, y envía a su búho espiritual compañero para eliminar a los oponentes con poca salud.",
    "playstyleOverview": "Tirador de largo alcance: castiga desde ángulos seguros y controla objetivos con daño constante. Necesita visión y buen posicionamiento. Su kit gira en torno a Charged Shot y Rain of Arrows, con Guided Owl como herramienta decisiva.",
    "stats": {
      "dps": 39.18,
      "bulletDamage": 23.51,
      "magazineSize": 17,
      "fireRate": "1.667 rps",
      "maxHealth": 780,
      "healthRegen": "1.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.3 m/s",
      "stamina": 4
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Charged Shot",
        "type": "Activa",
        "cooldown": "17s",
        "description": "Carga un potente disparo que atraviesa a los enemigos.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "2",
        "name": "Rain of Arrows",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Te lanza alto en el aire, permitiéndote deslizarte lentamente.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "3",
        "name": "Spirit Snare",
        "type": "Activa",
        "cooldown": "34s",
        "description": "Tira una trampa que comienza a armarse.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Guided Owl",
        "type": "Activa",
        "cooldown": "125s",
        "description": "Después de 1,5 s de tiempo de lanzamiento, lanza un búho espiritual que controlas y que explota al impactar, dañando y aturdiendo a los enemigos.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Juega con coberturas y compra escudos temprano. No cruces líneas largas sin visión del tirador.",
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal.",
        "No camines por zonas sin visión. Dispel Magic y Warp Stone te sacan de la trampa y del follow-up.",
        "Cheat Death o Ethereal Shift niegan la ejecución; úsalos cuando tu salud baje del umbral."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Grey Talon quiere matarte.",
          "countersAbility": "Charged Shot"
        },
        {
          "itemId": "weapon-shielding",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Genera un escudo al recibir daño de arma importante, justo lo que necesita Grey Talon para ejecutarte.",
          "countersAbility": "Charged Shot"
        },
        {
          "itemId": "fortitude",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Regeneración fuerte tras salir de combate: recuperas la vida que Grey Talon intenta quitarte por poke.",
          "countersAbility": "Charged Shot"
        },
        {
          "itemId": "healing-rite",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Regeneración y velocidad sostenidas para aguantar el poke de Grey Talon en línea.",
          "countersAbility": "Charged Shot"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Grey Talon, incluidos control y daño prolongado.",
          "countersAbility": "Charged Shot"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Grey Talon: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Grey Talon pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Grey Talon: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Grey Talon pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Grey Talon: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Grey Talon pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Grey Talon, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Grey Talon, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Grey Talon, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Charged Shot para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Grey Talon pierde mucho valor cuando lo flanquean.",
        "Guarda Rain of Arrows para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Guided Owl pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Charged Shot.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Charged Shot — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Rain of Arrows — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Spirit Snare — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Guided Owl siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Charged Shot → Rain of Arrows → básicos → Guided Owl",
          "explanation": "Abre con Charged Shot para fijar o exponer al objetivo, sigue con Rain of Arrows y usa Guided Owl cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Rain of Arrows → Charged Shot → Guided Owl",
          "explanation": "Fuerza la respuesta con Rain of Arrows, encadena Charged Shot y cierra con Guided Owl. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Spirit Snare → Rain of Arrows",
          "explanation": "Usa Spirit Snare para sobrevivir al primer control y Rain of Arrows para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "headshot-booster"
          ],
          "notes": "Juega con coberturas y castiga sin exponerte. No cruces el río sin visión."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "long-range",
            "sharpshooter",
            "bullet-lifesteal",
            "fleetfoot"
          ],
          "notes": "Aumenta tu rango efectivo y mantén una ruta de escape lateral."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crippling-headshot",
            "glass-cannon",
            "spiritual-overflow",
            "titanic-magazine"
          ],
          "notes": "Cada disparo a la cabeza debe reducir resistencias; prioriza objetivos sin escudos."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "silencer",
            "cheat-death"
          ],
          "notes": "Cierre de tirador: daño máximo y una defensa de emergencia para los dive enemigos."
        }
      ]
    }
  },
  {
    "id": "haze",
    "name": "Haze",
    "title": "La Ejecutora Silenciosa",
    "role": "Asesino",
    "difficulty": "Fácil",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/haze.png",
    "description": "Haze es un héroe asesino sigiloso que elimina enemigos solitarios rápidamente. Al centrarse en objetivos únicos, puede utilizar múltiples herramientas y un par de subfusiles de disparo rápido para enviarlos a un descanso final.",
    "playstyleOverview": "Asesino de flanqueo: espera a que el enemigo use su control y elimina objetivos aislados. Evita ser el primero en entrar. Su kit gira en torno a Sleep Dagger y Smoke Bomb, con Bullet Dance como herramienta decisiva.",
    "stats": {
      "dps": 50.1,
      "bulletDamage": 5.26,
      "magazineSize": 25,
      "fireRate": "9.524 rps",
      "maxHealth": 730,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "8.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Sleep Dagger",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Lanza una daga que daña y duerme al objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Smoke Bomb",
        "type": "Activa",
        "cooldown": "33s",
        "description": "Desaparece de la vista, volviéndose invisible y ganando velocidad de carrera.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Fixation",
        "type": "Pasiva",
        "description": "Disparar a un objetivo aumenta el daño de bala en ese objetivo.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Bullet Dance",
        "type": "Activa",
        "cooldown": "165s",
        "description": "Entra en una ráfaga, disparando tu arma a los enemigos cercanos con perfecta precisión y daño de bala adicional.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "No persigas a ciegas: fuerza la revelación con Return Fire y castiga la ventana posterior con Knockdown o Cursed Relic.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Reactive Barrier se activa con el sueño; no gastes tus defensas antes de que empiece el combo.",
        "Presiónalo temprano y compra Metal Skin si depende de ráfagas de balas; no le regales peleas largas."
      ],
      "itemCounters": [
        {
          "itemId": "return-fire",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Devuelve daño automáticamente y castiga a Haze cuando intenta entrar o salir de la invisibilidad.",
          "countersAbility": "Sleep Dagger"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Haze y corta su movilidad o su escape.",
          "countersAbility": "Sleep Dagger"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Haze: apaga su ventana de daño o su escape.",
          "countersAbility": "Sleep Dagger"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Haze te elimine antes de reaccionar.",
          "countersAbility": "Sleep Dagger"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Haze y aumenta bajo el 50% de salud.",
          "countersAbility": "Sleep Dagger"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Haze: sus casteos largos y su poca salud le deja expuesto a que Haze pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Haze: sus casteos largos y su poca salud le deja expuesto a que Haze pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Haze: su escaso daño en duelos individuales le deja expuesto a que Haze pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Haze, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Haze, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "billy",
          "advantage": "Débil Contra",
          "reason": "Billy puede pelear en corto y ganar el intercambio de daño mejor que Haze, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Sleep Dagger para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Haze pierde mucho valor cuando lo flanquean.",
        "Guarda Smoke Bomb para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Bullet Dance pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Sleep Dagger.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Sleep Dagger — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Fixation — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Smoke Bomb — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Bullet Dance siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Sleep Dagger → Smoke Bomb → básicos → Bullet Dance",
          "explanation": "Abre con Sleep Dagger para fijar o exponer al objetivo, sigue con Smoke Bomb y usa Bullet Dance cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Smoke Bomb → Sleep Dagger → Bullet Dance",
          "explanation": "Fuerza la respuesta con Smoke Bomb, encadena Sleep Dagger y cierra con Bullet Dance. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Bullet Dance → Smoke Bomb",
          "explanation": "Usa Bullet Dance para sobrevivir al primer control y Smoke Bomb para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "holliday",
    "name": "Holliday",
    "title": "La Vaquera del Oeste",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/holliday.png",
    "description": "Holliday es un héroe excelente con puntería mortal y un lazo confiable. Utilizando de todo, desde pólvora hasta plataformas de rebote para preparar una pelea, ella confía en su puntería con su confiable revólver heredado para terminar el trabajo.",
    "playstyleOverview": "Tirador de largo alcance: castiga desde ángulos seguros y controla objetivos con daño constante. Necesita visión y buen posicionamiento. Su kit gira en torno a Powder Keg y Bounce Pad, con Spirit Lasso como herramienta decisiva.",
    "stats": {
      "dps": 41.69,
      "bulletDamage": 19.7,
      "magazineSize": 10,
      "fireRate": "2.116 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "8.2 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Powder Keg",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Lanza un barril que explota después de un retraso, causando Daño Espiritual, prendiendo fuego a los enemigos y aplicando derribos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Bounce Pad",
        "type": "Activa",
        "cooldown": "41s",
        "description": "Coloca una plataforma de rebote en el mundo que lanza a cualquier héroe.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Crackshot",
        "type": "Pasiva",
        "description": "Los disparos a la cabeza causan daño adicional y aplican una penalización de Velocidad de Movimiento que se desvanece.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Spirit Lasso",
        "type": "Activa",
        "cooldown": "130s",
        "description": "Lanza tu lazo, lo que inflige Daño Espiritual, tira y aturde.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "extra-health",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Holliday te elimine antes de reaccionar.",
          "countersAbility": "Powder Keg"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Holliday y aumenta bajo el 50% de salud.",
          "countersAbility": "Powder Keg"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Holliday y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Powder Keg"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Holliday.",
          "countersAbility": "Powder Keg"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Holliday.",
          "countersAbility": "Powder Keg"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Holliday: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Holliday pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Holliday: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Holliday pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Holliday: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Holliday pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Holliday, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Holliday, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Holliday, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Powder Keg para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Holliday pierde mucho valor cuando lo flanquean.",
        "Guarda Bounce Pad para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Spirit Lasso pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Powder Keg.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Crackshot — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Powder Keg — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Bounce Pad — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Spirit Lasso siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Powder Keg → Bounce Pad → básicos → Spirit Lasso",
          "explanation": "Abre con Powder Keg para fijar o exponer al objetivo, sigue con Bounce Pad y usa Spirit Lasso cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Bounce Pad → Powder Keg → Spirit Lasso",
          "explanation": "Fuerza la respuesta con Bounce Pad, encadena Powder Keg y cierra con Spirit Lasso. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Spirit Lasso → Bounce Pad",
          "explanation": "Usa Spirit Lasso para sobrevivir al primer control y Bounce Pad para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "headshot-booster"
          ],
          "notes": "Juega con coberturas y castiga sin exponerte. No cruces el río sin visión."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "long-range",
            "sharpshooter",
            "bullet-lifesteal",
            "fleetfoot"
          ],
          "notes": "Aumenta tu rango efectivo y mantén una ruta de escape lateral."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crippling-headshot",
            "glass-cannon",
            "spiritual-overflow",
            "titanic-magazine"
          ],
          "notes": "Cada disparo a la cabeza debe reducir resistencias; prioriza objetivos sin escudos."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "silencer",
            "cheat-death"
          ],
          "notes": "Cierre de tirador: daño máximo y una defensa de emergencia para los dive enemigos."
        }
      ]
    }
  },
  {
    "id": "infernus",
    "name": "Infernus",
    "title": "El Fuego de Ixia",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/infernus.png",
    "description": "Infernus es un ardiente héroe ixiano con una pistola literal y un poderoso control de las llamas que utiliza para mejorar su velocidad y encender a sus enemigos. Ahora, un simple camarero, Infernus está feliz de dejar atrás su turbulento pasado y pedir el deseo de salvar su bar.",
    "playstyleOverview": "Luchador de corto alcance: gana intercambios con sustain y presión constante. Entra cuando el enemigo ya haya gastado su control principal. Su kit gira en torno a Napalm y Flame Dash, con Concussive Combustion como herramienta decisiva.",
    "stats": {
      "dps": 52.38,
      "bulletDamage": 5.5,
      "magazineSize": 27,
      "fireRate": "9.524 rps",
      "maxHealth": 830,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Napalm",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Lanza una mezcla incendiaria que inflige Daño Espiritual, aplica lentitud y cubre los objetivos con napalm.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Flame Dash",
        "type": "Activa",
        "cooldown": "38s",
        "description": "Corre hacia adelante, ganando resistencia lenta mientras deja un rastro de llamas que causa Daño Espiritual con el tiempo.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "3",
        "name": "Afterburn",
        "type": "Pasiva",
        "description": "Los golpes de arma generan un efecto de quemazón que causa Daño Espiritual con el tiempo.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Concussive Combustion",
        "type": "Activa",
        "cooldown": "190s",
        "description": "Conviértete en una bomba viviente, que inflige Daño Espiritual y aturde a todos los enemigos cercanos después de un retraso.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa."
      ],
      "itemCounters": [
        {
          "itemId": "dispel-magic",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Infernus, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Napalm"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Infernus, incluidos control y daño prolongado.",
          "countersAbility": "Napalm"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Infernus y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Napalm"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Infernus.",
          "countersAbility": "Napalm"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Infernus.",
          "countersAbility": "Napalm"
        }
      ],
      "heroCounters": [
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Infernus: su ventana de daño corta y su baja salud le deja expuesto a que Infernus pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Infernus: sus casteos largos y su poca salud le deja expuesto a que Infernus pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Infernus: sus casteos largos y su poca salud le deja expuesto a que Infernus pueda pelear en corto y ganar el intercambio de daño."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Infernus, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Infernus, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        },
        {
          "heroId": "grey-talon",
          "advantage": "Débil Contra",
          "reason": "Grey Talon puede castigar desde lejos antes de que se acerque mejor que Infernus, sobre todo porque su necesidad de estar en rango corto para hacer daño limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Napalm para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Infernus pierde mucho valor cuando lo flanquean.",
        "Guarda Flame Dash para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Concussive Combustion pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Napalm.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Afterburn — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Napalm — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Flame Dash — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Concussive Combustion siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Napalm → Flame Dash → básicos → Concussive Combustion",
          "explanation": "Abre con Napalm para fijar o exponer al objetivo, sigue con Flame Dash y usa Concussive Combustion cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Flame Dash → Napalm → Concussive Combustion",
          "explanation": "Fuerza la respuesta con Flame Dash, encadena Napalm y cierra con Concussive Combustion. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Concussive Combustion → Flame Dash",
          "explanation": "Usa Concussive Combustion para sobrevivir al primer control y Flame Dash para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "ivy",
    "name": "Ivy",
    "title": "La Guardiana de Piedra",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/ivy.png",
    "description": "Ivy es una heroína gárgola confiable con potentes habilidades disruptivas y de apoyo para ayudar a sus aliados en el combate. Después de limpiar Spanish Harlem de un terrible sindicato criminal, Ivy planea usar el poder del Ritual para proteger a su familia adoptiva.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Entangling Thorns y Kudzu Connection, con Air Drop como herramienta decisiva.",
    "stats": {
      "dps": 60.54,
      "bulletDamage": 4.45,
      "magazineSize": 33,
      "fireRate": "13.61 rps",
      "maxHealth": 755,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 4
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Entangling Thorns",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Invoca un parche de espinas asfixiantes que daña y ralentiza a los enemigos en su radio.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Kudzu Connection",
        "type": "Activa",
        "cooldown": "37s",
        "description": "Conéctate con un aliado cercano para obtener bonificaciones, curación replicada e ignora la penalización de Velocidad de Movimiento mientras disparas.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "3",
        "name": "Stone Form",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Conviértete en piedra impermeable y choca contra el suelo, aturdiendo y dañando a los enemigos cercanos.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Air Drop",
        "type": "Activa",
        "cooldown": "100s",
        "description": "Coge un aliado y vuela con él.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Ivy desde el primer intercambio.",
          "countersAbility": "Entangling Thorns"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Ivy.",
          "countersAbility": "Entangling Thorns"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Ivy por acumular vida y regeneración.",
          "countersAbility": "Entangling Thorns"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Ivy quiere matarte.",
          "countersAbility": "Entangling Thorns"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Ivy, incluidos control y daño prolongado.",
          "countersAbility": "Entangling Thorns"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Ivy: su dependencia de invocaciones y enfriamientos le deja expuesto a que Ivy pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Ivy: su dependencia de invocaciones y enfriamientos le deja expuesto a que Ivy pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Ivy: su dependencia de invocaciones y enfriamientos le deja expuesto a que Ivy pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Ivy, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Ivy, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Ivy, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Entangling Thorns para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Ivy pierde mucho valor cuando lo flanquean.",
        "Guarda Kudzu Connection para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Air Drop pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Entangling Thorns.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Entangling Thorns — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Stone Form — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Kudzu Connection — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Air Drop siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Entangling Thorns → Kudzu Connection → básicos → Air Drop",
          "explanation": "Abre con Entangling Thorns para fijar o exponer al objetivo, sigue con Kudzu Connection y usa Air Drop cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Kudzu Connection → Entangling Thorns → Air Drop",
          "explanation": "Fuerza la respuesta con Kudzu Connection, encadena Entangling Thorns y cierra con Air Drop. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Stone Form → Kudzu Connection",
          "explanation": "Usa Stone Form para sobrevivir al primer control y Kudzu Connection para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "kelvin",
    "name": "Kelvin",
    "title": "El Explorador Helado",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/kelvin.png",
    "description": "Kelvin es un héroe solidario y congelado con un conjunto de habilidades de congelación para ralentizar a sus enemigos y curar a sus aliados. Se propone luchar en el Ritual para descubrir los secretos de su propia naturaleza no-muerta.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Frost Grenade y Ice Path, con Frozen Shelter como herramienta decisiva.",
    "stats": {
      "dps": 70.86,
      "bulletDamage": 18.6,
      "magazineSize": 14,
      "fireRate": "3.81 rps",
      "maxHealth": 880,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Frost Grenade",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Lanza una granada que explota en una nube de hielo helado que cura a los aliados y aplica Daño Espiritual y reducción de Velocidad de Movimiento a los enemigos.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "2",
        "name": "Ice Path",
        "type": "Activa",
        "cooldown": "50s",
        "description": "Kelvin crea un rastro flotante de hielo y nieve que le otorga bonificaciones de movimiento a él y a sus aliados.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Arctic Beam",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Dispara energía helada frente a ti, dañando objetivos y reduciendo progresivamente su movimiento y Cadencia de Disparo cuanto más tiempo mantengas el rayo sobre ellos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Frozen Shelter",
        "type": "Activa",
        "cooldown": "190s",
        "description": "Apunta a ti mismo o a un héroe para congelar el aire y crear una cúpula impenetrable a su alrededor.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Decay y Cursed Relic reducen o eliminan barreras y buffs; sin eso, sus escudos absorben tu burst.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Kelvin desde el primer intercambio.",
          "countersAbility": "Frost Grenade"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Kelvin.",
          "countersAbility": "Frost Grenade"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Kelvin por acumular vida y regeneración.",
          "countersAbility": "Frost Grenade"
        },
        {
          "itemId": "enduring-speed",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Reduce las ralentizaciones de Kelvin y mantiene tu Velocidad de Movimiento para kitearte.",
          "countersAbility": "Frost Grenade"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Kelvin, incluidos control y daño prolongado.",
          "countersAbility": "Frost Grenade"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Kelvin: su dependencia de invocaciones y enfriamientos le deja expuesto a que Kelvin pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Kelvin: su dependencia de invocaciones y enfriamientos le deja expuesto a que Kelvin pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Kelvin: su dependencia de invocaciones y enfriamientos le deja expuesto a que Kelvin pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Kelvin, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Kelvin, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Kelvin, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Frost Grenade para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Kelvin pierde mucho valor cuando lo flanquean.",
        "Guarda Ice Path para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Frozen Shelter pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Frost Grenade.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Frost Grenade — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Arctic Beam — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Ice Path — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Frozen Shelter siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Frost Grenade → Ice Path → básicos → Frozen Shelter",
          "explanation": "Abre con Frost Grenade para fijar o exponer al objetivo, sigue con Ice Path y usa Frozen Shelter cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Ice Path → Frost Grenade → Frozen Shelter",
          "explanation": "Fuerza la respuesta con Ice Path, encadena Frost Grenade y cierra con Frozen Shelter. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Arctic Beam → Ice Path",
          "explanation": "Usa Arctic Beam para sobrevivir al primer control y Ice Path para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "lady-geist",
    "name": "Lady Geist",
    "title": "La Dama del Pacto",
    "role": "Mago de Control",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/lady-geist.png",
    "description": "Lady Geist es una heroína espiritual que agota la vida con un pacto nigromántico que consume su propia salud para sus habilidades mientras drena la vida de sus oponentes. Mientras lucha contra un pacto hecho con un espíritu poderoso, su única esperanza de permanecer joven para siempre puede estar en los Patrones.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Essence Bomb y Life Drain, con Soul Exchange como herramienta decisiva.",
    "stats": {
      "dps": 43.81,
      "bulletDamage": 20.7,
      "magazineSize": 9,
      "fireRate": "2.116 rps",
      "maxHealth": 880,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.3 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Essence Bomb",
        "type": "Activa",
        "cooldown": "14s",
        "description": "Sacrifica algo de tu salud para lanzar una bomba que causa daño después de un breve tiempo de activación.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "2",
        "name": "Life Drain",
        "type": "Activa",
        "cooldown": "34s",
        "description": "Crea una atadura que drena la salud del enemigo con el tiempo y te cura.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "3",
        "name": "Malice",
        "type": "Activa",
        "cooldown": "6s",
        "description": "Sacrifica algo de tu salud para lanzar fragmentos de sangre que aplican una acumulación de Malicia.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Soul Exchange",
        "type": "Activa",
        "cooldown": "220s",
        "description": "Intercambia niveles de salud con un objetivo enemigo.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Corta la curación y el drenaje con Healbane o Decay; si te sostienes en rango, el intercambio favorece al héroe.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Cheat Death o Ethereal Shift niegan la ejecución; úsalos cuando tu salud baje del umbral."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Lady Geist desde el primer intercambio.",
          "countersAbility": "Essence Bomb"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Lady Geist por acumular vida y regeneración.",
          "countersAbility": "Essence Bomb"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Lady Geist y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Essence Bomb"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Lady Geist.",
          "countersAbility": "Essence Bomb"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Lady Geist te elimine antes de reaccionar.",
          "countersAbility": "Essence Bomb"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Lady Geist: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Lady Geist pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Lady Geist: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Lady Geist pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Lady Geist: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Lady Geist pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Lady Geist, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Lady Geist, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Lady Geist, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Essence Bomb para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Lady Geist pierde mucho valor cuando lo flanquean.",
        "Guarda Life Drain para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Soul Exchange pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Essence Bomb.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Essence Bomb — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Life Drain — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Malice — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Soul Exchange siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Essence Bomb → Life Drain → básicos → Soul Exchange",
          "explanation": "Abre con Essence Bomb para fijar o exponer al objetivo, sigue con Life Drain y usa Soul Exchange cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Life Drain → Essence Bomb → Soul Exchange",
          "explanation": "Fuerza la respuesta con Life Drain, encadena Essence Bomb y cierra con Soul Exchange. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Malice → Life Drain",
          "explanation": "Usa Malice para sobrevivir al primer control y Life Drain para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "lash",
    "name": "Lash",
    "title": "El Látigo Insufrible",
    "role": "Iniciador",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/lash.png",
    "description": "Jacob Lash es un héroe imbécil que inicia peleas con entusiasmo con ganchos y látigos, persiguiendo a los oponentes que huyen con alegría. Como estibador con un ego del tamaño de una aeronave, Lash es famoso como campeón en Bear Pit y lucha en el Ritual para demostrar su grandeza al mundo.",
    "playstyleOverview": "Iniciador: abre peleas con control y fija objetivos clave. Coordina con tu equipo antes de comprometerte. Su kit gira en torno a Ground Strike y Grapple, con Death Slam como herramienta decisiva.",
    "stats": {
      "dps": 49.33,
      "bulletDamage": 8.46,
      "magazineSize": 29,
      "fireRate": "5.831 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "10%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Ground Strike",
        "type": "Activa",
        "cooldown": "18s",
        "description": "Pisotea el suelo debajo de ti, dañando a los enemigos frente a ti.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Grapple",
        "type": "Activa",
        "cooldown": "35s",
        "description": "Impúlsate por el aire hacia un objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Flog",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Golpea a los enemigos frente a ti con tu látigo y cura una parte del daño infligido.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Death Slam",
        "type": "Activa",
        "cooldown": "170s",
        "description": "Concéntrate en los enemigos para conectarles látigos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Unstoppable y Reactive Barrier evitan el desplazamiento forzado; juega pegado a muros para no quedar aislado.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa."
      ],
      "itemCounters": [
        {
          "itemId": "metal-skin",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Inmunidad a balas durante la ventana de ráfaga de Lash.",
          "countersAbility": "Ground Strike"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Lash quiere matarte.",
          "countersAbility": "Ground Strike"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Lash.",
          "countersAbility": "Ground Strike"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Lash.",
          "countersAbility": "Ground Strike"
        },
        {
          "itemId": "majestic-leap",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te saca del área y te da un escudo; rompe el setup de Lash.",
          "countersAbility": "Ground Strike"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Lash: sus casteos largos y su poca salud le deja expuesto a que Lash pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Lash: sus casteos largos y su poca salud le deja expuesto a que Lash pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Lash: su escaso daño en duelos individuales le deja expuesto a que Lash pueda iniciar el combate y fijar al objetivo."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Ground Strike para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Lash pierde mucho valor cuando lo flanquean.",
        "Guarda Grapple para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Death Slam pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Ground Strike.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Ground Strike — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Grapple — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Flog — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Death Slam siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Ground Strike → Grapple → básicos → Death Slam",
          "explanation": "Abre con Ground Strike para fijar o exponer al objetivo, sigue con Grapple y usa Death Slam cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Grapple → Ground Strike → Death Slam",
          "explanation": "Fuerza la respuesta con Grapple, encadena Ground Strike y cierra con Death Slam. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Flog → Grapple",
          "explanation": "Usa Flog para sobrevivir al primer control y Grapple para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-stamina",
            "sprint-boots",
            "healing-rite"
          ],
          "notes": "Farmea seguro y busca ángulos de engage. No inicies sin tu equipo detrás."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "kinetic-dash",
            "majestic-leap",
            "reactive-barrier",
            "bullet-resilience"
          ],
          "notes": "Tu ventana es el primer control. Entra, fija un objetivo y sal antes de que te enfoquen."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "phantom-strike",
            "unstoppable",
            "fortitude"
          ],
          "notes": "Inicia con cooldowns defensivos listos; Phantom Strike aísla al objetivo clave."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "cheat-death",
            "leech",
            "juggernaut",
            "indomitable"
          ],
          "notes": "Aguanta el contraataque después del engage. Indomitable limpia el primer control enemigo."
        }
      ]
    }
  },
  {
    "id": "mcginnis",
    "name": "McGinnis",
    "title": "La Mecánica Imparable",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/mcginnis.png",
    "description": "McGinnis es una heroína mecánica de ametralladoras con una selección de torretas y cohetes para lanzar fuego sostenido sobre sus enemigos. Una mecánica prodigio sin mucho cuidado por la moralidad, puede que esté luchando en el Ritual simplemente por un sueldo mayor y la oportunidad de demostrar sus demoliciones.",
    "playstyleOverview": "Invocador de zona: crea presión constante con invocaciones y controla espacios. Mantén tus invocaciones activas antes de pelear. Su kit gira en torno a Mini Turret y Medicinal Specter, con Heavy Barrage como herramienta decisiva.",
    "stats": {
      "dps": 72.38,
      "bulletDamage": 6.08,
      "magazineSize": 66,
      "fireRate": "4.762 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Mini Turret",
        "type": "Activa",
        "cooldown": "18s",
        "description": "Despliega una torreta que dispara a los enemigos e inflige Daño Espiritual a lo largo del tiempo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Medicinal Specter",
        "type": "Activa",
        "cooldown": "50s",
        "description": "Despliega un espíritu que brinda curación a los aliados cercanos.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "3",
        "name": "Spectral Wall",
        "type": "Activa",
        "cooldown": "50s",
        "description": "Lanza un muro que aplica ralentización a los enemigos que atraviesa.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Heavy Barrage",
        "type": "Activa",
        "cooldown": "200s",
        "description": "Desata una andanada de cohetes que apuntan a un lugar objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Limpia invocaciones con daño en área (Ricochet, Tesla Bullets) antes de pelear contra el héroe.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Warp Stone y Majestic Leap cruzan la pared; no te quedes encerrado con tu equipo."
      ],
      "itemCounters": [
        {
          "itemId": "ricochet",
          "priority": "Esencial",
          "timing": "Late Game",
          "counterExplanation": "Limpia las invocaciones de McGinnis y aplica tus efectos de bala a varios objetivos.",
          "countersAbility": "Mini Turret"
        },
        {
          "itemId": "tesla-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El daño en cadena elimina invocaciones y presiona a McGinnis cuando se esconde detrás de ellas.",
          "countersAbility": "Mini Turret"
        },
        {
          "itemId": "alchemical-fire",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El área reduce Resistencia a Balas y limpia invocaciones; castiga la zona que crea McGinnis.",
          "countersAbility": "Mini Turret"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de McGinnis.",
          "countersAbility": "Mini Turret"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de McGinnis.",
          "countersAbility": "Mini Turret"
        }
      ],
      "heroCounters": [
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante McGinnis: su escaso daño en duelos individuales le deja expuesto a que McGinnis pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "ivy",
          "advantage": "Fuerte Contra",
          "reason": "Ivy sufre ante McGinnis: su escaso daño en duelos individuales le deja expuesto a que McGinnis pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "kelvin",
          "advantage": "Fuerte Contra",
          "reason": "Kelvin sufre ante McGinnis: su escaso daño en duelos individuales le deja expuesto a que McGinnis pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que McGinnis, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que McGinnis, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "dynamo",
          "advantage": "Débil Contra",
          "reason": "Dynamo puede sostener a su equipo y negar la eliminación mejor que McGinnis, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Mini Turret para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: McGinnis pierde mucho valor cuando lo flanquean.",
        "Guarda Medicinal Specter para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Heavy Barrage pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Mini Turret.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Mini Turret — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Medicinal Specter — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Spectral Wall — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Heavy Barrage siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Mini Turret → Medicinal Specter → básicos → Heavy Barrage",
          "explanation": "Abre con Mini Turret para fijar o exponer al objetivo, sigue con Medicinal Specter y usa Heavy Barrage cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Medicinal Specter → Mini Turret → Heavy Barrage",
          "explanation": "Fuerza la respuesta con Medicinal Specter, encadena Mini Turret y cierra con Heavy Barrage. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Spectral Wall → Medicinal Specter",
          "explanation": "Usa Spectral Wall para sobrevivir al primer control y Medicinal Specter para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "mina",
    "name": "Mina",
    "title": "La Vampira Coqueta",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/mina.png",
    "description": "Mina es una heroína vampírica y ágil con rápidas ráfagas de Daño Espiritual y un estilo de juego de golpear y correr impulsado por un murciélago. Una vampira recientemente transformada, ahora navega tanto por la alta sociedad vampírica como por el Ritual, buscando convertirse en la nueva vizconde de Nueva York.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Rake y Sanguine Retreat, con Nox Nostra como herramienta decisiva.",
    "stats": {
      "dps": 29.01,
      "bulletDamage": 7.31,
      "magazineSize": 12,
      "fireRate": "3.968 rps",
      "maxHealth": 660,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.5 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Rake",
        "type": "Activa",
        "cooldown": "16s",
        "description": "Activo: Corta con tu paraguas, causando Daño Espiritual, que aumenta con la salud que les falta.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "2",
        "name": "Sanguine Retreat",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Dispersarse brevemente, volverse inalcanzable y volar a una ubicación objetivo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Love Bites",
        "type": "Activa",
        "description": "Tus balas aplican Daño Espiritual adicional.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Nox Nostra",
        "type": "Activa",
        "cooldown": "150s",
        "description": "Activa: Desata una nube de murciélagos que buscan objetivos, cada uno de los cuales inflige Daño Espiritual y aplica Silencio.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "No persigas a ciegas: fuerza la revelación con Return Fire y castiga la ventana posterior con Knockdown o Cursed Relic.",
        "Si te silencian no podrás usar ítems activos ni habilidades: mantén Counterspell o Unstoppable para las ventanas clave.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "extra-health",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Mina te elimine antes de reaccionar.",
          "countersAbility": "Rake"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Mina y aumenta bajo el 50% de salud.",
          "countersAbility": "Rake"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Mina y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Rake"
        },
        {
          "itemId": "return-fire",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Devuelve daño automáticamente y castiga a Mina cuando intenta entrar o salir de la invisibilidad.",
          "countersAbility": "Rake"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Mina y corta su movilidad o su escape.",
          "countersAbility": "Rake"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Mina: sus casteos largos y su poca salud le deja expuesto a que Mina pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Mina: sus casteos largos y su poca salud le deja expuesto a que Mina pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Mina: su escaso daño en duelos individuales le deja expuesto a que Mina pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Mina, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Mina, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Mina, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Rake para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Mina pierde mucho valor cuando lo flanquean.",
        "Guarda Sanguine Retreat para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Nox Nostra pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Rake.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Rake — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Sanguine Retreat — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Love Bites — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Nox Nostra siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Rake → Sanguine Retreat → básicos → Nox Nostra",
          "explanation": "Abre con Rake para fijar o exponer al objetivo, sigue con Sanguine Retreat y usa Nox Nostra cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Sanguine Retreat → Rake → Nox Nostra",
          "explanation": "Fuerza la respuesta con Sanguine Retreat, encadena Rake y cierra con Nox Nostra. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Love Bites → Sanguine Retreat",
          "explanation": "Usa Love Bites para sobrevivir al primer control y Sanguine Retreat para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "mirage",
    "name": "Mirage",
    "title": "El Guardián del Desierto",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/mirage.png",
    "description": "Mirage es un héroe esquivo de viento y arena, que se teletransporta a través del mapa para controlarlo y apoyar a sus aliados.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Fire Scarabs y Dust Devil, con Traveler como herramienta decisiva.",
    "stats": {
      "dps": 40.27,
      "bulletDamage": 14.8,
      "magazineSize": 16,
      "fireRate": "2.721 rps",
      "maxHealth": 730,
      "healthRegen": "1.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Fire Scarabs",
        "type": "Activa",
        "cooldown": "35s",
        "description": "Infesta a un enemigo con escarabajos de fuego, robándole vida y provocando que inflija daño reducido.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Dust Devil",
        "type": "Activa",
        "cooldown": "36s",
        "description": "Transfórmate en un torbellino que avanza, dañando a los enemigos, reduciendo su Velocidad de Movimiento y levantándolos en el aire.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "3",
        "name": "Djinn's Mark",
        "type": "Pasiva",
        "description": "Pasiva: Tus disparos aplican una Marca Djinn en el objetivo.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      },
      {
        "slot": "4 (Ult)",
        "name": "Traveler",
        "type": "Activa",
        "cooldown": "140s",
        "description": "Selecciona una ubicación en el minimapa.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Si lo dejas libre, multiplica a su equipo. Presiónalo con Healbane y Decay para negar su sustain.",
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Controla la visión y usa Warp Stone para no quedar atrapado en sus rotaciones."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Mirage desde el primer intercambio.",
          "countersAbility": "Fire Scarabs"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Mirage por acumular vida y regeneración.",
          "countersAbility": "Fire Scarabs"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Mirage: apaga su ventana de daño o su escape.",
          "countersAbility": "Fire Scarabs"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Mirage quiere matarte.",
          "countersAbility": "Fire Scarabs"
        },
        {
          "itemId": "fortitude",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Regeneración fuerte tras salir de combate: recuperas la vida que Mirage intenta quitarte por poke.",
          "countersAbility": "Fire Scarabs"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Mirage: su dependencia de invocaciones y enfriamientos le deja expuesto a que Mirage pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Mirage: su dependencia de invocaciones y enfriamientos le deja expuesto a que Mirage pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Mirage: su dependencia de invocaciones y enfriamientos le deja expuesto a que Mirage pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Mirage, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Mirage, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Mirage, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Fire Scarabs para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Mirage pierde mucho valor cuando lo flanquean.",
        "Guarda Dust Devil para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Traveler pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Fire Scarabs.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Djinn's Mark — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Fire Scarabs — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Dust Devil — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Traveler siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Fire Scarabs → Dust Devil → básicos → Traveler",
          "explanation": "Abre con Fire Scarabs para fijar o exponer al objetivo, sigue con Dust Devil y usa Traveler cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Dust Devil → Fire Scarabs → Traveler",
          "explanation": "Fuerza la respuesta con Dust Devil, encadena Fire Scarabs y cierra con Traveler. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Traveler → Dust Devil",
          "explanation": "Usa Traveler para sobrevivir al primer control y Dust Devil para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "mystic-shot",
            "extra-spirit",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Mezcla poke de habilidad y arma; no dependas de una sola fuente de daño."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "opening-rounds",
            "spirit-shredder",
            "improved-spirit",
            "kinetic-dash"
          ],
          "notes": "Reduce resistencias y convierte tus básicos en daño espiritual sostenido."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "spiritual-overflow",
            "escalating-exposure",
            "burst-fire",
            "boundless-spirit"
          ],
          "notes": "Tu pico llega con el combo completo; busca peleas donde puedas castear dos rotaciones."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "mercurial-magnum",
            "leech",
            "refresher",
            "glass-cannon"
          ],
          "notes": "Build híbrida de cierre: daño de arma y espiritual con una segunda rotación."
        }
      ]
    }
  },
  {
    "id": "mo-krill",
    "name": "Mo & Krill",
    "title": "El Dúo del Túnel",
    "role": "Brawler",
    "difficulty": "Fácil",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/mo-krill.png",
    "description": "Mo y Krill son héroes matones en tándem que operan como un solo personaje para excavar en el campo de batalla, atacar con ráfagas de arena y bloquear objetivos individuales. Los miembros de The Tunnel Rats y colaboradores cercanos de Wraith, Maurice y Krill son comerciantes ilícitos que hacen del metro de Nueva York su hogar.",
    "playstyleOverview": "Tanque de primera línea: absorbe presión, abre espacio y obliga al equipo enemigo a gastar recursos en ti. Busca peleas prolongadas y protege a tus carries. Su kit gira en torno a Scorn y Burrow, con Combo como herramienta decisiva.",
    "stats": {
      "dps": 59.68,
      "bulletDamage": 2.82,
      "magazineSize": 20,
      "fireRate": "5.291 rps",
      "maxHealth": 930,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "8 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Scorn",
        "type": "Activa",
        "cooldown": "13s",
        "description": "Inflige daño a los enemigos cercanos y cúrate a ti mismo según el daño causado.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "2",
        "name": "Burrow",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Excava bajo tierra, muévete más rápido y gana espíritu y armadura de bala.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Sand Blast",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Rocía arena que desarma a los enemigos frente a ti y les causa daño.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Combo",
        "type": "Activa",
        "cooldown": "150s",
        "description": "Mantiene al objetivo en su lugar, aturdiéndolo e infligiendo daño durante la canalización.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Toxic Bullets, Decay y Tankbuster convierten su salud en una desventaja; no intentes ganarle por daño bruto.",
        "Contra el desarme, tus ítems activos y el daño de habilidades siguen funcionando: no dependas solo del arma.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja."
      ],
      "itemCounters": [
        {
          "itemId": "toxic-bullets",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Mo & Krill.",
          "countersAbility": "Scorn"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Mo & Krill por acumular vida y regeneración.",
          "countersAbility": "Scorn"
        },
        {
          "itemId": "tankbuster",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño espiritual extra que ignora Resistencia Espiritual: ideal contra la salud alta de Mo & Krill.",
          "countersAbility": "Scorn"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Mo & Krill, incluidos control y daño prolongado.",
          "countersAbility": "Scorn"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Mo & Krill, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Scorn"
        }
      ],
      "heroCounters": [
        {
          "heroId": "apollo",
          "advantage": "Fuerte Contra",
          "reason": "Apollo sufre ante Mo & Krill: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Mo & Krill pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Mo & Krill: su ventana de daño corta y su baja salud le deja expuesto a que Mo & Krill pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "deadman-danny",
          "advantage": "Fuerte Contra",
          "reason": "Deadman Danny sufre ante Mo & Krill: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Mo & Krill pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Mo & Krill, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Mo & Krill, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "graves",
          "advantage": "Débil Contra",
          "reason": "Graves puede crear presión constante con invocaciones mejor que Mo & Krill, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Scorn para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Mo & Krill pierde mucho valor cuando lo flanquean.",
        "Guarda Burrow para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Combo pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Scorn.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Scorn — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Burrow — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Sand Blast — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Combo siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Scorn → Burrow → básicos → Combo",
          "explanation": "Abre con Scorn para fijar o exponer al objetivo, sigue con Burrow y usa Combo cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Burrow → Scorn → Combo",
          "explanation": "Fuerza la respuesta con Burrow, encadena Scorn y cierra con Combo. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Sand Blast → Burrow",
          "explanation": "Usa Sand Blast para sobrevivir al primer control y Burrow para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "sprint-boots",
            "melee-lifesteal"
          ],
          "notes": "Aguanta la línea y tradea con sustain. No persigas kills que te alejen de tu carry."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "battle-vest",
            "bullet-resilience",
            "healbane",
            "fortitude"
          ],
          "notes": "Empieza a iniciar peleas cortas. Healbane también sirve para negar el sustain enemigo."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "siphon-bullets",
            "plated-armor",
            "juggernaut"
          ],
          "notes": "Tu trabajo es absorber cooldowns. Colossus convierte tu tamaño en control de zona."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "leech",
            "unstoppable",
            "cheat-death",
            "inhibitor"
          ],
          "notes": "Build de frontline completa: sé el último en morir y aplica reducción de daño y curación."
        }
      ]
    }
  },
  {
    "id": "nurse-harrow",
    "name": "Nurse Harrow",
    "title": "La Enfermera del Pabellón",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/nurse-harrow.png",
    "description": "La enfermera Harrow es una heroína agotadora y curativa con herramientas peligrosas y un trato terrible con los pacientes. Para algunos, sus prácticas pueden parecer poco ortodoxas; sus pacientes en Marble Hill Possession Ward no pueden decir que los resultados no sean efectivos.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Leech Therapy y Wretched Vapors, con Lurking Terrors como herramienta decisiva.",
    "stats": {
      "dps": 38.01,
      "bulletDamage": 14.44,
      "magazineSize": 11,
      "fireRate": "2.632 rps",
      "maxHealth": 730,
      "healthRegen": "0/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.8 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Leech Therapy",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Lanza un frasco de sanguijuelas que se adhieren a los enemigos, lo que inflige Daño Espiritual con el tiempo y reduce la duración de las ventajas del enemigo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Wretched Vapors",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Abre un vial para liberar un vapor etéreo sobre ti o un aliado que provoca una ráfaga y luego un choque.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Healing Needles",
        "type": "Activa",
        "description": "Carga tu arma con un cargador completo de jeringas que curan a los aliados.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Lurking Terrors",
        "type": "Activa",
        "cooldown": "200s",
        "description": "Abre tu bolsa y revela los horrores que llevas dentro, causando Daño Espiritual a lo largo del tiempo a los enemigos frente a ti.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Dispel Magic limpia los debuffs y Debuff Reducer acorta su duración; no entres sin uno de los dos.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Nurse Harrow desde el primer intercambio.",
          "countersAbility": "Leech Therapy"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Nurse Harrow.",
          "countersAbility": "Leech Therapy"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Nurse Harrow por acumular vida y regeneración.",
          "countersAbility": "Leech Therapy"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Nurse Harrow, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Leech Therapy"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Nurse Harrow, incluidos control y daño prolongado.",
          "countersAbility": "Leech Therapy"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Nurse Harrow: su dependencia de invocaciones y enfriamientos le deja expuesto a que Nurse Harrow pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Nurse Harrow: su dependencia de invocaciones y enfriamientos le deja expuesto a que Nurse Harrow pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Nurse Harrow: su dependencia de invocaciones y enfriamientos le deja expuesto a que Nurse Harrow pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Nurse Harrow, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Nurse Harrow, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Nurse Harrow, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Leech Therapy para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Nurse Harrow pierde mucho valor cuando lo flanquean.",
        "Guarda Wretched Vapors para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Lurking Terrors pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Leech Therapy.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Leech Therapy — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Wretched Vapors — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Healing Needles — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Lurking Terrors siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Leech Therapy → Wretched Vapors → básicos → Lurking Terrors",
          "explanation": "Abre con Leech Therapy para fijar o exponer al objetivo, sigue con Wretched Vapors y usa Lurking Terrors cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Wretched Vapors → Leech Therapy → Lurking Terrors",
          "explanation": "Fuerza la respuesta con Wretched Vapors, encadena Leech Therapy y cierra con Lurking Terrors. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Healing Needles → Wretched Vapors",
          "explanation": "Usa Healing Needles para sobrevivir al primer control y Wretched Vapors para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "paige",
    "name": "Paige",
    "title": "La Bibliomante",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/paige.png",
    "description": "Paige es una heroína bibliomante espiritual que invoca espíritus de las páginas de sus tomos para atacar, proteger y cautivar a sus compañeros ritualistas. En las calles de la Manzana Maldita, busca respuestas sobre la desaparición de su hermano y suplica ayuda a los Patronos.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Bookwyrm y Plot Armor, con Rallying Charge como herramienta decisiva.",
    "stats": {
      "dps": 64,
      "bulletDamage": 32,
      "magazineSize": 14,
      "fireRate": "2 rps",
      "maxHealth": 680,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.9 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Bookwyrm",
        "type": "Activa",
        "cooldown": "33s",
        "description": "Conjura un dragón que aparece en la ubicación objetivo antes de volar hacia adelante, causando Daño Espiritual y dejando un camino ardiente a su paso.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "2",
        "name": "Plot Armor",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Otorga una barrera a un aliado.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Captivating Read",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Apunta a un área con magia latente, aplicándola lentamente.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Rallying Charge",
        "type": "Activa",
        "cooldown": "210s",
        "description": "Libera una ola de caballeros y corceles espectrales que cargan por toda la ciudad, curando a los aliados e infligiendo Daño Espiritual a los enemigos.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "Decay y Cursed Relic reducen o eliminan barreras y buffs; sin eso, sus escudos absorben tu burst.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Paige desde el primer intercambio.",
          "countersAbility": "Bookwyrm"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Paige.",
          "countersAbility": "Bookwyrm"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Paige por acumular vida y regeneración.",
          "countersAbility": "Bookwyrm"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Paige: apaga su ventana de daño o su escape.",
          "countersAbility": "Bookwyrm"
        },
        {
          "itemId": "nullification-burst",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Ayuda a neutralizar la presión de Paige en el momento adecuado.",
          "countersAbility": "Bookwyrm"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Paige: su dependencia de invocaciones y enfriamientos le deja expuesto a que Paige pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Paige: su dependencia de invocaciones y enfriamientos le deja expuesto a que Paige pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Paige: su dependencia de invocaciones y enfriamientos le deja expuesto a que Paige pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Paige, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Paige, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Paige, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Bookwyrm para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Paige pierde mucho valor cuando lo flanquean.",
        "Guarda Plot Armor para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Rallying Charge pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Bookwyrm.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Plot Armor — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Bookwyrm — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Captivating Read — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Rallying Charge siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Bookwyrm → Plot Armor → básicos → Rallying Charge",
          "explanation": "Abre con Bookwyrm para fijar o exponer al objetivo, sigue con Plot Armor y usa Rallying Charge cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Plot Armor → Bookwyrm → Rallying Charge",
          "explanation": "Fuerza la respuesta con Plot Armor, encadena Bookwyrm y cierra con Rallying Charge. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Captivating Read → Plot Armor",
          "explanation": "Usa Captivating Read para sobrevivir al primer control y Plot Armor para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "paradox",
    "name": "Paradox",
    "title": "La Ladrona del Tiempo",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/paradox.png",
    "description": "Paradox es un héroe enigmático que controla el tiempo y que empuña una variedad de herramientas de ladrón y dispositivos de control crono para ejecutar el atraco perfecto. Paradox es a la vez el nombre de este héroe y el nombre de su gremio de ladrones, que se especializa en robar a los intocables y entrar en instalaciones ultraseguras.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Pulse Grenade y Time Wall, con Paradoxical Swap como herramienta decisiva.",
    "stats": {
      "dps": 51.4,
      "bulletDamage": 6.8,
      "magazineSize": 40,
      "fireRate": "7.559 rps",
      "maxHealth": 730,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Pulse Grenade",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Lanza una granada que comienza a pulsar cuando aterriza.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Time Wall",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Crea un muro que detiene el tiempo para todos los proyectiles y balas enemigos que lo tocan y aumenta la velocidad y el daño de las balas amigas.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Kinetic Carbine",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Carga una poderosa inyección de energía temporal, que inflige Daño Espiritual y aplica una parada temporal a los enemigos golpeados.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "4 (Ult)",
        "name": "Paradoxical Swap",
        "type": "Activa",
        "cooldown": "95s",
        "description": "Dispara un proyectil que intercambia tu posición con la del héroe enemigo objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Unstoppable y Reactive Barrier evitan el desplazamiento forzado; juega pegado a muros para no quedar aislado.",
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal."
      ],
      "itemCounters": [
        {
          "itemId": "extra-health",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Paradox te elimine antes de reaccionar.",
          "countersAbility": "Pulse Grenade"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Paradox y aumenta bajo el 50% de salud.",
          "countersAbility": "Pulse Grenade"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Paradox y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Pulse Grenade"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Paradox quiere matarte.",
          "countersAbility": "Pulse Grenade"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Paradox, incluidos control y daño prolongado.",
          "countersAbility": "Pulse Grenade"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Paradox: sus casteos largos y su poca salud le deja expuesto a que Paradox pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Paradox: sus casteos largos y su poca salud le deja expuesto a que Paradox pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Paradox: su escaso daño en duelos individuales le deja expuesto a que Paradox pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Paradox, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Paradox, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Paradox, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Pulse Grenade para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Paradox pierde mucho valor cuando lo flanquean.",
        "Guarda Time Wall para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Paradoxical Swap pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Pulse Grenade.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Kinetic Carbine — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Pulse Grenade — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Time Wall — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Paradoxical Swap siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Pulse Grenade → Time Wall → básicos → Paradoxical Swap",
          "explanation": "Abre con Pulse Grenade para fijar o exponer al objetivo, sigue con Time Wall y usa Paradoxical Swap cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Time Wall → Pulse Grenade → Paradoxical Swap",
          "explanation": "Fuerza la respuesta con Time Wall, encadena Pulse Grenade y cierra con Paradoxical Swap. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Kinetic Carbine → Time Wall",
          "explanation": "Usa Kinetic Carbine para sobrevivir al primer control y Time Wall para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "mystic-shot",
            "extra-spirit",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Mezcla poke de habilidad y arma; no dependas de una sola fuente de daño."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "opening-rounds",
            "spirit-shredder",
            "improved-spirit",
            "kinetic-dash"
          ],
          "notes": "Reduce resistencias y convierte tus básicos en daño espiritual sostenido."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "spiritual-overflow",
            "escalating-exposure",
            "burst-fire",
            "boundless-spirit"
          ],
          "notes": "Tu pico llega con el combo completo; busca peleas donde puedas castear dos rotaciones."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "mercurial-magnum",
            "leech",
            "refresher",
            "glass-cannon"
          ],
          "notes": "Build híbrida de cierre: daño de arma y espiritual con una segunda rotación."
        }
      ]
    }
  },
  {
    "id": "pocket",
    "name": "Pocket",
    "title": "El Heredero Fugitivo",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/pocket.png",
    "description": "Pocket es un héroe esquivo e impredecible con habilidades espirituales protectoras y disruptivas y una poderosa escopeta para desorientar y vencer a sus enemigos. Arin Fairfax, el heredero mayor de Fairfax Industries, ha estado escondido durante más de cinco años después de un fallido intento de asesinato.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Barrage y Flying Cloak, con Affliction como herramienta decisiva.",
    "stats": {
      "dps": 57.07,
      "bulletDamage": 4.28,
      "magazineSize": 11,
      "fireRate": "1.905 rps",
      "maxHealth": 780,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "-15%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Barrage",
        "type": "Canalizada",
        "cooldown": "32s",
        "description": "Canal para comenzar a lanzar proyectiles que causan Daño Espiritual y aplican ralentización alrededor de su punto de impacto.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Flying Cloak",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Lanza una capa sensible que avanza y daña a los enemigos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Enchanter's Satchel",
        "type": "Activa",
        "cooldown": "17s",
        "description": "Escápate a tu maleta.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Affliction",
        "type": "Activa",
        "cooldown": "170s",
        "description": "Aplica daño en el tiempo a los enemigos cercanos.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar.",
        "No persigas a ciegas: fuerza la revelación con Return Fire y castiga la ventana posterior con Knockdown o Cursed Relic."
      ],
      "itemCounters": [
        {
          "itemId": "extra-health",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Pocket te elimine antes de reaccionar.",
          "countersAbility": "Barrage"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Pocket y aumenta bajo el 50% de salud.",
          "countersAbility": "Barrage"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Pocket y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Barrage"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Pocket.",
          "countersAbility": "Barrage"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Pocket.",
          "countersAbility": "Barrage"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Pocket: sus casteos largos y su poca salud le deja expuesto a que Pocket pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Pocket: sus casteos largos y su poca salud le deja expuesto a que Pocket pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Pocket: su escaso daño en duelos individuales le deja expuesto a que Pocket pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Pocket, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Pocket, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Pocket, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Barrage para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Pocket pierde mucho valor cuando lo flanquean.",
        "Guarda Flying Cloak para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Affliction pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Barrage.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Barrage — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Flying Cloak — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Enchanter's Satchel — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Affliction siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Barrage → Flying Cloak → básicos → Affliction",
          "explanation": "Abre con Barrage para fijar o exponer al objetivo, sigue con Flying Cloak y usa Affliction cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Flying Cloak → Barrage → Affliction",
          "explanation": "Fuerza la respuesta con Flying Cloak, encadena Barrage y cierra con Affliction. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Enchanter's Satchel → Flying Cloak",
          "explanation": "Usa Enchanter's Satchel para sobrevivir al primer control y Flying Cloak para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "rat-king",
    "name": "Rat King",
    "title": "El Rey de las Alcantarillas",
    "role": "Brawler",
    "difficulty": "Fácil",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/rat-king.png",
    "description": "Rat King es un héroe luchador y tanque que lucha desde las alcantarillas hasta las calles de la Manzana Maldita. Invoca enjambres de ratas a su antojo, lidera la carga hacia la batalla con una armadura pesada y un plan para convertir Long Island en una utopía para las ratas.",
    "playstyleOverview": "Tanque de primera línea: absorbe presión, abre espacio y obliga al equipo enemigo a gastar recursos en ti. Busca peleas prolongadas y protege a tus carries. Su kit gira en torno a Scrap Grenade y Rat Swarm, con Rule, Ratannia! como herramienta decisiva.",
    "stats": {
      "dps": 58,
      "bulletDamage": 5.8,
      "magazineSize": 26,
      "fireRate": "5 rps",
      "maxHealth": 800,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.8 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Scrap Grenade",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Lanza una granada de chatarra que detona varias veces, causando daño de bala y aplicando ralentización.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Rat Swarm",
        "type": "Activa",
        "cooldown": "24s",
        "description": "Invoca un enjambre de ratas que saltan sobre los enemigos, infligiendo Daño Espiritual con el tiempo y reduciendo su Resistencia a Balas con cada mordisco.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Royal Pestments",
        "type": "Activa",
        "cooldown": "22s",
        "description": "Adorna una armadura fragmentaria y gana una barrera según tu Salud Máxima.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Rule, Ratannia!",
        "type": "Activa",
        "cooldown": "180s",
        "description": "Carga e invoca el estandarte de Ratannia, lo que otorga a todos los aliados cercanos mayor Velocidad de Movimiento, inmunidad a las ralentizaciones y reducción del daño recibido mientras estén cerca del estandarte.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Toxic Bullets, Decay y Tankbuster convierten su salud en una desventaja; no intentes ganarle por daño bruto.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "Decay y Cursed Relic reducen o eliminan barreras y buffs; sin eso, sus escudos absorben tu burst."
      ],
      "itemCounters": [
        {
          "itemId": "toxic-bullets",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Rat King.",
          "countersAbility": "Scrap Grenade"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Rat King por acumular vida y regeneración.",
          "countersAbility": "Scrap Grenade"
        },
        {
          "itemId": "tankbuster",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño espiritual extra que ignora Resistencia Espiritual: ideal contra la salud alta de Rat King.",
          "countersAbility": "Scrap Grenade"
        },
        {
          "itemId": "enduring-speed",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Reduce las ralentizaciones de Rat King y mantiene tu Velocidad de Movimiento para kitearte.",
          "countersAbility": "Scrap Grenade"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Rat King, incluidos control y daño prolongado.",
          "countersAbility": "Scrap Grenade"
        }
      ],
      "heroCounters": [
        {
          "heroId": "apollo",
          "advantage": "Fuerte Contra",
          "reason": "Apollo sufre ante Rat King: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Rat King pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Rat King: su ventana de daño corta y su baja salud le deja expuesto a que Rat King pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "deadman-danny",
          "advantage": "Fuerte Contra",
          "reason": "Deadman Danny sufre ante Rat King: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Rat King pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Rat King, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Rat King, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "graves",
          "advantage": "Débil Contra",
          "reason": "Graves puede crear presión constante con invocaciones mejor que Rat King, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Scrap Grenade para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Rat King pierde mucho valor cuando lo flanquean.",
        "Guarda Rat Swarm para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Rule, Ratannia! pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Scrap Grenade.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Rat Swarm — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Scrap Grenade — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Royal Pestments — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Rule, Ratannia! siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Scrap Grenade → Rat Swarm → básicos → Rule, Ratannia!",
          "explanation": "Abre con Scrap Grenade para fijar o exponer al objetivo, sigue con Rat Swarm y usa Rule, Ratannia! cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Rat Swarm → Scrap Grenade → Rule, Ratannia!",
          "explanation": "Fuerza la respuesta con Rat Swarm, encadena Scrap Grenade y cierra con Rule, Ratannia!. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Royal Pestments → Rat Swarm",
          "explanation": "Usa Royal Pestments para sobrevivir al primer control y Rat Swarm para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "sprint-boots",
            "melee-lifesteal"
          ],
          "notes": "Aguanta la línea y tradea con sustain. No persigas kills que te alejen de tu carry."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "battle-vest",
            "bullet-resilience",
            "healbane",
            "fortitude"
          ],
          "notes": "Empieza a iniciar peleas cortas. Healbane también sirve para negar el sustain enemigo."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "siphon-bullets",
            "plated-armor",
            "juggernaut"
          ],
          "notes": "Tu trabajo es absorber cooldowns. Colossus convierte tu tamaño en control de zona."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "leech",
            "unstoppable",
            "cheat-death",
            "inhibitor"
          ],
          "notes": "Build de frontline completa: sé el último en morir y aplica reducción de daño y curación."
        }
      ]
    }
  },
  {
    "id": "rem",
    "name": "Rem",
    "title": "El Compañero de Sueños",
    "role": "Soporte / Utilidad",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/rem.png",
    "description": "Rem es un héroe somnoliento y servicial que apoya a sus aliados con los ayudantes de Lil, peleas de almohadas y tomando una siesta rápida sobre sus hombros. Rem, un niño pacífico de un mundo de sueños, y sus pequeños ayudantes se encontraron varados en Nueva York.",
    "playstyleOverview": "Soporte de equipo: multiplica el valor de tus carries con curación, escudos y control. Prioriza tu supervivencia y tu posicionamiento. Su kit gira en torno a Pillow Toss y Tag Along, con Naptime como herramienta decisiva.",
    "stats": {
      "dps": 61.54,
      "bulletDamage": 16,
      "magazineSize": 13,
      "fireRate": "3.846 rps",
      "maxHealth": 680,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Pillow Toss",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Lanza tu confiable almohada, lo que inflige Daño Espiritual y un fuerte retroceso.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Tag Along",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Salta hacia un aliado y toma una siesta junto a él.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Lil Helpers",
        "type": "Activa",
        "description": "Señala a un ayudante para que te eche una mano.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Naptime",
        "type": "Activa",
        "cooldown": "200s",
        "description": "Dirige tu mirada hacia adelante, perforando paredes y pisos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Compra Healbane o Toxic Bullets antes de comprometerte en peleas largas; sin reducción de curación el intercambio se alarga demasiado.",
        "Más estamina y Majestic Leap te permiten recuperar la posición tras el empuje.",
        "Reactive Barrier se activa con el sueño; no gastes tus defensas antes de que empiece el combo.",
        "Si lo dejas libre, multiplica a su equipo. Presiónalo con Healbane y Decay para negar su sustain."
      ],
      "itemCounters": [
        {
          "itemId": "healbane",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Tu Daño Espiritual aplica -35% de Curación Recibida: corta el sustain de Rem desde el primer intercambio.",
          "countersAbility": "Pillow Toss"
        },
        {
          "itemId": "toxic-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Rem.",
          "countersAbility": "Pillow Toss"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Rem por acumular vida y regeneración.",
          "countersAbility": "Pillow Toss"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Rem quiere matarte.",
          "countersAbility": "Pillow Toss"
        },
        {
          "itemId": "extra-stamina",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Más estamina para reposicionarte tras el empuje de Rem.",
          "countersAbility": "Pillow Toss"
        }
      ],
      "heroCounters": [
        {
          "heroId": "graves",
          "advantage": "Fuerte Contra",
          "reason": "Graves sufre ante Rem: su dependencia de invocaciones y enfriamientos le deja expuesto a que Rem pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "mcginnis",
          "advantage": "Fuerte Contra",
          "reason": "McGinnis sufre ante Rem: su dependencia de invocaciones y enfriamientos le deja expuesto a que Rem pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "solomon",
          "advantage": "Fuerte Contra",
          "reason": "Solomon sufre ante Rem: su dependencia de invocaciones y enfriamientos le deja expuesto a que Rem pueda sostener a su equipo y negar la eliminación."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Rem, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Rem, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Rem, sobre todo porque su escaso daño en duelos individuales limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Pillow Toss para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Rem pierde mucho valor cuando lo flanquean.",
        "Guarda Tag Along para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Naptime pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Pillow Toss.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Pillow Toss — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Tag Along — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Lil Helpers — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Naptime siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Pillow Toss → Tag Along → básicos → Naptime",
          "explanation": "Abre con Pillow Toss para fijar o exponer al objetivo, sigue con Tag Along y usa Naptime cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Tag Along → Pillow Toss → Naptime",
          "explanation": "Fuerza la respuesta con Tag Along, encadena Pillow Toss y cierra con Naptime. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Lil Helpers → Tag Along",
          "explanation": "Usa Lil Helpers para sobrevivir al primer control y Tag Along para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "healing-rite",
            "sprint-boots"
          ],
          "notes": "Juega cerca de tu carry y no gastes curación en intercambios sin valor."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "healing-booster",
            "guardian-ward",
            "enduring-speed",
            "reactive-barrier"
          ],
          "notes": "Aumenta la eficacia de tus curas y empieza a salvar aliados con escudos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "rescue-beam",
            "divine-barrier",
            "healing-tempo",
            "majestic-leap"
          ],
          "notes": "Tus cooldowns deben cubrir las ventanas de engage enemigas. Prioriza salvaciones sobre daño."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "celestial-blessing",
            "spellbreaker",
            "unstoppable",
            "leech"
          ],
          "notes": "Cierre de soporte: limpia control, sostiene al equipo y sobrevive al foco."
        }
      ]
    }
  },
  {
    "id": "seven",
    "name": "Seven",
    "title": "La Tormenta Viviente",
    "role": "Carry",
    "difficulty": "Fácil",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/seven.png",
    "description": "Seven es un héroe feroz y electrizante con una amplia gama de ataques eléctricos y habilidades para aturdir y electrocutar a sus oponentes. Un científico megalómano que escapó de su propia ejecución mediante el asesinato de sus captores, desea alcanzar la \"apoteosis\" completando el ritual.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Lightning Ball y Static Charge, con Storm Cloud como herramienta decisiva.",
    "stats": {
      "dps": 62.97,
      "bulletDamage": 10.8,
      "magazineSize": 29,
      "fireRate": "5.831 rps",
      "maxHealth": 730,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Lightning Ball",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Dispara una bola de relámpago que viaja en línea recta.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Static Charge",
        "type": "Activa",
        "cooldown": "42s",
        "description": "Aplica una carga a un héroe enemigo objetivo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Power Surge",
        "type": "Activa",
        "cooldown": "50s",
        "description": "Mejora tu arma con un efecto de choque, haciendo que tus balas provoquen daño por choque en tu objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Storm Cloud",
        "type": "Canalizada",
        "cooldown": "205s",
        "description": "Canaliza una nube de tormenta en expansión a tu alrededor que daña a todos los enemigos dentro de su radio.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo."
      ],
      "itemCounters": [
        {
          "itemId": "ethereal-shift",
          "priority": "Esencial",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Seven.",
          "countersAbility": "Lightning Ball"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Seven.",
          "countersAbility": "Lightning Ball"
        },
        {
          "itemId": "majestic-leap",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te saca del área y te da un escudo; rompe el setup de Seven.",
          "countersAbility": "Lightning Ball"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Seven quiere matarte.",
          "countersAbility": "Lightning Ball"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Seven, incluidos control y daño prolongado.",
          "countersAbility": "Lightning Ball"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Seven: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Seven pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Seven: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Seven pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Seven: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Seven pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Seven, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Seven, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Seven, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Lightning Ball para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Seven pierde mucho valor cuando lo flanquean.",
        "Guarda Static Charge para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Storm Cloud pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Lightning Ball.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Lightning Ball — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Power Surge — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Static Charge — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Storm Cloud siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Lightning Ball → Static Charge → básicos → Storm Cloud",
          "explanation": "Abre con Lightning Ball para fijar o exponer al objetivo, sigue con Static Charge y usa Storm Cloud cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Static Charge → Lightning Ball → Storm Cloud",
          "explanation": "Fuerza la respuesta con Static Charge, encadena Lightning Ball y cierra con Storm Cloud. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Power Surge → Static Charge",
          "explanation": "Usa Power Surge para sobrevivir al primer control y Static Charge para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "shiv",
    "name": "Shiv",
    "title": "La Hoja Sangrienta",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/shiv.png",
    "description": "Shiv es un héroe sangriento que golpea y huye y puede atravesar rápidamente el campo de batalla con el retroceso de su escopeta para desangrar a sus enemigos y asestar un golpe mortal. Shiv, un ex criminal, busca compensar sus errores cazando monstruos en nombre de la Sociedad Baxter y demostrar su valía en el Ritual.",
    "playstyleOverview": "Asesino de flanqueo: espera a que el enemigo use su control y elimina objetivos aislados. Evita ser el primero en entrar. Su kit gira en torno a Serrated Knives y Slice and Dice, con Killing Blow como herramienta decisiva.",
    "stats": {
      "dps": 52.25,
      "bulletDamage": 4.8,
      "magazineSize": 10,
      "fireRate": "1.814 rps",
      "maxHealth": 830,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.5 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Serrated Knives",
        "type": "Activa",
        "cooldown": "16s",
        "description": "Lanza un cuchillo que desangra a un enemigo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Slice and Dice",
        "type": "Activa",
        "cooldown": "16s",
        "description": "Realiza una carrera hacia adelante, dañando a los enemigos a lo largo del camino.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Bloodletting",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Reciba solo una parte del daño recibido de inmediato y posponga el resto para que se absorba con el tiempo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Killing Blow",
        "type": "Activa",
        "cooldown": "145s",
        "description": "Activo: Salta hacia adelante, causando Daño Espiritual al primer héroe enemigo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "Cheat Death o Ethereal Shift niegan la ejecución; úsalos cuando tu salud baje del umbral."
      ],
      "itemCounters": [
        {
          "itemId": "metal-skin",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Inmunidad a balas durante la ventana de ráfaga de Shiv.",
          "countersAbility": "Serrated Knives"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Shiv quiere matarte.",
          "countersAbility": "Serrated Knives"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Shiv.",
          "countersAbility": "Serrated Knives"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Shiv, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Serrated Knives"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Shiv, incluidos control y daño prolongado.",
          "countersAbility": "Serrated Knives"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Shiv: sus casteos largos y su poca salud le deja expuesto a que Shiv pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Shiv: sus casteos largos y su poca salud le deja expuesto a que Shiv pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Shiv: su escaso daño en duelos individuales le deja expuesto a que Shiv pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Shiv, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Shiv, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "billy",
          "advantage": "Débil Contra",
          "reason": "Billy puede pelear en corto y ganar el intercambio de daño mejor que Shiv, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Serrated Knives para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Shiv pierde mucho valor cuando lo flanquean.",
        "Guarda Slice and Dice para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Killing Blow pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Serrated Knives.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Serrated Knives — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Bloodletting — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Slice and Dice — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Killing Blow siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Serrated Knives → Slice and Dice → básicos → Killing Blow",
          "explanation": "Abre con Serrated Knives para fijar o exponer al objetivo, sigue con Slice and Dice y usa Killing Blow cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Slice and Dice → Serrated Knives → Killing Blow",
          "explanation": "Fuerza la respuesta con Slice and Dice, encadena Serrated Knives y cierra con Killing Blow. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Bloodletting → Slice and Dice",
          "explanation": "Usa Bloodletting para sobrevivir al primer control y Slice and Dice para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "close-quarters",
            "extra-health",
            "melee-lifesteal",
            "sprint-boots"
          ],
          "notes": "Domina el cuerpo a cuerpo y usa tus golpes para sostenerte en línea."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "melee-charge",
            "bullet-lifesteal",
            "fleetfoot",
            "reactive-barrier"
          ],
          "notes": "Mezcla daño y resistencia. Busca intercambios cortos donde tus golpes peguen primero."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crushing-fists",
            "siphon-bullets",
            "colossus",
            "escalating-resilience"
          ],
          "notes": "Conviértete en amenaza de primera línea; tus golpes pesados deben castigar a los carries."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "runed-gauntlets",
            "leech",
            "juggernaut",
            "frenzy"
          ],
          "notes": "Cierre de bruiser: entra, golpea y aguanta. Frenzy se activa justo cuando te enfocan."
        }
      ]
    }
  },
  {
    "id": "silver",
    "name": "Silver",
    "title": "La Cazadora Licántropa",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/silver.png",
    "description": "Silver es una heroína lobuna y transformadora con una escopeta precisa, las herramientas de un cazarrecompensas y una maldición lycan que *jura* tener bajo control. Se gana la vida persiguiendo a los delincuentes, pero hoy el licántropo misántropo de Nueva York planea invocar a un dios.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Slam Fire y Boot Kick, con Lycan Curse como herramienta decisiva.",
    "stats": {
      "dps": 42,
      "bulletDamage": 5.1,
      "magazineSize": 7,
      "fireRate": "1.177 rps",
      "maxHealth": 830,
      "healthRegen": "3/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Slam Fire",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Recarga tu arma al instante.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Boot Kick",
        "type": "Activa",
        "cooldown": "21s",
        "description": "Corre hacia adelante y patea al primer enemigo golpeado, infligiéndole daño cuerpo a cuerpo mientras te empujas y lo marcas.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Entangling Bola",
        "type": "Activa",
        "cooldown": "23s",
        "description": "Lanza una bola, que inflige Daño Espiritual, aplica ralentización y previene habilidades de movimiento o resistencia.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Lycan Curse",
        "type": "Pasiva",
        "description": "Pasiva: Infligir daño genera sed de sangre, que aumenta con poca salud.",
        "counterTip": "Es una pasiva permanente: no tiene enfriamiento, así que juega alrededor de su efecto en vez de esperar una ventana."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Presiónalo temprano y compra Metal Skin si depende de ráfagas de balas; no le regales peleas largas."
      ],
      "itemCounters": [
        {
          "itemId": "slowing-hex",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Ralentiza y silencia la movilidad de Silver, impidiendo que entre o escape.",
          "countersAbility": "Slam Fire"
        },
        {
          "itemId": "knockdown",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Aturde tras 2 s y aumenta la gravedad: fija a Silver y corta su movilidad o su escape.",
          "countersAbility": "Slam Fire"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Silver: apaga su ventana de daño o su escape.",
          "countersAbility": "Slam Fire"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Silver te elimine antes de reaccionar.",
          "countersAbility": "Slam Fire"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Silver y aumenta bajo el 50% de salud.",
          "countersAbility": "Slam Fire"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Silver: sus casteos largos y su poca salud le deja expuesto a que Silver pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Silver: sus casteos largos y su poca salud le deja expuesto a que Silver pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Silver: su escaso daño en duelos individuales le deja expuesto a que Silver pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Silver, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Silver, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Silver, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Slam Fire para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Silver pierde mucho valor cuando lo flanquean.",
        "Guarda Boot Kick para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Lycan Curse pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Slam Fire.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Slam Fire — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Boot Kick — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Entangling Bola — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Lycan Curse siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Slam Fire → Boot Kick → básicos → Lycan Curse",
          "explanation": "Abre con Slam Fire para fijar o exponer al objetivo, sigue con Boot Kick y usa Lycan Curse cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Boot Kick → Slam Fire → Lycan Curse",
          "explanation": "Fuerza la respuesta con Boot Kick, encadena Slam Fire y cierra con Lycan Curse. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Entangling Bola → Boot Kick",
          "explanation": "Usa Entangling Bola para sobrevivir al primer control y Boot Kick para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "sinclair",
    "name": "Sinclair",
    "title": "El Mago de Dos Almas",
    "role": "Mago de Control",
    "difficulty": "Experto",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/sinclair.png",
    "description": "Sinclair es un héroe mago astuto con una multitud de hechizos desconcertantes y sorprendentes para confundir a sus oponentes. Henry y Savannah, dos almas de magos unidas para siempre en un matrimonio desagradable, usan el título compartido de Sinclair para buscar una manera de finalmente separarse y encontrar la paz en el más allá.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Vexing Bolt y Spectral Assistant, con Audience Participation como herramienta decisiva.",
    "stats": {
      "dps": 44.9,
      "bulletDamage": 16.5,
      "magazineSize": 16,
      "fireRate": "2.721 rps",
      "maxHealth": 730,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Vexing Bolt",
        "type": "Activa",
        "cooldown": "24s",
        "description": "Dispara un rayo mágico que causa daño y aumenta a medida que viaja.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Spectral Assistant",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Invoca a un asistente en la ubicación objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Rabbit Hex",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Hecha un área objetivo y transforma a todos los enemigos en un Conejo por un tiempo limitado.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Audience Participation",
        "type": "Activa",
        "cooldown": "85s",
        "description": "Copia el Ultimate de un héroe enemigo por tiempo limitado.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Dispel Magic y Debuff Reducer acortan las maldiciones; Counterspell puede negar la habilidad clave.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Limpia invocaciones con daño en área (Ricochet, Tesla Bullets) antes de pelear contra el héroe.",
        "No uses tu ultimate sin pensar: puede copiarla. Guarda Counterspell o Silence Wave para su ventana de casteo."
      ],
      "itemCounters": [
        {
          "itemId": "debuff-reducer",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Sinclair, incluidos control y daño prolongado.",
          "countersAbility": "Vexing Bolt"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Sinclair, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Vexing Bolt"
        },
        {
          "itemId": "counterspell",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Puedes negar con parry la habilidad o ítem clave de Sinclair y curarte al hacerlo.",
          "countersAbility": "Vexing Bolt"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Sinclair te elimine antes de reaccionar.",
          "countersAbility": "Vexing Bolt"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Sinclair y aumenta bajo el 50% de salud.",
          "countersAbility": "Vexing Bolt"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Sinclair: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Sinclair pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Sinclair: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Sinclair pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Sinclair: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Sinclair pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Sinclair, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Sinclair, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Sinclair, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Vexing Bolt para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Sinclair pierde mucho valor cuando lo flanquean.",
        "Guarda Spectral Assistant para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Audience Participation pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Vexing Bolt.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Vexing Bolt — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Spectral Assistant — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Rabbit Hex — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Audience Participation siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Vexing Bolt → Spectral Assistant → básicos → Audience Participation",
          "explanation": "Abre con Vexing Bolt para fijar o exponer al objetivo, sigue con Spectral Assistant y usa Audience Participation cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Spectral Assistant → Vexing Bolt → Audience Participation",
          "explanation": "Fuerza la respuesta con Spectral Assistant, encadena Vexing Bolt y cierra con Audience Participation. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Rabbit Hex → Spectral Assistant",
          "explanation": "Usa Rabbit Hex para sobrevivir al primer control y Spectral Assistant para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "solomon",
    "name": "Solomon",
    "title": "El Ajedrecista",
    "role": "Mago de Control",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/solomon.png",
    "description": "Solomon es un héroe maestro de ajedrez estratégico que guía a sus alfiles, caballos y torres en una pelea antes de dejar caer a la reina en un jaque mate definitivo. Como jugador de ajedrez desde hace mucho tiempo en Central Park, se unió al Ritual para evitar que el poder de los Patrones cayera en las manos equivocadas.",
    "playstyleOverview": "Invocador de zona: crea presión constante con invocaciones y controla espacios. Mantén tus invocaciones activas antes de pelear. Su kit gira en torno a Setup Bishop y Kingside Knight, con Develop Queen como herramienta decisiva.",
    "stats": {
      "dps": 50,
      "bulletDamage": 25,
      "magazineSize": 8,
      "fireRate": "2 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.7 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Setup Bishop",
        "type": "Activa",
        "cooldown": "12s",
        "description": "Crear un obispo que permanezca en su lugar indefinidamente.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Kingside Knight",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Promueve a un aliado para que sea caballero, lo que le otorga resistencia y barrera adicionales durante un tiempo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Rook Battery",
        "type": "Activa",
        "cooldown": "33s",
        "description": "Libera un par de torres que viajan hacia adelante, causando Daño Espiritual y aplicando inmovilización.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Develop Queen",
        "type": "Activa",
        "cooldown": "240s",
        "description": "Invoca una reina que se derrumba e inflige Daño Espiritual en un área.",
        "counterTip": "No pelees dentro de su área: obliga a que gaste la habilidad al aire."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Limpia invocaciones con daño en área (Ricochet, Tesla Bullets) antes de pelear contra el héroe.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "ricochet",
          "priority": "Esencial",
          "timing": "Late Game",
          "counterExplanation": "Limpia las invocaciones de Solomon y aplica tus efectos de bala a varios objetivos.",
          "countersAbility": "Setup Bishop"
        },
        {
          "itemId": "tesla-bullets",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El daño en cadena elimina invocaciones y presiona a Solomon cuando se esconde detrás de ellas.",
          "countersAbility": "Setup Bishop"
        },
        {
          "itemId": "alchemical-fire",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "El área reduce Resistencia a Balas y limpia invocaciones; castiga la zona que crea Solomon.",
          "countersAbility": "Setup Bishop"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Solomon quiere matarte.",
          "countersAbility": "Setup Bishop"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Solomon, incluidos control y daño prolongado.",
          "countersAbility": "Setup Bishop"
        }
      ],
      "heroCounters": [
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Solomon: su escaso daño en duelos individuales le deja expuesto a que Solomon pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "ivy",
          "advantage": "Fuerte Contra",
          "reason": "Ivy sufre ante Solomon: su escaso daño en duelos individuales le deja expuesto a que Solomon pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "kelvin",
          "advantage": "Fuerte Contra",
          "reason": "Kelvin sufre ante Solomon: su escaso daño en duelos individuales le deja expuesto a que Solomon pueda crear presión constante con invocaciones."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Solomon, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Solomon, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        },
        {
          "heroId": "dynamo",
          "advantage": "Débil Contra",
          "reason": "Dynamo puede sostener a su equipo y negar la eliminación mejor que Solomon, sobre todo porque su dependencia de invocaciones y enfriamientos limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Setup Bishop para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Solomon pierde mucho valor cuando lo flanquean.",
        "Guarda Kingside Knight para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de Poder Espiritual."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Develop Queen pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Setup Bishop.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Setup Bishop — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Rook Battery — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Kingside Knight — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Develop Queen siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Setup Bishop → Kingside Knight → básicos → Develop Queen",
          "explanation": "Abre con Setup Bishop para fijar o exponer al objetivo, sigue con Kingside Knight y usa Develop Queen cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Kingside Knight → Setup Bishop → Develop Queen",
          "explanation": "Fuerza la respuesta con Kingside Knight, encadena Setup Bishop y cierra con Develop Queen. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Rook Battery → Kingside Knight",
          "explanation": "Usa Rook Battery para sobrevivir al primer control y Kingside Knight para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-spirit",
            "mystic-burst",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Aprovecha tus picos de nivel 2 y 3. Farmea con habilidades y evita intercambios largos de arma."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "improved-spirit",
            "mystic-vulnerability",
            "compress-cooldown",
            "enduring-speed"
          ],
          "notes": "Encadena control con daño. Reduce enfriamientos para tener una segunda rotación en cada pelea."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "boundless-spirit",
            "escalating-exposure",
            "surge-of-power",
            "spirit-burn"
          ],
          "notes": "Cada habilidad debe amenazar una eliminación. Busca objetivos sin resistencia espiritual."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "refresher",
            "echo-shard",
            "mystic-reverb",
            "leech"
          ],
          "notes": "Build de doble rotación: Refresher y Echo Shard te dan una segunda ventana de combo."
        }
      ]
    }
  },
  {
    "id": "venator",
    "name": "Venator",
    "title": "El Cazador del Vaticano",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/venator.png",
    "description": "Venator es un héroe implacable y justo que usa trampas y explosivos para debilitar a sus enemigos y un rifle de asalto y una ballesta bendita para eliminar a los enemigos del Vaticano. El padre Quinn Rourke representa la justa ira y furia de los Venators de San Benito, enviados para aniquilar el mal que se agita en Nueva York.",
    "playstyleOverview": "Tirador de largo alcance: castiga desde ángulos seguros y controla objetivos con daño constante. Necesita visión y buen posicionamiento. Su kit gira en torno a Consecrating Grenade y Gutshot, con Ira Domini como herramienta decisiva.",
    "stats": {
      "dps": 63.49,
      "bulletDamage": 8,
      "magazineSize": 33,
      "fireRate": "7.937 rps",
      "maxHealth": 820,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.4 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Consecrating Grenade",
        "type": "Activa",
        "cooldown": "25s",
        "description": "Dispara una granada que rebota antes de explotar, causando daño con el arma y prendiendo fuego a los enemigos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Gutshot",
        "type": "Activa",
        "cooldown": "23s",
        "description": "Dispara una ráfaga con tu escopeta, infligiendo daño con el arma y haciendo retroceder a los enemigos.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Hex-Lined Snap Trap",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Patea una trampa que se arma después de un breve retraso.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Ira Domini",
        "type": "Activa",
        "cooldown": "160s",
        "description": "Carga tu ballesta con 3 estacas, lo que inflige un Daño de Arma enormemente aumentado.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "No camines por zonas sin visión. Dispel Magic y Warp Stone te sacan de la trampa y del follow-up.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal."
      ],
      "itemCounters": [
        {
          "itemId": "debuff-reducer",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Venator, incluidos control y daño prolongado.",
          "countersAbility": "Consecrating Grenade"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Venator.",
          "countersAbility": "Consecrating Grenade"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Venator, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Consecrating Grenade"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Venator y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Consecrating Grenade"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Venator te elimine antes de reaccionar.",
          "countersAbility": "Consecrating Grenade"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Venator: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Venator pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Venator: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Venator pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Venator: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Venator pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Venator, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Venator, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Venator, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Consecrating Grenade para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Venator pierde mucho valor cuando lo flanquean.",
        "Guarda Gutshot para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Ira Domini pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Consecrating Grenade.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Consecrating Grenade — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Hex-Lined Snap Trap — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Gutshot — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Ira Domini siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Consecrating Grenade → Gutshot → básicos → Ira Domini",
          "explanation": "Abre con Consecrating Grenade para fijar o exponer al objetivo, sigue con Gutshot y usa Ira Domini cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Gutshot → Consecrating Grenade → Ira Domini",
          "explanation": "Fuerza la respuesta con Gutshot, encadena Consecrating Grenade y cierra con Ira Domini. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Hex-Lined Snap Trap → Gutshot",
          "explanation": "Usa Hex-Lined Snap Trap para sobrevivir al primer control y Gutshot para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "victor",
    "name": "Victor",
    "title": "El Muerto que Camina",
    "role": "Brawler",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/victor.png",
    "description": "Víctor es un héroe reanimado e implacable que camina en la línea entre la vida y la muerte, agradeciendo el daño recibido e infligiendo sufrimiento a sus enemigos. Después de despertarse en una mesa mortuoria sin recuerdos, Víctor no quiere nada más que descubrir quién lo hizo y de quién está hecho.",
    "playstyleOverview": "Tanque de primera línea: absorbe presión, abre espacio y obliga al equipo enemigo a gastar recursos en ti. Busca peleas prolongadas y protege a tus carries. Su kit gira en torno a Pain Battery y Jumpstart, con Shocking Reanimation como herramienta decisiva.",
    "stats": {
      "dps": 70.18,
      "bulletDamage": 12,
      "magazineSize": 24,
      "fireRate": "5.051 rps",
      "maxHealth": 800,
      "healthRegen": "1.5/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.3 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Pain Battery",
        "type": "Activa",
        "cooldown": "2s",
        "description": "Recibir cualquier daño carga pasivamente tu batería de dolor.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "2",
        "name": "Jumpstart",
        "type": "Activa",
        "cooldown": "30s",
        "description": "Inflige Daño Espiritual a ti mismo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Aura of Suffering",
        "type": "Activa",
        "cooldown": "2s",
        "description": "Desata el dolor, causando Daño Espiritual a lo largo del tiempo tanto a los enemigos como a ti mismo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Shocking Reanimation",
        "type": "Activa",
        "cooldown": "240s",
        "description": "Libera una ola después de recibir daño letal, aplicando una ralentización decreciente.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Toxic Bullets, Decay y Tankbuster convierten su salud en una desventaja; no intentes ganarle por daño bruto.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja.",
        "La reducción de curación y Decay frenan la recuperación; remátalo antes de que su equipo llegue."
      ],
      "itemCounters": [
        {
          "itemId": "toxic-bullets",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Victor.",
          "countersAbility": "Pain Battery"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Victor por acumular vida y regeneración.",
          "countersAbility": "Pain Battery"
        },
        {
          "itemId": "tankbuster",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño espiritual extra que ignora Resistencia Espiritual: ideal contra la salud alta de Victor.",
          "countersAbility": "Pain Battery"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Victor, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Pain Battery"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Victor, incluidos control y daño prolongado.",
          "countersAbility": "Pain Battery"
        }
      ],
      "heroCounters": [
        {
          "heroId": "apollo",
          "advantage": "Fuerte Contra",
          "reason": "Apollo sufre ante Victor: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Victor pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Victor: su ventana de daño corta y su baja salud le deja expuesto a que Victor pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "deadman-danny",
          "advantage": "Fuerte Contra",
          "reason": "Deadman Danny sufre ante Victor: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Victor pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Victor, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Victor, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "graves",
          "advantage": "Débil Contra",
          "reason": "Graves puede crear presión constante con invocaciones mejor que Victor, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Pain Battery para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Victor pierde mucho valor cuando lo flanquean.",
        "Guarda Jumpstart para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Shocking Reanimation pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Pain Battery.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Pain Battery — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Aura of Suffering — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Jumpstart — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Shocking Reanimation siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Pain Battery → Jumpstart → básicos → Shocking Reanimation",
          "explanation": "Abre con Pain Battery para fijar o exponer al objetivo, sigue con Jumpstart y usa Shocking Reanimation cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Jumpstart → Pain Battery → Shocking Reanimation",
          "explanation": "Fuerza la respuesta con Jumpstart, encadena Pain Battery y cierra con Shocking Reanimation. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Aura of Suffering → Jumpstart",
          "explanation": "Usa Aura of Suffering para sobrevivir al primer control y Jumpstart para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "sprint-boots",
            "melee-lifesteal"
          ],
          "notes": "Aguanta la línea y tradea con sustain. No persigas kills que te alejen de tu carry."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "battle-vest",
            "bullet-resilience",
            "healbane",
            "fortitude"
          ],
          "notes": "Empieza a iniciar peleas cortas. Healbane también sirve para negar el sustain enemigo."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "siphon-bullets",
            "plated-armor",
            "juggernaut"
          ],
          "notes": "Tu trabajo es absorber cooldowns. Colossus convierte tu tamaño en control de zona."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "leech",
            "unstoppable",
            "cheat-death",
            "inhibitor"
          ],
          "notes": "Build de frontline completa: sé el último en morir y aplica reducción de daño y curación."
        }
      ]
    }
  },
  {
    "id": "vindicta",
    "name": "Vindicta",
    "title": "La Francotiradora Espectral",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Hitscan Preciso",
    "avatarUrl": "/heroes/vindicta.png",
    "description": "Vindicta es una heroína tiradora flotante que ataca objetivos con sangrías y ataduras antes de eliminarlos a distancia con su poderoso rifle.",
    "playstyleOverview": "Tirador de largo alcance: castiga desde ángulos seguros y controla objetivos con daño constante. Necesita visión y buen posicionamiento. Su kit gira en torno a Stake y Flight, con Assassinate como herramienta decisiva.",
    "stats": {
      "dps": 53.38,
      "bulletDamage": 12.33,
      "magazineSize": 19,
      "fireRate": "4.329 rps",
      "maxHealth": 755,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.9 m/s",
      "stamina": 2
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Stake",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Lanza una estaca que ata a los enemigos al lugar donde aterriza la estaca.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Flight",
        "type": "Activa",
        "cooldown": "42s",
        "description": "Salta al aire y vuela.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Crow Familiar",
        "type": "Activa",
        "cooldown": "32s",
        "description": "Tu cuervo familiar inflige daño por impacto, reduce su Resistencia a Balas y aplica un sangrado que inflige daño según la salud actual del objetivo.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "4 (Ult)",
        "name": "Assassinate",
        "type": "Activa",
        "cooldown": "55s",
        "description": "Utilice su rifle con mira telescópica para disparar un tiro potente a largas distancias.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Juega con coberturas y compra escudos temprano. No cruces líneas largas sin visión del tirador.",
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal.",
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Cheat Death o Ethereal Shift niegan la ejecución; úsalos cuando tu salud baje del umbral."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Vindicta quiere matarte.",
          "countersAbility": "Stake"
        },
        {
          "itemId": "weapon-shielding",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Genera un escudo al recibir daño de arma importante, justo lo que necesita Vindicta para ejecutarte.",
          "countersAbility": "Stake"
        },
        {
          "itemId": "fortitude",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Regeneración fuerte tras salir de combate: recuperas la vida que Vindicta intenta quitarte por poke.",
          "countersAbility": "Stake"
        },
        {
          "itemId": "healing-rite",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Regeneración y velocidad sostenidas para aguantar el poke de Vindicta en línea.",
          "countersAbility": "Stake"
        },
        {
          "itemId": "dispel-magic",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Vindicta, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Stake"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Vindicta: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Vindicta pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Vindicta: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Vindicta pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Vindicta: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Vindicta pueda castigar desde lejos antes de que se acerque."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Vindicta, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "bebop",
          "advantage": "Débil Contra",
          "reason": "Bebop puede iniciar el combate y fijar al objetivo mejor que Vindicta, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        },
        {
          "heroId": "calico",
          "advantage": "Débil Contra",
          "reason": "Calico puede entrar por el flanco y cerrar la eliminación rápido mejor que Vindicta, sobre todo porque su vulnerabilidad cuando le presionan de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Stake para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Vindicta pierde mucho valor cuando lo flanquean.",
        "Guarda Flight para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Assassinate pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Stake.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Stake — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Crow Familiar — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Flight — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Assassinate siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Stake → Flight → básicos → Assassinate",
          "explanation": "Abre con Stake para fijar o exponer al objetivo, sigue con Flight y usa Assassinate cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Flight → Stake → Assassinate",
          "explanation": "Fuerza la respuesta con Flight, encadena Stake y cierra con Assassinate. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Crow Familiar → Flight",
          "explanation": "Usa Crow Familiar para sobrevivir al primer control y Flight para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "high-velocity-rounds",
            "extra-health",
            "sprint-boots",
            "headshot-booster"
          ],
          "notes": "Juega con coberturas y castiga sin exponerte. No cruces el río sin visión."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "long-range",
            "sharpshooter",
            "bullet-lifesteal",
            "fleetfoot"
          ],
          "notes": "Aumenta tu rango efectivo y mantén una ruta de escape lateral."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crippling-headshot",
            "glass-cannon",
            "spiritual-overflow",
            "titanic-magazine"
          ],
          "notes": "Cada disparo a la cabeza debe reducir resistencias; prioriza objetivos sin escudos."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "infinite-rounds",
            "leech",
            "silencer",
            "cheat-death"
          ],
          "notes": "Cierre de tirador: daño máximo y una defensa de emergencia para los dive enemigos."
        }
      ]
    }
  },
  {
    "id": "violet",
    "name": "Violet",
    "title": "La Artista del Ritual",
    "role": "Mago de Control",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/violet.png",
    "description": "Violet es una heroína ágil y artística que utiliza su pintura y su talento para doblegar el Ritual a su voluntad. Con tinta y pintura, puede potenciar a sus aliados con un solo golpe y perturbar a sus enemigos con otro.",
    "playstyleOverview": "Mago de control: gana peleas con daño en área y utilidad. Mantén distancia y encadena tu control con el de tu equipo. Su kit gira en torno a Living Ink y Flow State, con Abstract Landscape como herramienta decisiva.",
    "stats": {
      "dps": 46.16,
      "bulletDamage": 30,
      "magazineSize": 15,
      "fireRate": "1.539 rps",
      "maxHealth": 710,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.9 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Living Ink",
        "type": "Activa",
        "cooldown": "22s",
        "description": "Empoderar (Habilidad 1): Tus siguientes 3 balas cobran vida, lo que te permite dirigirlas mientras viajan.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Flow State",
        "type": "Activa",
        "cooldown": "23s",
        "description": "Arrastra un pincel que continúa avanzando, dejando un rastro que otorga una distancia de deslizamiento adicional para los aliados y una ralentización que se desvanece y Daño Espiritual a los enemigos por los que pasa, que aumenta a medida que viaja.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "3",
        "name": "Still Life",
        "type": "Activa",
        "cooldown": "35s",
        "description": "Elige un héroe para que sea tu sujeto, causando Daño Espiritual a lo largo del tiempo mientras lo mires.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Abstract Landscape",
        "type": "Activa",
        "cooldown": "180s",
        "description": "Crea una muestra circular de tinta que bloquea la visión y otorga espíritu a los aliados.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sostén la línea con regeneración y escudos; cada punto de vida cuenta antes de la pelea principal.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Juega cerca de tu equipo y usa visión propia; Return Fire y Knockdown castigan la reaparición.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Violet quiere matarte.",
          "countersAbility": "Living Ink"
        },
        {
          "itemId": "fortitude",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Regeneración fuerte tras salir de combate: recuperas la vida que Violet intenta quitarte por poke.",
          "countersAbility": "Living Ink"
        },
        {
          "itemId": "healing-rite",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Regeneración y velocidad sostenidas para aguantar el poke de Violet en línea.",
          "countersAbility": "Living Ink"
        },
        {
          "itemId": "enduring-speed",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Reduce las ralentizaciones de Violet y mantiene tu Velocidad de Movimiento para kitearte.",
          "countersAbility": "Living Ink"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Violet, incluidos control y daño prolongado.",
          "countersAbility": "Living Ink"
        }
      ],
      "heroCounters": [
        {
          "heroId": "abrams",
          "advantage": "Fuerte Contra",
          "reason": "Abrams sufre ante Violet: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Violet pueda controlar la zona con daño en área."
        },
        {
          "heroId": "baba",
          "advantage": "Fuerte Contra",
          "reason": "Baba sufre ante Violet: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Violet pueda controlar la zona con daño en área."
        },
        {
          "heroId": "billy",
          "advantage": "Fuerte Contra",
          "reason": "Billy sufre ante Violet: su necesidad de estar en rango corto para hacer daño le deja expuesto a que Violet pueda controlar la zona con daño en área."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Violet, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "apollo",
          "advantage": "Débil Contra",
          "reason": "Apollo puede moverse alrededor del combate y golpear en el momento justo mejor que Violet, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Violet, sobre todo porque sus casteos largos y su poca salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Juega detrás de una cobertura y cambia de ángulo después de cada disparo.",
        "No te quedes quieto en la misma línea: un buen flanco obliga a gastar movilidad.",
        "Mantén una ruta de escape hacia tu equipo antes de buscar daño."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Living Ink para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Violet pierde mucho valor cuando lo flanquean.",
        "Guarda Flow State para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Abstract Landscape pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Living Ink.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Living Ink — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Still Life — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Flow State — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Abstract Landscape siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Living Ink → Flow State → básicos → Abstract Landscape",
          "explanation": "Abre con Living Ink para fijar o exponer al objetivo, sigue con Flow State y usa Abstract Landscape cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Flow State → Living Ink → Abstract Landscape",
          "explanation": "Fuerza la respuesta con Flow State, encadena Living Ink y cierra con Abstract Landscape. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Still Life → Flow State",
          "explanation": "Usa Still Life para sobrevivir al primer control y Flow State para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "mystic-shot",
            "extra-spirit",
            "extra-health",
            "sprint-boots"
          ],
          "notes": "Mezcla poke de habilidad y arma; no dependas de una sola fuente de daño."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "opening-rounds",
            "spirit-shredder",
            "improved-spirit",
            "kinetic-dash"
          ],
          "notes": "Reduce resistencias y convierte tus básicos en daño espiritual sostenido."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "spiritual-overflow",
            "escalating-exposure",
            "burst-fire",
            "boundless-spirit"
          ],
          "notes": "Tu pico llega con el combo completo; busca peleas donde puedas castear dos rotaciones."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "mercurial-magnum",
            "leech",
            "refresher",
            "glass-cannon"
          ],
          "notes": "Build híbrida de cierre: daño de arma y espiritual con una segunda rotación."
        }
      ]
    }
  },
  {
    "id": "viscous",
    "name": "Viscous",
    "title": "La Marea de Limo",
    "role": "Brawler",
    "difficulty": "Media",
    "attackType": "Ráfaga de Espíritu",
    "avatarUrl": "/heroes/viscous.png",
    "description": "Viscous es un héroe verde de goma 4 con un traje protoplásmico que puede usar una sustancia pegajosa para cubrir el campo de batalla, a sí mismo, a sus amigos y enemigos para apoyar y amenazar a su antojo.",
    "playstyleOverview": "Tanque de primera línea: absorbe presión, abre espacio y obliga al equipo enemigo a gastar recursos en ti. Busca peleas prolongadas y protege a tus carries. Su kit gira en torno a Splatter y The Cube, con Goo Ball como herramienta decisiva.",
    "stats": {
      "dps": 49.24,
      "bulletDamage": 10.34,
      "magazineSize": 20,
      "fireRate": "4.762 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Splatter",
        "type": "Activa",
        "cooldown": "26s",
        "description": "Lanza una bola de sustancia viscosa que causa daño y deja charcos de sustancia viscosa que ralentizan el movimiento de los enemigos en el radio.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "The Cube",
        "type": "Activa",
        "cooldown": "42s",
        "description": "Encierra al objetivo en un cubo de sustancia viscosa reconstituyente que lo protege del daño y aumenta la regeneración de salud.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      },
      {
        "slot": "3",
        "name": "Puddle Punch",
        "type": "Activa",
        "cooldown": "24s",
        "description": "Materializa un puño en el mundo que golpea a todos los que se encuentran en el área, aplicando knockup.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Goo Ball",
        "type": "Activa",
        "cooldown": "150s",
        "description": "Transfórmate en una gran bola viscosa que causa daño y aturde a los enemigos al impactar.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Toxic Bullets, Decay y Tankbuster convierten su salud en una desventaja; no intentes ganarle por daño bruto.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja."
      ],
      "itemCounters": [
        {
          "itemId": "toxic-bullets",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Aplica sangrado porcentual y reducción de curación: ideal contra la salud alta y el sustain de Viscous.",
          "countersAbility": "Splatter"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Viscous por acumular vida y regeneración.",
          "countersAbility": "Splatter"
        },
        {
          "itemId": "tankbuster",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño espiritual extra que ignora Resistencia Espiritual: ideal contra la salud alta de Viscous.",
          "countersAbility": "Splatter"
        },
        {
          "itemId": "ethereal-shift",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Te vuelve invulnerable el tiempo suficiente para salir del combo en área de Viscous.",
          "countersAbility": "Splatter"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Viscous.",
          "countersAbility": "Splatter"
        }
      ],
      "heroCounters": [
        {
          "heroId": "apollo",
          "advantage": "Fuerte Contra",
          "reason": "Apollo sufre ante Viscous: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Viscous pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "calico",
          "advantage": "Fuerte Contra",
          "reason": "Calico sufre ante Viscous: su ventana de daño corta y su baja salud le deja expuesto a que Viscous pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "deadman-danny",
          "advantage": "Fuerte Contra",
          "reason": "Deadman Danny sufre ante Viscous: su sostenibilidad limitada en peleas prolongadas le deja expuesto a que Viscous pueda absorber el daño y forzar peleas prolongadas."
        },
        {
          "heroId": "celeste",
          "advantage": "Débil Contra",
          "reason": "Celeste puede controlar la zona con daño en área mejor que Viscous, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Débil Contra",
          "reason": "The Doorman puede controlar la zona con daño en área mejor que Viscous, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        },
        {
          "heroId": "graves",
          "advantage": "Débil Contra",
          "reason": "Graves puede crear presión constante con invocaciones mejor que Viscous, sobre todo porque su movilidad limitada y su dependencia de pelear de cerca limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Splatter para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Viscous pierde mucho valor cuando lo flanquean.",
        "Guarda The Cube para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Goo Ball pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Splatter.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Splatter — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Puddle Punch — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: The Cube — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Goo Ball siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Splatter → The Cube → básicos → Goo Ball",
          "explanation": "Abre con Splatter para fijar o exponer al objetivo, sigue con The Cube y usa Goo Ball cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "The Cube → Splatter → Goo Ball",
          "explanation": "Fuerza la respuesta con The Cube, encadena Splatter y cierra con Goo Ball. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Puddle Punch → The Cube",
          "explanation": "Usa Puddle Punch para sobrevivir al primer control y The Cube para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-regen",
            "sprint-boots",
            "melee-lifesteal"
          ],
          "notes": "Aguanta la línea y tradea con sustain. No persigas kills que te alejen de tu carry."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "battle-vest",
            "bullet-resilience",
            "healbane",
            "fortitude"
          ],
          "notes": "Empieza a iniciar peleas cortas. Healbane también sirve para negar el sustain enemigo."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "siphon-bullets",
            "plated-armor",
            "juggernaut"
          ],
          "notes": "Tu trabajo es absorber cooldowns. Colossus convierte tu tamaño en control de zona."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "leech",
            "unstoppable",
            "cheat-death",
            "inhibitor"
          ],
          "notes": "Build de frontline completa: sé el último en morir y aplica reducción de daño y curación."
        }
      ]
    }
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "title": "La Víbora del Barrio",
    "role": "Carry",
    "difficulty": "Media",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/vyper.png",
    "description": "Vyper es un héroe resbaladizo y venenoso con una alegre inclinación hacia el crimen y una variedad de herramientas para ser mejores objetivos para su lluvia de balas. A pesar de ser una forajida impulsiva que con frecuencia es encarcelada, Vyper parece estar buscando una vida nueva y segura de los Patronos.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Screwjab Dagger y Lethal Venom, con Petrifying Bola como herramienta decisiva.",
    "stats": {
      "dps": 94,
      "bulletDamage": 6.58,
      "magazineSize": 24,
      "fireRate": "14.29 rps",
      "maxHealth": 780,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.9 m/s",
      "stamina": 4
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Screwjab Dagger",
        "type": "Activa",
        "cooldown": "10s",
        "description": "Lanza una daga, que inflige Daño Espiritual y aplica ralentización.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "2",
        "name": "Lethal Venom",
        "type": "Activa",
        "cooldown": "28s",
        "description": "Inyecta a un objetivo con veneno letal.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Slither",
        "type": "Activa",
        "description": "Ha aumentado la distancia de deslizamiento, puede deslizarse cuesta arriba y puede girar más rápido mientras se desliza.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Petrifying Bola",
        "type": "Activa",
        "cooldown": "115s",
        "description": "Lanza una bola explosiva.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Dispel Magic limpia el daño prolongado y los debuffs; no esperes a estar bajo para usarlo.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa."
      ],
      "itemCounters": [
        {
          "itemId": "dispel-magic",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Limpia el daño prolongado y los debuffs de Vyper, y te da curación y velocidad al hacerlo.",
          "countersAbility": "Screwjab Dagger"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Vyper, incluidos control y daño prolongado.",
          "countersAbility": "Screwjab Dagger"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Vyper y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Screwjab Dagger"
        },
        {
          "itemId": "enduring-speed",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Reduce las ralentizaciones de Vyper y mantiene tu Velocidad de Movimiento para kitearte.",
          "countersAbility": "Screwjab Dagger"
        },
        {
          "itemId": "juggernaut",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Con 50% de resistencia a ralentizaciones y regeneración alta, neutraliza la presión de Vyper en peleas largas.",
          "countersAbility": "Screwjab Dagger"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Vyper: sus casteos largos y su poca salud le deja expuesto a que Vyper pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Vyper: sus casteos largos y su poca salud le deja expuesto a que Vyper pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Vyper: su escaso daño en duelos individuales le deja expuesto a que Vyper pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Vyper, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Vyper, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Vyper, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Screwjab Dagger para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Vyper pierde mucho valor cuando lo flanquean.",
        "Guarda Lethal Venom para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Petrifying Bola pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Screwjab Dagger.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Lethal Venom — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Screwjab Dagger — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Slither — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Petrifying Bola siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Screwjab Dagger → Lethal Venom → básicos → Petrifying Bola",
          "explanation": "Abre con Screwjab Dagger para fijar o exponer al objetivo, sigue con Lethal Venom y usa Petrifying Bola cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Lethal Venom → Screwjab Dagger → Petrifying Bola",
          "explanation": "Fuerza la respuesta con Lethal Venom, encadena Screwjab Dagger y cierra con Petrifying Bola. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Slither → Lethal Venom",
          "explanation": "Usa Slither para sobrevivir al primer control y Lethal Venom para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "warden",
    "name": "Warden",
    "title": "El Alquimista Implacable",
    "role": "Iniciador",
    "difficulty": "Fácil",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/warden.png",
    "description": "Warden es un héroe duro y tenaz con una determinación infinita, fuerza de voluntad y una técnica de alquimia. Con el apocalipsis en el horizonte, Warden fue entrenado desde su nacimiento, forjado en un arma construida específicamente para evitar que los Patrones ingresaran a nuestro mundo, sin importar el costo.",
    "playstyleOverview": "Iniciador: abre peleas con control y fija objetivos clave. Coordina con tu equipo antes de comprometerte. Su kit gira en torno a Alchemical Flask y Willpower, con Last Stand como herramienta decisiva.",
    "stats": {
      "dps": 66.06,
      "bulletDamage": 17.34,
      "magazineSize": 17,
      "fireRate": "3.81 rps",
      "maxHealth": 805,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "6.3 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Alchemical Flask",
        "type": "Activa",
        "cooldown": "12s",
        "description": "Lanza un frasco que daña y reduce el daño del arma y la Velocidad de Movimiento de los enemigos que golpea.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Willpower",
        "type": "Activa",
        "cooldown": "40s",
        "description": "Gana una barrera y Velocidad de Movimiento adicional.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "3",
        "name": "Binding Word",
        "type": "Activa",
        "cooldown": "34s",
        "description": "Si no se alejan de su posición inicial dentro del tiempo de escape, serán dañados e inmovilizados.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Last Stand",
        "type": "Activa",
        "cooldown": "180s",
        "description": "Después de cargar durante 2 segundos, libera pulsos que dañan a los enemigos y te curan según el daño causado.",
        "counterTip": "Aplica reducción de curación antes de que complete la curación."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Reactive Barrier se activa con el aturdimiento inicial; no gastes tus defensas antes de que entre.",
        "Decay y Cursed Relic reducen o eliminan barreras y buffs; sin eso, sus escudos absorben tu burst.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Mantén una salida: Ethereal Shift o Warp Stone te sacan del área antes de que el daño se acumule."
      ],
      "itemCounters": [
        {
          "itemId": "reactive-barrier",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Warden quiere matarte.",
          "countersAbility": "Alchemical Flask"
        },
        {
          "itemId": "unstoppable",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Niega aturdimientos, silencios, sueños, raíces y desarmes durante la ventana clave del combo de Warden.",
          "countersAbility": "Alchemical Flask"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Warden, incluidos control y daño prolongado.",
          "countersAbility": "Alchemical Flask"
        },
        {
          "itemId": "decay",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Daño porcentual y reducción de curación que castiga a Warden por acumular vida y regeneración.",
          "countersAbility": "Alchemical Flask"
        },
        {
          "itemId": "cursed-relic",
          "priority": "Late Game",
          "timing": "Late Game",
          "counterExplanation": "Silencia, desarma y elimina buffs no-ultimate de Warden: apaga su ventana de daño o su escape.",
          "countersAbility": "Alchemical Flask"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Warden: sus casteos largos y su poca salud le deja expuesto a que Warden pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Warden: sus casteos largos y su poca salud le deja expuesto a que Warden pueda iniciar el combate y fijar al objetivo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Warden: su escaso daño en duelos individuales le deja expuesto a que Warden pueda iniciar el combate y fijar al objetivo."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Alchemical Flask para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Warden pierde mucho valor cuando lo flanquean.",
        "Guarda Willpower para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Last Stand pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Alchemical Flask.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Alchemical Flask — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Binding Word — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Willpower — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Last Stand siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Alchemical Flask → Willpower → básicos → Last Stand",
          "explanation": "Abre con Alchemical Flask para fijar o exponer al objetivo, sigue con Willpower y usa Last Stand cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Willpower → Alchemical Flask → Last Stand",
          "explanation": "Fuerza la respuesta con Willpower, encadena Alchemical Flask y cierra con Last Stand. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Binding Word → Willpower",
          "explanation": "Usa Binding Word para sobrevivir al primer control y Willpower para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "extra-health",
            "extra-stamina",
            "sprint-boots",
            "healing-rite"
          ],
          "notes": "Farmea seguro y busca ángulos de engage. No inicies sin tu equipo detrás."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "kinetic-dash",
            "majestic-leap",
            "reactive-barrier",
            "bullet-resilience"
          ],
          "notes": "Tu ventana es el primer control. Entra, fija un objetivo y sal antes de que te enfoquen."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "colossus",
            "phantom-strike",
            "unstoppable",
            "fortitude"
          ],
          "notes": "Inicia con cooldowns defensivos listos; Phantom Strike aísla al objetivo clave."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "cheat-death",
            "leech",
            "juggernaut",
            "indomitable"
          ],
          "notes": "Aguanta el contraataque después del engage. Indomitable limpia el primer control enemigo."
        }
      ]
    }
  },
  {
    "id": "wraith",
    "name": "Wraith",
    "title": "La Duelista Psíquica",
    "role": "Carry",
    "difficulty": "Fácil",
    "attackType": "Balas Rápidas",
    "avatarUrl": "/heroes/wraith.png",
    "description": "Wraith es un héroe que habla y dispara rápido, con habilidades psíquicas ofensivas y talento tanto para los trucos con cartas como para la telequinesis.",
    "playstyleOverview": "Hostigador móvil: entra y sale de la pelea, castiga errores y evita comprometerte sin cooldowns. Su kit gira en torno a Card Trick y Project Mind, con Telekinesis como herramienta decisiva.",
    "stats": {
      "dps": 59.68,
      "bulletDamage": 5.64,
      "magazineSize": 52,
      "fireRate": "10.58 rps",
      "maxHealth": 730,
      "healthRegen": "2/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "7.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Card Trick",
        "type": "Activa",
        "cooldown": "0.6s",
        "description": "Inflige daño con arma para invocar cartas de un palo aleatorio.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "2",
        "name": "Project Mind",
        "type": "Activa",
        "cooldown": "50s",
        "description": "Teletransportarse a la ubicación objetivo.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "3",
        "name": "Full Auto",
        "type": "Activa",
        "cooldown": "45s",
        "description": "Aumenta temporalmente tu Cadencia de Disparo e inflige Daño Espiritual adicional 20% de Cadencia de Disparo…",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      },
      {
        "slot": "4 (Ult)",
        "name": "Telekinesis",
        "type": "Activa",
        "cooldown": "150s",
        "description": "Levanta a un héroe enemigo en el aire y luego lánzalo hacia la ubicación objetivo.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "No agrupes a tu equipo: un aturdimiento en área puede convertir una pelea ganada en una derrota. Guarda stamina o Unstoppable para el inicio del combate.",
        "Presiónalo temprano y compra Metal Skin si depende de ráfagas de balas; no le regales peleas largas.",
        "Slowing Hex y Knockdown cortan la movilidad; sin ellos, nunca lo vas a fijar."
      ],
      "itemCounters": [
        {
          "itemId": "extra-health",
          "priority": "Esencial",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Wraith te elimine antes de reaccionar.",
          "countersAbility": "Card Trick"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Wraith y aumenta bajo el 50% de salud.",
          "countersAbility": "Card Trick"
        },
        {
          "itemId": "spirit-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Reduce el daño espiritual sostenido de Wraith y te da resistencia extra bajo el 50% de salud.",
          "countersAbility": "Card Trick"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Wraith quiere matarte.",
          "countersAbility": "Card Trick"
        },
        {
          "itemId": "debuff-reducer",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Acorta todos los efectos negativos que aplica Wraith, incluidos control y daño prolongado.",
          "countersAbility": "Card Trick"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Wraith: sus casteos largos y su poca salud le deja expuesto a que Wraith pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Wraith: sus casteos largos y su poca salud le deja expuesto a que Wraith pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Wraith: su escaso daño en duelos individuales le deja expuesto a que Wraith pueda moverse alrededor del combate y golpear en el momento justo."
        },
        {
          "heroId": "mo-krill",
          "advantage": "Débil Contra",
          "reason": "Mo & Krill puede absorber el daño y forzar peleas prolongadas mejor que Wraith, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "rat-king",
          "advantage": "Débil Contra",
          "reason": "Rat King puede absorber el daño y forzar peleas prolongadas mejor que Wraith, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        },
        {
          "heroId": "victor",
          "advantage": "Débil Contra",
          "reason": "Victor puede absorber el daño y forzar peleas prolongadas mejor que Wraith, sobre todo porque su sostenibilidad limitada en peleas prolongadas limita su respuesta."
        }
      ],
      "positioningTips": [
        "Pelea cerca de una pared o cobertura para cortar la línea de visión enemiga.",
        "No cruces el centro del mapa sin visión de los laterales.",
        "Mantén tu distancia efectiva y retrocede si el enemigo cierra la brecha."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Card Trick para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Wraith pierde mucho valor cuando lo flanquean.",
        "Guarda Project Mind para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Telekinesis pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Card Trick.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Card Trick — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Full Auto — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Project Mind — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Telekinesis siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Card Trick → Project Mind → básicos → Telekinesis",
          "explanation": "Abre con Card Trick para fijar o exponer al objetivo, sigue con Project Mind y usa Telekinesis cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Project Mind → Card Trick → Telekinesis",
          "explanation": "Fuerza la respuesta con Project Mind, encadena Card Trick y cierra con Telekinesis. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Full Auto → Project Mind",
          "explanation": "Usa Full Auto para sobrevivir al primer control y Project Mind para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "rapid-rounds",
            "extra-health",
            "restorative-shot",
            "sprint-boots"
          ],
          "notes": "Prioriza farmeo seguro y una primera pieza defensiva. No fuerces peleas sin tu ítem de sustain."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "intensifying-magazine",
            "bullet-lifesteal",
            "fleetfoot",
            "kinetic-dash"
          ],
          "notes": "Consolida daño sostenido y movilidad. Busca peleas de dos o tres héroes, no engages completos."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "titanic-magazine",
            "burst-fire",
            "escalating-resilience",
            "hunters-aura"
          ],
          "notes": "Aumenta munición y daño por ráfaga; tu ventana de daño debe durar más que la del enemigo."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "glass-cannon",
            "silencer",
            "crippling-headshot",
            "leech"
          ],
          "notes": "Cierre de build: daño máximo con una fuente de sustain. Cambia una pieza por defensa si te enfocan."
        }
      ]
    }
  },
  {
    "id": "yamato",
    "name": "Yamato",
    "title": "La Sombra Errante",
    "role": "Asesino",
    "difficulty": "Media",
    "attackType": "Escopeta Melee",
    "avatarUrl": "/heroes/yamato.png",
    "description": "Yamato es una heroína asesina precisa y de corto alcance que utiliza ataques voladores, ataques con espada y una conexión con las sombras para destruir a sus enemigos. Perdió a su hermano en una disputa territorial y adoptó su nombre, prometiendo asegurar el sueño de presencia internacional de su hermano exigiendo un deseo a los Patronos.",
    "playstyleOverview": "Asesino de flanqueo: espera a que el enemigo use su control y elimina objetivos aislados. Evita ser el primero en entrar. Su kit gira en torno a Power Slash y Flying Slash, con Shadow Transformation como herramienta decisiva.",
    "stats": {
      "dps": 63.22,
      "bulletDamage": 5.31,
      "magazineSize": 12,
      "fireRate": "2.381 rps",
      "maxHealth": 730,
      "healthRegen": "1/s",
      "bulletResist": "0%",
      "spiritResist": "0%",
      "moveSpeed": "8.2 m/s",
      "stamina": 3
    },
    "abilities": [
      {
        "slot": "1",
        "name": "Power Slash",
        "type": "Canalizada",
        "cooldown": "12s",
        "description": "Canaliza para aumentar el daño durante 1,4 segundos y luego lanza un golpe de espada completamente cargado.",
        "counterTip": "Fija el objetivo con ralentización o un aturdimiento para cortar su movilidad."
      },
      {
        "slot": "2",
        "name": "Flying Slash",
        "type": "Activa",
        "cooldown": "36s",
        "description": "Lanza un gancho de agarre para acercarte a un enemigo, infligiendo daño cuerpo a cuerpo y ralentizando al objetivo cuando llegues.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "3",
        "name": "Crimson Slash",
        "type": "Activa",
        "cooldown": "16s",
        "description": "Corta a los enemigos frente a ti, dañándolos y reduciendo su Cadencia de Disparo.",
        "counterTip": "Guarda stamina o una habilidad defensiva para cuando intente conectar este control."
      },
      {
        "slot": "4 (Ult)",
        "name": "Shadow Transformation",
        "type": "Activa",
        "cooldown": "160s",
        "description": "Infundido con el alma sombría de Yamato.",
        "counterTip": "No te agrupes ni gastes dash antes de que use esta habilidad; castiga su enfriamiento."
      }
    ],
    "counterplay": {
      "generalAdvice": [
        "Metal Skin y Reactive Barrier te salvan del burst de entrada; no gastes tus cooldowns defensivos antes del salto.",
        "Sube Salud y resistencias temprano. Un solo ítem defensivo bien elegido evita que te borre de una combinación completa.",
        "Enduring Speed reduce las ralentizaciones y te permite reposicionarte; no gastes tu dash mientras estés ralentizado.",
        "La reducción de curación es obligatoria contra este héroe. Healbane y Decay convierten sus peleas largas en una desventaja."
      ],
      "itemCounters": [
        {
          "itemId": "metal-skin",
          "priority": "Esencial",
          "timing": "Mid Game",
          "counterExplanation": "Inmunidad a balas durante la ventana de ráfaga de Yamato.",
          "countersAbility": "Power Slash"
        },
        {
          "itemId": "reactive-barrier",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "Se activa al recibir aturdimiento, inmovilización, sueño o silencio: te da un escudo justo en la ventana en la que Yamato quiere matarte.",
          "countersAbility": "Power Slash"
        },
        {
          "itemId": "warp-stone",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "Te reposiciona al instante y añade Resistencia a Balas para escapar del engage de Yamato.",
          "countersAbility": "Power Slash"
        },
        {
          "itemId": "extra-health",
          "priority": "Situacional",
          "timing": "Early Game",
          "counterExplanation": "La salud extra evita que el burst de Yamato te elimine antes de reaccionar.",
          "countersAbility": "Power Slash"
        },
        {
          "itemId": "bullet-resilience",
          "priority": "Late Game",
          "timing": "Mid Game",
          "counterExplanation": "La Resistencia a Balas reduce la presión constante de Yamato y aumenta bajo el 50% de salud.",
          "countersAbility": "Power Slash"
        }
      ],
      "heroCounters": [
        {
          "heroId": "celeste",
          "advantage": "Fuerte Contra",
          "reason": "Celeste sufre ante Yamato: sus casteos largos y su poca salud le deja expuesto a que Yamato pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "the-doorman",
          "advantage": "Fuerte Contra",
          "reason": "The Doorman sufre ante Yamato: sus casteos largos y su poca salud le deja expuesto a que Yamato pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "dynamo",
          "advantage": "Fuerte Contra",
          "reason": "Dynamo sufre ante Yamato: su escaso daño en duelos individuales le deja expuesto a que Yamato pueda entrar por el flanco y cerrar la eliminación rápido."
        },
        {
          "heroId": "abrams",
          "advantage": "Débil Contra",
          "reason": "Abrams puede pelear en corto y ganar el intercambio de daño mejor que Yamato, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "baba",
          "advantage": "Débil Contra",
          "reason": "Baba puede pelear en corto y ganar el intercambio de daño mejor que Yamato, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        },
        {
          "heroId": "billy",
          "advantage": "Débil Contra",
          "reason": "Billy puede pelear en corto y ganar el intercambio de daño mejor que Yamato, sobre todo porque su ventana de daño corta y su baja salud limita su respuesta."
        }
      ],
      "positioningTips": [
        "Entra por el flanco, nunca por el frente, y sal por el mismo camino.",
        "No persigas más allá de tu cobertura: el intercambio se alarga a favor del enemigo.",
        "Guarda una carga de movilidad para salir después del commit."
      ]
    },
    "howToPlay": {
      "lanePhaseTips": [
        "En línea usa Power Slash para farmear y castigar al rival cuando se acerque a la oleada.",
        "No cruces la línea sin visión: Yamato pierde mucho valor cuando lo flanquean.",
        "Guarda Flying Slash para el momento en que el enemigo intente comprometerse, no para farmear.",
        "Si vas perdiendo la línea, prioriza oleadas seguras y espera tu pico de ítems de tier 2."
      ],
      "midLateGamePlan": [
        "Rota con tu equipo y busca peleas donde Shadow Transformation pueda golpear a más de un objetivo.",
        "Antes de un objetivo, asegura visión y obliga al enemigo a gastar control en la entrada.",
        "Si tu equipo va detrás, juega lateral y castiga rotaciones enemigas con Power Slash.",
        "Cierra la partida con presión de objetivos; no persigas kills sin una torreta o un objetivo detrás."
      ],
      "skillPriority": [
        "Máxima prioridad: Power Slash — es tu herramienta principal para farmear y pelear.",
        "Segunda prioridad: Flying Slash — mejora tu ventana de daño o tu supervivencia.",
        "Tercera prioridad: Crimson Slash — termina de cubrir el hueco del kit antes del nivel 12.",
        "Sube Shadow Transformation siempre que puedas: es tu principal herramienta de teamfight."
      ],
      "coreCombos": [
        {
          "name": "Engage estándar",
          "sequence": "Power Slash → Flying Slash → básicos → Shadow Transformation",
          "explanation": "Abre con Power Slash para fijar o exponer al objetivo, sigue con Flying Slash y usa Shadow Transformation cuando el enemigo ya haya gastado su movilidad."
        },
        {
          "name": "Burst con ultimate",
          "sequence": "Flying Slash → Power Slash → Shadow Transformation",
          "explanation": "Fuerza la respuesta con Flying Slash, encadena Power Slash y cierra con Shadow Transformation. Solo funciona si el objetivo no tiene una defensa activa."
        },
        {
          "name": "Defensa y reposicionamiento",
          "sequence": "Crimson Slash → Flying Slash",
          "explanation": "Usa Crimson Slash para sobrevivir al primer control y Flying Slash para salir o convertir el intercambio. No gastes ambas al mismo tiempo."
        }
      ],
      "buildGuide": [
        {
          "phase": "Early Game",
          "soulsEstimate": "0 – 3.200",
          "items": [
            "close-quarters",
            "extra-health",
            "melee-lifesteal",
            "sprint-boots"
          ],
          "notes": "Domina el cuerpo a cuerpo y usa tus golpes para sostenerte en línea."
        },
        {
          "phase": "Mid Game",
          "soulsEstimate": "3.200 – 9.600",
          "items": [
            "melee-charge",
            "bullet-lifesteal",
            "fleetfoot",
            "reactive-barrier"
          ],
          "notes": "Mezcla daño y resistencia. Busca intercambios cortos donde tus golpes peguen primero."
        },
        {
          "phase": "Late Game",
          "soulsEstimate": "9.600 – 20.000",
          "items": [
            "crushing-fists",
            "siphon-bullets",
            "colossus",
            "escalating-resilience"
          ],
          "notes": "Conviértete en amenaza de primera línea; tus golpes pesados deben castigar a los carries."
        },
        {
          "phase": "Full Build",
          "soulsEstimate": "20.000+",
          "items": [
            "runed-gauntlets",
            "leech",
            "juggernaut",
            "frenzy"
          ],
          "notes": "Cierre de bruiser: entra, golpea y aguanta. Frenzy se activa justo cuando te enfocan."
        }
      ]
    }
  }
];
