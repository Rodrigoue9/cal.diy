export function formatEventLocationUrl(loc: string): { type: "video" | "link" | "in_person"; url: string } {
  if (/zoom|meet\.google|teams/i.test(loc)) return { type: "video", url: loc };
  if (/^https?:\/\//i.test(loc)) return { type: "link", url: loc };
  return { type: "in_person", url: loc };
}