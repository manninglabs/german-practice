var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"local"',
  GRPC_HOST: '"http://localhost:8080"',
  AUTH0_DOMAIN: '"german-practice.eu.auth0.com"',
  AUTH0_CLIENT_ID: '"4Txm0Qm0sePG2lpCVsrrj0H8EJZgpawE"',
  AUTH0_REDIRECT_URI: '"http://localhost:5000/auth/callback"'
})
