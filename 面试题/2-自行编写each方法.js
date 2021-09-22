//

let arr = [10, 20, 30, "aa", 40],
  obj = {};

Array.prototype.each = function (...arg) {
  let arr = [];
  if (arg[1]) {
    for (let i = 0; i < this.length; i++) {
      if (arg[0].call(arg[1], this[i]) == false) {
        break;
      }
      arr.push(arg[0].call(arg[1], this[i]));
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      if (arg[0](this[i]) == false) {
        break;
      }
      arr.push(arg[0](this[i]));
    }
  }
  return arr;
};
arr = arr.each(function (item) {
  if (isNaN(item)) {
    return false;
  }
  return item * 10;
});
console.log(arr); //[ 100, 200, 300 ]
