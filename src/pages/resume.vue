<template>
  <div>
    <div style="padding: 30px;"></div>
    <h2 style="text-align: center;"> RESUME </h2>
    <div class= pdf> 
        <img src="~/assets/img/Courtney Valentine Spivey (1).png">
        <div style="padding: 30px;"></div>
        <img src="~/assets/img/Courtney Valentine Spivey (2).png">
    </div>
  </div>
</template>

<script>
import padding from "~/components/padding.vue";
export default {
  padding,
}
</script>
<style scoped>
.pdf {
    padding: 0;
    width: 80%;
    margin: auto;
}

.pdf img {
  padding: 0;
  width: 100%;
  border:#35495e 1px solid;
}
</style>

