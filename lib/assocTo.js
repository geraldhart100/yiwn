const { assoc, flip } = require('ramda')
const { curryRight } = require('ramda-adjunct')

/**
 * @description
 *
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
 *
 * @sig
 *
 * assocTo :: { k: v } -> String -> a -> { k: v }
 *
 * @example
 *
 *      assocTo({ a: 1, b: 1 }, 'b', 2) // { a: 1, b: 2 }
 *      assocTo({}, 'b', 2) // { b: 2 }
 *
 */

module.exports = curryRight(flip(assoc))
