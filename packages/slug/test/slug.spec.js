import test from 'ava'

import slug from '..'

test(t => {
  t.is(slug('I ♥ Unicode'), 'i-love-unicode', 'support unicode')
  t.is(slug(' x x '), 'x-x', 'trim')
})
