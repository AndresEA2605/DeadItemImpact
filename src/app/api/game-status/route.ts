import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execFileAsync = promisify(execFile);

// Evitamos que Turbopack intente analizar estáticamente la ruta en tiempo de compilación
function getCitadelLogPath(): string {
  const parts = ['C:', 'Program Files (x86)', 'Steam', 'steamapps', 'common', 'Deadlock', 'game', 'citadel', 'console.log'];
  return parts.join(path.sep);
}

// Mapa de claves internas del juego (console.log) a los ids de src/data/heroes.ts.
// Cubre los 44 héroes vigentes al 5 de noviembre de 2026.
const INTERNAL_HERO_MAP: Record<string, string> = {
  hero_atlas: 'abrams',
  abrams: 'abrams',
  hero_fencer: 'apollo',
  apollo: 'apollo',
  hero_baba: 'baba',
  baba: 'baba',
  hero_bebop: 'bebop',
  bebop: 'bebop',
  hero_punkgoat: 'billy',
  billy: 'billy',
  hero_nano: 'calico',
  calico: 'calico',
  hero_unicorn: 'celeste',
  celeste: 'celeste',
  hero_deadpack: 'deadman-danny',
  deadmandanny: 'deadman-danny',
  'deadman-danny': 'deadman-danny',
  hero_doorman: 'the-doorman',
  thedoorman: 'the-doorman',
  'the-doorman': 'the-doorman',
  hero_drifter: 'drifter',
  drifter: 'drifter',
  hero_dynamo: 'dynamo',
  dynamo: 'dynamo',
  hero_necro: 'graves',
  graves: 'graves',
  hero_orion: 'grey-talon',
  greytalon: 'grey-talon',
  'grey-talon': 'grey-talon',
  hero_haze: 'haze',
  haze: 'haze',
  hero_astro: 'holliday',
  holliday: 'holliday',
  hero_inferno: 'infernus',
  inferno: 'infernus',
  infernus: 'infernus',
  hero_tengu: 'ivy',
  ivy: 'ivy',
  hero_kelvin: 'kelvin',
  kelvin: 'kelvin',
  hero_ghost: 'lady-geist',
  ladygeist: 'lady-geist',
  'lady-geist': 'lady-geist',
  hero_lash: 'lash',
  lash: 'lash',
  hero_forge: 'mcginnis',
  mcginnis: 'mcginnis',
  hero_vampirebat: 'mina',
  mina: 'mina',
  hero_mirage: 'mirage',
  mirage: 'mirage',
  hero_krill: 'mo-krill',
  mokrill: 'mo-krill',
  'mo-krill': 'mo-krill',
  hero_nurse: 'nurse-harrow',
  nurseharrow: 'nurse-harrow',
  'nurse-harrow': 'nurse-harrow',
  hero_bookworm: 'paige',
  paige: 'paige',
  hero_chrono: 'paradox',
  paradox: 'paradox',
  hero_synth: 'pocket',
  pocket: 'pocket',
  hero_ratking: 'rat-king',
  'rat-king': 'rat-king',
  hero_familiar: 'rem',
  rem: 'rem',
  hero_gigawatt: 'seven',
  seven: 'seven',
  hero_shiv: 'shiv',
  shiv: 'shiv',
  hero_werewolf: 'silver',
  silver: 'silver',
  hero_magician: 'sinclair',
  sinclair: 'sinclair',
  hero_chessmaster: 'solomon',
  solomon: 'solomon',
  hero_priest: 'venator',
  venator: 'venator',
  hero_frank: 'victor',
  victor: 'victor',
  hero_hornet: 'vindicta',
  vindicta: 'vindicta',
  hero_artist: 'violet',
  violet: 'violet',
  hero_viscous: 'viscous',
  viscous: 'viscous',
  hero_viper: 'vyper',
  vyper: 'vyper',
  hero_warden: 'warden',
  warden: 'warden',
  hero_wraith: 'wraith',
  wraith: 'wraith',
  hero_yamato: 'yamato',
  yamato: 'yamato'
};

const INTERNAL_HERO_PATTERN = new RegExp(
  `(?<![a-z0-9_])(${Object.keys(INTERNAL_HERO_MAP)
    .sort((first, second) => second.length - first.length)
    .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})(?![a-z0-9_])`,
  'gi'
);

type GameMode = 'closed' | 'lobby' | 'practice' | 'match' | 'unknown';

function extractMapName(lines: string[]): string | null {
  for (let index = lines.length - 1; index >= 0; index--) {
    const match = lines[index].match(
      /\bmap(?:_name|name)?\s*[:=]\s*["']?([a-z0-9_./-]+)|\b(?:loading|changing|current)\s+map\s+(?:to\s+)?["']?([a-z0-9_./-]+)/i
    );
    const rawName = match?.[1] ?? match?.[2];
    if (!rawName) continue;
    return rawName.split(/[\\/]/).pop()?.replace(/\.(?:bsp|vpk)$/i, '') ?? rawName;
  }
  return null;
}

function detectGameMode(lines: string[], mapName: string | null, logFresh: boolean): GameMode {
  if (!logFresh) return mapName && /hideout|practice|training|sandbox/i.test(mapName) ? 'practice' : 'unknown';

  const recentText = lines.slice(-250).join('\n');
  if (/hideout|practice|training|sandbox/i.test(mapName ?? '') || /\b(?:practice mode|training room|sandbox)\b/i.test(recentText)) {
    return 'practice';
  }
  if (/C_BasePlayerPawn|respawned/i.test(recentText)) return 'match';
  if (/\blobby\b|main menu|front.?end|hero selection/i.test(recentText) || /lobby/i.test(mapName ?? '')) {
    return 'lobby';
  }
  return 'unknown';
}

export async function GET() {
  try {
    let isRunning = false;
    let processId: number | null = null;
    let gameMode: GameMode = 'closed';
    let mapName: string | null = null;

    // 1. Detectar proceso deadlock.exe nativamente en Windows
    try {
      const { stdout } = await execFileAsync(
        'tasklist',
        ['/FI', 'IMAGENAME eq deadlock.exe', '/FO', 'CSV', '/NH'],
        { timeout: 2_000, windowsHide: true }
      );
      const pidMatch = stdout.match(/"deadlock\.exe","(\d+)"/i);
      if (pidMatch) {
        isRunning = true;
        processId = Number(pidMatch[1]);
      }
    } catch {
      try {
        const { stdout } = await execFileAsync(
          'tasklist',
          ['/FI', 'IMAGENAME eq project8.exe', '/FO', 'CSV', '/NH'],
          { timeout: 2_000, windowsHide: true }
        );
        const pidMatch = stdout.match(/"project8\.exe","(\d+)"/i);
        if (pidMatch) {
          isRunning = true;
          processId = Number(pidMatch[1]);
        }
      } catch { /* proceso ausente o tasklist sin respuesta */ }
    }

    // 2. Analizar console.log de Deadlock si está en ejecución
    const logPath = getCitadelLogPath();
    let inMatch = false;
    let logFresh = false;
    const detectedHeroIds = new Set<string>();

    if (isRunning && fs.existsSync(logPath)) {
      try {
        const stats = fs.statSync(logPath);
        logFresh = Date.now() - stats.mtimeMs < 5 * 60 * 1000;
        const bufferSize = Math.min(stats.size, 150 * 1024);
        const buffer = Buffer.alloc(bufferSize);
        const fd = fs.openSync(logPath, 'r');
        try {
          fs.readSync(fd, buffer, 0, bufferSize, stats.size - bufferSize);
        } finally {
          fs.closeSync(fd);
        }

        const lines = buffer.toString('utf-8').split('\n');
        mapName = extractMapName(lines);
        gameMode = detectGameMode(lines, mapName, logFresh);
        inMatch = gameMode === 'match';

        if (logFresh) {
          for (let i = lines.length - 1; i >= 0; i--) {
            for (const match of lines[i].matchAll(INTERNAL_HERO_PATTERN)) {
              const canonicalId = INTERNAL_HERO_MAP[match[0].toLowerCase()];
              if (canonicalId) detectedHeroIds.add(canonicalId);
            }
            if (detectedHeroIds.size >= 12) break;
          }
        }
      } catch (err) {
        console.error('Error leyendo console.log:', err);
      }
    }

    return NextResponse.json({
      isRunning,
      processId,
      inMatch: isRunning && inMatch,
      gameMode: isRunning ? gameMode : 'closed',
      mapName,
      logFresh,
      detectedHeroes: Array.from(detectedHeroIds).slice(0, 12),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { isRunning: false, inMatch: false, gameMode: 'unknown', mapName: null, logFresh: false, detectedHeroes: [], error: String(error) },
      { status: 500 }
    );
  }
}
