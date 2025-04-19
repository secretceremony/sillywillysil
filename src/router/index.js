import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import Commission from '../pages/Commission.vue'
import Portfolio from '../pages/Portfolio.vue'

const routes = [
  { path: '/', component: About },
  { path: '/commission', component: Commission },
  { path: '/portfolio', component: Portfolio }
]

export default createRouter({
  history: createWebHistory(),
  routes
})