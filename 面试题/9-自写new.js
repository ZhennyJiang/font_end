/*
  new一个实例的时候发生了什么？

  + 像普通函数执行一样，形成一个私有的作用域
    -形参赋值
    -变量提升
  + 默认创建一个对象，让函数中的this执行这个对象，这个对象就是当前类的一个实例
  + 代码执行
  + 默认把创建的对象返回

*/
function Dog(name) {
  this.name = name;
}
function _new(Fn, ...arg) {
  // 1.
  //创建一个空对象，让他的原型链指向Fn.prototype(作为Fn的一个实例)
  // let obj = {};
  // obj.__proto__ = Fn.prototype;

  // 2.
  let obj = Object.create(Fn.prototype);
  Fn.call(obj, ...arg);
  return obj;
}
Dog.prototype.saHi = function () {
  console.log("hi");
};
let sanmao = _new(Dog, "三毛");
sanmao.saHi();
