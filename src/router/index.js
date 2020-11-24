import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../components/Pocetna.vue'
import Namirnica from '../components/Namirnica.vue'
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
    path: '/namirnica',
    name: 'Namirnica',
    component: Namirnica
  },
  
]

const router = new VueRouter({
  routes
})

export default router
