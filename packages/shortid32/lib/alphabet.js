const randomFromSeed = require('./random/random-from-seed')

let ORIGINAL = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
let alphabet
let previousSeed

let shuffled

function reset() {
  shuffled = false
}

function setCharacters (_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL
      reset()
    }

    return
  }

  if (_alphabet_ === alphabet) {
    return
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_)
  }

  const unique = _alphabet_
    .split('')
    .filter((item, ind, arr) => ind !== arr.lastIndexOf(item))

  if (unique.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '))
  }

  alphabet = _alphabet_
  reset()
}

function characters (_alphabet_) {
  setCharacters(_alphabet_)
  return alphabet
}

function setSeed(seed) {
  randomFromSeed.seed(seed)
  if (previousSeed !== seed) {
    reset()
    previousSeed = seed
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL)
  }

  const sourceArray = alphabet.split('')
  const targetArray = []

  let r = randomFromSeed.nextValue()
  let characterIndex

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue()
    characterIndex = Math.floor(r * sourceArray.length)
    targetArray.push(sourceArray.splice(characterIndex, 1)[0])
  }

  return targetArray.join('')
}

function getShuffled () {
  if (shuffled) return shuffled

  shuffled = shuffle()
  return shuffled
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */

function lookup(index) {
  const alphabetShuffled = getShuffled()
  return alphabetShuffled[index]
}

module.exports = {
  characters: characters,
  seed: setSeed,
  lookup: lookup,
  shuffled: getShuffled
}
