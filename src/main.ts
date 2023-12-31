import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
    config: { id: "G-9SZFX4XJTW" }
}, router);
app.mount('#app')
