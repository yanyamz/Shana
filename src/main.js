import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import scss from '@/assets/scss/main.scss'

import Logo from '@/components/UI/Logo'

import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(store)
            .use(router)
            .use(scss)
            .component('Logo', Logo)
            .mount('#app')
    }
})