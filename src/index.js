const ssr = require('egg-ssr-pages')
const serve = require('egg-serve-static')
const define = require('egg-define-router')
const {
  isObject,
  isFunction
} = require('core-util-is')

const {
  error
} = require('./error')

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

const define = (routes, config, extra) => {
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

const NOOP = () => {}

module.exports = (routes, config, extra) => {
  if (!isObject(routes)) {
    throw error('INVALID_ROUTES')
  }

  if (isFunction(config)) {
    extra = config
    config = {}
  }

  if (!isFunction) {

  }
}
