var arr = [1, , 1, 2, 5]; //稀疏数组
console.log(arr[1]);
console.log(arr);

arr.forEach(function (value) {
  console.log(value);
}); //1,1,2,5

delete arr[2];
console.log(arr);
