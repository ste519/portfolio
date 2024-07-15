import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OasisView from '../views/OasisView.vue'
import IbiogramView from '../views/IbiogramView.vue'
import AirsView from '../views/AirsView.vue'
import NurseFriendView from '../views/NurseFriend.vue'
import InforMedView from '../views/InforMedView.vue'
import VpetView from '../views/VpetView.vue'
import GlansisView from '../views/GlansisView.vue'
import FimView from '../views/FimView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
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
      component: GlansisView
    },
    {
      path: '/vpet',
      name: 'vpet',
      component: VpetView
    },
    {
      path: '/informed',
      name: 'informed',
      component: InforMedView
    },
    {
      path: '/fim',
      name: 'fim',
      component: FimView
    }
  ]
})

export default router
