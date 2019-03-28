const {Errors} = require('err-object')

const {error, E} = new Errors()

E('INVALID_ROUTES', 'routes must be an object')

module.exports = {
  error
}
