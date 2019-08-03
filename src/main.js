/* jshint esversion:6 */
import Vue from "vue";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
store.commit("addPlayer", {
  name: "Brian",
  pid: Math.floor(Math.random() * 10000) + 1
});
store.commit("addPlayer", {
  name: "Isabel",
  pid: Math.floor(Math.random() * 10000) + 1
});
store.commit("addPlayer", {
  name: "Matthew",
  pid: Math.floor(Math.random() * 10000) + 1
});
store.commit("addPlayer", {
  name: "Christian",
  pid: Math.floor(Math.random() * 10000) + 1
});
