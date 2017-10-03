import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ShowExercise from '@/pages/exercises/Show'
import Auth0Callback from '@/pages/auth0/Callback'

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
      path: '/auth0/callback',
      name: 'auth0-callback',
      component: Auth0Callback
    },
    {
      path: '/exercise/:id',
      name: 'show-exercise',
      component: ShowExercise,
      props: true
    }
  ]
})
