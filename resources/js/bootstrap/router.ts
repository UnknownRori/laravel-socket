import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '@/Components/Login.vue';
import Register from '@/Components/Register.vue';
import Chat from '@/Components/Chat.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/chat', component: Chat },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
