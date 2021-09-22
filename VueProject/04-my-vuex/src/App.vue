<template>
  <div id="nav">
    <my></my>

    <h3>{{ message }}</h3>
    <button @click="addiction">+</button>
    {{ $store.state.counter }}
    <button @click="subtractioin">-</button>
    <button @click="incrementCount(5)">+5</button>
    <button @click="incrementCount(10)">+10</button>

    <h3>{{ $store.state.counter }}</h3>
  </div>
</template>
<script>
import my from "./components/my.vue";

export default {
  name: "App",
  components: { my },
  data() {
    return {
      message: "aaa",
    };
  },
  methods: {
    addiction() {
      this.$store.commit("increment");
      console.log(this.$store.state.counter);
    },
    subtractioin() {
      this.$store.commit("decrement");
    },
    incrementCount(count) {
      this.$store.commit("incrementCount", count);
    },
  },
};
</script>

<style></style>
