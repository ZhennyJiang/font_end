export default {
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
};
