<template>
  <div style="height:100% ">
    <Home />
    <!-- <el-row>
      <el-button type="success" @click="login">成功按钮</el-button>
    </el-row>-->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home
  },
  methods: {
    login() {
      this.Axios.get("test")
        .then(res => {
          //请求成功的回调函数
          console.log(res);
          if (res.data == "ok") {
            this.$message.success("okk");
          }
        })
        .catch(err => {
          //请求失败的回调函数
          console.log(err);
        });
    }
  }
};
</script>

<style>
#app {
}
</style>
