import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from "./store"
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(store)
app.mount('#app')







// app.directive('tooltip',{
//     mounted(el,binding){
    
//         const div = document.createElement('div')
//         const div.= binding.value    
//     }
// })
