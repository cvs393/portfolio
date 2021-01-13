
<!--<template>
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

</style>-->

<template scoped>
  <div>
  <h1 style="text-align:center">GALLERY</h1>
  <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">-->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js"></script>
  
<div class="container">
  <div class="row">
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/93cf7b104643873.5f67d09add779.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/1.jpg" class="img-fluid rounded">
    </a>
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a887db104643873.5f67d09adc023.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/2.png" class="img-fluid rounded">
    </a>
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/81910d92246785.5e462eb13a43e.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/3.png" class="img-fluid rounded">
    </a>
  </div>
  <div class="row">
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/82502d92246785.5e462eb135b2b.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/4.png" class="img-fluid rounded">
    </a>
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/25e78592246785.5e462eb132fd3.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/5.png" class="img-fluid rounded">
    </a>
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/44014792246785.5e462eb134caa.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/6.png" class="img-fluid rounded">
    </a>
  </div>
  <div class="row">
    <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/17654292246785.5e462eb13aad2.png" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/8.png" class="img-fluid rounded">
    </a>
    <a href="~/assets/gallery/9.PNG" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/9.PNG" class="img-fluid rounded">
    </a>
    <a href="~/assets/gallery/10.PNG" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="~/assets/gallery/10.PNG" class="img-fluid rounded">
    </a>
  </div>
</div>

  </div>
</template>

<script scoped>
export default {
  mounted()
  {
      $(document).on("click", '[data-toggle="lightbox"]', function(event) 
      {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
  }
}
</script>

<style scoped>
.row {
  margin: 25px;
}
</style>
