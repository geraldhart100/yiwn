import test from 'ava'

import { headNotNil } from '..'

test(t => {
  t.is(headNotNil([null, void 0, 0, 1]), 0)
  t.is(headNotNil([]), void 0)
})
