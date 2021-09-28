import { createApp } from 'vue'
import App from './App'
import liliUI from './components/index'
import './styles/main.less'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(liliUI)
app.use(elementplus)
app.mount('#app')
