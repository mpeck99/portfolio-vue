import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Movies from '../views/Movies.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  }
];

const router = createRouter({
  linkExactActiveClass: 'active',
  linkActiveClass: '',
  history: createWebHashHistory(),
  routes
});

export default router;
