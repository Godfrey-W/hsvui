# Sendcode 发送验证码

### 使用指南

``` javascript
import { Sendcode } from 'hsvui';

Vue.use(Sendcode);
```

### 代码演示

``` html
<hs-sendcode v-model="sendCodeStatus" @click="sendCodeStatus = !sendCodeStatus" />
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 开始倒计时的状态 | Boolean | true, false | false |
| second | 倒计时时长（秒） | Number, String | - | 120 |
| init | 初始化按钮显示文本 | String | - | 发送验证码 |
| run | 运行时显示文本 | String | - | {%s}s |
| reset | 运行结束后显示文本 | String | - | 重新发送 |
| storage-key | 储存倒计时剩余时间sessionStorage的键值，设置不为空后，刷新页面倒计时将继续 | String | - | - |
