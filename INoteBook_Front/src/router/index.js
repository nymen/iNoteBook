import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/parts/login/view/Login'
import Customer from '@/parts/customer/view/Overview'
import Provider from '@/parts/provider/view/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/customer',
      name: 'Customer',
      component:Customer
    },
    {
      path: '/provider',
      name: 'Provider',
      component:Provider
    }
  ]
})
