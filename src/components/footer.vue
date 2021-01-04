<template>
    <div class="footer" style="position: relative; display:block">
      <div class="footer-warp">
        <div class="vertical-line"></div>  
        <div class="row" style="border-width:1px 0px 0px 0px;">
          <ul class="col-4 left-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-left: 15px;">
            <li><a href="https://linkedin.com/profile/courtney-spivey">LinkedIn</a></li>
            <li><a href="https://www.behance.net/courtney-spivey/">Behance</a></li>
          </ul>
          <ul class="col-4 offset-4 right-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-right:15px;">
            <li><a href="https://github.com/users/cvs393/">Github</a></li>
            <li><a href="https://courtneyspivey.itch.io/">Itch.io</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>


<style scoped>
.footer-wrap {
    padding: 37px 53px 37px 53px;
   justify-content: flex-end;
}
.row {
  border-style: solid;
  border-color:#696c65;
  /*border-top-width: 1px;*/
  padding: 20px
}
.vertical-line {
  border-left: 1px solid #696c65;
  height: 200px;
  position: relative;
  left: 50%;
  margin-left: -3px;
  top: 0;
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
.header-warp {
   padding: 120px 53px 37px 53px;
   justify-content: flex-end;
 }
</style>