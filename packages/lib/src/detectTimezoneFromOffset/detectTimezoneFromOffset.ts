export function detectTimezoneFromOffset(offsetMinutes: number): string {
  if (offsetMinutes === 0) return "UTC";
  if (offsetMinutes === -300) return "America/New_York";
  if (offsetMinutes === -480) return "America/Los_Angeles";
  if (offsetMinutes === 60) return "Europe/Paris";
  return "UTC";
}