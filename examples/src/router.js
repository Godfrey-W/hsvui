import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'demo-nav',
      component: () => import('./components/demo-nav')
    },
    {
      path: '/sendcode',
      name: 'demo-sendcode',
      component: () => import('@/components/sendcode/demo')
    },
    {
      path: '/rollnotice',
      name: 'demo-rollnotice',
      component: () => import('@/components/rollnotice/demo')
    },
    {
      path: '/collapse',
      name: 'demo-collapse',
      component: () => import('@/components/collapse/demo')
    },
    {
      path: '/sort',
      name: 'demo-sort',
      component: () => import('@/components/sort/demo')
    },
    {
      path: '/rate',
      name: 'demo-rate',
      component: () => import('@/components/rate/demo')
    },
    {
      path: '/trade-slider',
      name: 'demo-trade-slider',
      component: () => import('@/components/trade-slider/demo')
    }
  ]
})

export default router
