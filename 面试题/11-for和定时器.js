//由于使用var来定义的变量没有块级作用域。for循环中创建的定时器还没启动，for循环就已经完成，
//此时打印i则是调用全局的i，这时i=10；

/*for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}*/

// 闭包解决
// for (var i = 0; i < 10; i++) {
//   ~(function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// for (var i = 0; i < 10; i++) {
//   // ~(function (i) {
//   //   setTimeout(() => {
//   //     console.log(i);
//   //   }, 1000);
//   // })(i);
//   setTimeout(
//     ((i) => {
//       return () => {
//         console.log(i);
//       };
//     })(i),
//     1000
//   );
// }

//使用bind,使用bind的预先处理机制，在循环的时候就把每次执行函数需要输出的结果，预先传递给函数即可
var fn = function (i) {
  console.log(i);
};
for (var i = 0; i < 10; i++) {
  setTimeout(fn.bind(null, i), 1000);
}
