import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import WhyWeExist from '../components/WhyWeExist.vue'
import RulesAndDuties from '../components/RulesAndDuties.vue'
import OurService from '../components/OurService.vue'
import ValidateDriver from '../components/ValidateDriver.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/WhyWeExist',
    name: 'WhyWeExist',
    component: WhyWeExist
  },
  {
    path: '/RulesAndDuties',
    name: 'RulesAndDuties',
    component: RulesAndDuties
  },
  {
    path: '/OurService',
    name: 'OurService',
    component: OurService
  },
  {
    path: '/ValidateDriver',
    name: 'ValidateDriver',
    component: ValidateDriver
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
