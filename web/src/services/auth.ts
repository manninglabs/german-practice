import auth0 from 'auth0-js'
import decode from 'jwt-decode'
import { Route } from 'vue-router'

const ID_TOKEN_KEY: string = 'id_token';
const ACCESS_TOKEN_KEY: string = 'access_token';
const LOGIN_ID_KEY: string = 'login_id'; // TODO encrypt this? it's the user's session but need to prevent tampering

export default class AuthService {

  static login () {
    console.log('auth service logging in')
    let auth = new auth0.WebAuth({
      domain: (process.env.AUTH0_DOMAIN || ''),
      clientID: (process.env.AUTH0_CLIENT_ID || '')
    })
    auth.authorize({
      responseType: 'token id_token',
      redirectUri: (process.env.AUTH0_REDIRECT_URI || ''),
      audience: 'https://' + (process.env.AUTH0_DOMAIN || '') + '/userinfo',
      scope: 'openid profile'
    })
  }

  static logout () {
    console.log('auth service logging out')
    localStorage.removeItem(ID_TOKEN_KEY)
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  }

  static handleAuthentication () {
    console.log('auth service handling authentication')
    let accessToken = AuthService.getParameterByName('access_token') || ''
    let idToken = AuthService.getParameterByName('id_token') || ''
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(ID_TOKEN_KEY, idToken)

    const claims = decode(idToken)
    let email = claims['name'] // NOTE also has fields such as 'picture' https://goo.gl/nruApn
    console.log('logged in with ID ' + email)
    localStorage.setItem(LOGIN_ID_KEY, email)
  }

  static isLoggedIn () {
    const idToken = localStorage.getItem(ID_TOKEN_KEY)
    return (idToken && !this.isTokenExpired(idToken))
  }

  static requireAuth (to: Route, from: Route, next: Function) {
    if (!AuthService.isLoggedIn()) {
      console.log('not logged in!') // TODO show error
      alert('You need to be logged in to do this.')
      next({
        path: '/'
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }

  static isTokenExpired (token: string) {
    const expirationDate: Date = (this.getTokenExpirationDate(token) || new Date())
    return (expirationDate < new Date())
  }

  static getTokenExpirationDate (encodedToken: string) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }

  static getParameterByName (name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
  }
}
