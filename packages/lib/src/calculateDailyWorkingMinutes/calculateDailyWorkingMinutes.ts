export function calculateDailyWorkingMinutes(shifts: Array<[number, number]>): number {
  return shifts.reduce((acc, [start, end]) => acc + Math.max(0, end - start), 0);
}