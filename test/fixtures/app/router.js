const path = require('path')
const define = require('../../..')

const two = process.env.ROE_DEFINE_ROUTER_PARAMETERS === 'two'

const routes = {
  routes: {
    '/hello': 'say.hello'
  },

  static: {
    '/js': 'static'
  }
}

if (two) {
  routes.pages = {
    '/home/:lang': 'index'
  }
}

const config = {
  static: {
    root: path.join(__dirname, '..')
  }
}

module.exports = two
  ? define(routes, config, (app, apply) => {
    apply(app)
  })
  : define(routes, config, () => {})
