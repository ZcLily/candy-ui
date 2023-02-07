# 引入 UlLili

## 完整引入

```js
import { createApp } from 'vue'
import UlLili from 'UlLili'

Vue.use(UlLili)
```

### 按需引入

可以通过以下的写法来按需加载组件。


```js
// 导入写法
import { Banner } from 'UlLili'
```


完整组件列表：

```js
import {
  HelloWorld,
  Banner,
  Tabs
} from 'UlLili'

Vue.use(HelloWorld)
Vue.use(Banner)
Vue.use(Tabs)
```