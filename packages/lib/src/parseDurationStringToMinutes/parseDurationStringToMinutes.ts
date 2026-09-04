export function parseDurationStringToMinutes(str: string): number {
  let total = 0;
  const hMatch = str.match(/(\d+)\s*h/i), mMatch = str.match(/(\d+)\s*m/i);
  if (hMatch) total += parseInt(hMatch[1], 10) * 60;
  if (mMatch) total += parseInt(mMatch[1], 10);
  if (!hMatch && !mMatch && /^\d+$/.test(str.trim())) total = parseInt(str.trim(), 10);
  return total;
}