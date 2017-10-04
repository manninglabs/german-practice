var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GRPC_HOST: '"http://35.198.167.216:8080"',
  AUTH0_DOMAIN: '"german-practice.eu.auth0.com"',
  AUTH0_CLIENT_ID: '"4Txm0Qm0sePG2lpCVsrrj0H8EJZgpawE"',
  AUTH0_REDIRECT_URI: '"http://35.198.123.255/auth/callback"'
})
