var arr = [1, 2, 3, 5, 7, 9];
var sum = 0,
  average = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
average = sum / arr.length;
console.log(sum, average);
