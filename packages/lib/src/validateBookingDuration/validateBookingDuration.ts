export function validateBookingDuration(durationMin: number, minAllowed = 15, maxAllowed = 240): boolean {
  return durationMin >= minAllowed && durationMin <= maxAllowed && durationMin % 5 === 0;
}