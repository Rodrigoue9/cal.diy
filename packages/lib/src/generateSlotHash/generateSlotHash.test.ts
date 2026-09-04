import { generateSlotHash } from './generateSlotHash'; import assert from 'node:assert/strict';
assert.equal(generateSlotHash("type1", 1000, "user@cal.com"), "type1_1000_user@cal.com");