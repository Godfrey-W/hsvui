const prefixCls = 'hs-sendcode'
export default {
  name: 'HsSendcode',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    options: {
      type: Object,
      default: null
    },
    second: {
      default: 60,
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    value: Boolean,
    storageKey: String
  },
  data () {
    return {
      tmpStr: '',
      timer: null,
      start: false,
      runSecond: this.second,
      lastSecond: 0,
      resend: false
    }
  },
  computed: {
    classes () {
      return {
        [`${prefixCls}--disabled`]: this.start
      }
    },
    isObjWithOpts () {
      return this.options && typeof this.options === 'object'
    },
    initTxt () {
      return this.isObjWithOpts && this.options.initTxt ? this.options.initTxt : '发送验证码'
    },
    runTxt () {
      return this.isObjWithOpts && this.options.runTxt ? this.options.runTxt : '{%s}s'
    },
    resetTxt () {
      return this.isObjWithOpts && this.options.resetTxt ? this.options.resetTxt : '重新发送验证码'
    }
  },
  watch: {
    value (val) {
      this.start = val
      if (!val) {
        clearInterval(this.timer)
        this.tmpStr = this.resend ? this.resetTxt : this.initTxt
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
    this.tmpStr = this.initTxt

    if (typeof window === 'undefined') return

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
      this.resend = true
      this.tmpStr = this.resetTxt
      this.start = false
      this.$emit('input', false)
      clearInterval(this.timer)
    },
    getStr (second) {
      return this.runTxt.replace(/\{([^{]*?)%s(.*?)\}/g, second)
    }
  },
  render (h) {
    const { tag, classes, handleClick, start, tmpStr, $attrs } = this
    const attrs = { ...$attrs }
    if (tag === 'button') {
      attrs.type = 'button'
      attrs.disabled = start
    }
    return h(tag, {
      staticClass: prefixCls,
      class: classes,
      on: {
        click: handleClick
      },
      attrs
    }, [tmpStr])
  }
}
