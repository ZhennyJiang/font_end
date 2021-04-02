var arr = ["one", "two", "three", "four", "five"];
var newArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
  newArr[newArr.length] = arr[i];
}
console.log(newArr);
