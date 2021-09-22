<template>
  <div class="notice">
    <carousel />
    <div class="bfc">
      <div class="message_wrapper">
        <i class="el-icon-plus" @click="dialogVisible=true"></i>
        <p style="text-align:center">场馆要闻</p>
        <div class="line"></div>
        <ul>
          <a @click="toMessage(item)" v-for="item in information" :key="item">
            <li>{{item.title}}</li>
          </a>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import carousel from "./carousel";
export default {
  name: "notice",
  components: {
    carousel
  },
  data() {
    return {
      information: [
        { title: "Hhhhhhh", info: "121231231231212132123" },
        { title: "Hhhhhhh", info: "121231231231212132123" },
        { title: "Hhhhhhh", info: "121231231231212132123" },
        { title: "Hhhhhhh", info: "121231231231212132123" },
        { title: "Hhhhhhh", info: "121231231231212132123" }
      ]
    };
  },
  methods: {
    async getInformation() {
      // this.Axios.get("")
      //   .then(res => {
      //     console.log(res);
      //     this.information = res.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    toMessage(item) {
      window.sessionStorage.setItem("item", item);
      this.$router.push({ name: "message", params: item });
    }
  }
};
</script>
<style>
.bfc {
  color: rgb(42, 130, 228);
  overflow: hidden;
  margin-top: 30px;
}
.message_wrapper {
  position: relative;
  margin: 0 auto;
  height: 400px;
  width: 425px;
  padding: 0 50px;
  border: 1 px solid rgb(205, 210, 212);
  line-height: 21px;
}
.message_wrapper > ul {
  padding: 5px 20px;
}
.line {
  margin-top: 5px;
  height: 3px;
  background-color: rgb(42, 130, 228);
}
.message_wrapper > ul > a {
  display: block;
  font-size: 18px;
  padding: 5px 0;
  color: black;
  cursor: pointer;
}
.message_wrapper > ul > a:hover {
  text-decoration: underline;
}
.el-icon-plus {
  position: absolute;
  right: 60px;
  font-size: 20px;
  cursor: pointer;
}
.el-icon-plus:hover {
  color: rgb(42, 110, 187);
  background-color: rgb(245, 246, 247);
}
.notice .el-input {
  width: 400px !important;
}
.notice .el-form-item__content {
  width: 100%;
}
.notice .el-textarea {
  width: 400px !important;
}
</style>