var arr = ["one", "two", "three", "four", "five"];
var str = "";
var stp = "、";
for (var i = 0; i < arr.length; i++) {
  str += arr[i] + stp;
}
console.log(str);

console.log(arr.reverse());
