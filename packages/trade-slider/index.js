import { on, off } from 'main/utils/dom'
const prefixCls = 'hs-trade-slider'
export default {
  name: 'HsTradeSlider',
  props: {
    value: {
      validator (value) {
        return /^\d*$/.test(value)
      },
      default: 0
    },
    disabled: Boolean,
    breakpoint: {
      validator (value) {
        return /^\d*$/.test(value)
      },
      default: 5
    }
  },
  data () {
    return {
      oldValue: null,
      currentValue: Math.max(Math.min(this.value, 100), 0),
      isActive: false
    }
  },
  computed: {
    classes () {
      return {
        [`${prefixCls}--disabled`]: this.disabled,
        [`${prefixCls}--active`]: this.isActive
      }
    },
    trackFillStyle () {
      return {
        width: `${this.currentValue}%`,
        transition: this.isActive ? 'none' : ''
      }
    },
    thumbStyle () {
      return {
        left: `${this.currentValue}%`,
        transition: this.isActive ? 'none' : ''
      }
    },
    pointCount () {
      return parseInt(this.breakpoint) || 0
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onThumbMouseDown (ev) {
      if (this.disabled) return
      this.oldValue = this.currentValue
      this.isActive = true
      if ('touches' in ev) {
        const opts = { passive: true }
        on(document, 'touchmove', this.onMouseMove, opts)
        on(document, 'touchend', this.onMouseUp, opts)
      } else {
        on(document, 'mousemove', this.onMouseMove)
        on(document, 'mouseup', this.onMouseUp)
      }
    },
    onMouseMove (ev) {
      if (this.disabled) return
      const { value, isInsideTrack } = this.parseMouseMove(ev)
      if (isInsideTrack) {
        this.currentValue = Math.round(value)
      }
    },
    onMouseUp () {
      this.isActive = false
      off(document, 'touchmove', this.onMouseMove, { passive: true })
      off(document, 'mousemove', this.onMouseMove)
    },
    parseMouseMove (ev) {
      const {
        left: offsetLeft,
        width: trackWidth
      } = this.$refs.track.getBoundingClientRect()
      const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX
      let left = Math.min(Math.max((clientX - offsetLeft) / trackWidth, 0), 1) || 0

      const isInsideTrack = clientX >= offsetLeft - 8 && clientX <= offsetLeft + trackWidth + 8
      const value = left * 100

      return { value, isInsideTrack }
    },
    onPointClick (index) {
      if (this.disabled) return
      this.currentValue = index / (this.pointCount - 1) * 100
    },
    genTrack () {
      const trackFill = this.$createElement('div', {
        staticClass: `${prefixCls}__track__fill`,
        style: this.trackFillStyle
      })
      return this.$createElement('div', {
        staticClass: `${prefixCls}__track`,
        style: this.trackStyle,
        on: {
          click: this.onMouseMove
        },
        ref: 'track'
      }, [trackFill])
    },
    genBreakPoint () {
      if (this.pointCount <= 0) return
      const points = Array(this.pointCount).fill(true).map((point, index) => {
        const offset = index / (this.pointCount - 1) * 100
        const style = {
          left: `${offset}%`,
          transition: this.isActive ? 'none' : '',
        }
        return this.$createElement('span', {
          staticClass: 'point',
          class: { primary: this.currentValue >= offset },
          style,
          on: {
            click: () => this.onPointClick(index)
          },
          key: index
        })
      })
      return this.$createElement('div', {
        staticClass: `${prefixCls}__breakpoint`
      }, points)
    },
    genThumb () {
      const thumbButton = this.$createElement('div', {
        staticClass: `${prefixCls}__thumb__button`,
        class: { primay: this.currentValue > 0 }
      })
      return this.$createElement('div', {
        staticClass: `${prefixCls}__thumb`,
        style: this.thumbStyle,
        on: {
          touchstart: this.onThumbMouseDown,
          mousedown: this.onThumbMouseDown
        }
      }, [thumbButton])
    }
  },
  render (h) {
    return h('div', {
      staticClass: prefixCls,
      class: this.classes
    }, [
      this.genTrack(),
      this.genBreakPoint(),
      this.genThumb()
    ])
  }
}