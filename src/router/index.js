import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OasisView from '../views/OasisView.vue'
import IbiogramView from '../views/IbiogramView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oasis',
      name: 'oasis',
      component: OasisView
    },
    {
      path: '/ibiogram',
      name: 'ibiogram',
      component: IbiogramView
    }
  ]
})

export default router
