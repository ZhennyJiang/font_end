import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    info: {
      name: "jenny",
      age: 18,
    },
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
    updateInfo(state) {
      state.info.age++;
    },
  },
  actions: {
    aUpdateInfo(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("updateInfo");
          resolve(payload);
        }, 1000);
      });
    },
  },
  modules: {},
});
