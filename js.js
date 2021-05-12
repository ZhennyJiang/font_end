// var a = 2;
// function fn() {
//   console.log(a);
//   var a = 3;
// }
// fn();

// function fn2() {
//   console.log(a);
//   a = 3;
// }
// fn2();

// var c;
// function c(c) {
//   console.log(c);
//   var c = 3;
// }
// c = 1;
// // c(2);

// var name = "123";
// (function () {
//   if (typeof name === "undefined") {
//     var name = "jack";
//     console.log(name);
//   } else {
//     console.log(name);
//   }
// })();

var obj = {
  name: "tom",
};
// function fun(msg) {
//   console.log(this);
//   console.log(msg);
// }
// fun2 = fun.bind(obj, "bind传入的参数");
// fun2();
// //{ name: 'tom' }
// //bind传入的参数
// fun.bind(obj, "bind传入的参数")();
//{ name: 'tom' }
//bind传入的参数

// setTimeout(
//   function () {
//     console.log(this);
//   }.bind(obj),
//   1000
// );
function fun2() {
  fun1();
}
function fun1() {
  console.log(this);
}
fun2();
