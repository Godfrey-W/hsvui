import Vue from 'vue'
import entry from './app'
import router from './router'
import hsvui from '../../src'
import 'packages/hsvui-css/src/index.scss'
import DemoBox from './components/demo-box'

Vue.use(hsvui)
Vue.component('demo-box', DemoBox)

new Vue({
  router,
  render: h => h(entry)
}).$mount('#app')
