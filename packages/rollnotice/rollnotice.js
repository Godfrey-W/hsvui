const prefixCls = 'hs-rollnotice'
export default {
  name: 'HsRollnotice',
  props: {
    height: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 30
    },
    speed: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 500
    },
    autoplay: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 4000
    },
    align: {
      validator (value) {
        return ['left', 'center', 'right'].indexOf(value) > -1
      },
      default: 'left'
    },
    direction: {
      validator (value) {
        return ['up', 'down'].indexOf(value) > -1
      },
      default: 'up'
    }
  },
  data () {
    return {
      timer: null,
      index: 1,
      totalNum: 0,
      firstItem: '',
      lastItem: '',
      styles: {
        transform: 0,
        transitionDuration: 0
      }
    }
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    init () {
      this.destroy()
      this.items = this.$children.filter(item => item.$options.name === 'HsRollnoticeItem')
      this.totalNum = this.items.length
      if (this.totalNum <= 0) return
      this.firstItem = this.items[0].$el.innerHTML
      this.lastItem = this.items[this.totalNum - 1].$el.innerHTML
      this.setTranslate(0, -this.height)
      this.autoPlay()
    },
    autoPlay () {
      this.timer = setInterval(() => {
        if (this.direction === 'up') {
          this.setTranslate(this.speed, -(++this.index * this.height))
          if (this.index >= this.totalNum) {
            this.index = 0
            setTimeout(() => {
              this.setTranslate(0, 0)
            }, this.speed)
          }
        } else {
          this.setTranslate(this.speed, -(--this.index * this.height))
          if (this.index <= 0) {
            this.index = this.totalNum
            setTimeout(() => {
              this.setTranslate(0, -this.totalNum * this.height)
            }, this.speed)
          }
        }
      }, this.autoplay)
    },
    setTranslate (speed, translate) {
      this.styles.transitionDuration = speed + 'ms'
      this.styles.transform = 'translate3d(0, ' + translate + 'px, 0)'
    },
    destroy () {
      clearInterval(this.timer)
    },
    genContent () {
      const firstDom = this.$createElement('div', {
        staticClass: `${prefixCls}__item`,
        domProps: {
          innerHTML: this.lastItem
        }
      })
      const lastDom = this.$createElement('div', {
        staticClass: `${prefixCls}__item`,
        domProps: {
          innerHTML: this.firstItem
        }
      })
      const children = [firstDom, this.$slots.default, lastDom]
      return this.$createElement('div', {
        staticClass: `${prefixCls}__content`,
        class: {[`${prefixCls}__align-${this.align}`]: !!this.align},
        style: this.styles
      }, children)
    }
  },
  render (h) {
    return h('div', {
      staticClass: prefixCls,
      style: {
        height: `${this.height}px`
      }
    }, [this.genContent()])
  }
}
