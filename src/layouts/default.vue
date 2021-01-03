<template>
  <div id="app">
    <side-nav/> 
    <Nuxt />
  </div>
</template>

<script>
//import sideNav from "~/components/sideNav.vue";
//import button from "~/components/button.vue";
//import Gallery from "~/components/gallery.vue";

import photos from "@/photos.json";
import Photo from "~/pages/Photo.vue";
//import art from "~/pages/art.vue";
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/photo/:id',
        name: 'photo',
        component: Photo,
      },
  ],
  components: true,

});
</script>