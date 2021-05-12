//使用数组的方法筛选出数组对象中每一个对象数组的最大值

var array = [[9, 8, 55, 23], [98, 65, 4, 7], [2, 4, 3], [5]];

// 1. 没有使用数组的方法
function maxArray1(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(Math.max(...arr[i]));
  }
  return res;
}

console.log(maxArray1(array));

// 2. 使用数组的方法

function maxArray2(array) {
  return array.map(function (arr) {
    return Math.max(...arr);
  });
}

console.log(maxArray2(array));
