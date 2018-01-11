import test from 'ava'

import shortid from '..'

test('generate', t => {
  const id = shortid()

  t.is(typeof id, 'string')
  t.true(id.length < 17)

  t.not(id, shortid(), 'unique each time')
})
