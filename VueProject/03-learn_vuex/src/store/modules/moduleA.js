export default {
  state: { students: { name: "tom", age: 19 } },
  mutations: {
    getCounter(state, rootSate) {
      return state + rootSate;
    },
  },
  getters: {
    fullName(state, getters, rootSate) {
      console.log(state.students.name);

      return state.students.name + rootSate.counter;
    },
  },
  actions: {},
  modules: {},
};
