import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
const app = createApp(App)
const pinia = createPinia()
console.log(router)
app.use(pinia).use(router)

app.mount('#app')
