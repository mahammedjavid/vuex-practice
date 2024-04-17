import { createRouter, createWebHistory } from 'vue-router';
import Products from './pages/products/products.vue';
import Carts from './pages/carts/carts.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Products },
    { path: '/cart', component: Carts },
    // { path: '/admin', component: ShopAdmin },
  ]
});

export default router;