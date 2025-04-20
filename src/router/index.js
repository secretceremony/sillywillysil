import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Portfolio from '../pages/Portfolio.vue';
import Commission from '../pages/Commission.vue';

const routes = [
  { path: '/', component: About },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/commission', component: Commission },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;