import './assets/main.css'
import axios from 'axios';

import { createApp } from 'vue'
import App from './App.vue'

// Définir l'URL de base pour Axios
axios.defaults.baseURL = 'http://localhost:8085/api';

createApp(App).mount('#app')
