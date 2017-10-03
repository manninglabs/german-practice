<template>
  <div class="spinner">
    <img src="../../assets/loading.svg" alt="loading"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import AuthService from '../../services/auth'

@Component({
  name: 'auth-callback'
})
export default class AuthCallback extends Vue {

  mounted () {
    console.log('callback component mounted, handling authentication')
    this.$nextTick(() => {
      AuthService.handleAuthentication()
      this.$router.push('/')
    })
  }
}
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
