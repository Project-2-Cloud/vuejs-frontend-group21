import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Subscriptions from '../views/Subscriptions.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
