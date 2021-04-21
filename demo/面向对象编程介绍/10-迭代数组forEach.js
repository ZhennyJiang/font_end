var arr = [1, 2, 3];
var sum = 0;
arr.forEach(function (value, index, array) {
  console.log("数组值为" + array + "索引为" + index + "的值是：" + value);
  sum += value;
});
console.log("该数组的值的和是：" + sum);
