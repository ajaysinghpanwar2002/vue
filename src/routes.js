import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Form.vue'
import Profile from './components/Pages/Profile.vue'

const routes = [
    {
        name: 'Form',
        path: '/',
        component: Home
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;