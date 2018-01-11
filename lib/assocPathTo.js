const { assocPath, flip } = require('ramda')
const { curryRight } = require('ramda-adjunct')

/**
 * @description
 *
 * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path
 *
 * @sig
 *
 * assocPathTo :: { k: v } -> [String] -> a -> { k: v }
 *
 * @example
 *
 *      assocTo({ a: { b: 1 } }, ['a', 'b'], 2) // { a: { b: 2 } }
 *      assocTo({}, ['a', 'b'], 2) // { b: 2 }
 *
 */

module.exports = curryRight(flip(assocPath))
