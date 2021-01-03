<template>
  <div id="app">
    <side-nav/> 
    <nuxt/>
  </div>
</template>

<script>
import sideNav from "~/components/sideNav.vue";
import button from "~/components/button.vue";
import Gallery from "~/components/gallery.vue";
import photos from "@/photos.json";
import Photo from '~/pages/Photo.vue';

export default {
    components: {
      sideNav,
      button,
      Gallery,
      Photo
  }
};
</script>