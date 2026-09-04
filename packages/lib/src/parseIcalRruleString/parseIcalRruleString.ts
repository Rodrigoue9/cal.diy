export function parseIcalRruleString(rrule: string): Record<string, string> {
  const clean = rrule.replace(/^RRULE:/i, ""); const res: Record<string, string> = {};
  for (const part of clean.split(";")) { const [k, v] = part.split("="); if (k && v) res[k.toUpperCase()] = v; }
  return res;
}