/* jshint esversion:6 */
import Vue from "vue";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
store.commit("addPlayer", { name: "Brian", player: 1 });
store.commit("addPlayer", { name: "Isabel", player: 2 });
store.commit("addPlayer", { name: "Matthew", player: 3 });
store.commit("addPlayer", { name: "Christian", player: 4 });
store.commit("addPlayer", { name: "Phoebe", player: 5 });
