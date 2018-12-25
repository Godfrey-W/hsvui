import Vue from 'vue'
import VueRouter from 'vue-router'

import Demo from './pages/demo'
import Sendcode from './pages/sendcode'
import Rollnotice from './pages/rollnotice'
import Collapse from './pages/collapse'
import Sort from './pages/sort'
import TradeSlider from './pages/trade-slider'
import Icon from './pages/icon'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo',
    component: Demo
  },
  {
    path: '/sendcode',
    name: 'sendcode',
    component: Sendcode
  },
  {
    path: '/rollnotice',
    name: 'rollnotice',
    component: Rollnotice
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: Collapse
  },
  {
    path: '/sort',
    name: 'sort',
    component: Sort
  },
  {
    path: '/trade-slider',
    name: 'trade-slider',
    component: TradeSlider
  },
  {
    path: '/icon',
    name: 'icon',
    component: Icon
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
