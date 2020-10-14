<template>
  <div id="app">
    <side-nav/> 
    <nuxt/>
  </div>
</template>

<script>
import sideNav from "~/components/sideNav.vue";
import button from "~/components/button.vue";
export default {
    components: {
      sideNav,
      button
  }
};
</script>