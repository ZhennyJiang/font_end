## let

ES6中新增的用于声明变量的关键字。

+ let声明的变量只在所处于的块级有效
```javascript
if(true) {
let a = 10;
)
console. log (a) // a is not defined
```
注意:使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性。

+ let声明的变量不存在变量提升
```javascript
console.log(a);//a is not defined
let a = 10;
```
+ 暂时性死区

假设在全局作用域和局部作用域都声明了同名的变量，又在该局部作用域中，该局部变量声明之前使用这个变量，这个变量不会向全局作用域中查找而是返回undefined

```javascript
var a = 6;
var b = 3;
var num = 10;
if(a>b){
    console.log(num);//num is no defined
    var num = 230;
}
```
如果局部作用域中没有同名的变量则会向上查找


## 经典面试题
```javascript
var arr1 = [];
for (var i = 0; i < 2; i++) {
  arr1[i] = function () {
    console.log(i);
  };
}

arr1[0]();   // 2
arr1[1]();   // 2

var arr2 = [];
for (let j = 0; j < 2; j++) {
  arr2[j] = function () {
    console.log(j);
  };
}
arr2[0]();    //0
arr2[1]();   //1
```