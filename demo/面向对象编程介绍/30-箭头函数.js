const fn = () => {
  console.log(123);
};
fn();

const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 3));

const fn1 = (v) => v;
console.log(fn1(5));

const obj = { name: "张三" };
function fn2() {
  console.log(this);

  return () => {
    console.log(this);
  };
}
const resFn = fn2.call(obj);
resFn();

var obj2 = {
  age: 20,
  say: () => {
    console.log(this.age);
  },
};
obj2.say();
