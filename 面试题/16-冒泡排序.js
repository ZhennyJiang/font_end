/*
  冒泡排序思想： 让数组中的当前项和后一项进行比较，把值较大的放在后面.
  最少要进行length-1轮比较，每轮比较都会把最大，次打，次三大..的值放到后面。

  第一轮最多比较length-1次
  第二轮最多比较length-2次
  第三轮最多比较length-3此
  .....
*/

let arr = [12, 8, 24, 16, 1];
function bubble(arr) {
  // let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      console.log(arr);
    }
  }
  return arr;
}
bubble(arr);
