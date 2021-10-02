<template>
  <div class="carousel">
    <b-carousel :indicator-inside="false">
      <b-carousel-item v-for="(image, i) in images" :key="i">
        <b-image class="image" :src="image"></b-image>
      </b-carousel-item>
      <template #indicators="image">
        <b-image class="al image" :src="image" :title="image"></b-image>
      </template>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          "https://www.lincetoyota.com.br/wp-content/uploads/2020/10/pic-gal-corolla-1.jpg",
          "https://www.lincetoyota.com.br/wp-content/uploads/2020/10/pic-gal-corolla-9.jpg",
          "https://www.lincetoyota.com.br/wp-content/uploads/2020/10/pic-gal-corolla-2.jpg",
          "https://www.lincetoyota.com.br/wp-content/uploads/2020/10/pic-gal-corolla-12.jpg",
          "https://www.lincetoyota.com.br/wp-content/uploads/2020/10/pic-gal-corolla-4.jpg",
        ],
      };
    },
  };
</script>

<style>
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }
</style>
