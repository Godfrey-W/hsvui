const prefixCls = 'hs-sort'
export default {
  name: 'HsSort',
  props: {
    value: {
      type: String,
      default: 'default'
    },
    size: {
      type: [Number, String],
      default: 14
    },
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    iconStyle () {
      const size = /^\d*$/.test(this.size) ? `${this.size}px` : this.size
      return {
        width: size,
        height: size
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  methods: {
    handleClick () {
      if (this.currentValue === 'default') {
        this.currentValue = 'asc'
      } else if (this.currentValue == 'asc') {
        this.currentValue = 'desc'
      } else {
        this.currentValue = 'default'
      }
    },
    genIcon (type) {
      const isAsc = type === 'asc'
      const path = isAsc ? 'M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z' : 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z'
      const fill = ((this.currentValue === 'asc' && isAsc) || (this.currentValue === 'desc' && !isAsc)) ? this.color : ''
      return this.$createElement('svg', {
        style: {
          fill: fill || ''
        },
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 320 512'
        }
      }, [
        this.$createElement('path', {
          attrs: {
            d: path
          }
        })
      ])
    }
  },
  render (h) {
    return h('div', {
      staticClass: prefixCls,
      on: {
        click: this.handleClick
      }
    }, [
      this.$slots.default,
      h('span', {
        staticClass: `${prefixCls}__icon`,
        style: this.iconStyle
      }, [this.genIcon('asc'), this.genIcon('desc')])
    ])
  }
}
