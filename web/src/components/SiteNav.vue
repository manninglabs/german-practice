<template>
  <div id="nav">
    <a href="#" v-show="!loggedIn" @click.prevent="login()">Login</a>
    <a href="#" v-show="loggedIn" @click.prevent="logout()">Logout</a>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import AuthService from '../services/auth'

@Component({
  name: 'site-nav'
})
export default class SiteNav extends Vue {
  loggedIn: boolean = AuthService.isLoggedIn() || false

  login () {
    console.log('logging in')
    AuthService.login()
  }
  logout () {
    console.log('logging out')
    AuthService.logout()
    this.loggedIn = false
    this.$router.push('/')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav {
    background-color: white;
    width: 100%;
    height: 50px;
  }
</style>
