import {createRouter, createWebHistory} from 'vue-router';
import ComicDetail from '@/views/ComicDetail.vue';
import Home from '@/views/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home, alias: "/home" },
    { path: '/comics/:id', name: 'ComicDetail', component: ComicDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;