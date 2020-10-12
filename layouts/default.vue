<template>
  <div id="app">
    <side-nav/>
      <nuxt/>
  </div>
</template>

<script>
import sideNav from "~/components/sideNav.vue";
export default {
    components: {
      sideNav
  }
};
</script>