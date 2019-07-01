const path = require('path')

const test = require('ava')
const create = require('roe-mock')
const {copy, resolve} = require('test-fixture')()
const fs = require('fs-extra')

const remove = dir => fs.remove(dir).catch(() => {})

let mock

test.before(async () => {
  const name = `fixtures-${process.env.ROE_DEFINE_ROUTER_PARAMETERS}`
  const dir = path.join(__dirname, name)
  await remove(dir)
  await copy(dir)

  mock = await create(resolve())
})

test('routes', async t => {
  const {
    text
  } = await mock.get('/hello')
  .expect(200)

  t.is(text, 'hello')
})

test('static', async t => {
  const {
    text
  } = await mock.get('/js/a.js')
  .expect(200)

  t.is(text, '// a.js\n')
})
