# Hsvui

## [demo](https://godfrey-w.github.io/hsvui)

## Install

``` js
npm install hsvui -S
```

## Quick Start

#### 完整引入

在 main.js 中写入以下内容：

``` js
import Vue from 'vue';
import Hsvui from 'hsvui';
import 'hsvui/lib/hsvui-css/index.css';
import App from './App.vue';

Vue.use(Hsvui);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 按需引入

借助 [**babel-plugin-component**](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

``` js
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

``` js
{
  "presets": [
    "@vue/app"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "hsvui",
        "styleLibraryName": "hsvui-css"
      }
    ]
  ]
}
```

引入部分组件：

``` js
import Vue from 'vue';
import { Rollnotice, RollnoticeItem } from 'hsvui';
import App from './App.vue';

Vue.component(Rollnotice.name, Rollnotice);
Vue.component(RollnoticeItem.name, RollnoticeItem);
/* 或写为
 * Vue.use(Rollnotice)
 * Vue.use(RollnoticeItem)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
