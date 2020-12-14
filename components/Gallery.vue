<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <img :src="thumbUrl(photo.filename)">
    </div>
  </div>
</template>

<script>
import photos from 'photos.js'; 
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/gallery/${filename}`);
    },
  },
};
</script>