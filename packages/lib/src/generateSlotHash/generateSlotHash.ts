export function generateSlotHash(eventTypeId: string, startMs: number, attendeeEmail: string): string {
  return `${eventTypeId}_${startMs}_${attendeeEmail.toLowerCase().trim()}`;
}