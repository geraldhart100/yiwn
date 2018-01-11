const {
  curry,
  apply,
  composeP,
  converge,
  unapply
} = require('ramda')

const allP = require('./allP')

/**
 * @description
 *
 * Converge with async functions
 *
 * @sig
 *
 * convergeP :: ((x1, x2, ...) -> Promise z) -> [((a, b, ...) -> Promise x1), ((a, b, ...) -> Promise x2), ...] -> (a -> b -> ... -> Promise z)
 *
 * @example
 *
 *      const fn = convergeP(
 *        Math.pow,
 *        [
 *          x => x,
 *          x => x
 *            ? Promise.resolve(x)
 *            : Promise.reject(new Error('nil'))
 *        ]
 *      )
 *
 *      fn(2).then(console.log) // 4
 *      fn(0).catch(console.log) // Error: nil
 */

module.exports = curry(
  function (after, functions) {
    return composeP(
      apply(after),
      converge(unapply(allP), functions)
    )
  }
)


