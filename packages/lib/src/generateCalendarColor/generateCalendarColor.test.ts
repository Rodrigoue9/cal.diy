import { generateCalendarColor } from './generateCalendarColor'; import assert from 'node:assert/strict';
assert.equal(generateCalendarColor("cal-1").startsWith("#"), true);