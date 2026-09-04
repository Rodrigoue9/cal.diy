import { clampBookingLeadTime } from './clampBookingLeadTime'; import assert from 'node:assert/strict';
assert.equal(clampBookingLeadTime(new Date(Date.now() + 86400000)), true);