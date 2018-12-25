# Rollnotice 滚动公告

### 使用指南

``` javascript
import { Rollnotice, RollnoticeItem } from 'hsvui';

Vue.use(Rollnotice);
Vue.use(RollnoticeItem);
```

### 代码演示

```html
<hsvui-rollnotice>
  <hsvui-rollnotice-item>
    <a href="javascript:;">
      <span class="red">热门</span>从5299到1799，华为机皇居然沦为千元机，实在可惜
    </a>
  </hsvui-rollnotice-item>
  <hsvui-rollnotice-item>
    <a href="javascript:;">
      <span class="red">HOT</span>小米9已确认首发骁龙855，这丑哭的水滴屏让人难以直视
    </a>
  </hsvui-rollnotice-item>
  <hsvui-rollnotice-item>
    <a href="javascript:;">
      <span class="red">推荐</span>小米又出新品，Type-C智能手机专用
    </a>
  </hsvui-rollnotice-item>
  <hsvui-rollnotice-item>
    <a href="javascript:;">
      <span class="red">最新</span>大家为什么突然不想换手机了？原因却是如此一致
    </a>
  </hsvui-rollnotice-item>
</hsvui-rollnotice>
```

### Rollnotice API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| height | 高度(px、rem) | String, Number | - | 30 |
| speed | 切换速度(ms) | String, Number | - | 500 |
| autoplay | 自动播放时间(ms) | String, Number | - | 3000 |
| align | 对齐方式 | String | left, center, right | left |
| direction | 滚动方向 | String | up, down | up |

### Rollnotice Events

| 事件名 | 说明 | 参数 |
| ------ | ------ | ------ |
| on-click | 当前滚动项被点击时触发 | index |

### RollnoticeItem Slots

| name | 描述 |
| ------ | ------ |
| - | 滚动项内容 |
