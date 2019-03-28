const test = require('ava')
const define = require('..')
const {
  INVALID_ROUTES
} = require('../src/error')

test('error', t => {
  t.throws(() => define(), INVALID_ROUTES)
})
