const { o, head } = require('ramda')

const rejectNil = require('./rejectNil')

/**
 * @description
 *
 * Returns the first not nil element of given list
 *
 * @sig
 *
 * headNotNil :: [a] => a | Undefined
 *
 * @example
 *
 *      headNotNil([null, void 0, 0, 1]) // 0
 *      headNotNil([]) // undefined
 */

module.exports = o(head, rejectNil)
