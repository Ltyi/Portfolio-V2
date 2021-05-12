import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// [Tailwind CSS]
import '@/style/tailwind.css'

// [Fontawesome]
import fontawesome from '@/plugins/fontawesome'

const app = createApp(App)

app.use(fontawesome)
app.use(store)
app.use(router)

app.mount('#app')
