var arr = null;
console.log(typeof arr);
var arr1 = function () {
  console.log(123);
};
console.log(typeof arr1);

var obj1 = { name: "jenny", age: 18 };
var obj2 = obj1;
obj2.age = 19;
console.log(obj1); //{ name: 'jenny', age: 19 }

var obj3 = { name: "tom", age: 20 };
var a = {};

a[obj1] = 4;
a[obj2] = 5;

console.log(a[obj1]);
