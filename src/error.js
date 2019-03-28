const {Errors} = require('err-object')

const {error, E} = new Errors()

const INVALID_ROUTES = 'routes must be an object'
E('INVALID_ROUTES', INVALID_ROUTES)

module.exports = {
  error,
  INVALID_ROUTES
}
