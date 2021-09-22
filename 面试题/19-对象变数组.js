/*
  某公司1-12月份的销售额如下
  let obj = {
    1: 222,
    2: 123,
    5: 888,
  };

  将其变成如下结构
  [222,123,null,null,888,null,null,null,null,null,null]

*/

let obj = {
  1: 222,
  2: 123,
  5: 888,
};

// 1.
// let arr = new Array(12).fill(null).map((item, index) => {
//   return obj[index + 1] || null;
// });

// 2.
obj.length = 13;
let arr = Array.from(obj).slice(1);
console.log(arr);
arr = arr.map((item) => (item == undefined ? null : item));
console.log(arr);
