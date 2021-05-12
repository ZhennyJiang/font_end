//Array.from()
let arrayLike = { 0: 10, 1: 3, 2: 6, length: 3 };
let arr1 = Array.from(arrayLike);
console.log(arr1);
console.log(arr1 instanceof Array);
let arr2 = Array.from(arrayLike, (item) => item * 2);
console.log(arr2);
console.log("----------------------------");

//Array.find()
let ary = [
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
];
let target = ary.find((item, index) => item.id == 2);
console.log(target);
console.log("----------------------------");

//Array.findIndex()
let arr3 = [1, 5, 10, 15];
let index = arr3.findIndex((value) => value > 9);
console.log(index);
console.log("----------------------------");

//Array.includes()

let arr4 = [1, 2, 3, 4];
console.log(arr4.includes(4));
console.log(arr4.includes(5));
