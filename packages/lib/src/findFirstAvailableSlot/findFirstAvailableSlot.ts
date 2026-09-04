export function findFirstAvailableSlot(slots: Array<{ start: number; end: number }>, busy: Array<{ start: number; end: number }>): { start: number; end: number } | null {
  for (const s of slots) {
    const conflict = busy.some(b => Math.max(s.start, b.start) < Math.min(s.end, b.end));
    if (!conflict) return s;
  }
  return null;
}