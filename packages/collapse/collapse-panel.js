import CollapseTransition from './collapse-transition'
const prefixCls = 'hs-collapse-panel'
export default {
  name: 'HsCollapsePanel',
  inject: ['collapse'],
  components: {
    CollapseTransition
  },
  props: {
    disabled: Boolean,
    hideActions: Boolean
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    panelCls () {
      return {
        [`${prefixCls}--disabled`]: this.isDisabled,
        [`${prefixCls}--active`]: this.isActive
      }
    },
    isDisabled () {
      return this.collapse.disabled || this.disabled
    }
  },
  beforeMount () {
    this.collapse.register(this)
  },
  beforeDestroy () {
    this.collapse.unregister(this)
  },
  methods: {
    onHeaderClick () {
      !this.isDisabled && this.collapse.panelClick(this._uid)
    },
    genHeader () {
      const children = [...(this.$slots.header || [])]

      if (!this.hideActions) children.push(this.genIcon())

      return this.$createElement('div', {
        staticClass: `${prefixCls}__header`,
        on: {
          click: this.onHeaderClick
        }
      }, children)
    },
    genIcon () {
      const icon = this.$slots.actions || [this.$createElement('svg', {
        staticClass: `${prefixCls}__actions__svg`,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 44 44'
        }
      }, [
        this.$createElement('path', {
          attrs: {
            'fill-rule': 'evenodd',
            d: 'M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z'
          }
        })
      ])]
      return this.$createElement('div', {
        staticClass: `${prefixCls}__actions`
      }, icon)
    },
    genBody () {
      return this.$createElement('div', {
        ref: 'body',
        class: `${prefixCls}__body`,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, [
        this.$createElement('div', {
          staticClass: `${prefixCls}__content`
        }, this.$slots.default)
      ])
    },
    toggle (active) {
      this.isActive = active
    }
  },
  render (h) {
    return h('div', {
      staticClass: prefixCls,
      class: this.panelCls
    }, [
      this.$slots.header && this.genHeader(),
      h('collapse-transition', [this.genBody()])
    ])
  }
}
