function getSum(num1, num2) {
  var sum = 0;
  for (var i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(1, 3));
console.log(getSum(2, 3));
