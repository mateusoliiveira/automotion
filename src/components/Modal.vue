<template>
  <div class="modal-card" style="width: auto">
    <section class="modal-card-body">
      <p class="is-size-4-desktop is-size-3-mobile p-4 mb-4 has-text-centered">
        Você está a um passo de vivenciar coisas incríveis.
      </p>
      <b-field label="Nome">
        <b-input
          type="text"
          :value="name"
          placeholder="Seu nome completo"
          required
        ></b-input>
      </b-field>
      <b-field label="Email">
        <b-input
          type="email"
          :value="email"
          placeholder="Seu email principal"
          required
        ></b-input>
      </b-field>
      <b-field label="Telefone">
        <b-input
          type="text"
          :value="tel"
          placeholder="Seu telefone com DDD"
          required
        ></b-input>
      </b-field>
      <p class="is-size-7-desktop is-size-7-mobile">
        Um colaborador da Automotion entrará em contato com você.
      </p>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button m-auto"
        style="background-color: #1498D5; color: white;"
      >
        Enviar e aguardar meu Test Drive
      </button>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    data() {
      return {
        name: "",
        email: "",
        tel: "",
      };
    },
  };
</script>

<style scoped>
  @font-face {
    font-family: "Volte Medium";
    font-style: normal;
    font-weight: normal;
    src: local("Volte Medium"),
      url("../../src/assets/Volte Medium.woff") format("woff");
  }

  .modal-card,
  .modal-card footer button {
    font-family: "Volte Medium";
  }
</style>
