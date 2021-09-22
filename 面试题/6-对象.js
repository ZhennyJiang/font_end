function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
//在原型上设置实例共有的属性方法，只有实例才能使用
Foo.prototype.a = function () {
  console.log(3);
};
//把Foo当做普通对象设置私有的属性方法
Foo.a = function () {
  console.log(4);
};
Foo.a(); //4
let obj = new Foo();
obj.a(); //2  //自身有，可以不往构造函数的原型上找
Foo.a(); //1   有了实例才能用实例里面的方法
