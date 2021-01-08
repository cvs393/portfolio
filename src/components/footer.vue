<template>
    <div class="footer" style="position: relative; display:block">
      <!--<vertLine/>-->
      <div class="footer-wrap">
        <div class="row" style="">
          <ul class="col-4 left-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-left: 15px;">
            <li><a href="https://www.linkedin.com/in/courtney-spivey/">LinkedIn</a></li>
            <li><a href="https://www.behance.net/courtney-spivey">Behance</a></li>
          </ul>
          <ul class="col-4 offset-4 right-half main-menu" style="margin-top: 15px; display: flex; justify-content: space-between; padding-right:15px;">
            <li><a href="https://github.com/cvs393">Github</a></li>
            <li><a href="https://courtneyspivey.itch.io/">Itch.io</a></li>
          </ul>
          <div class="container" style="margin: 0px 0px;">
            <div class="info">
                <h4> EMAIL: cvs393@utulsa.edu </h4>
                <h4> LOCATION: Dundee, UK </h4>
                <h2 style="font-size: 20px;">© 2021 Courtney Spivey - All Rights Reserved.</h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import vertLine from "~/components/vertLine.vue";
export default {
  components: {
    vertLine,
  }
}
</script>

<style scoped>
.info h2 {
  justify-content: right;
  text-align: right;
  font-size: 15px;
}


.footer-wrap {
  /*padding: 37px 53px 37px 53px;*/
  justify-content: flex-end;
  padding-bottom: 40px;
  padding-top: 200px;
}
.row {
  border-width:1px 1px 1px 1px; border-style: solid; border-color:#696c65;
  margin: 0px 53px;
  /*border-top-width: 1px;*/
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
</style>