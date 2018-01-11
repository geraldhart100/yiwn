import test from 'ava'

import { assocPathTo } from '..'

test(t => {
  t.deepEqual(
    assocPathTo({ a: { b: 1 } }, ['a', 'b'], 2),
    { a: { b: 2 } }
  )

  t.deepEqual(
    assocPathTo({}, ['a', 'b'], 2),
    { a: { b: 2 } }
  )
})
