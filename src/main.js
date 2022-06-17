import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/css/app.css'
import 'font-awesome/css/font-awesome.min.css'


const app=createApp(App);//CreateApp作为 vue 的启动函数，返回一个应用实例
app.use(router);
app.mount('#app')
