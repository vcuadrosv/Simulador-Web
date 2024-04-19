import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/maizpredict',
        name: 'maizPredict',
        component: () => import('../components/MaizPredict.vue'),
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/estadisticas',
        name: 'estadisticas',
        component: () => import('../components/Estadisticas.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;