//乱序
var arr = [1, 2, 3, 4];
function compate() {
  return Math.random() - 0.5;
}
arr.sort(compate);
console.log(arr); //对arr乱序排列

console.log(arr, arr.reverse());

arr.sort(function (a, b) {
  return a - b;
});
console.log(arr); //升序

arr.sort(function (a, b) {
  return b - a;
});
console.log(arr); //降序
