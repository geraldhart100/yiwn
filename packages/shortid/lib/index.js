const alphabet = require('./alphabet')
const encode = require('./encode')

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
const REDUCE_TIME = 1459523698783

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
const version = 6

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
const clusterWorkerId = require('./util/cluster-worker-id') || 0

// Counter is used when shortid is called multiple times in one second.
let counter

// Remember the last time shortid was called in case counter is needed.
let previousSeconds

/**
 * @description
 *
 * Generate unique id
 *
 * @sig
 *
 * shortid :: * -> String
 */

function generate() {
  var str = ''

  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001)

  if (seconds === previousSeconds) {
    counter++
  } else {
    counter = 0
    previousSeconds = seconds
  }

  str = str + encode(alphabet.lookup, version)
  str = str + encode(alphabet.lookup, clusterWorkerId)

  if (counter > 0) {
    str = str + encode(alphabet.lookup, counter)
  }

  str = str + encode(alphabet.lookup, seconds)

  return str
}


// Expose generator

module.exports = generate;
