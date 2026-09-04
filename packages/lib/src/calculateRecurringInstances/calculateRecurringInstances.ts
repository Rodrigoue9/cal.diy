export function calculateRecurringInstances(startDate: Date, count: number, intervalDays = 7): Date[] {
  const dates: Date[] = [];
  for (let i = 0; i < count; i++) {
    const next = new Date(startDate.getTime() + i * intervalDays * 86400000);
    dates.push(next);
  }
  return dates;
}