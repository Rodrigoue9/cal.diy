export function isSlotWithinWorkingHours(slotStartMin: number, slotEndMin: number, workStartMin = 540, workEndMin = 1020): boolean {
  return slotStartMin >= workStartMin && slotEndMin <= workEndMin && slotStartMin < slotEndMin;
}