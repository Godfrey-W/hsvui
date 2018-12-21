import { isServer } from '@/utils'
const prefixCls = 'hs-rollnotice'
export default {
  name: 'HsRollnoticeItem',
  created () {
    if (isServer) return
    this.$nextTick(() => {
      this.$parent.init()
    })
  },
  render (h) {
    return h('div', {
      staticClass: `${prefixCls}__item`
    }, this.$slots.default)
  }
}
