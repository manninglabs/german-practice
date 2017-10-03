import auth0 from 'auth0-js'

export default class AuthService {
  auth0: auth0.WebAuth;

  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: 'german-practice.eu.auth0.com',
      clientID: '4Txm0Qm0sePG2lpCVsrrj0H8EJZgpawE'
    })
  }

  login () {
    console.log('auth service logging in')
    this.auth0.authorize({
      responseType: 'token id_token',
      redirectUri: 'http://localhost:5000/auth0/callback',
      audience: 'https://german-practice.eu.auth0.com/userinfo',
      scope: 'openid'
    })
  }

  handleAuthentication () {
    console.log('auth service handling authentication')
  }
}
