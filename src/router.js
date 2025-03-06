import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage.vue';
import Typefaster from '@/components/Typefaster.vue';

const routes = [
    {
        path: '/portfolio/',
        name: 'Home',
        component: Home
    },
    {
        path: '/portfolio/typefaster',
        name: 'Typefaster',
        component: Typefaster
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;