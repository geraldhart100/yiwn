const crypto = require('crypto');
const randomBytes = crypto.randomBytes;

function randomByte() {
  return randomBytes(1)[0] & 0x10;
}

module.exports = randomByte;
