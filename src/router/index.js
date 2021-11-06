import Vue from 'vue'
import VueRouter from 'vue-router'

const LuckyDraw = () =>import('../views/luckyDraw/LuckyDraw.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LuckyDraw
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
