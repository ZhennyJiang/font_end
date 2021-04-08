function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));

var arr = ["张三", "李四", "大傻"];
console.log(arr[getRandom(0, 3)]);
