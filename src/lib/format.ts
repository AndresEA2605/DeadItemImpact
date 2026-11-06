/**
 * Formatea un número de Souls de forma consistente en server y client.
 * Usa separador de miles con punto (ej: 3.000) sin depender del locale del navegador.
 */
export function formatSouls(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
