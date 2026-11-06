// src/data/ability-counter-tips.ts
// Consejos tácticos únicos para cada habilidad de Deadlock (176 habilidades)
// Elimina las frases genéricas repetidas y aporta la indicación defensiva real de cada habilidad.

export const ABILITY_COUNTER_TIPS: Record<string, Record<string, string>> = {
  abrams: {
    '1': 'Aplica Healbane o Decay de inmediato para cortar su robo de vida.',
    '2': 'Haz dash lateral al escuchar la carga; no puede girar en ángulos cerrados.',
    '3': 'Castígalo con daño espiritual explosivo para ignorar su regeneración.',
    '4 (Ult)': 'Guarda un dash o Ethereal Shift para salir del círculo antes del impacto.',
  },
  apollo: {
    '1': 'Anticipa su teleportación y atácalo en su punto de reaparición.',
    '2': 'No dispares de frente durante su guardia; rodea sus flancos.',
    '3': 'Traspasa su línea de avance con dashes o saltos verticales.',
    '4 (Ult)': 'Dispersa a tu equipo para que sus escudos no cubran a varios aliados.',
  },
  baba: {
    '1': 'Corta el hilo con disparos rápidos antes de que drene tu salud y maná.',
    '2': 'Usa ralentización cuando salte para anular su movilidad de escape.',
    '3': 'Sal de su charco corrosivo de inmediato para no acumular daño continuo.',
    '4 (Ult)': 'Derriba sus aves con daño de área o cúbrete bajo tejados.',
  },
  bebop: {
    '1': 'Haz parry a su puñetazo para aturdirlo o esquiva con salto hacia atrás.',
    '2': 'Usa Debuff Remover o Ethereal Shift para anular la detonación de la bomba.',
    '3': 'Dashea lateralmente tras escuchar el sonido del gancho; no asomes en pasillos abiertos.',
    '4 (Ult)': '¡Usa Knockdown inmediatamente! Queda inmóvil canalizando y el derribo cancela el rayo.',
  },
  billy: {
    '1': 'Mantén distancia con saltos para que no conecte el golpe de palanca.',
    '2': 'Frena su embestida con aturdimiento en cuanto inicie la carrera.',
    '3': 'Usa coberturas para bloquear la onda expansiva de su explosión.',
    '4 (Ult)': 'Usa Warp Stone para romper las cadenas antes de que te arrastre.',
  },
  calico: {
    '1': 'Sal del radio de las bombas sombrías antes de que detonen.',
    '2': 'Interrumpe su salto felino con control de masas en el aire.',
    '3': 'Dispara a su sombra para forzarla a retroceder de su acecho.',
    '4 (Ult)': 'Pelea pegado a tus aliados para que no obtenga ventaja de sigilo.',
  },
  celeste: {
    '1': 'No pelees a oscuras dentro de su zona de absorción de luz.',
    '2': 'Voltea la cámara o cúbrete para mitigar el destello cegador.',
    '3': 'Dashea en zigzag para esquivar la trayectoria recta de sus dagas radiantes.',
    '4 (Ult)': 'Sal del círculo sagrado antes de la detonación estelar con Warp Stone.',
  },
  'deadman-danny': {
    '1': 'Usa coberturas para cortar la andanada continua de proyectiles.',
    '2': 'Destruye su quimera mecánica antes de que aplique daño espiritual.',
    '3': 'No pises el combustible inflamable que deja en el suelo al moverse.',
    '4 (Ult)': 'Aplica Healbane para que no recupere salud durante la ejecución.',
  },
  'the-doorman': {
    '1': 'Dispara al timbre o sal de su radio para no ser aturdido por la campana.',
    '2': 'No te coloques frente a sus umbrales de portal; espera su salida.',
    '3': 'Esquiva lateralmente el carrito de equipaje antes de que te arrolle.',
    '4 (Ult)': 'Enfócalo con control antes de que termine de invocar a sus huéspedes.',
  },
  drifter: {
    '1': 'Mantén distancia media para que sus garras no desgarren tu armadura.',
    '2': 'Limpia su marca de cazador con Debuff Reducer antes del ataque.',
    '3': 'No te quedes a baja salud en solitario; detecta tu rastro con visión.',
    '4 (Ult)': 'Agrupa a tu equipo bajo coberturas iluminadas durante su noche eterna.',
  },
  dynamo: {
    '1': 'Esquiva la onda expansiva cinética con saltos verticales.',
    '2': 'Castígalo justo cuando termine su animación de salto dimensional.',
    '3': 'Aplica anti-curación a sus aliados para neutralizar su aura sanadora.',
    '4 (Ult)': '¡Usa Unstoppable para no ser absorbido o tíralo con Knockdown desde fuera!',
  },
  graves: {
    '1': 'Rompe la urna de espíritus antes de que libere las ánimas errantes.',
    '2': 'Dashea hacia atrás para no ser atrapado por las manos del suelo.',
    '3': 'Corta su succión de esencia con silencios o daño explosivo.',
    '4 (Ult)': 'Usa Ethereal Shift para evitar el veredicto sombrío de su decreto.',
  },
  'grey-talon': {
    '1': 'Muévete en zigzag impredecible para que falle el disparo cargado de sniper.',
    '2': '¡Usa Knockdown en cuanto empiece a volar para derribarlo al suelo!',
    '3': 'Destruye la trampa espiritual antes de cruzar por pasillos estrechos.',
    '4 (Ult)': 'Usa Metal Skin o cúbrete tras muros gruesos para esquivar el impacto del búho.',
  },
  haze: {
    '1': 'Despierta rápido con Debuff Reducer o esquiva la trayectoria recta de la daga.',
    '2': 'Dispara a ciegas a su zona de humo para forzarla a salir de la invisibilidad.',
    '3': 'No permitas que conecte ráfagas prolongadas; corta el trade antes de que acumule balas.',
    '4 (Ult)': '¡Activa Metal Skin de inmediato! Eres 100% inmune a todo su Bullet Dance.',
  },
  holliday: {
    '1': 'Dashea lateralmente para esquivar el lazo vaquero antes de que te inmovilice.',
    '2': 'Derriba o castiga su salto en el aire cuando alcance la altura máxima.',
    '3': 'No te quedes cerca de los barriles de pólvora que despliega.',
    '4 (Ult)': 'Rompe la línea de tiro antes de que descargue su revólver de duelo.',
  },
  infernus: {
    '1': 'Sal de la línea de fuego para que el catalizador no amplifique el daño de quemadura.',
    '2': 'No persigas por su rastro ardiente de Flame Dash.',
    '3': 'Limpia los stacks de Afterburn con Debuff Remover o córtalos con Healbane.',
    '4 (Ult)': 'Dashea fuera de su radio circular antes de que detone la explosión con aturdimiento.',
  },
  ivy: {
    '1': 'Sal de las enredaderas de Kudzu Bomb para no quedar inmovilizado y envenenado.',
    '2': 'Aplica anti-curación al aliado conectado para invalidar su vínculo de vida.',
    '3': 'Usa Silencer para impedir que se vuelva estatua inmune cuando tenga poca salud.',
    '4 (Ult)': 'Dispara a Ivy en el aire antes de que suelte la bomba de silencio sobre tu equipo.',
  },
  kelvin: {
    '1': 'Esquiva la granada de hielo para no sufrir la penalización de velocidad.',
    '2': 'No intentes correr por sus caminos de hielo; flanquéalo desde tierra firme.',
    '3': 'Usa Knockdown para cortar la canalización de su rayo congelante.',
    '4 (Ult)': 'No entres a pelear dentro de su cúpula protectora; espera a que se disipe.',
  },
  'lady-geist': {
    '1': 'Esquiva la bomba de esencia rodante con un salto hacia los lados.',
    '2': 'Corta el lazo de drenaje de vida rompiendo la línea de visión o con dashes.',
    '3': 'Limpia los proyectiles de Malice antes de que reduzcan tu resistencia.',
    '4 (Ult)': '¡Silénciala cuando esté a poca vida para que muera sin poder intercambiarte la salud!',
  },
  lash: {
    '1': 'Guarda Reactive Barrier para absorber el azote de Ground Strike al caer.',
    '2': 'Dispara a Lash cuando esté colgado de su gancho en el aire; es vulnerable.',
    '3': 'Aplica reducción de curación para que su latigazo no le devuelva vida.',
    '4 (Ult)': '¡Activa Unstoppable en cuanto salte a por ti para que no pueda levantarte con Death Slam!',
  },
  mcginnis: {
    '1': 'Destruye sus torretas automáticas desde fuera de su rango de disparo.',
    '2': 'Aplica Healbane para que su spray medicinal no cure a su equipo ni torretas.',
    '3': 'Salta sobre su muro con dash vertical para no quedar acorralado.',
    '4 (Ult)': '¡Usa Knockdown para cancelar de inmediato su andanada continua de cohetes!',
  },
  mina: {
    '1': 'No camines sobre sus trampas de agujas invisibles en pasillos.',
    '2': 'Dashea fuera de sus zonas de succión antes de que colapse el espacio.',
    '3': 'Limpia sus silencios con Debuff Reducer para recuperar tus habilidades.',
    '4 (Ult)': 'Usa Warp Stone para escapar de su vórtice de almas antes del daño final.',
  },
  mirage: {
    '1': 'Dashea de lado para esquivar el tornado ascendente antes de que te levante.',
    '2': 'Limpia los escarabajos de fuego con Debuff Remover antes de que roben tu salud.',
    '3': 'No intercambies disparos continuos para que no detone las marcas de Djinn.',
    '4 (Ult)': 'Atento a los avisos de teletransporte global para no ser emboscado 2v1.',
  },
  'mo-krill': {
    '1': 'Aplica Healbane para que su arañazo no le cure en peleas cerradas.',
    '2': 'Dashea cuando veas que la tierra tiembla para esquivar su salida de Burrow.',
    '3': 'Guarda Debuff Remover para limpiar el desarme de arena y poder disparar.',
    '4 (Ult)': '¡Activa Unstoppable para ser totalmente inmune a su sujeción de Combo de 3s!',
  },
  'nurse-harrow': {
    '1': 'Rompe la línea de sus cadenas espirituales antes de que te inmovilice.',
    '2': 'Enfócala primero para cortar la regeneración que otorga a sus carries.',
    '3': 'Usa coberturas para no recibir sus proyectiles de debilitamiento.',
    '4 (Ult)': 'Silénciala con Curse para interrumpir su reanimación grupal.',
  },
  paige: {
    '1': 'No permanezcas sobre sus sellos de papel cuando empiecen a brillar.',
    '2': 'Rompe sus barreras protectoras con daño concentrado de armas.',
    '3': 'Usa dashes para evitar el aturdimiento de sus pergaminos explosivos.',
    '4 (Ult)': 'Traspasa sus muros con Warp Stone y mátala a quemarropa sin defensas.',
  },
  paradox: {
    '1': 'Sal del radio de las pulsaciones antes de que aumente el daño que recibes.',
    '2': '¡Nunca cruces su Time Wall! Detiene todas tus balas y te frena en seco.',
    '3': 'Cúbrete tras esquinas para que no pueda conectar el disparo cargado de carabina.',
    '4 (Ult)': 'Usa Warp Stone para volver a tu posición original si te intercambia con Swap.',
  },
  pocket: {
    '1': 'Esquiva la andanada de proyectiles en arco con desplazamientos laterales.',
    '2': 'Anticipa su reaparición siguiendo la trayectoria de su capa voladora.',
    '3': 'Espera a que salga de su maletín invulnerable para conectar todo tu burst.',
    '4 (Ult)': 'Limpia los ticks de veneno de Affliction con Debuff Remover.',
  },
  'rat-king': {
    '1': 'Limpia sus enjambres de roedores con daño en área antes de que te rodeen.',
    '2': 'Aplica Healbane para neutralizar el robo de vida de sus mordeduras.',
    '3': 'No permitas que acumule plagas sobre tu personaje con ataques continuos.',
    '4 (Ult)': 'Sal del radio de la peste con Warp Stone y pelea en campo abierto.',
  },
  rem: {
    '1': 'Interrumpe su invocación de sueños antes de que configuren el campo.',
    '2': 'Sal de la niebla somnífera para no ser ralentizado progresivamente.',
    '3': 'Usa coberturas para cortar la línea de tiro de sus estallidos arcanos.',
    '4 (Ult)': 'Dashea fuera de su pesadilla antes de la detonación espiritual final.',
  },
  seven: {
    '1': 'Esquiva la esfera eléctrica lateralmente; avanza en línea recta a baja velocidad.',
    '2': 'Aléjate de tus aliados antes de que detone la carga estática sobre tu cabeza.',
    '3': 'No te quedes cerca de minions o aliados para evitar los rayos rebotados.',
    '4 (Ult)': '¡KNOCKDOWN O SILENCIADOR OBLIGATORIO! Cancela su Storm Cloud al instante.',
  },
  shiv: {
    '1': 'Dashea de lado para esquivar las dagas arrojadizas y evitar el sangrado.',
    '2': 'Interrumpe su embestida con aturdimiento justo cuando inicie la carrera.',
    '3': 'Aplica Healbane o Toxic Bullets para que no pueda mitigar el daño diferido.',
    '4 (Ult)': 'No permanezcas en combate con menos de 25% de vida para evitar la ejecución.',
  },
  silver: {
    '1': 'Muévete a campo abierto para que sus disparos no reboten en las paredes.',
    '2': 'Dashea hacia atrás al ver su patada para no ser desarmado o empujado.',
    '3': 'Rompe la bola de captura antes de que te inmovilice con sus ataduras.',
    '4 (Ult)': 'Usa Metal Skin durante su maldición de lobo para mitigar su burst de garras.',
  },
  sinclair: {
    '1': 'Cúbrete tras esquinas para evitar los proyectiles perforantes continuos.',
    '2': 'Elimina a su asistente espectral antes de que comience a canalizar curas.',
    '3': 'Usa Debuff Reducer si te transforma en conejo para recuperar tu forma rápido.',
    '4 (Ult)': 'No te agrupes en su escenario de audiencia para no compartir el daño.',
  },
  solomon: {
    '1': 'Destruye los alfiles arcanos que despliega en las esquinas de los pasillos.',
    '2': 'Esquiva la trayectoria en L de su caballo mágico con dashes rápidos.',
    '3': 'Sal de la línea recta de sus torres antes de que disparen la batería mística.',
    '4 (Ult)': 'Enfócalo con control antes de que termine de coronar a su reina de daño.',
  },
  venator: {
    '1': 'Sal del radio de la granada consagrada antes de que debilite tus defensas.',
    '2': 'Usa Reactive Barrier para mitigar el disparo perforante de tripa.',
    '3': 'Mira el suelo en pasillos estrechos para no pisar sus cepos inmovilizadores.',
    '4 (Ult)': 'Rompe la línea de visión tras escuchar su ira para evitar el tiro crítico.',
  },
  victor: {
    '1': 'Descarga tus habilidades en sus costados para no cargar su batería de dolor.',
    '2': 'Atúrdelo cuando intente reiniciar su motor de embestida.',
    '3': 'Mantén distancia para no recibir el daño continuo de su aura de sufrimiento.',
    '4 (Ult)': 'Aplica Healbane inmediatamente para que no resucite con toda la salud.',
  },
  vindicta: {
    '1': 'Usa Warp Stone o corre hacia el borde para romper la atadura de la estaca.',
    '2': '¡Usa Knockdown para tirarla del aire al suelo en cuanto empiece a volar!',
    '3': 'Cúbrete tras paredes para que su cuervo no aplique daño porcentual.',
    '4 (Ult)': 'Rompe la línea de tiro tras escuchar el zumbido de Assassinate; no asomes.',
  },
  violet: {
    '1': 'Sal de los charcos de tinta viva para no perder precisión y visión.',
    '2': 'Interrumpe su estado de flujo con un aturdimiento en seco.',
    '3': 'Silénciala antes de que pinte sus naturalezas muertas explosivas.',
    '4 (Ult)': 'Usa Warp Stone para salir del paisaje abstracto antes del colapso de daño.',
  },
  viscous: {
    '1': 'Esquiva las bolas de gelatina que rebotan por paredes y techos.',
    '2': '¡Siléncialo antes de que se encierre en The Cube para salvarse a 1 HP!',
    '3': 'Guarda un dash vertical para esquivar el puño gigante que sale del suelo.',
    '4 (Ult)': 'Sube a tejados o muros altos; su Goo Ball rodante no puede trepar alturas.',
  },
  vyper: {
    '1': 'Dashea hacia atrás para que su estocada con daga no perfore tu armadura.',
    '2': 'Limpia su veneno letal con Debuff Reducer antes de que acumule stacks.',
    '3': 'Usa Slowing Hex para frenar sus deslizamientos serpentinos continuos.',
    '4 (Ult)': 'Dashea de lado para esquivar la bola petrificante antes del impacto.',
  },
  warden: {
    '1': 'Sal del radio del frasco químico para no perder resistencia de armas.',
    '2': 'Dispara a su escudo espiritual para romper su velocidad de persecución.',
    '3': '¡Haz dash fuera del círculo de Binding Word antes de que pasen los 3 segundos!',
    '4 (Ult)': 'Usa Knockdown o Silencer para cancelar de inmediato su drenaje de Last Stand.',
  },
  wraith: {
    '1': 'Dashea tras esquinas para que las cartas mágicas choquen contra muros.',
    '2': 'Castígala en su punto de llegada tras ver el destello de su teletransporte.',
    '3': '¡Activa Metal Skin durante Full Auto para volver inmune tu héroe a sus balas!',
    '4 (Ult)': 'Usa Unstoppable para no ser levantado e inmovilizado por Telekinesis.',
  },
  yamato: {
    '1': 'Dashea hacia sus espaldas mientras carga su Power Slash con la katana.',
    '2': 'Esquiva lateralmente su gancho cortante para que no cierre la distancia.',
    '3': 'No pelees pegado a ella para que su corte carmesí no le devuelva vida.',
    '4 (Ult)': '¡NO GASTES BURSTS en su Shadow Transformation! Es inmune a morir; espera 5s.',
  },
};

/**
 * Retorna el counterTip específico y auténtico para la habilidad de un héroe.
 */
export function getAbilityCounterTip(
  heroId: string,
  slot: string,
  abilityName?: string,
  fallbackTip?: string
): string {
  const cleanSlot = slot.replace(' (Ult)', '').trim();
  const heroTips = ABILITY_COUNTER_TIPS[heroId];
  if (heroTips) {
    if (heroTips[slot]) return heroTips[slot];
    if (heroTips[cleanSlot]) return heroTips[cleanSlot];
    if (cleanSlot === '4' && heroTips['4 (Ult)']) return heroTips['4 (Ult)'];
    if (cleanSlot === '4' && heroTips['4']) return heroTips['4'];
  }
  return fallbackTip ?? 'Espera a que gaste esta habilidad antes de iniciar tu intercambio.';
}
