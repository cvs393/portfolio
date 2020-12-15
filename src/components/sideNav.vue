<template>
  <div class="thingy" style="position: relative; display:block">
    <img src="~/assets/img/Final_logo.png">
      <div class="header-warp">
        <div class="title">
        <h1 style="font-weight: 300;"><nuxt-link to="/">COURTNEY VALENTINE SPIVEY</nuxt-link></h1>
          <h2 style="margin-bottom: 0px;">Game Designer, Artist, hobby Programmer.</h2>
        </div>
        <div class="row">
          <ul class="col-4 left-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-left: 15px;">
            <!--<li><nuxt-link to="/">Home</nuxt-link></li>-->
            <li><nuxt-link to="/art">Art</nuxt-link></li>
            <li><nuxt-link to="/code">Projects</nuxt-link></li>
          </ul>
          <ul class="col-4 offset-4 right-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-right:15px;">
            <li><nuxt-link to="/misc">About</nuxt-link></li>
            <!--<li><nuxt-link to="/resume">Resume</nuxt-link></li>-->
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>


  </div>
</template>


<style scoped>
img {
  /*width: 150px;
  position: absolute;
  overflow: hidden;
  margin-left: 0px;
  margin-top: 0px;*/
  z-index: -1;
}

.header-warp {
   padding: 120px 53px 37px 53px;
   justify-content: flex-end;
 }

.title {
  font-family: 'made-mirage', 'Segoe UI', -apple-system, BlinkMacSystemFont,
  Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  padding: 20px
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

h2 {
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont,
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
  align-items: center;
  text-align: center;
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

 @media screen and (min-width: 768px) {
   img {
    display: block;
    left: 50%;
    height: 100%;
    /*top: -10%;*/
    transform: translate(-50%); 
    position: absolute;
    opacity: 87%;
   }
 }
</style>