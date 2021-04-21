function Father(uname, age) {
  this.uname = uname;
  this.age = age;
  console.log(this);
}
Son.prototype = new Father();
Son.prototype.exam = function () {
  console.log("hhh");
};
function Son(uname, age, sex) {
  Father.call(this, uname, age);
  this.sex = sex;
}
var son = new Son("Tom", 18, "男");
console.log(Son);
console.log(Father);
