import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from './components/pages/HomePage'

const routes = [
    {
        name: 'home',
        path: '/',
        component: AppHomePage
    },
]

export default createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})