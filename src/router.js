import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Datepicker from './views/Datepicker.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'homex',
      component: Home

    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: Datepicker
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import(/* webpackChunkName: "Page1" */ './components/Page1.vue')
    },
    {
      path: '/resTable',
      name: 'resTable',
      component: () => import(/* webpackChunkName: "ResTable */ './views/ResTable.vue')

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
