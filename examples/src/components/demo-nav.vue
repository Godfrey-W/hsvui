
<template>
  <div class="demo-nav">
    <div class="demo-nav-top">
      <h1 class="title">我要上天</h1>
      <p>Vue 组件（更新中...）</p>
    </div>
    <ul class="demo-nav-list">
      <li v-for="(nav, index) in navList" :key="index">
        <router-link :to="{ name: nav.name }">
          {{ nav.label }}
          <i class="arrow"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo-nav',
  data () {
    return {
      navList: [
        { name: 'demo-sendcode', label: 'Sendcode 发送验证码' },
        { name: 'demo-rollnotice', label: 'Rollnotice 滚动公告' },
        { name: 'demo-collapse', label: 'Collapse 折叠面板' },
        { name: 'demo-sort', label: 'Sort 排序' },
        { name: 'demo-rate', label: 'Rate 评分' },
        { name: 'demo-trade-slider', label: 'TradeSlider 交易滑块' }
      ]
    }
  }
}
</script>


<style lang="scss">
  .demo-nav {
    padding: 0 15px;
    &-top {
      padding: 30px 0;
      text-align: center;
      .title {
        font-size: 40px;
        background: linear-gradient(to right, blue, red);
        background-clip: text;
        color: transparent;
      }
    }
    &-list {
      padding-left: 15px;
      background-color: #fff;
      li {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 44px;
        font-size: 16px;
        &:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: #e3e3e3;
          transform-origin: bottom;
          transform: scaleY(.5);
        }
        a {
          width: 100%;
          display: flex;
          align-content: center;
          justify-content: space-between;
          padding-right: 15px;
          color: #333;
          text-decoration: none;
        }
        .arrow {
          position: relative;
          width: 20px;
          height: 20px;
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 30%;
            height: 30%;
            transform: translate3d(-50%, -50%, 0) rotate(-45deg);
            border-right: 2px solid #999;
            border-bottom: 2px solid #999;
          }
        }
      }
    }
  }
</style>
