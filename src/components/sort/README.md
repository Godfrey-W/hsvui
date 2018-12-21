# Sort 排序

### 使用指南

``` javascript
import { Sort } from 'hsvui';

Vue.use(Sort);
```

### 代码演示

``` html
<hs-sort v-model="sort">排序</hs-sort>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 当前排序方式(可用v-model绑定) | String | default, asc, desc | default |
| size | 图标大小 | String, Number | - | 14 |
| color | 当前排序图标的颜色 | String | - | #108ee9 |

### Slots

| name | 描述 |
| ------ | ------ |
| - | 内容 |
