import { formatDateLocalIso } from './formatDateLocalIso'; import assert from 'node:assert/strict';
assert.equal(formatDateLocalIso(new Date("2026-06-15T04:00:00Z")).length, 10);