import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import game from "./modules/game";
import party from "./modules/party";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    party
  },
  getters
});
