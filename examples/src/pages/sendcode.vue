<template>
  <demo-box title="Sendcode 发送验证码">
    <div class="demo-sendcode">
      <hs-sendcode v-model="sendCodeStatus" @click="sendCodeStatus = !sendCodeStatus" />
    </div>
  </demo-box>
</template>

<script>
export default {
  name: 'demo-sendcode',
  data () {
    return {
      sendCodeStatus: false
    }
  }
}
</script>

<style lang="scss">
  .demo-sendcode {
    .hs-sendcode {
      width: 100%;
      height: 47px;
      padding: 0 15px;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background-color: #108ee9;
      &--disabled {
        color: hsla(0, 0%, 100%, .6);
        opacity: .4;
      }
    }
  }
</style>
