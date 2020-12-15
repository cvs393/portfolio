<template>
<div>

  <mdb-carousel
    :interval="8000"
    :items="videoCarousel"
    indicators
    controlls
  ></mdb-carousel>

<div class="randomtext"><h1>there is more to this story yeeeee</h1></div>
</div>
</template>
<script>

  import { mdbCarousel } from "mdbvue";
  export default {
    name: "VideoCarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        videoCarousel: [
          {
            video: true,
            src: "https://mdbootstrap.com/img/video/Lines.mp4",
            loop: true,
            auto: true,
            muted: true,
            mask: "rgba-indigo-light",
            caption: {
              title: "Light mask"
            }
          },
          {
            video: true,
            src:
              "https://mdbootstrap.com/img/video/animation-intro.mp4",
            loop: true,
            auto: true,
            muted: true,
            mask: "rgba-purple-slight",
            caption: {
              title: "Slight mask"
            }
          },
          {
            video: true,
            src:
              "https://mdbootstrap.com/img/video/Nature-Sunset.mp4",
            loop: true,
            auto: true,
            muted: true,
            mask: "black-strong",
            caption: {
              title: "Strong mask"
            }
          }
        ]
      };
    }
  };
</script>
</script>

<style scoped>
    
</style>