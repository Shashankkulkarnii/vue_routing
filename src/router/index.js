import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import developers from '../views/developers.vue'
import DeveloperDetailes from '../views/DeveloperDetailes.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/developers',
    name: 'developers',
    component: developers
  },
  {
    path: '/developers/:id',
    name: 'DeveloperDetailes',
    component: DeveloperDetailes,
    props:true
  },
  //catchall for 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
