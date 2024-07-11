import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OasisView from '../views/OasisView.vue'
import IbiogramView from '../views/IbiogramView.vue'
import AirsView from '../views/AirsView.vue'
import NurseFriendView from '../views/NurseFriend.vue'

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
    },
    {
      path: '/airs',
      name: 'airs',
      component: AirsView
    },
    {
      path: '/nurse-friend',
      name: 'nurse-friend',
      component: NurseFriendView
    },
    {
      path: '/glansis',
      name: 'glansis',
      // component: GlansisView
    },
    {
      path: '/vpet',
      name: 'vpet',
      // component: VpetView
    },
    {
      path: '/informed',
      name: 'informed',
      // component: InformedView
    }
  ]
})

export default router
