import test from 'ava'

import { allP } from '..'

test(async t => {
  await allP([1, Promise.resolve(2)])
    .then(res => {
      t.deepEqual(res, [1, 2])
    })

  await allP([1, Promise.reject(2)])
    .catch(err => {
      t.is(err, 2)
    })
})
