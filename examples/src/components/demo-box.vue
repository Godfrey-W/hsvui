<template>
  <div>
    <header class="demo-header">
      <a @click="$router.go(-1)" class="demo-back"></a>
      <h1 class="demo-title">{{ title }}</h1>
    </header>
    <div class="demo-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-box',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .demo {
    &-header {
      position: relative;
      height: 45px;
      display: flex;
      align-items: center;
      background-color: #fff;
    }
    &-title {
      margin: 0;
      padding: 0 40px;
      width: 100%;
      font-size: 18px;
      color: #000;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
    }
    &-back {
      position: absolute;
      left: 10px;
      top: 50%;
      width: 30px;
      height: 30px;
      transform: translate3d(0, -50%, 0);
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 8px;
        height: 8px;
        transform: translate3d(-50%, -50%, 0) rotate(45deg);
        border-left: 2px solid #108ee9;
        border-bottom: 2px solid #108ee9;
      }
    }
    &-content {
      padding: 15px;
    }
  }
</style>
