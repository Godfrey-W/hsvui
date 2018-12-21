
import { version } from '../package.json'

import Sendcode from './components/sendcode'
import Rollnotice from './components/rollnotice'
import RollnoticeItem from './components/rollnotice-item'
import Collapse from './components/collapse'
import CollapsePanel from './components/collapse-panel'
import Sort from './components/sort'
import TradeSlider from './components/trade-slider'

const components = [
  Sendcode,
  Rollnotice,
  RollnoticeItem,
  Collapse,
  CollapsePanel,
  Sort,
  TradeSlider
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Sendcode,
  Rollnotice,
  RollnoticeItem,
  Collapse,
  CollapsePanel,
  Sort,
  TradeSlider
}

export default {
  install,
  version
}
