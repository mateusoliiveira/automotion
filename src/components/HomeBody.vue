<template>
  <div>
    <Carousel />
    <HomeDetails />
  </div>
</template>

<script>
  import Carousel from "@/components/home/Carousel.vue";
  import HomeDetails from "@/components/home/HomeDetails.vue";
  export default {
    components: {
      Carousel,
      HomeDetails,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
