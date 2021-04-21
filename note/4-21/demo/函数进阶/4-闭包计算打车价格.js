var car = (function () {
  var total = 0;
  var start = 13;
  return {
    price: function (n) {
      if (n <= 3) {
        total = start;
      } else {
        total = start + (n - 3) * 5;
      }
      return total;
    },
    yd: function (flag) {
      return flag ? total + 10 : total;
    },
  };
})();

console.log(car.price(10));
