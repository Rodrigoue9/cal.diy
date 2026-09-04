export function calculateAvailablePercentage(totalMinutes: number, bookedMinutes: number): number {
  if (totalMinutes <= 0) return 0;
  const avail = Math.max(0, totalMinutes - bookedMinutes);
  return Math.round((avail / totalMinutes) * 100);
}