const ssr = require('egg-ssr-pages')
const serve = require('egg-serve-static')
const define = require('egg-define-router')
const {
  isObject
} = require('core-util-is')

const {
  error
} = require('./error')

const NOOP = () => {}

const defineRouter = (app, routes, config) => {
  if (routes.pages) {
    ssr(routes.pages, config.pages)(app)
  }

  if (routes.static) {
    serve(routes.static, config.static)(app)
  }

  if (routes.routes) {
    define(routes.routes, config.routes)(app)
  }
}

module.exports = (routes, config = {}, extra = NOOP) => {
  if (!isObject(routes)) {
    throw error('INVALID_ROUTES')
  }

  const apply = app => defineRouter(app, routes, config)
  return app => {
    if (extra.length < 2) {
      apply(app)
      extra(app)
      return
    }

    // Usage
    // (app, apply) => {
    //   app.router.get(pattern, someController)
    //   apply(app)
    // }
    extra(app, apply)
  }
}
