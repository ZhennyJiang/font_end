//

let arr = [10, 20, 30, "aa", 40],
  obj = {};

Array.prototype.each = function (...arg) {
  let arr = [];
  this.forEach(function (item, index) {
    item = arg[0](item, index);
  });
  if (arg[1]) {
    for (let i = 0; i < this.length; i++) {
      if (arg[0].call(arg[1], this[i], i) == false) {
        break;
      }
      arr.push(arg[0].call(arg[1], this[i], i));
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      if (arg[0](arg[1], this[i], i) == false) {
        break;
      }
      arr.push(arg[0].call(arg[1], this[i], i));
    }
  }
  return arr;
};
arr = arr.each(function (item) {
  if (isNaN(item)) {
    return false;
  }
  return item * 10;
}, obj);
console.log(arr); //[ 100, 200, 300 ]
