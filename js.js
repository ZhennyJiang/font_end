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

// var obj = {
//   name: "tom",
// };
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
// function fun2() {
//   fun1();
// }
// function fun1() {
//   console.log(this);
// }
// fun2();
// var findRepeatNumber = function (nums) {
//   var map = new Map();
//   for (let i of nums) {
//     if (map.has(i)) {
//       return i;
//     } else {
//       map.set(i, 1);
//     }
//   }
// };
// console.log(findRepeatNumber([2, 0, 2]));
// var str = "asd";
// var str = str.split("");
// console.log(str.shift());

// var str2 = null;
// str2 = str.join("");

// var str = "asd";
// console.log(str.slice(2));

// var str = "哈哈哈hhhLLL";
// str = str.replace(/[a-zA-Z]/g, (content) => {
//   return content.toUpperCase() === content //如果转换成大写之后等于原先的字符即原先的字符就是大写
//     ? content.toLowerCase()
//     : content.toUpperCase();
// });
// console.log(str);

// var str = "okkl";
// console.log(str.indexOf("s"));
// console.log(str.includes("l"));

// console.log(str.split(0, 2));

// var obj = {};
// var obj1 = {
//   name: "lk",
// };
// obj[obj1] = "ss";
// console.log(obj);
// var arr = [22, 33];

// var obj = {};
// obj[100] = 100;
// console.log(obj["100"]);

// var a = Symbol("1");
// var b = Symbol("1");
// obj[a] = "a";
// obj[b] = "b";
// console.log(obj[a]);

// var obj1 = { name: "tom" };
// obj[obj1] = "jenny";
// console.log(obj);

let arr = [10, 20, 50, 60, 101, 15, 200];
let finalNum = arr
  .filter(function (item) {
    return item < 100;
  })
  .map(function (item) {
    return item * 2;
  })
  .reduce(function (preValue, currentValue) {
    return preValue + currentValue;
  }, 0);
console.log(finalNum); //[ 20, 40, 100, 120, 30 ]
