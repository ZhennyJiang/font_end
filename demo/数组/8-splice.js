var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr, arr.splice());
console.log(arr, arr.splice(6));
console.log(arr, arr.splice(2, 4));
console.log(arr, arr.splice(-2));

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1, arr1.splice(1, 1, "a", "b"));
