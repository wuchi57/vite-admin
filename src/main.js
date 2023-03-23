import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'styles/tailwind.css'
import 'styles/preflight.css'
import 'styles/global.sass'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
