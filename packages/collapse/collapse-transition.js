
const Transition = {

  beforeEnter (el) {
    const { transition, visibility, overflow, height } = el.style
    el._initialStyle = {
      transition,
      visibility,
      overflow,
      height
    }
  },

  enter (el) {
    const { visibility, transition } = el._initialStyle
    el.style.setProperty('transition', 'none', 'important')
    el.style.visibility = 'hidden'
    const height = `${el.offsetHeight}px`
    el.style.visibility = visibility
    el.style.overflow = 'hidden'
    el.style.height = 0
    el.offsetHeight // force reflow
    el.style.transition = transition

    requestAnimationFrame(() => el.style.height = height)
  },

  afterEnter: resetStyles,
  enterCancelled: resetStyles,

  leave (el) {
    const { overflow, height } = el.style
    el._initialStyle = {
      overflow,
      height
    }

    el.style.overflow = 'hidden'
    el.style.height = `${el.offsetHeight}px`

    requestAnimationFrame(() => el.style.height = 0)
  },

  afterLeave: resetStyles,
  leaveCancelled: resetStyles
}

function resetStyles (el) {
  const { overflow, height } = el._initialStyle
  el.style.overflow =overflow
  el.style.height = height
  delete el._initialStyle
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render (h, { children }) {
    const data = {
      on: Transition
    }

    return h('transition', data, children)
  }
}
