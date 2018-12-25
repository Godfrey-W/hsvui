const prefixCls = 'hs-icon'
export default {
  name: 'HsIcon',
  props: {
    tag: {
      type: String,
      default: 'i'
    },
    name: {
      validator (value) {
        return ['left', 'right', 'up', 'down', 'search'].includes(value)
      }
    },
    custom: String,
    size: {
      validator (value) {
        return ['xxs', 'xs', 'sm', 'md', 'lg'].includes(value)
      },
      default: 'md'
    }
  },
  computed: {
    iconClasses () {
      let classes = ''
      if (this.custom) {
        classes = this.custom
      } else if (this.name) {
        classes = `${prefixCls}-${this.name}`
      }
      return `${classes} ${prefixCls}-${this.size}`
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.iconClasses
    })
  }
}
