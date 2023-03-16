import './bootstrap';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '@/Components/Login.vue';
import Register from '@/Components/Register.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

import App from './App.vue';

createApp(App).use(router).mount('#app');

