// Array.prototype.sum = function () {
//   var sum = 0;
//   for (var i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// };
Array.prototype = {
  constructor: Array,
  sum: function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  },
};
var arr = new Array(1, 2, 3);
console.log(arr.sum());
