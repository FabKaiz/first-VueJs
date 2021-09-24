import { createApp } from 'vue'
import App from './App.vue'
//my import
import BaseCard from './components/UI/BaseCard'

const app = createApp(App)

// My component
app.component('base-card', BaseCard);

app.mount('#app')