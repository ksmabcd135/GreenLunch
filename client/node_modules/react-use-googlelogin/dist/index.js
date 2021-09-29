
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-use-googlelogin.cjs.production.min.js')
} else {
  module.exports = require('./react-use-googlelogin.cjs.development.js')
}
