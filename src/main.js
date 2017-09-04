// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('main-banner', require('./components/MainBanner.vue'))
Vue.component('site-footer', require('./components/Footer.vue'))
Vue.component('site-header', require('./components/Header.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
