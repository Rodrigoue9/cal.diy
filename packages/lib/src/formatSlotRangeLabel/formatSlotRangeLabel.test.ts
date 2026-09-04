import { formatSlotRangeLabel } from './formatSlotRangeLabel'; import assert from 'node:assert/strict';
const s = new Date("2026-06-01T10:00:00Z"), e = new Date("2026-06-01T10:30:00Z");
assert.equal(formatSlotRangeLabel(s, e).includes("-"), true);