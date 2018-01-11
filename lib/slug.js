const slug = require('slug')

const { unary } = require('ramda')

slug.defaults.mode = 'rfc3986'

/**
 * @description
 *
 * Slugifies given string to url-safe
 *
 * @sig
 *
 * slug :: String -> String
 *
 * @example
 *
 *      slug('I ♥ Unicode') // i-love-unicode
 *
 */

module.exports = unary(slug)
