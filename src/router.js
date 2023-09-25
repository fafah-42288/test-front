import { createRouter, createWebHistory } from 'vue-router'; // Import Vue 3 router functions
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";


const routes = [
    { path: '/',    name: 'Home', component: Home,meta: { requiresAuth: true} },
    { path: '/login', component: Login,
    meta: { requiresAuth: false } },
    { path: '/register', component: Register }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;