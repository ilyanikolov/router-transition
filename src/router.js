import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('~/views/Home.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import('~/views/About.vue')
  }, {
    path: '/contacts',
    name: 'contacts',
    component: () => import('~/views/Contacts.vue')
  }, {
    path: '/auth',
    name: 'auth',
    component: () => import('~/views/Auth.vue')
  }],
  linkExactActiveClass: 'active'
});