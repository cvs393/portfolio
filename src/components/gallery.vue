<template>
  <div><h1 style="border-bottom: 1px solid #696c65;">Gallery</h1>
  <div class="gallery padding-right: 20px; padding-left: 20px;">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/Photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
      </router-link>
    </div>
    <h4>more art on my behance and instagram @ blah blahs</h4>
  </div>
  </div>
</template>

<script>
import photos from '@/photos.json'; 
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/gallery/thumbnails/${filename}`);
    },
  },
};
</script>

<style scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 3rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.2rem;
  }
  .gallery-panel img:hover{
    width: 140%;
    height: 140%;
  }

</style>