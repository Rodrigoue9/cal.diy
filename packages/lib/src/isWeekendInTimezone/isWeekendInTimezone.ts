export function isWeekendInTimezone(date: Date, timeZone = "UTC"): boolean {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone }).format(date);
  return day === "Sat" || day === "Sun";
}