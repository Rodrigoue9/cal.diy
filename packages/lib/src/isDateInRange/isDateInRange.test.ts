import { isDateInRange } from './isDateInRange'; import assert from 'node:assert/strict';
assert.equal(isDateInRange(new Date("2026-05-15"), new Date("2026-05-01"), new Date("2026-05-31")), true);