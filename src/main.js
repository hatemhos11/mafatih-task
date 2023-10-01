import { createApp } from 'vue'
import App from './App.vue'
import router from './views'
import './assets/tailwind.css'
import './global.css'
const app = createApp(App)

app.use(router)
app.mount('#app')
