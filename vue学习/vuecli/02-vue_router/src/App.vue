<template>
  <div id="nav">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/home" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">About Us</button>
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.router-link-active {
  color: pink;
}
</style>
