import { createApp } from 'vue'
import App from './App.vue'
// import router from './router/index'
import store from './store'
import './assets/style.scss'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(store)
   // .use(router)
   .use(BootstrapVue3)
   .mount('#app')
