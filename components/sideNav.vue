<template>
    <div class="header-warp">
    	<nuxt-link to="/" class="logo">
    		<img src="~/assets/img/logo.jpg" alt="">
    	</nuxt-link>
    	<ul class="main-menu">
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
.header-warp {
   padding: 37px 53px;
 }
 
 .hs-border {
   border-bottom: 1px solid #e0e0e0;
 }
 
 .logo {
   display: inline-block;
   padding: 8px 0;
 }
 
 .slicknav_menu {
   display: none;
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
   font-size: 14px;
   text-transform: uppercase;
   font-weight: 400;
   padding: 10px 0;
   color: #081624;
   margin-left: 37px;
 }
</style>