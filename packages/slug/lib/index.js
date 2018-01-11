const slug = require('slug')

const { either, isNil, isEmpty } = require('ramda')

slug.defaults.mode = 'rfc3986'

/**
 * @sig
 *
 * stubNull :: * -> Boolean
 */

const isNilOrEmpty = either(isNil, isEmpty)

/**
 * @description
 *
 * Slugifies given string to url-safe
 *
 * @sig
 *
 * slug :: String | Undefined -> String | Undefined
 *
 * @example
 *
 *      slug('I ♥ Unicode') // i-love-unicode
 *      slug() // null
 *      slug('') // null
 *
 */

module.exports = str => {
  return isNilOrEmpty(str)
    ? null
    : slug(str)
}
