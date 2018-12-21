<template>
  <demo-box title="TradeSlider 交易滑块">
    
    <label for="check"><input type="checkbox" v-model="disabled" id="check"> 禁用</label>
    <hs-trade-slider v-model="value" :disabled="disabled" />

    <p>当前值：{{value}}%</p>
  </demo-box>
</template>

<script>
export default {
  name: 'demo-trade-slider',
  data () {
    return {
      disabled: false,
      value: 50
    }
  }
}
</script>

