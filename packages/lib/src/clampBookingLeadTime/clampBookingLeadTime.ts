export function clampBookingLeadTime(targetDate: Date, minNoticeHours = 2, maxAdvanceDays = 60): boolean {
  const now = Date.now(), target = targetDate.getTime();
  const minTime = now + minNoticeHours * 3600000, maxTime = now + maxAdvanceDays * 86400000;
  return target >= minTime && target <= maxTime;
}