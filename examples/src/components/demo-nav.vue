
<template>
  <div class="demo-nav">
    <div class="demo-nav-top">
      <h1 class="title">我要上天</h1>
      <div class="github">
        <transition name="fade">
          <iframe src="https://ghbtns.com/github-btn.html?user=Godfrey-W&repo=hsvui&type=star&count=true" class="enter-transition" frameborder="0" scrolling="0" width="110px" height="20px"></iframe>
        </transition>
        <transition name="fade">
          <iframe src="https://ghbtns.com/github-btn.html?user=Godfrey-W&repo=hsvui&type=fork&count=true" class="enter-transition" frameborder="0" scrolling="0" width="95px" height="20px"></iframe>
        </transition>
      </div>
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
      .github {
        height: 25px;
        margin-top: 20px;
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity 2s, color .2s, background-color .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
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
