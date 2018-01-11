const R = require('ramda')
const RA = require('ramda-adjunct')

const Y = require('./lib')

module.exports = Object.assign({}, Y, RA, R)

module.slug = require('yiwn-slug')
module.shortid = require('yiwn-shortid')

