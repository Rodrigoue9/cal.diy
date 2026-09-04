export function splitTimeIntoSlots(startMs: number, endMs: number, slotDurationMin: number, bufferMin = 0): Array<{ start: number; end: number }> {
  const slots: Array<{ start: number; end: number }> = [];
  const slotMs = slotDurationMin * 60000, bufferMs = bufferMin * 60000;
  let cur = startMs;
  while (cur + slotMs <= endMs) {
    slots.push({ start: cur, end: cur + slotMs });
    cur += slotMs + bufferMs;
  }
  return slots;
}