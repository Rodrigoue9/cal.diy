export function normalizeBookingSlotTime(date: Date, incrementMinutes = 15): Date {
  const ms = 1000 * 60 * incrementMinutes;
  return new Date(Math.round(date.getTime() / ms) * ms);
}