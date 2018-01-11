import test from 'ava'

import { rejectNil } from '..'

test(t => {
  t.deepEqual(rejectNil([null, void 0, 0, 1]), [0, 1])
})
