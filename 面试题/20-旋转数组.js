/*
  旋转数组
  给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数
  输入:[1,2,3,4,5,6] k=3
  输出: [5,6,7,1,2,3,4]
*/

function rotate(arr, k) {
  if (k < 0 || k === 0 || k === arr.length) return arr;
  if (k > arr.length) k = k % arr.length;
  // for (let i = 0; i < k; i++) {
  //   arr.unshift(arr.pop());
  // }

  return arr.splice(arr.length - k).concat(arr);
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
