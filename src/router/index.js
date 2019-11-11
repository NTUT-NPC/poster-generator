import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import templates from '@/components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

Object.entries(templates).forEach(template => {
  routes.push({
    path: `/${template[0]}`,
    component: template[1]
  })
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
