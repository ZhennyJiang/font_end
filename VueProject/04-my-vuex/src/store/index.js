import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, count) {
      state.counter += count;
    },
  },
  actions: {
    aUpdateInfo(context) {
      setTimeout(() => {}, 1000);
    },
  },
  modules: {},
});
