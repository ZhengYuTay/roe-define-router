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

module.exports = defineRouter({
  routes: {
    '/say-hello': 'say.hello'
  },

  pages: {
    '/:lang': 'index'
  },

  static: {
    '/static': 'static'
  }
}, {
  static: {
    root: '/path/to/project'
  }
}, app => {
  // manually set other route definitions
})
```

## defineRouter()

## License

MIT
