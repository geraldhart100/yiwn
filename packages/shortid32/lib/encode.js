const randomByte = require('./random/random-byte');

function encode (lookup, number) {
    let loopCounter = 0
    let done

    let str = ''

    while (!done) {
      str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() )
      done = number < (Math.pow(16, loopCounter + 1 ) )
      loopCounter++
    }

    return str
}

module.exports = encode
