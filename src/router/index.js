import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../assets/css/custom.css'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(vueSmoothScroll)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
