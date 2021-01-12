<template>
  <div> 
    <h1>GAME PROJECTS</h1>
      <div class="container-fluid">
        <section class="row">
          <div class="project-desc col-md-3 offset-md-1 mt-5" style="text-align:right; border:#696c65 1px solid;">
            <h2> BORE </h2>
            <h4> Bore was the first long term game project I had at the University of Abertay. I worked as an UI/UX designer and artist. Along with my teammates, we created a game full of lore, mystery and resource management. Watch the trailer here! To find out about the development process and my roles, click 'Read more'.</h4>
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
            <h4> First Step of Gods was a upper level game created by students 2 semesters ahead of me. I worked as an contract artist and worked with the other artist, Jeff Suen, to rebuild the look of the game. My tasks included redesigning UI and drawing the opening cutscene. This game had its ups and downs but ultimately we were able to create a cohesive tower defense game with some exciting &amp; quirky gameplay.</h4>
            <button><nuxt-link to="/gameProjects/FSoTG">Read More</nuxt-link></button>
            <div style="padding-bottom: 10px;"></div>
          </div>
        </section> 
        <vertLine/>
        </div>

      <div class="container-fluid">
        <section class="row">
          <div class="project-desc col-md-3 offset-md-1" style="text-align:right; border:#696c65 1px solid;">
            <h2>THE KIND-ers </h2>
            <h4> During the 2020 annual 48 hour UKIE game jam I worked alongside four Abertay students to create The KIND-ers. The theme was on diversity and inclusion as a game concept and because we wanted to stray from any and every human stereotype we decided on a children's theme with basic blocks as characters. I worked as the background / UI artist and was one of the level designers. </h4>
          <button><nuxt-link to="/gameProjects/gameJams">Read More</nuxt-link></button>
        </div>
        <div class="project-video col-md-8">
          <iframe class="responsive-iframe" src="https://www.youtube.com/embed/O52yKHyt1vo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </section>
      </div>
      <vertLine/>
      <div class= "container-fluid" style="padding: 0px 0px;">
        <section class="row">
            <div class="project-video col-md-8 ">
              <iframe class="responsive-iframe" src="https://www.youtube.com/embed/lX6JcybgDFo" frameborder="0" allow="accelerometer; autoplay;     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe> 
            </div>
          <div class="project-desc col-md-3 " style="text-align:left; border:#696c65 1px solid;">
            <h2>HELL JAM</h2>
            <h4> Hell jam was a hot mess, but I learned how to rig character animations in Unity and it was honestly a very fun experience regardless. I had two great teammates and together, we built a frustrating game that was immediately disqualified for not adhering to a special game jam constraint. </h4>
            <button><nuxt-link to="/gameProjects/gameJams">Read More</nuxt-link></button>
            <div style="padding-bottom: 10px;"></div>
          </div>
        </section> 
        
        </div>
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

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 4rem;
    }
  }
</style>