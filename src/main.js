// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('main-banner', require('./components/MainBanner.vue'))
Vue.component('list-exercises', require('./components/ListExercises.vue'))
Vue.component('site-footer', require('./components/Footer.vue'))
Vue.component('exercises-hardcore', require('./components/Exercises-hardcore.vue'))
Vue.component('exercises-1', require('./components/Exercises1.vue'))
Vue.component('exercises-2', require('./components/Exercises2.vue'))
Vue.component('exercises-3', require('./components/Exercises3.vue'))
Vue.component('site-header', require('./components/Header.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
