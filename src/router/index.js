import { createRouter, createWebHistory } from 'vue-router'
//import LandingPage from '../components/LandingPage.vue'
import Availability from '../components/AvailabilityComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: LandingPage
    },*/
    {
      path: '/availability',
      name: 'availability',
      component: Availability
    }
  ]
})

export default router
