# Collapse 折叠面板

### 使用指南

``` javascript
import { Collapse, CollapsePanel } from 'hsvui';

Vue.use(Collapse);
Vue.use(CollapsePanel);
```

### 代码演示

``` html
<hs-collapse>
  <hs-collapse-panel>
    <h3 slot="header">静夜思</h3>
    <p>床前明月光</p>
    <p>疑似地上霜</p>
    <p>举头望明月</p>
    <p>低头思故乡</p>
  </hs-collapse-panel>
</hs-collapse>
```

### Collapse API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 当前展开面板的 id | Number, Array | - | - |
| disabled | 是否禁用 | Boolean | true, false | false |
| accordion | 是否开启手风琴模式 | Boolean | true, false | false |

### Collapse Slots

| name | 描述 |
| ------ | ------ |
| - | 内容 |

### CollapsePanel API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| disabled | 是否禁用当前panel | Boolean | true, false | false |
| hide-actions | 隐藏内容标题中的展开图标 | Boolean | true, false | false |

### CollapsePanel Slots

| name | 描述 |
| ------ | ------ |
| - | 内容 |
| header | 标题内容 |
