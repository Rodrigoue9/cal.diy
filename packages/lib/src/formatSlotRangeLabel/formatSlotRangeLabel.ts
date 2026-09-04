export function formatSlotRangeLabel(start: Date, end: Date): string {
  const opt: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  return `${start.toLocaleTimeString('en-US', opt)} - ${end.toLocaleTimeString('en-US', opt)}`;
}