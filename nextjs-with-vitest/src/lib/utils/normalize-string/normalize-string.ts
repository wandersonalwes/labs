export function normalizeString(str: string): string {
  return str.trim().replace(/\s+/g, ' ')
}
