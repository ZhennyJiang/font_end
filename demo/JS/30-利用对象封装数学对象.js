var myMath = {
  PI: 3.1415926,
  max: function () {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      max = max > arguments[i] ? max : arguments[i];
    }
    return max;
  },
  min: function () {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      min = min < arguments[i] ? min : arguments[i];
    }
    return min;
  },
};

console.log(myMath.min(2, 7, 0));
