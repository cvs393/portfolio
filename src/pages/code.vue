<template>
  <div> 
    <h1>GAME PROJECTS</h1>
      <div class="container-fluid">
        <section class="row">
          <div class="project-desc col-md-3 offset-md-1 mt-5" style="text-align:right; border:#696c65 1px solid;">
            <h2> BORE </h2>
            <h4> Bore was the first long term game project I had at the University of Abertay. Along with my teammates, we created blahblah blahblahblahblahblahblahblahblahblah blahblahblahblahblahblah blahblahblah blahblahblahblahblah blahblahblahblahblahbla hblahblahblahblahblahbla hblahblahblahb  lahblah   read more to see   the full  process... </h4>
          <button><nuxt-link to="/gameProjects/BORE">Read More</nuxt-link></button>
        </div>
        <div class="project-video col-md-8 mt-5">
          <iframe class="responsive-iframe" src="https://www.youtube.com/embed/--4f6WAavSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </section>  
        <vertLine/>
      
      <div class= "container-fluid" style="padding: 0px 0px;">
        <section class="row">
            <div class="project-video col-md-8 ">
              <iframe class="responsive-iframe" src="https://www.youtube.com/embed/lX6JcybgDFo" frameborder="0" allow="accelerometer; autoplay;     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe> 
            </div>
          <div class="project-desc col-md-3 " style="text-align:left; border:#696c65 1px solid;">
            <h2> FIRST STEP OF GODS </h2>
            <h4> First Step of Gods was a upper level game created by students 2 semesters ahead of me. This game had its ups and downs but ultimately we were able to create a cohesive balloon tower defense game. First Step of Gods was a upper level game created by students 2 semesters ahead of me. This game had its ups and downs but ultimately we were able to create a cohesive balloon tower defense game. </h4>
            <button><nuxt-link to="/gameProjects/FSoTG">Read More</nuxt-link></button>
            <div style="padding-bottom: 10px;"></div>
          </div>
        </section> 
        <vertLine/>
    </div>
      <button><nuxt-link to="/gameProjects/gameJams">Other Projects (Game Jams)</nuxt-link></button>
  </div>

  </div>




  <!--<div class="project-desc col-12 offset-md-2 col-md-8 mt-5"><h2 style="text-align:center;">TEAM</h2>
          <h4 style="text-align:center;">Art: Courtney Spivey, Jeff</h4><h4 style="text-align:center;">Design: idk</h4><h4 style="text-align:center;">Producer: Michelangelo Bedetti</h4><h4 style="text-align:center;">Programmers: Robin Couwenberg, Heather Cochrane</h4>
      </div>-->
</template>


<script>
  import vertLine from "~/components/vertLine.vue";
import padding from "~/components/padding.vue";
export default {
  components: {
    vertLine,
    padding,
  }
}
</script>

<style scoped>
  .projects-grid {
    display: grid;
     grid-template-columns: auto auto auto auto; /*how many columns to have*/
     grid-template-rows: auto auto;
     grid-gap: auto;
}
  .projects-grid > div {
  padding: 1.5rem 1rem;
  border:#696c65 1px solid;
  text-align: center;
  overflow: hidden;

  }
  .project-video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 30%;  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>