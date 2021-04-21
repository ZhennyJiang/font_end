### 函数的定义方式：

1. 函数声明方式 function 关键字（命名函数）
   ```javascript
   function fn() {}
   ```
2. 函数表达式（匿名函数）
   ```javascript
   var fn = function () {};
   ```
3. new Function()
   ```javascript
   var fn = new Function(['参数1','参数2'..,]'函数体')
   ```
   - Function 里面都是字符串形式，执行效率也比较低

- 所有的函数都是 Function 的实例（对象）

- 函数也是对象，万物皆对象

### 函数的调用方式

1. 普通函数
   ```javascript
   function fn() {
     console.log(this);
   }
   fn(); //window
   fn.call(); //window
   ```
   函数内部的 this 指向 windows
2. 对象的方法
   ```javascript
   var obj = {
     sayHi: function () {
       console.log(this);
     },
   };
   obj.saiHy(); //window
   ```
   函数内部的 this 指向 （实例对象）
3. 构造函数

   ```javascript
   function Fn(){
       saiHi:function(){
           console.log(this);
       }
   }
   Fn.prototype.sing = function(){
      console.log(this);
   }
   var obj = new Fn();
   obj.saiHi();//window
   obj.sing();//window
   ```

   这两个 this 指向 obj（实例对象）

4. 绑定事件函数
   ```javascript
   btn.onclick = function () {
     console.log(this);
   };
   //点击按钮调用
   ```
   函数内部的 this 指向 btn
5. 定时器函数
   ```javascript
   setInterval(function () {
     console.log(this);
   }, 1000);
   //每隔1000毫秒调用一次
   ```
   函数内部的 this 指向 windows
6. 立即执行函数
   ```javascript
   (function () {
     console.log(this);
   })(); //当编译器执行到此行代码时该函数自动执行
   ```
   函数内部的 this 指向 windows

### 改变函数的 this 指向

<strong>通常来说，谁调用这个函数，函数内部的 this 就指向谁</strong>，但我们也可以改变函数的 this 指向：

1. call(this 指向,参数 1,参数 2...)

```javascript
var obj = {
  name: "andy",
};
function fn() {
  console.log(this);
}
fn.call(); //window
fn.call(obj); //obj
```

call()实现继承

```javascript
function Father (uname,age,sex)(
   this.uname = uname;
   this.age = age;
   this.sex = sex;
)
function Son(uname,age,sex){
   Father.call(this,uname,age,sex);
}

```

2. apply(this 指向[,参数数组])

```javascript
function fn(a, b, c) {
  console.log(a, b, c);
}
var obj = function () {
  name: "as";
};
fn.apply(obj, [1, 2, 3]); //1,2,3
```

apply 的参数必须是数组，传递过去则以单个变量接收单个元素

可以利用 Math.max 求最大值

```javascript
var arr = [2, 6, 8, 99, 55];
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log(max + " " + min); //99 2
```

3. bind(this 指向[,参数 1,参数 2...])

- bind()捆绑。不会调用原来的函数，可以改变原来函数内部的 this 指向。
- 返回的是原函数改变 this 之后产生的新函数。

```javascript
var obj = { name: "andy" };
function fn(a, b) {
  console.log(this);

  console.log(a + b);
}
var fun = fn.bind(obj, 1, 2);
fun(); //{ name: "andy" }  3
```

如果有的函数我们不需要立即调用，但是又想改变这个函数内部的 this 指向此时用 bind()

```javascript
    <button>click</button>
    <button>click</button>
    <button>click</button>
    <script>
      var obj = { name: "andy" };
      function fn(a, b) {
        console.log(this);

        console.log(a + b);
      }
      var fun = fn.bind(obj, 1, 2);
      fun();

      var btns = document.querySelectorAll("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
          this.disabled = true;
          setTimeout(
            function () {
              this.disabled = false;
            }.bind(this),
            3000
          );
        };
      }
    </script>
```

### call apply bind 总结

相同点:
都可以改变函数内部的 this 指向.

区别点:

1. call 和 apply 会调用函数,并且改变函数内部 this 指向.
2. call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式 apply 必须数组形式[arg]
3. bind 不会调用函数,可以改变函数内部 this 指向.

主要应用场景：

1.  call 经常做继承.
2.  apply 经常跟数组有关系.比如借助于数学对象实现数组最大值最小值
3.  bind 不调用函数,但是还想改变 this 指向.比如改变定时器内部的 this 指向.
