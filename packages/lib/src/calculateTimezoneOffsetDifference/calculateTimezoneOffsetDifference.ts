export function calculateTimezoneOffsetDifference(date: Date, tz1: string, tz2: string): number {
  function getMin(tz: string) {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "numeric", hour12: false }).formatToParts(date);
    const h = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
    const m = parseInt(parts.find(p => p.type === "minute")?.value || "0", 10);
    return h * 60 + m;
  }
  return getMin(tz1) - getMin(tz2);
}