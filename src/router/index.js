import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import AvailabilityView from '@/views/AvailabilityView.vue'
import ChargeEndView from '@/views/ChargeEndView.vue'
import FreeSpotView from '@/views/FreeSpotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/availability',
      name: 'availability',
      component: AvailabilityView
    },
    {
      path: '/end_charge',
      name: 'end_charge',
      component: ChargeEndView
    },
    {
      path: '/notif_free',
      name: 'notif_free',
      component: FreeSpotView
    }
  ]
})

export default router
