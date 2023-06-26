import './assets/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// import Vue from 'vue'

// import ListagemVagas from '@/components/ListagemVagas.vue'
// import store from '@/store'

// ListagemVagas.store = store

// Vue.customElement('tem-vagas', ListagemVagas)