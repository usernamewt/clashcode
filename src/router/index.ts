import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router';

// 定义路由记录
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../components/userProfile/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/MainContainer.vue'),
    },
    {
        path: '/register',
        name: 'About',
        component: () => import('../components/userProfile/Register.vue'),
    },
    // 添加更多的路由记录...
];

// 创建router实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;