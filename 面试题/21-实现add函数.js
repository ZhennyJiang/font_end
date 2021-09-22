/*
  实现add函数满足以下功能

  add(1);  //1
  add(1)(2);//3
  add(1)(2)(3);//6
  add(1)(2,3);//6
  add(1,2)(3);//6
  add(1,2,3);//6


  函数柯理化：预先处理的思想（利用闭包的机制）
  */
//手写bind
// ~(function () {
//   function myBind(context = window, ...outerArg) {
//     let _this = this;
//     return function (...innerArg) {
//       _this.call(context, ...outerArg.concat(innerArg));
//     };
//   }
//   Function.prototype.myBind = myBind;
// })();
// //利用闭包的保存作用，柯理化预先保存思想
// function fn(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// console.log(fn(100)(200));

function currying(fn, length) {
  length = length || fn.length;
  return function (...arg) {
    if (arg.length >= length) {
      return fn(...arg);
    }
    return currying(fn.bind(null, ...arg), length - arg.length);
  };
}

// add = currying(add, 4);
let add = currying((...arg) => eval(arg.join("+")), 4);

// console.log(add(1));

console.log(add(1)(2)(3)(4));
// console.log(add(1, 2)(3, 4));
// add(1);
// add(1)(2)(3)(4);
