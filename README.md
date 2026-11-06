# 🎮 Deadlock Hub • Buscador de Campeones, Counters y Guías

Aplicación interactiva y especializada para **Deadlock** (Valve Corp), desarrollada con **Next.js 16 (Turbopack)**, **TypeScript**, **Tailwind CSS** y **Lucide Icons**.

> **Datos actualizados al 5 de noviembre de 2026** · Parche de juego del **4 de noviembre de 2026** · Fuente: [deadlock.wiki](https://deadlock.wiki)
>
> Cobertura actual: **44 héroes** y **173 ítems vigentes** de tienda (T1 800 / T2 1.600 / T3 3.200 / T4 6.400 / Legendario 9.999 almas). El parche del 5 de noviembre de 2026 solo ajustó las reglas de la Ranked Beta Season 2, sin cambios de gameplay.

---

## 📱 Interfaz móvil primero

La app está diseñada para usarse con una mano durante la partida:

- **Navegación inferior fija** (Buscar / Sala) con badge de enemigos y respeto por el *safe area* de iPhone/Android.
- **Selector de héroes tipo app**: hoja inferior con buscador, filtros por rol y rejilla de avatares táctiles.
- **Ficha de héroe** con stats clave (salud, DPS, stamina y velocidad) y color por rol.
- **Pestañas Counters / Guía / Kit** para separar la información sin saturar la pantalla.
- **Ítems en tarjetas compactas** con categoría, tier, costo, prioridad y motivo del counter; detalle en hoja inferior.
- **Sala en vivo** con 6 ranuras visuales, selección múltiple y build counter ordenada por impacto.
- Tipografía legible, objetivos táctiles grandes, foco visible y soporte para `prefers-reduced-motion`.

---

## ⚡ Características Principales

1. 🔍 **Buscador Instantáneo & Filtros Rápidos**:
   - Búsqueda en tiempo real por nombre de campeón, rol, o mecánicas (ej. *"vuelo"*, *"canalizada"*, *"balas"*, *"regen"*, *"escopeta"*).
   - Filtro por roles: Carry, Brawler, Asesino, Iniciador, Soporte / Utilidad.
   - Cheat Sheet de emergencia con reglas universales de counterplay en la cabecera.

2. 🛡️ **Guía Táctica de Counters (Counterplay)**:
   - **Ítems de Counter Específicos**: Clasificados por categoría (🟠 Weapon, 🟢 Vitality, 🟣 Spirit), Tier y costo de almas (Souls).
   - **Explicación Mecánica**: Explicación detallada de *por qué* es counter y *qué habilidad* anula (ej. *Knockdown* cancela la *Storm Cloud* de Seven o el *Flight* de Vindicta; *Metal Skin* y *Return Fire* anulan a Haze; *Toxic Bullets* y *Decay* destrozan la regeneración de Abrams y Shiv).
   - **Héroes Counter**: Matchups favorables y desfavorables con explicaciones de línea y teamfight.
   - **Consejos de Posicionamiento**: Errores fatales a evitar.

3. 🕹️ **Guía de Juego (How to Play)**:
   - Estrategia de fase de líneas (Early Game) vs rotaciones y teamfights (Mid/Late Game).
   - Prioridad para subir habilidades (Skill Max Order).
   - Combos mecánicos y secuencias de botones.
   - Progresión de build de ítems por cantidad de almas (Early Game → Mid Game → Late Game → Full Build).

4. 📊 **Estadísticas y Kit de Habilidades**:
   - Estadísticas base: DPS de arma, balas por cargador, cadencia de tiro, vida máxima, regeneración, resistencia a balas, resistencia a espíritu, velocidad y barras de stamina.
   - Desglose de las 4 habilidades con tipos (Activa, Pasiva, Canalizada) y vulnerabilidades tácticas.

---

## 🚀 Cómo Ejecutar la Aplicación

El proyecto se encuentra ubicado en:
`C:\Users\User\.gemini\antigravity\scratch\deadlock-hub`

Para ejecutar el servidor de desarrollo:
```bash
# Con Bun:
bun run dev

# O si tienes Node.js / npm:
npm run dev
```

Abre tu navegador en: **http://localhost:3000**
