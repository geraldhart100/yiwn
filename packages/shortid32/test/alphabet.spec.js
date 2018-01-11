import test from 'ava'

import alphabet from '../lib/alphabet'

test.beforeEach(() => alphabet.seed(1))

test('seeds', t => {
  alphabet.seed(1)
  t.is(alphabet.shuffled(), 'KCYS5WPRGTM7D9E23JZAXQF6UVBH8L4N')

  alphabet.seed(1234)
  t.is(alphabet.shuffled(), '9A4K7CS8FHTUVBYJ3DRQ52N6XZLMGPWE', 'unique with each seed')

  alphabet.seed(1234)
  t.is(alphabet.shuffled(), '9A4K7CS8FHTUVBYJ3DRQ52N6XZLMGPWE', 'same with a single seed')
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
