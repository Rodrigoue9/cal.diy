export function generateCalendarColor(id: string): string {
  const palette = ["#292929", "#2563EB", "#7C3AED", "#DB2777", "#D97706", "#059669"];
  let hash = 0; for (let i = 0; i < id.length; i++) hash = (hash + id.charCodeAt(i)) % palette.length;
  return palette[hash];
}