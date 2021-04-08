function getMax() {
  var max = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    max = max > arguments[i] ? max : arguments[i];
  }
  return max;
}
console.log(getMax(3, 5, 4, 50));
