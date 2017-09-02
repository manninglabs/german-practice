import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ListExercises from '@/pages/exercises/List'
import ShowExercise from '@/pages/exercises/Show'

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
      component: ListExercises
    },
    {
      path: '/exercise/:id',
      name: 'exercise',
      component: ShowExercise,
      props: true
    }
  ]
})
