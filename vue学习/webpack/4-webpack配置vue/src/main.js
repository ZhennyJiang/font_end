//commonjs规范
const { sum, mul } = require("./js/mathUtils.js");
console.log(sum(10, 20));
console.log(mul(2, 3));
//es6语法
import { name, age, height } from "./js/info";
console.log(name, age, height);

require("./css/normal.css");

import Vue from "vue";
const app = new Vue({
  el: "#app",
  data: {
    message: "ssss",
  },
});
