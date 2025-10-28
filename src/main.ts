import { createApp } from 'vue'

import App from './App.vue'
import pinia from './stores'
import router from './router'
//在main.ts中引入vant样式文件,以确保全局可用,在main.scss之前引入
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)
app.use(pinia)

app.use(router)

app.mount('#app')
