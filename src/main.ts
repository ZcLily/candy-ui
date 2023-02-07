import { createApp } from 'vue'
import App from './App'
import liliUI from './components/index'
import './styles/main.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(liliUI)
app.use(ElementPlus)
app.mount('#app')
