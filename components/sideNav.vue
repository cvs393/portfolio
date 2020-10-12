<template>
<div class="header-warp">
    <div>
      <h1 class="title">COURTNEY VALENTINE SPIVEY</h1>
    </div>
    
    	<nuxt-link to="/" class="logo">
    		<img src="~/assets/img/logo.png">
    	</nuxt-link>
    	<ul class="main-menu" style="margin-top: 15px;">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/gallery">Art</nuxt-link></li>
        <li><nuxt-link to="/code">Code</nuxt-link></li>
        <li><nuxt-link to="/misc">Other Skills</nuxt-link></li>
        <li><nuxt-link to="/resume">Resume</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    	</ul>
    </div>
</template>


<style scoped>
img {
  width: 50px;
}

.header-warp {
   padding: 37px 53px;
 }
 
 .hs-border {
   border-bottom: 1px solid #000000;
 }

.title {
  font-family: 'made-mirage', 'Segoe UI', -apple-system, BlinkMacSystemFont,
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-style: solid;
  border-color: #35495e;
  border-width: 1px 0px;
  padding: 20px
}
 
 .logo {
   display: inline-block;
   padding: 8px 0;
   width: 50px;
 }
 
 .main-menu {
   float: right;
   
 }
 
 .main-menu li {
   display: inline-block;
  
 }
 
 .main-menu li a {
   display: block;
   font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
   font-size: 20px;
   text-transform: uppercase;
   letter-spacing: 2px;
   font-weight: 400;
   padding: 10px 0;
   color: #35495e;
   margin-left: 37px;
 }
</style>