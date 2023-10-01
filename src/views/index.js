import Home from './Home.vue'
import Mng from './Mng.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/mng', component: Mng },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router