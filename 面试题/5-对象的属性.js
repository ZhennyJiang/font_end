var a = {},
  b = { key: "123" },
  c = { key: "456" };

a[b] = "b";
a[c] = "c";
console.log(a); //c
/*
  因为在对象的属性中，对象的属性会自动调用该属性原型上的toString()方法转换为字符串
  而任何 对象.toString=='[object Object]'
*/

var a = {},
  b = Symbol("123"),
  c = Symbol("123");
a[b] = "b";
a[c] = "c";
console.log(a); //b
/* Symbol创建的值是唯一的 */

var a = {},
  b = "123",
  c = 123;
a[b] = "b";
a[c] = "c";
console.log(a); //c
/* 因为在对象的属性中，对象的属性会自动调用该属性原型上的toString()方法转换为字符串
因此在这里 123.toString() == '123'*/
