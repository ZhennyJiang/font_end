var arr = [2, 1, 3, 8, 10, 11, 9, 65];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 10) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
