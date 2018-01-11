import test from 'ava'

import { convergeP } from '..'

test(async t => {
  const f = convergeP(
    Math.pow,
    [
      x => x,
      x => x
        ? Promise.resolve(x)
        : Promise.reject(new Error('nil'))
    ]
  )

  await f(2)
    .then(res => {
      t.is(res, 4)
    })

  await t.throws(f(0), 'nil', 'throw on first rejected')
})
