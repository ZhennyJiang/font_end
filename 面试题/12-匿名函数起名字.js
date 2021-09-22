// let fn = function AAA() {
//   console.log(AAA);
// };
// fn();
// function fn() {
//   console.log(fn);
// }
// console.log(fn);

var b = 10;
(function b() {
  var b = 20;
  console.log(b); //20
})();
console.log(b); //10

var c = 10;
(function c() {
  c = 20;
  console.log(c); //函数c
})();
console.log(c); //10
