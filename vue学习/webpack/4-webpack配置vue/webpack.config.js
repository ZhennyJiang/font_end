const path = require("path"); //导入模块，从node的包中获取这个模块

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"), //dirname保存的是当前文件所在的目录,这样就可以获得dist的绝对路径
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, //css-loader只负责将css文件进行加载,style-loader负责页面的渲染，有多个loader时从右往左读
    ],
  },
  resolve: {
    alias: {
      vue$: "vue",
    },
  },
};
