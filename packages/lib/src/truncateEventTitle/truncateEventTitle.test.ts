import { truncateEventTitle } from './truncateEventTitle'; import assert from 'node:assert/strict';
assert.equal(truncateEventTitle("Short Title"), "Short Title");