import { splitTimeIntoSlots } from './splitTimeIntoSlots'; import assert from 'node:assert/strict';
assert.equal(splitTimeIntoSlots(0, 3600000, 30).length, 2);