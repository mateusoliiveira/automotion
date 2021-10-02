<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" to="/">
          <router-link to="/"
            ><img src="../assets/automotion.png" width="100"
          /></router-link>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">INÍCIO</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/sobre">SOBRE</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/simule">SIMULE JÁ</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/onde">ONDE ESTAMOS</router-link>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              MAIS
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Autorizadas
              </a>
              <a class="navbar-item">
                Recalls
              </a>
              <a class="navbar-item">
                Fale conosco
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button"
                style="background-color: #1498D5;"
                @click="open"
              >
                <strong style="color: white;">AGENDAR MEU TEST DRIVE</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <b-modal full-screen v-model="isActive">
      <Modal />
    </b-modal>
  </div>
</template>

<script>
  import Modal from "@/components/Modal.vue";
  export default {
    components: {
      Modal,
    },
    methods: {
      open() {
        this.$buefy.modal.open({
          parent: this,
          component: Modal,
          hasModalCard: true,
          customClass: "custom-class",
          trapFocus: true,
        });
      },
    },
  };
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
</script>

<style></style>
