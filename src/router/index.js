import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Subscriptions from '../views/Subscriptions.vue'
import Login from '../views/Login.vue'
import BoxCreation from '../views/BoxCreation.vue'

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
  },
  {
    path: '/box-creation',
    name: 'BoxCreation',
    component: BoxCreation
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
