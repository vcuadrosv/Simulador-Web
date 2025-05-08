import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/simulador1',
        name: 'simulador1',
        component: () => import('../components/Simulador1.vue'),
    },
    {
        path: '/instrucciones',
        name: 'instrucciones',
        component: () => import('../components/Instrucciones.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;