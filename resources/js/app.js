import './bootstrap/echo';

import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';


import App from './App.vue';
import router from './bootstrap/router';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app');

