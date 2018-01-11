import test from 'ava'

import alphabet from '../lib/alphabet'

test.beforeEach(() => alphabet.seed(1))

test('seeds', t => {
  alphabet.seed(1)
  t.is(alphabet.shuffled(), 'kcys5wprgtm7d9e23jzaxqf6uvbh8l4n')

  alphabet.seed(1234)
  t.is(alphabet.shuffled(), '9a4k7cs8fhtuvbyj3drq52n6xzlmgpwe', 'unique with each seed')

  alphabet.seed(1234)
  t.is(alphabet.shuffled(), '9a4k7cs8fhtuvbyj3drq52n6xzlmgpwe', 'same with a single seed')
})

test('characters', t => {
  function ap (str) {
    return () => alphabet.characters(str)
  }

  t.throws(ap('zʎxʍʌnʇsɹbquɯlʞɾɥƃɟǝpɔq298765432'))
  t.throws(ap('abc'))

  alphabet.characters('②③④⑤⑥⑦⑧⑨ⒶⒷⒸⒹⒺⒻⒼⒽⒿⓀⓁⓂⓃⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ')
  t.is(alphabet.shuffled(), 'ⓀⒸⓎⓈ⑤ⓌⓅⓇⒼⓉⓂ⑦Ⓓ⑨Ⓔ②③ⒿⓏⒶⓍⓆⒻ⑥ⓊⓋⒷⒽ⑧Ⓛ④Ⓝ')
})
