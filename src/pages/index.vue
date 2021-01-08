
<template>
  <main>
    <!-- HOME SCREEN -->
    <div style="padding: 80px;"></div>
    <div class="container-fluid">
      <section class="row">
        <div class="box col-12 offset-md-2 col-md-10">
          <div class="container-fluid">
            <div class="row">
              <div class="image col-12 col-md-6 order-md-2">
                <div class="cage">
                  <h1>HOME</h1>
                  <img src="~/assets/img/profile.jpg">
                </div>
              </div>
              <div class="col-12 col-md-6 order-md-1 content">
                <div class="cage">
                  <h1 class="pt-md-3">HOME</h1>
                </div>
                <div class="text px-3 pb-3">
                  
                    <h3><p>Welcome to my Website, I'm glad you're here.</p></h3>
                  <h4>
                    <p>I am currently a graduate student at the University of Abertay studying a Professional Masters in Game Development. As a previous triple major undergraduate in bachelor degrees from Graphic Design, Computer Gaming and Simulation Development, and Applied Mathematics, I have a balanced blend of computer science, management and business, and art skills.</p></h4>
                  <p></p>
                  <h4><ul style="list-style: none;"><h3>Recent Achievements: </h3>
                    <li>International Saltire Scholarship 2020</li>
                    <li>Clarke Memorial Award for Graphic Design 2020</li>
                    <li>Rotary Club Scholarship 2019</li>
                    <li>International Gilman Scholarship 2018</li>
                  </ul></h4>
                  <button><nuxt-link to="/resume">My Resume</nuxt-link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- END HOME SCREEN -->

     <!-- Misc -->
    
    <vertLine/>
    <div class="container-fluid">
      <section class="row">
        <div class="box col-12 col-md-10"> <!--offset-1 mt-5-->
          <div class="container-fluid">
            <div class="row">
              <div class="image col-12 col-md-6 order-md-2">
                <div class="cage">
                  <h1>MISC.</h1>
                  <img src="~/assets/gallery//peacekeeper/peacekeeper_gif.gif">
                </div>
              </div>
              <div class="col-12 col-md-6 order-md-1 content">
                <div class="cage">
                  <h1 class="pt-md-3">MISC.</h1>
                </div>
                <div class="text px-3 pb-3"> 
                  <h4><ul style="list-style: none; text-align: left;"><h3 style="text-align: left;">Hobbies and Interests</h3>
                    <li>- Recreational Drawing</li>
                    <li>- Creative Writing	&amp; World Building</li>
                    <li>- Playing Clarinet	&amp; Piano</li>
                    <li>- Brutalist | Material | Futuristic Design</li>
                    <li>- Video Games! Current favs include: Breath of the Wild, Detroit: Become Human, FFVII Remake, 
                      Hyper Light Drifter, Animal Crossing: New Horizons, and Skyrim! Waiting on buying a PS5 to play Cyberpunk 2077 :'(
                    </li>
                  </ul></h4>
                  <p></p>
                  <h3 style="text-align: left; padding: 1rem;"><p>You can reach me on LinkedIn, Artstation, Itchi.io &amp; Behance!</p></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  <!-- PROJECT GALLERY SECTION -->
  <padding/>
  

        <!-- PROJECT OVERVIEW SECTION -->
    
   <padding/>
  <div class="left-title col-md-6 offset-md-3" style="padding-bottom:20px; padding-top: 40px;">
    <h2 style="">Game Projects</h2>
    <h4> Projects I've completed and projects that are currently in progress. </h4>
  </div>
    <vertLine/>
    <projectGallery/>
    <!--
      <div class="slider" style="">
    	<div class="slide-track">
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/BORE.jpg" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/FIRST_STEP_TO_THE_GODS.png" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/UKIE.png" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    		<nuxt-link to="/code"><img src="~/assets/img/bg.jpg" style="height:700px;"/></nuxt-link>
    		</div>
        <div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/BORE.jpg" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/FIRST_STEP_TO_THE_GODS.png" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/UKIE.png" style="height:700px;"/></nuxt-link>
    		</div>
    		<div class="slide">
    		<nuxt-link to="/code"><img src="~/assets/img/bg.jpg" style="height:600px;"/></nuxt-link>
    		</div>
    	</div>
    </div>
    -->
    <vertLine/>
    <div class="left-title col-12 col-md-8 offset-md-2" style=""><h1 style="font-weight: 300; font-size: 4rem; text-align: center; ">YOU'VE REACHED THE END OF THE HOMEPAGE.</h1>
    </div>
    <div class="vertical-line"></div>
    <div class="col-12 col-md-6 offset-md-3" style="padding: 2% 2% 0px; text-align: center;"><h4 style="font-weight: 500;">Want to work with me?</h4>
    <h4>For inquiries, commissions, collaborations, and jobs refer to the footer for ways to get in touch with me. I look forward to meeting you!</h4>
    <h4>This website was created using Vue.js, Nuxt, Bootstrap 4 and Firebase. All the code and assets are available on my <a href="www.github.com/cvs393/">Github</a>. Please refrain from using my art and project assets without permission.</h4></div>
    <div class="top-button"><button><nuxt-link to="#">Top of Page</nuxt-link></button></div>
    <!-- CONTACT -->

    <!-- FOOTER -->
    
  </main>
</template>

<script>
import vertLine from "~/components/vertLine.vue";
import padding from "~/components/padding.vue";
import projectGallery from "~/components/projectGallery.vue";
export default {
  components: {
    vertLine,
    padding,
    projectGallery,
  }
}
</script>

<style>
.top-button {
  display: flex;
  justify-content: center;
}
.vertical-line {
  width: 1px;
  background-color: #696c65;
  height: 200px;
  position: relative;
  left: 50%;
  top: 0;
}
.box {
 border:#696c65 1px solid;
 padding: 0;
 
}

.box .image {
  padding: 0;
}

.box .cage {
  overflow: hidden;
  position: relative;
}

.box .image .cage {
  height: 100%;
}

.box .image h1 {
  position: absolute;
  color: #fa2525;
  margin: 0;
  right: 0;
  bottom: 0;
  transform: translateY(50%);
}

.box .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.box .content {
  padding: 0;
}

.box .content .text {
  overflow: hidden;
}

.box .content h1 {
  float: right;
  position: relative;
  transform: translateY(-50%);
}

.box .content h3 {
  /*font-size: 20px;*/
  text-align: right;
  /*letter-spacing: 2px;*/
}

.box .content h4 {
  font-size: 20px;
  text-align: right;
}

.box .content button {
  float: right;
}

/* project gallery */
div.left-title {
  border-top:#696c65 1px solid; 
  border-bottom:#696c65 1px solid;
  
  text-align: center;
  /*padding-left: 1rem;*/
}


/* applies when the screen is bigger than 768px (desktop version) */
@media screen and (min-width: 768px) {
  .box .image h1 {
    left: 0;
    transform: translateX(-50%);
    top: 1rem;
    right: unset;
  }

  .box .content h1 {
    transform: translateX(50%);
  }

  .box .content h4 {
    font-size: 1em;
  }
}

footer {
  padding: 37px 53px;
}

div.left-title h1 {
  /*margin-top: 10rem;
  text-align: left;
  padding-left: 1rem;*/
  font-size: 6rem;
}
</style>