import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/index.vue';
import Photo from './pages/Photo.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
        path: '/photo/:id',
        name: 'photo',
        component: Photo,
      },
  ],
});