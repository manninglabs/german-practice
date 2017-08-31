import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Exercises from '@/pages/Exercises'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    }
  ]
})
