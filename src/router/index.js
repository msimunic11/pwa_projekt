import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../components/Pocetna.vue'

import vjezba from '../components/vjezba.vue'
import Namirnice from '../components/Namirnice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: Pocetna
  },
  {
    path: '/namirnice',
    name: 'Namirnice',
    component: Namirnice
  },
  {
    path: '/vjezba',
    name: 'vjezba',
    component: vjezba
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
