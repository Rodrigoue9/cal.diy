import { calculateAvailablePercentage } from './calculateAvailablePercentage'; import assert from 'node:assert/strict';
assert.equal(calculateAvailablePercentage(480, 120), 75);