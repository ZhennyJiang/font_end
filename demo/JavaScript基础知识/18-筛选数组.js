var arr = [7, 80, 0, 99, 65, 47, 26, 0, 12];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != 0) newArr[newArr.length] = arr[i];
}
console.log(newArr);
