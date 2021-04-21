function fn(a, b, c) {
  console.log(a, b, c);
}
var obj = function () {
  name: "as";
};
fn.apply(obj, [1, 2, 3]);

var arr = [2, 6, 8, 99, 55];
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log(max + " " + min);
