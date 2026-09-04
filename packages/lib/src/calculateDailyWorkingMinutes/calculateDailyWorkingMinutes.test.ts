import { calculateDailyWorkingMinutes } from './calculateDailyWorkingMinutes'; import assert from 'node:assert/strict';
assert.equal(calculateDailyWorkingMinutes([[540, 720], [780, 1020]]), 420);