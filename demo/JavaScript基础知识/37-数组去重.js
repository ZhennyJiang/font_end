/*
1.遍历旧数组，将旧数组元素查询新数组，如果该元素在新数组里面没有出现过，就添加该元素至新数组
2. 利用indexOf()方法判断该元素在新数组中是否存在，返回-1说明不存在
*/

function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(unique([1, 2, 2, 3, 4, 4, 5, 6, 6, 8]));
