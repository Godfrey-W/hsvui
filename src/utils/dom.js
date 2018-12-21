
import { isServer } from './'

export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler, options = false) {
      if (element && event && handler) {
        element.addEventListener(event, handler, options)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    };
  }
})()

export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler, options = false) {
      if (element && event) {
        element.removeEventListener(event, handler, options)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
