<template>
  <main>
    <!-- HOME SCREEN -->
    <div class="container-fluid">
      <section class="row">
        <div class="box col-12 offset-md-2 col-md-10 mt-5">
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

    <!-- ART SECTION -->

        <!-- PROJECT OVERVIEW SECTION -->
    <div class=left-title><h1>GAME PROJECTS</h1></div>
    <div class="slider" style="">
    	<div class="slide-track">
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/BORE.jpg"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/FIRST_STEP_TO_THE_GODS.png"/></nuxt-link>
    		</div>
    		<div class="slide">
    			<nuxt-link to="/code"><img src="~/assets/img/UKIE.png"/></nuxt-link>
    		</div>
    		<div class="slide">
    		<nuxt-link to="/code"><img src="~/assets/img/bg.jpg"/></nuxt-link>
    		</div>
    	</div>
    </div>

    <!-- CONTACT -->

    <!-- FOOTER -->
    <footer class="mt-5">
      <h4>Copyright 2020 Courtney Spivey. All Rights Reserved.</h4>
    </footer>
  </main>
</template>

<script>

</script>


<style>
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
  font-size: 20px;
  text-align: right;
  font-weight: 500;
  letter-spacing: 2px;
}

.box .content h4 {
  font-size: 20px;
  text-align: right;
}

.box .content button {
  float: right;
}

/* project gallery */
.left-title {
  margin-top: 10rem;
  justify-content: left;

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
    font-size: 1.1vw;
  }
}

img {
  /*width: 100%;*/
}

footer {
  padding: 37px 53px;
}
</style>