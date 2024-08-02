import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
//import router from './router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App).use(vuetify).use(store) //.use(router)

app.mount('#app')

store.dispatch('initializeNotifications')
