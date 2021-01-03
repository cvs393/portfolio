<template>
  <div>
    <Gallery />
    <Photosss />
  </div>
</template>

<script>
import Photosss from '@/components/Photo.vue';
import Gallery from '@/components/gallery.vue';

export default {
  name: 'photo',
  components: {
    Gallery,
    Photosss,
  },
};
</script>