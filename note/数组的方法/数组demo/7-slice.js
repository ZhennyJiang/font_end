var arr = [1, 2, 3, 4, 5];
console.log(arr, arr.slice(2)); //从索引为2的数组开始截取一直到最后一个
console.log(arr, arr.slice(2, 4)); //从索引为2的数组开始截取一直到索引为3的
console.log(arr, arr.slice(-3, -2)); //截取倒数三个
var str = "1234";
var array = Array.prototype.slice.call(str);
console.log(array);
