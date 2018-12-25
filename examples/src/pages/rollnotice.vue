<template>
  <demo-box title="Rollnotice 滚动公告">
    <div class="demo-notice">
      <div class="demo-notice__label">
        <img src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg">
      </div>
      <div class="demo-notice__content">
        <hs-rollnotice>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">热门</span>从5299到1799，华为机皇居然沦为千元机，实在可惜
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">HOT</span>小米9已确认首发骁龙855，这丑哭的水滴屏让人难以直视
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">推荐</span>小米又出新品，Type-C智能手机专用
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">最新</span>大家为什么突然不想换手机了？原因却是如此一致
            </a>
          </hs-rollnotice-item>
        </hs-rollnotice>
      </div>
    </div>

    <div class="demo-notice">
      <div class="demo-notice__label">
        <img src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg">
      </div>
      <div class="demo-notice__content">
        <hs-rollnotice direction="down">
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">热门</span>从5299到1799，华为机皇居然沦为千元机，实在可惜
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">HOT</span>小米9已确认首发骁龙855，这丑哭的水滴屏让人难以直视
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">推荐</span>小米又出新品，Type-C智能手机专用
            </a>
          </hs-rollnotice-item>
          <hs-rollnotice-item>
            <a href="javascript:;">
              <span class="red">最新</span>大家为什么突然不想换手机了？原因却是如此一致
            </a>
          </hs-rollnotice-item>
        </hs-rollnotice>
      </div>
    </div>
  </demo-box>
</template>

<style lang="scss">
  .demo-notice {
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 20px;
    background-color: #fff;
    &__label {
      margin-right: 10px;
      img {
        width: 73px;
        height: 16px;
        vertical-align: middle;
      }
    }
    &__content {
      overflow: hidden;
      a {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: none;
      }
      .red {
        color: #f23030;
        margin-right: 5px;
      }
    }
  }
</style>
