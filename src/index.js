const ssr = require('egg-ssr-pages')
const serve = require('egg-serve-static')
const define = require('egg-define-router')

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

module.exports = (routes = {}, config = {}, extra) => {
  const apply = app => defineRouter(app, routes, config)
  return app => {
    if (extra.length < 2) {
      apply(app)
      extra(app)
      return
    }

    extra(app, apply)
  }
}
