import { calculateRecurringInstances } from './calculateRecurringInstances'; import assert from 'node:assert/strict';
assert.equal(calculateRecurringInstances(new Date(), 3).length, 3);