import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' /* 修改浏览器默认样式，解决一下浏览器默认显示bugs */
import 'styles/tailwind.css'         /* 包含TailwindCSS基本样式 */
import 'styles/preflight.css'        /* 重置浏览器默认样式，保持一致性，按钮样式与element-ui冲突，已注释 */
import 'styles/global.css'           /* 全局自定义样式 */
import 'virtual:svg-icons-register'  /* 将svg-icons设置为全局 */
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
