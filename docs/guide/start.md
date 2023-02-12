# 引入 CandyUI

## 完整引入

```js
import { createApp } from 'vue'
import CandyUI from 'CandyUI'

Vue.use(CandyUI)
```

### 按需引入

可以通过以下的写法来按需加载组件。


```js
// 导入写法
import { Banner } from 'CandyUI'
```


完整组件列表：

```js
import {
  HelloWorld,
  Banner,
  Tabs
} from 'CandyUI'

Vue.use(HelloWorld)
Vue.use(Banner)
Vue.use(Tabs)
```