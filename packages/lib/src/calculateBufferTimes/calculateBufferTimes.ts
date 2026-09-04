export function calculateBufferTimes(start: number, end: number, beforeMin = 10, afterMin = 15): { bufferStart: number; bufferEnd: number } {
  return { bufferStart: start - beforeMin * 60000, bufferEnd: end + afterMin * 60000 };
}