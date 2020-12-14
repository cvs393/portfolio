<template>
  <div id="app">
    <side-nav/> 
    <nuxt/>
  </div>
</template>

<script>
import sideNav from "~/components/sideNav.vue";
import button from "~/components/button.vue";
import gallery from "~/components/gallery.vue";
import photos from "@/photos.js";
export default {
    components: {
      sideNav,
      button,
      gallery,
  }
};
</script>