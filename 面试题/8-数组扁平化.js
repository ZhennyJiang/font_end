//数组扁平化并除去其中重复部分数据，最终得到一个升序且不重复的数组
// 1.
let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, [13, 14, [19, 20]]], 10];
// arr = [...new Set(arr.flat(Infinity).sort((a, b) => a - b))];
//2.
// arr = [
//   ...new Set(
//     arr
//       .toString()
//       .split(",")
//       .map((item) => Number(item))
//       .sort((a, b) => a - b)
//   ),
// ];
// console.log(arr);

// 3.

// arr = [
//   ...new Set(
//     JSON.stringify(arr)
//       .replace(/(\[|\])/g, "")
//       .split(",")
//       .map((item) => Number(item))
//       .sort((a, b) => a - b)
//   ),
// ];
// console.log(arr);

// 4.

// while (arr.some((item) => Array.isArray(item))) {
//   arr = [].concat(...arr);
// }
// console.log(arr);

// 5.

~(function () {
  function myFlat() {
    let result = [],
      fn = (arr) => {
        for (let index = 0; index < arr.length; index++) {
          let item = arr[index];
          if (Array.isArray(item)) {
            fn(item);
            continue;
          } else {
            result.push(item);
          }
        }
      };
    fn(this);
    return result;
  }
  Array.prototype.myFlat = myFlat;
})();
arr = arr.myFlat();
console.log(arr);
