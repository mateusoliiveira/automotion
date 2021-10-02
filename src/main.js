import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueSplide from "@splidejs/vue-splide";

Vue.use(VueSplide);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  Buefy,
  render: (h) => h(App),
}).$mount("#app");
