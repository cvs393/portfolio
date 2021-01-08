<template>
  <div class="thingy" style="position: relative; display:block;">
      <div class="container-fluid">
        <div class="title">
          <img src="~/assets/img/Final_logo.png">
        <h1 style="font-weight: 300;"><nuxt-link to="/">COURTNEY VALENTINE SPIVEY</nuxt-link></h1>
          <h4 style="margin-bottom: 0px; letter-spacing:5px; font-weight:300; font-size:1.2rem; color: #00000;">game designer, &nbsp; artist, &nbsp; hobby programmer.</h4>
        </div>
        <div class="row">
          <ul class="col-4 left-half main-menu" id="main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-left: 15px;">
            <!--<li><nuxt-link to="/">Home</nuxt-link></li>-->
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            
          </ul>
          <ul class="col-4 offset-4 right-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-right:15px;">
            <li><nuxt-link to="/code">Projects</nuxt-link>
              <div class="dropdown-content">
                <a href="/gameProjects/BORE">BORE</a>
                <a href="/gameProjects/FTToTG">FIRST STEP OF THE GODS</a>
                <a href="/gameProjects/gameJams">GAME JAMS</a>
                <a href="/gameProjects/BORE">GAME DESIGN IDEAS</a>
              </div>
            </li>
            <li><nuxt-link to="/art">Art</nuxt-link></li>
            <!--<li><nuxt-link to="/resume">Resume</nuxt-link></li>-->
            
          </ul>
        </div>
  
      </div>


  </div>
</template>

<script>
window.onscroll = function() {stickyTopNav()};

// Get the navbar
var navbar = document.getElementById("main-menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTopNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>
<style scoped>
/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement 
*(as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}

/*logo*/
img {
  z-index: -1;
  display: block;
  left: 50%;
  height: 150%;
  top: 50%;
  transform: translate(-50%, -50%); 
  position: absolute;
  /*opacity: 70%;*/
}

.thingy {
  margin: 120px 53px 37px 53px;
}

.header-warp {
   padding: 120px 53px 37px 53px;
   justify-content: flex-end;
 }

.title {
  display: block;
  font-weight: 400;
  color:#696c65;
  letter-spacing: 7px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-style: solid;
  border-color:#696c65;
  border-width: 1px 0px;
  padding: 20px;
  position: relative;
}

.title h1 a {
  font-size: 5rem;
  letter-spacing: 0;
  color: #3b3d39;
}

.title h1 a:hover {
  font-size: 5rem;
  letter-spacing: 0;
  color: #fa2525;
  text-decoration: none;
}

 .main-menu {
   display: flex;
   justify-content: space-evenly;
   padding-left: 0;
   
 }
 
 .main-menu li {
   display: inline-block;
  
 }
 
 .main-menu li a {
   display: block;
   font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
   text-transform: uppercase;
   letter-spacing: 2px;
   font-weight: 400;
   padding: 10px 0;
   color: #fa2525;
   /*  #35495e */
 }

 .main-menu li a:hover {
   text-decoration: line-through;

 }

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 100%;
  
  padding: 12px 0px;
  z-index: 1;
}

 .main-menu li:hover .dropdown-content {
   display: block;
 }

 @media screen and (min-width: 1612px) {
   img {
    height: 200%;
   }
 }
</style>