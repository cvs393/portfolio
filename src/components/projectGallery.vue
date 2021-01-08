
<template>
    <div>
        <div class="slideshow-container">
            <div class="mySlides fade">
              <nuxt-link to="gameProjects/BORE"><img src="~/assets/img/BORE.jpg" style="width:100%"></nuxt-link>
            </div>
            <div class="mySlides fade">
              <nuxt-link to="/gameProjects/FSoTG"><img src="~/assets/img/GODS.jpg" style="width:100%"></nuxt-link>
            </div>
            <div class="mySlides fade">
              <nuxt-link to="/gameProjects/gameJams"><img src="~/assets/img/UKIE_GJ.jpg" style="width:100%"></nuxt-link>
            </div>
            <div class="mySlides fade">
              <nuxt-link to="/gallery"><img src="~/assets/img/ART.PNG" style="width:100%"></nuxt-link>
              <div class="text">ART GALLERY</div>
            </div>
        </div>
            
            <div style="text-align:center">
              <span class="dot"></span> 
              <span class="dot"></span> 
              <span class="dot"></span> 
              <span class="dot"></span>
        </div>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1200px;
  position: relative;
  margin: auto;
  height: 100%;
  
  overflow: hidden;
  object-fit: cover;
}


/* Caption text */
.text {
  color: #413e3e;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}


/* The dots/bullets/indicators */
.dot {
  height: 2px;
  width: 15px;
  margin: 0 2px;
  background-color:  #520303;
  /*border-radius: 50%;*/
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: rgb(255, 0, 0);
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 4s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: .9}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>



<script scoped>
export default{
    mounted() {
            var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
    }
}

</script>
