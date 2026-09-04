export function truncateEventTitle(title: string, maxLen = 40): string {
  if (title.length <= maxLen) return title;
  const sub = title.slice(0, maxLen);
  const lastSpace = sub.lastIndexOf(" ");
  return (lastSpace > 20 ? sub.slice(0, lastSpace) : sub) + "...";
}