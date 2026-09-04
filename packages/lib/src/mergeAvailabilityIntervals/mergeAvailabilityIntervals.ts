export function mergeAvailabilityIntervals(intervals: Array<[number, number]>): Array<[number, number]> {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const res: Array<[number, number]> = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1], cur = intervals[i];
    if (cur[0] <= last[1]) last[1] = Math.max(last[1], cur[1]); else res.push(cur);
  }
  return res;
}