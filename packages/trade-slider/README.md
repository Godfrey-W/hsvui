# TradeSlider 交易滑块

### 使用指南

``` javascript
import { TradeSlider } from 'hsvui';

Vue.use(TradeSlider);
```

### 代码演示

``` html
<hs-trade-slider v-model="value" />
```


### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 当前数值 | String, Number | 0 ~ 100 | 0 |
| disabled | 是否禁用 | Boolean | true, false | false |
| breakpoint | 断点数量 | String, Number | - | 5 |
