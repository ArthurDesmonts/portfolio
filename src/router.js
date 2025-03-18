import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage.vue';
import Typefaster from '@/components/Typefaster.vue';
import OpenCV from '@/components/OpenCV.vue';
import MLKit from '@/components/Mlkit.vue';
import vuejs from '@/components/VueJs.vue';

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
    },
    {
        path: '/portfolio/mlkit',
        name: 'MLKit',
        component: MLKit
    },
    {
        path: '/portfolio/vuejs',
        name: 'VueJs',
        component: vuejs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'auto',
          };
        } else if (savedPosition) {
          return savedPosition;
        } else {
          return { top: 0 };
        }
      }
});

export default router;