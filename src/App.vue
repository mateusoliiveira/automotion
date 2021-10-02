<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    name: "App",
    components: {
      NavBar,
      Footer,
    },
  };
</script>
<style>
  @font-face {
    font-family: "Volte Medium";
    font-style: normal;
    font-weight: normal;
    src: local("Volte Medium"),
      url("../src/assets/Volte Medium.woff") format("woff");
  }
  #app {
    font-family: "Volte Medium";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
  }
  a {
    color: black !important;
  }
</style>
