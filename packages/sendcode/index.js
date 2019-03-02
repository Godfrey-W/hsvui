const prefixCls = 'hs-sendcode'
export default {
  name: 'HsSendcode',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    init: {
      type: String,
      default: '发送验证码'
    },
    second: {
      default: 60,
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    run: {
      type: String,
      default: '{%s}s'
    },
    reset: {
      type: String,
      default: '重新发送'
    },
    value: Boolean,
    storageKey: String
  },
  data () {
    return {
      tmpStr: this.init,
      timer: null,
      start: false,
      runSecond: this.second,
      lastSecond: 0
    }
  },
  computed: {
    classes () {
      return {
        [`${prefixCls}--disabled`]: this.start
      }
    }
  },
  watch: {
    value (val) {
      this.start = val
      if (!val) {
        clearInterval(this.timer)
        this.tmpStr = this.init
        if (this.storageKey) {
          window.sessionStorage.removeItem(this.storageKey)
          this.lastSecond = 0
        }
      } else {
        this.countdownStart()
      }
    }
  },
  created () {
    if (typeof window !== 'undefined') return
    const lastSecond = ~~((window.sessionStorage.getItem(this.storageKey) - Date.now()) / 1000)
    if (lastSecond > 0 && this.storageKey) {
      this.$emit('input', true)
      this.tmpStr = this.getStr(lastSecond)
      this.lastSecond = lastSecond
    }
  },
  beforeDestroy () {
    !this.storageKey && this.timeout()
  },
  methods: {
    handleClick () {
      if (!this.start) this.$emit('click')
    },
    countdownStart () {
      let lastSecond = this.lastSecond
      let second = lastSecond || this.runSecond
      if (this.storageKey) {
        const runSecond = Date.now() + second * 1000
        window.sessionStorage.setItem(this.storageKey, runSecond)
      }
      if (!lastSecond) {
        this.tmpStr = this.getStr(second)
      }
      this.timer = setInterval(() => {
        second--
        this.tmpStr = this.getStr(second)
        second <= 0 && this.timeout()
      }, 1000)
    },
    timeout () {
      this.tmpStr = this.reset
      this.start = false
      this.$emit('input', false)
      clearInterval(this.timer)
    },
    getStr (second) {
      return this.run.replace(/\{([^{]*?)%s(.*?)\}/g, second)
    }
  },
  render (h) {
    const { tag, classes, handleClick, start, tmpStr } = this
    return h(tag, {
      staticClass: prefixCls,
      class: classes,
      on: {
        click: handleClick
      },
      attrs: {
        disabled: tag === 'button' && start
      }
    }, [tmpStr])
  }
}
