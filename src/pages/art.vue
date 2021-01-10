<template>
  <div>
    <sliderText/>

</div>



<!--
  
<template>
    <Gallery />
</template>

<script>
import Gallery from '@/components/gallery.vue';
export default {
  name: 'art',
  components: {
    Gallery,
  },
};
</script>

<style scoped>

</style>
-->

</template>

<script>
import sliderText from "~/components/sliderText.vue";
export default {
  components: {
    sliderText,
  }
}
    //import Vue from 'vue';
    //
    //
    //
    //
    //  Vue.use(Lightbox);
    //
    //var photoDir = 
    //  'https://unpkg.com/vue-my-photos@1.0.0/src/assets/';
    //
    //var imageList = 
    //  [{'name':'mountains.jpg', 
    //    'alt':'The Dolomites', 
    //    'filter':'nature',
    //    'id':'image1' },
    //   
    //   {'name':'bird.jpg', 
    //    'alt':'It is a bird on a tree!', 
    //    'filter':'animals',
    //    'id':'image2'  }, 
    //   
    //   {'name':'alps.jpg', 
    //    'alt':'I will live here someday', 
    //    'filter':'nature',
    //    'id':'image3'  },
    //   
    //   {'name':'bear.jpg', 
    //    'alt':'Friendly bear', 
    //    'filter':'animals',
    //    'id':'image4'  },
    //   
    //   {'name':'canyon.jpg', 
    //    'alt':'A worthy hike', 
    //    'filter':'nature',
    //    'id':'image5'  },
    //   
    //   {'name':'monumentvalley.jpg', 
    //    'alt':'Monument Valley', 
    //    'filter':'nature',
    //    'id':'image6'  },
    //   
    //   {'name':'puppy.jpg', 
    //    'alt':'Puppy with a feather', 
    //    'filter':'animals',
    //    'id':'image7'  }, 
    //   
    //   {'name':'redwoods.jpg', 
    //    'alt':'Foggy evening in the Redwoods', 
    //    'filter':'nature',
    //    'id':'image8'  } ];
    //
    //new Vue({
    //  el: '#app',
    //  data() {
    //    return {
    //      thumbnailDir: photoDir,
    //      images: imageList,
    //      galleryFilter: 'all'
    //    }
    //  },
    //  methods: {
    //    showLightbox: function(imageName) {
    //      this.$refs.lightbox.show(imageName);
    //    },
    //    updateFilter(filterName) {
    //      this.galleryFilter = filterName;
    //    }
    //  },
    //  computed: {
    //    filteredImages: function() {
    //      if (this.galleryFilter === 'all') {
    //        return this.images;
    //      } else {
    //        return this.images.filter(image => image.filter === this.galleryFilter);
    //      }
    //    }
    //  }
    //})
    //export default {
    //  
    //}
</script>

<style scoped>#app {
  font-family: 'Avenir', 
               Helvetica,
               sans-serif;
  text-align: center;
  color: #ece1ca;
  margin-top: 60px;
}

body {
  border-color: #69655d;
  color: #ece1ca;
  background-color: #676769;
}

#filters {
  width: 500px;
  margin: 30px auto;
}

#filters span {
  margin: 15px;
}

img {
  width: 270px;
  height: 180px;
  margin: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>
