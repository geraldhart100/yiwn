/**
 * @sig
 *
 * allP :: [a] -> Promise [a]
 *
 * @description
 *
 * Same as `Promise.all`
 *
 * @example
 *
 *      allP(1, Promise.resolve(2)) // [1, 2]
 *
 */

module.exports = Promise.all.bind(Promise)
