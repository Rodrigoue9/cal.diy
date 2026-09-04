import { sanitizeAttendeeEmail } from './sanitizeAttendeeEmail'; import assert from 'node:assert/strict';
assert.equal(sanitizeAttendeeEmail("  User@Cal.com "), "user@cal.com");