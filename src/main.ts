import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.use(Vant)

app.mount('#app')