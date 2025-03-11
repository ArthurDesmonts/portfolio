import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage.vue';
import Typefaster from '@/components/Typefaster.vue';
import OpenCV from '@/components/OpenCV.vue';

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
    },
    {
        path: '/portfolio/openCV',
        name: 'OpenCV',
        component: OpenCV
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;