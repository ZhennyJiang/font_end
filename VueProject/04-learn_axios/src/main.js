import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
// // 1.
// axios({
//   url: "/home/multidata",
//   methods: "get", //定义get或post请求，不写的话默认是get请求
// }).then((res) => {
//   console.log(res);
// });

// // 2.
// // axios.get("/home/multidata").then((res) => {
// //   console.log(res);
// // });

// // 3.
// axios({
//   url: "/home/data", //默认是get请求
//   methods: "get", //定义get或post请求
//   params: {
//     //转门针对get请求的参数拼接
//     type: "sell",
//     page: 1,
//   },
// }).then((res) => {
//   console.log(res);
// });

// // 4.
// axios
//   .all([
//     axios({ url: "/home/multidata" }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 2,
//       },
//     }),
//   ])
//   .then((results) => {
//     console.log(results);
//   });

// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000,
// });
// instance1({
//   url: "/home/multidata",
// }).then((res) => {
//   console.log(res);
// });
// instance1({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 1,
//   },
// }).then((res) => {
//   console.log(res);
// });

import { request } from "./network/request";

// request({ url: "/home/multidata" }, (res) => {
//   console.log(res);
// });

request({ url: "/home/multidata" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
