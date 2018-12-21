# Hsvui

## Install

Using npm:
``` js
npm install hsvui --save
```

Using a script tag for global use:

``` html
<script type="text/javascript" src="hsvui.min.js"></script>
<link rel="stylesheet" href="lib/styles/hsvui.css">
```

### Import

Import hsvui in the entry file (main.js as usual) of webpack:

``` js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Routers from './router.js';
import hsvui from 'hsvui';
import 'hsvui/lib/styles/wyst.css';

Vue.use(VueRouter);
Vue.use(hsvui);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```
## Usage

### Import on demand #

By using the [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), you can load components on demand and reduce the size of files. First installation, then update .babelrc file:

``` js
npm install babel-plugin-import --save-dev
```

``` js
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "hsvui",
    "libraryDirectory": "src/components"
  }]]
}
```

Now you can import components like:

``` js
import { Sendcode } from 'hsvui';
// Vue.component('sendcode', Sendcode);
Vue.component(Sendcode.name, Sendcode);
```

### Reminder

- Partial import will only effect logic level; you still need to import all the styles, which means add **import 'wyst/dist/styles/iview.css';** to main.js or the root component.
