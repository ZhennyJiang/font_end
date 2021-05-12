## const
作用:声明常量，常量就是值(内存地址）不能变化的量。

+ 具有块级作用域
 ```javascript
if (true) {
const a = 10;
}
console.log (a;)// a is not defined
```
+ 声明常量时必须赋值

```javascript
const PI; // Missing initializer in const declaration
```

+ 常量赋值后，值不能修改。
```javascript
const PI = 3.14;
PI = 100; // Assignment to constant variable.

const ary = [100,200];
ary[0] = 'a';  //在这里是更改ary下标的值，并没有更改ary的存储地址
ary[1]='b';

console.log(ary); // ['a ', 'b' ];
ary = [ 'a', 'b']; // Assignment to constant variable.
```

