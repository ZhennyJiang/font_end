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
    <h4>{{$store.state.info}}</h4>

    <button @click="updateInfo">change</button>
    <h3>modules内的对象</h3>
    <p>{{$store.state.a.students}}</p>
    <h2>{{$store.getters.mfullName}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
  </div>
</template>
<script>
import my from "./components/my.vue";

export default {
  name: "App",
  components: { my },
  data() {
    return {
      message: "aaa"
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
    updateInfo() {
      this.$store.dispatch("aUpdateInfo", "success").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style></style>
