const path = require('path')

const test = require('ava')
const create = require('roe-mock')

let mock

test.before(async () => {
  mock = await create(path.join(__dirname, 'fixtures'))
})

test('routes', async t => {
  const {
    text
  } = await mock.get('/hello')
  .expect(200)

  t.is(text, 'hello')
})


test('page', async t => {
  const {
    text
  } = await mock.get('/home/en')
  .expect(200)

  t.true(text.includes(JSON.stringify({lang: 'en'})))
})

test('static', async t => {
  const {
    text
  } = await mock.get('/js/a.js')
  .expect(200)

  t.is(text, '// a.js\n')
})
