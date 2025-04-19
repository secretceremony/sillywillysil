import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // You'll create this file
import router from './router'

createApp(App).use(router).use(vuetify).mount('#app')