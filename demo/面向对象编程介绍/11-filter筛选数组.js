var array = [3, 9, 5];
var arr = array.filter(function (value, index, array) {
  return value > 3;
});
console.log(arr);
