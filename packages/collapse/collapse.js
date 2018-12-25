const prefixCls = 'hs-collapse'
export default {
  name: 'HsCollapse',
  provide () {
    return {
      collapse: this
    }
  },
  props: {
    value: {
      type: [Number, Array],
      default: null
    },
    disabled: Boolean,
    accordion: Boolean
  },
  data () {
    return {
      items: [],
      open: []
    }
  },
  watch: {
    accordion (v) {
      let openIndex = -1
      if (!v) {
        // Close all panels unless only one is open
        const openCount = this.open.reduce((acc, val) => val ? acc + 1 : acc, 0)
        const open = Array(this.items.length).fill(false)

        if (openCount === 1) {
          openIndex = this.open.indexOf(true)
        }

        if (openIndex > -1) {
          open[openIndex] = true
        }

        this.open = open
      }

      this.$emit('input', v ? this.open : (openIndex > -1 ? openIndex : null))
    },
    value () {
      this.updateFromValue()
    }
  },
  mounted () {
    this.value !== null && this.updateFromValue()
  },
  methods: {
    updateFromValue () {
      const v = this.value

      if (Array.isArray(v) && !this.accordion) return

      let open = Array(this.items.length).fill(false)
      if (typeof v === 'number') {
        open[v] = true
      } else if (v !== null) {
        open = v
      }
      this.updatePanels(open)
    },
    updatePanels (open) {
      this.open = open
      
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].toggle(open && open[i])
      }
    },
    panelClick (uid) {
      const open = this.accordion ? this.open.slice() : Array(this.items.length).fill(false)
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i]._uid === uid) {
          open[i] = !this.open[i]
          !this.accordion && this.$emit('input', open[i] ? i : null)
        }
      }
      this.updatePanels(open)
      if (this.accordion) this.$emit('input', open)
    },
    register (panel) {
      const i = this.items.push(panel) - 1
      this.value !== null && this.updateFromValue()
      panel.toggle(!!this.open[i])
    },
    unregister (panel) {
      const index = this.items.findIndex(i => i._uid === panel._uid)
      this.items.splice(index, 1)
      this.open.splice(index, 1)
    }
  },
  render (h) {
    return h('div', {
      staticClass: prefixCls
    }, this.$slots.default)
  }
}
