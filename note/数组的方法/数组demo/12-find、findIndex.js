var arr = [1, 2, 5, 9, 6, 10];
console.log(
  arr.find(function (n) {
    return n > 6;
  })
);
console.log(
  arr.findIndex(function (n) {
    return n > 6;
  })
);
