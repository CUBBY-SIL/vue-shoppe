import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from './components/pages/HomePage'
import AppProduct from '@/components/product/Product'
import AppCatalog from '@/components/pages/Catalog'
import AppCart from '@/components/pages/CartPage'

const routes = [
    {
        name: 'home',
        path: '/',
        component: AppHomePage
    },
    {
        name: 'product',
        path: '/product/:id',
        component: AppProduct
    },
    {
        name: 'catalog',
        path: '/catalog',
        component: AppCatalog
    },
    {
        name: 'cart',
        path: '/cart',
        component: AppCart
    },
]

export default createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})