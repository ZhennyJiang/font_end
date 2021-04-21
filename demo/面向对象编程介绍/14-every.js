var arr = [1, 5, 9, "a"];
var flag = arr.every(function (value) {
  console.log(typeof value);
  return typeof value == "number";
});
console.log(flag);
