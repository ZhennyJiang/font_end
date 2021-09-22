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

// let arr = [10, 20, 50, 60, 101, 15, 200];
// let finalNum = arr
//   .filter(function (item) {
//     return item < 100;
//   })
//   .map(function (item) {
//     return item * 2;
//   })
//   .reduce(function (preValue, currentValue) {
//     return preValue + currentValue;
//   }, 0);
// console.log(finalNum); //[ 20, 40, 100, 120, 30 ]

// let fn = (arg) => {
//   console.log(...arg);
// };
// fn([1, 2, 3]);

// let fn2 = (...arg) => {
//   console.log(arg);
// };
// fn2(1, 2, 3);

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr.push(i, j);
//         return arr;
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 26));
// var isPalindrome = function (x) {
//   let x1 = (x2 = x + "");
//   x1 = x1.split("");
//   x1.reverse();
//   x1 = x1.join("");
//   return x1 === x2;
// };
// console.log(parseInt(1.2));
// var a = {},
//   b = "123",
//   c = 123;
// a[b] = "b";
// a[c] = "c";
// console.log(a);

// var longestCommonPrefix = function (strs) {
//   let s = "";
//   let flag = true;
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[0].charAt(i) !== strs[j].charAt(i)) {
//         flag = false;
//       }
//     }
//     if (flag) {
//       s += strs[0].charAt(i);
//     }
//   }
//   return s;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// var removeElement = function (nums, val) {
//   if (nums.indexOf(val) == -1) {
//     return nums.length;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };
// var strStr = function (haystack, needle) {
//   if (needle == "") {
//     return 0;
//   }
//   let reg = new RegExp(needle);
//   haystack = reg.exec(haystack);
//   return haystack == null ? -1 : haystack.index;
// };

// console.log(strStr("", ""));
// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] == 9) {
//       digits[i] = 0;
//       if (i == 0) {
//         digits.unshift(1);
//         return digits;
//       }
//     } else {
//       digits[i]++;
//       return digits;
//     }
//   }
//   return digits;
// };
// console.log(plusOne([8, 8, 9]));

// var addBinary = function (a, b) {
//   a = a.split("");
//   b = b.split("");
//   let a1 = a.length > b.length ? a : b,
//     b1 = a1 === a ? b : a,
//     flag = false;
//   let length = a1.length - b1.length;
//   for (let k = 0; k < length; k++) {
//     b1.unshift("0");
//   }
//   for (let i = b1.length - 1; i >= 0; i--) {
//     let x = Number(b1[i]) + Number(a1[i]) + flag;
//     if (x >= 2) {
//       flag = true;
//       x == 2 ? a1.splice(i, 1, "0") : a1.splice(i, 1, "1");
//     } else {
//       flag = false;
//       x == 1 ? a1.splice(i, 1, "1") : a1.splice(i, 1, "0");
//     }

//     if (!i && flag) {
//       a1.unshift("1");
//     }
//   }
//   a1 = a1.join("");
//   return a1;
// };
// console.log(addBinary("1", "111"));

// var mySqrt = function (x) {
//   return Math.floor(Math.sqrt(x));
// };
// mySqrt(8);
function s(n, m) {
  if (m == 1) return n;
  let _m = m,
    s1 = n,
    s2 = m;
  for (let i = 0; i < _m && m > 1; i++) {
    s1 = s1 * --n;
    s2 = s2 * --m;
  }
  return s1 / s2;
}
var climbStairs = function (n) {
  let l = Math.floor(n / 2),
    sum = 1;
  for (let i = 1; i <= l; i++) {
    sum += s(n - i, i);
  }
  return sum;
};
console.log(climbStairs(5));
