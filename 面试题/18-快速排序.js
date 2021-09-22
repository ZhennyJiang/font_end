/*
arr=[24,8,9,6,15,2];
快速排序则是取中间的值，然后在arr中将该中间值去掉，使剩下的数值与该中间值进行比较

假设中间值是9
比9小的放到左数组，比9大的放到右数组
左数组：[8,6,2]
右数组：[24,15]
然后再对该左右数组取中间值，再分左右数组以此类推，直至剩下最后一个数，再将左右数组与中间数拼接

*/

function quickSort(arr) {
  //4.结束递归,当arr中小于等于一项
  if (arr.length <= 1) {
    return arr;
  }

  //1.找到数组的中间项，在原有的数组中将它移除
  let middleIndex = Math.floor(arr.length / 2);
  let middleValue = arr.splice(middleIndex, 1)[0];

  //2. 准备左右两个数组，循环剩下数组中的每一项
  let left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] > middleValue ? right.push(arr[i]) : left.push(arr[i]);
  }
  //3. 递归让左右两边的数组持续这样处理，知道左右两边都排好序位置。（最后让左+中+右）
  return quickSort(left).concat(middleValue, quickSort(right));
}
console.log(quickSort([24, 8, 9, 6, 15, 2]));
