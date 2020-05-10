import Vue from "vue";
import App from "./App.vue";
import toasted from "vue-toasted";
import router from "./router";
import store from "./store";
import "./assets/style.scss";
import axios from "axios";
Vue.use(axios);

Vue.config.productionTip = false;
Vue.use(toasted);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
