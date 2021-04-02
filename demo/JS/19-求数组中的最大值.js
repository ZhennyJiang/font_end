var arr = [-1, 82, 65, 32, 94, 83];
var max = arr[0];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (max <= arr[i]) max = arr[i];
  if (min >= arr[i]) min = arr[i];
}
console.log("该数组中的最大值是" + max);
console.log("该数组中的最小值是" + min);
