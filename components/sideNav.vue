<template>
  <div>
    <img src="~/assets/img/logo.png">
      <div class="header-warp">
        <div class="title">
        <h1>COURTNEY VALENTINE SPIVEY</h1>
          <h2 style="margin-bottom: 0px;">Game Designer, Artist, and (the occasional) Programmer.</h2>
        </div>
          <ul class="main-menu" style="margin-top: 15px;">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/gallery">Art</nuxt-link></li>
            <li><nuxt-link to="/code">Code</nuxt-link></li>
            <li><nuxt-link to="/misc">Other Skills</nuxt-link></li>
            <li><nuxt-link to="/resume">Resume</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
      </div>
  </div>
</template>


<style scoped>
img {
  width: 376px;
  position: absolute;
  overflow: hidden;
  margin-left: -10px;
  opacity: 95%;
  margin-top: -3px;
  z-index: -1;
}

.header-warp {
   padding: 37px 53px;
   justify-content: flex-end;
 }

.title {
  font-family: 'made-mirage', 'Segoe UI', -apple-system, BlinkMacSystemFont,
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  color: #35495e;
  letter-spacing: 7px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-style: solid;
  border-color: #35495e;
  border-width: 1px 0px;
  padding: 20px
}

.title h1 {
  font-size: 35px;
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
   font-size: 22pxpx;
   text-transform: uppercase;
   letter-spacing: 2px;
   font-weight: 400;
   padding: 10px 0;
   color: #35495e;
 }

 @media screen and (min-width: 768px) {
 }
</style>