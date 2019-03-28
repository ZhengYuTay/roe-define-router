const path = require('path')
const define = require('../../..')

const routes = {
  routes: {
    '/hello': 'say.hello'
  },

  pages: {
    '/home/:lang': 'index'
  },

  static: {
    '/js': 'static'
  }
}

const config = {
  static: {
    root: path.join(__dirname, '..')
  }
}

module.exports = process.env.ROE_DEFINE_ROUTER_PARAMETERS === 'two'
  ? define(routes, config, (app, apply) => {
    apply(app)
  })
  : define(routes, config, () => {})
