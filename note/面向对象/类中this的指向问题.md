### 使用类的注意事项：

1. 在 es6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象
2. 类里面的共有属性和方法一定要加 this 使用，不能直接写属性的名字

```javascript
class Start {
  constructor(uname, age) {
    this.uname = uname;
    this.age = age;
  }
  sing() {
    console.log(this.uname);
  }
}
```

如果我们要在创建对象的时候就直接调用 sing()，可以利用 constructor 在创建对象就直接调用的特性，在构造函数内直接调用 sing()方法。由于 sing()方法是类里面的，不能直接指向实例，因此需要加 this

```javascript
class Start {
  constructor(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing();
  }
  sing() {
    console.log(this.uname);
  }
}
var ldh = new Start("刘德华", 50); //刘德华
```

#### 类里面的 this 指向问题.

1. constructor 里面的 this 指向实例对象,方法里面的 this 指向这个方法的调用者

```html
<button>click me</button>
<script>
  class Start {
    constructor(uname, age) {
      this.uname = uname;
      this.age = age;
      this.btn = document.querySelector("button");
      this.btn.onclick = this.sing;
    }
    sing() {
      console.log(this.uname); //undefined； 因为这里的this指向button，而button中没有uname
    }
  }
  var ldh = new Start("刘德华", 50);
  ldh.sing(); //刘德华 ；因为谁调用这个方法this就指向谁，因此可以获取uname
</script>
```

2. 但如果我们需要在方法中点击 button 打印出该类的属性，可以设置一个全局变量：

```html
<button>click me</button>
<script>
  var that = null;
  class Start {
    constructor(uname, age) {
      that = this;
      this.uname = uname;
      this.age = age;
      this.btn = document.querySelector("button");
      this.btn.onclick = this.sing;
    }
    sing() {
      console.log(that.uname); //这时点击button就可以把uname打印出来了
      console.log(this.uname);
    }
  }
  var ldh = new Start("刘德华", 50);
  ldh.sing(); //刘德华 ；因为谁调用这个方法this就指向谁，因此可以获取uname
</script>
```
