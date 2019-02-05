import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Router)

export default new Router({
  // mode: 'history', // Use this to remove the hash in the url when not a single page app
  mode: 'hash', // VueJs Default
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
