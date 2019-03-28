[![Build Status](https://travis-ci.org/kaelzhang/roe-define-router.svg?branch=master)](https://travis-ci.org/kaelzhang/roe-define-router)
[![Coverage](https://codecov.io/gh/kaelzhang/roe-define-router/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/roe-define-router)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/roe-define-router?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/roe-define-router)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/roe-define-router.svg)](http://badge.fury.io/js/roe-define-router)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/roe-define-router.svg)](https://www.npmjs.org/package/roe-define-router)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/roe-define-router.svg)](https://david-dm.org/kaelzhang/roe-define-router)
-->

# roe-define-router

This package is an utility tool to help generate route definitions of [roe](https://github.com/kaelzhang/roe) or [egg](https://npmjs.org/package/egg)

`roe-define-router` makes it quite easy to define

- normal roe or egg routes
- SSR pages routes (this features requires that `app.next` exists in which `app` is the instance of roe or egg, and `app.next` should be an instance of [`next server`](https://npmjs.org/package/next-server))
- static files serving.

## Install

```sh
$ npm i roe-define-router
```

## Usage

app/router.js

```js
const defineRouter = require('roe-define-router')

const routes = {
  routes: {
    '/say-hello': 'say.hello'
  },

  pages: {
    '/:lang': 'index'
  },

  static: {
    '/static': 'static'
  }
}

const config = {
  static: {
    root: '/path/to/project'
  }
}

module.exports = defineRouter(routes, config, app => {
  // manually set other route definitions
})
```

## defineRouter(routes, config?, extra?)

- **routes.routes?** **config?.routes?** routes and options of [`egg-define-router`](https://github.com/kaelzhang/egg-define-router)
- **routes.pages?** **routes?.pages?** pages and config of [`egg-ssr-pages`](https://github.com/kaelzhang/egg-ssr-pages)
- **routes.static?** **routes?.static?** files and options of [`egg-serve-static`](https://github.com/kaelzhang/egg-serve-static)
- **extra?** `Function(app, apply?)` an extra router function
  - **app** `RoeApplication | EggApplication` the server instance
  - **apply?** `Function(app)` method to apply `roe-define-router` to the application.

Returns a roe/egg router function which accepts app as the only one parameter.

## About `extra`

If the `extra` function only contains one parameter, the `routes` will be applied to the application before invoking `extra`.

```js
module.exports = defineRouter(routes, config, app => {
  // `routes` has already been applied
})
```

If the function contains two parameters, then the second argument `apply` is the function to apply the `routes`, so that we need to manually invoke `apply(app)` to apply the routes what `roe-define-router` defined.

```js
module.exports = defineRouter(routes, config, (app, apply) => {
  // do something with `app.router`

  // Don't forget this line below:
  apply(app)

  // do something with `app.router`
})
```

## License

MIT
