// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

Vue.config.productionTip = false

Vue.component('site-header', SiteHeader)
Vue.component('site-footer', SiteFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
