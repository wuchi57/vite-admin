import { createApp } from 'vue'
import App from './App.vue'
import 'styles/global.sass'
import 'styles/tailwind.css'
import 'styles/preflight.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
