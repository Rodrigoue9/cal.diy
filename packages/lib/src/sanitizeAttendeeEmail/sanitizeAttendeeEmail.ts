export function sanitizeAttendeeEmail(email: string): string | null {
  const clean = email.trim().toLowerCase();
  if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(clean)) return clean;
  return null;
}