import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/css/app.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faArrowRight);
library.add(faArrowLeft);
const app=createApp(App);//CreateApp作为 vue 的启动函数，返回一个应用实例
app.component('font-awesome-icon',FontAwesomeIcon);
app.use(router);
app.mount('#app');