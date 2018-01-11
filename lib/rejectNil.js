const { reject, isNil } = require('ramda')

/**
 * @description
 *
 * Remove all nil values from list
 *
 * @sig
 *
 * rejectNil :: [a] -> [a]
 *
 * @example
 *
 *      rejectNil([null, void 0, 0, 1]) // [0, 1]
 *
 */

module.exports = reject(isNil)
