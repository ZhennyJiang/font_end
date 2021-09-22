// function judge(s) {
//   switch (s) {
//     case "I":
//       return 1;
//       break;
//     case "V":
//       return 5;
//       break;
//     case "X":
//       return 10;
//       break;
//     case "L":
//       return 50;
//       break;
//     case "C":
//       return 100;
//       break;
//     case "D":
//       return 500;
//       break;
//     case "M":
//       return 1000;
//       break;

//     default:
//       break;
//   }
// }
// var romanToInt = function (s) {
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     let s1 = judge(s.charAt(i)),
//       s2 = judge(s.charAt(i + 1));
//     if (s1 < s2) {
//       sum += s2 - s1;
//       i++;
//     } else {
//       sum += s1;
//     }
//   }
//   return sum;
// };

// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m, nums1.length - m, ...nums2);
//   nums1 = nums1.sort((a, b) => a - b);
//   return nums1;
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 2));
