import { createStore } from "vuex";
import moduleA from "./modules/moduleA";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const state = {
  counter: 0,
  info: {
    name: "jenny",
    age: 18,
  },
};

export default createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
  },
});
