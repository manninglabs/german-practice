import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ShowExercise from '@/pages/exercises/Show'
import AuthCallback from '@/pages/auth/Callback'
// import AuthService from '../services/auth'

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
      path: '/auth/callback',
      name: 'auth-callback',
      component: AuthCallback
    },
    {
      path: '/exercise/:id',
      name: 'show-exercise',
      component: ShowExercise,
      // beforeEnter: AuthService.requireAuth,
      props: true
    }
  ]
})
