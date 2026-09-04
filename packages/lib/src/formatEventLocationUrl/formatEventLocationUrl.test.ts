import { formatEventLocationUrl } from './formatEventLocationUrl'; import assert from 'node:assert/strict';
assert.equal(formatEventLocationUrl("https://meet.google.com/abc").type, "video");