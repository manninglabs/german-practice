<template>
  <div id="app">
    <router-view></router-view>
    <site-footer />
  </div>
</template>

<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

@Component({
  name: 'app',
  components: {
    SiteHeader, SiteFooter
  }
})
export default class App extends Vue {
}
</script>

<style>
  body {
    font-family: 'Futura', sans-serif;
    margin: 0px;
  }
  h1 {
    font-size: 35px;
    color: #56b949;
    letter-spacing: 2px;
    padding-left: 100px;
    margin-top: 40px;
    font-weight: 100;
  }
</style>
