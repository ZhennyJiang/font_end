<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <router-link to="/home/home1">Home1</router-link>|
    <router-link :to="{ path: '/home/home2', query: { name: 'jenny', age: 18 } }">Home2</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      message: "123",
      path: "/home/home1"
    };
  },
  created() {
    console.log("home created");
  },
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.path);

    this.path = this.$route.path;
    next();
  }
};
</script>
