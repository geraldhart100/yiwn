import test from 'ava'

import random from '../lib/random/random-from-seed'

test('seed', t => {
  random.seed(0)
  t.is(random.nextValue(), 0.21132115912208504)

  random.seed(0)
  t.is(random.nextValue(), 0.21132115912208504)

  random.seed(1)
  t.is(random.nextValue(), 0.2511917009602195)

  random.seed(2)
  t.is(random.nextValue(), 0.2910622427983539)

  random.seed(0.21132115912208504)
  t.is(random.nextValue(), 0.2197466482381452)

  random.seed(0)
  t.is(random.nextValue(), 0.21132115912208504)
})
