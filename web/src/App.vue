<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({
  name: 'app'
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
  h2 {
    font-size: 17px;
    color: #151f40;
    letter-spacing: 1.2px;
    font-weight: 600;
    margin-top: 40px;
  }
  hr {
    height: 0.2px;
    background-color: #999999;
  }
</style>
