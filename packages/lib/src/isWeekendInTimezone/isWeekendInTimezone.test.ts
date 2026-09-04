import { isWeekendInTimezone } from './isWeekendInTimezone'; import assert from 'node:assert/strict';
assert.equal(isWeekendInTimezone(new Date("2026-06-06T12:00:00Z")), true);