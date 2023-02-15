import { createApp } from 'vue'
import App from './App'
import liliUI from './components/index'
import './styles/main.less'

import { ElRadioGroup, ElRadioButton, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElRadioGroup)
app.use(ElRadioButton)
app.use(ElButton)
app.use(liliUI)

console.log(ElRadioGroup)

app.mount('#app')
