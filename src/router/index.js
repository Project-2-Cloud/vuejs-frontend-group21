import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Subscriptions from '../views/Subscriptions.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions
  },
  {
    path: '/loginwithtoken',
    name: 'loginwithtoken',
    component: Login
  }
]

const router = createRouter({
  mode: 'history',
  routes
})

export default router
