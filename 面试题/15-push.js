let obj = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push,
};
obj.push(1);
obj.push(2);
console.log(obj);

//首先我们需要知道Array.prototype.push实现的时候进行了什么
/*
  Array.prototype.push = function (val) {
    this[this.length] = val;
    return this.length;
  };
*/
/*
  如此可知在数组push的时候是将 this[this.length] = 新的值，并且这个数组的长度+1；
  所以在这题中，
  let obj = {
  2: 1,
  3: 2,
  length: 4,
  push: Array.prototype.push,
};
*/
