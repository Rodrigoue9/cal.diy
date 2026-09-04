export function sortSlotsChronologically<T extends { start: number }>(slots: T[]): T[] {
  return [...slots].sort((a, b) => a.start - b.start);
}