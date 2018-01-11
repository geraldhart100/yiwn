import test from 'ava'

import { assocTo } from '..'

test(t => {
  t.deepEqual(
    assocTo({ a: 1, b: 1 }, 'b', 2),
    { a: 1, b: 2 }
  )

  t.deepEqual(
    assocTo({}, 'b', 2),
    { b: 2 }
  )
})
