import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/user1',
            name: 'user1',
            component: () => import('../views/user1.vue'),
        },
        {
            path: '/user2',
            name: 'user2',
            component: () => import('../views/user2.vue'),
        },
        {
            path: '/user3',
            name: 'user3',
            component: () => import('../views/user3.vue'),
        },
        {
            path: '/user4',
            name: 'user4',
            component: () => import('../views/user4.vue'),
        },
        {
            path: '/user5',
            name: 'user5',
            component: () => import('../views/user5.vue'),
        },
        {
            path: '/user6',
            name: 'user6',
            component: () => import('../views/user6.vue'),
        },
    ],
});

export default router;
