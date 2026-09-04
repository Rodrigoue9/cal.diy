import { findFirstAvailableSlot } from './findFirstAvailableSlot'; import assert from 'node:assert/strict';
const slots = [{ start: 10, end: 20 }, { start: 30, end: 40 }], busy = [{ start: 10, end: 20 }];
assert.deepEqual(findFirstAvailableSlot(slots, busy), { start: 30, end: 40 });