var name = "小明";
var flag = true;
function sum(n1, n2) {
  return n1 + n2;
}

if (flag) {
  console.log(sum(2, 1));
}
console.log("我是小明");

//1.导出方式一
export { flag, sum };
//2. 导出方式二
export var num = 3;
//3. 导出函数/类

export function xx(num1, num2) {
  return num1 * num2;
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  run() {
    console.log("running");
  }
}

/*4. export default 某些情况下，我们并不希望导入的变量有其固定的名字，而是由我们自由命名
export default只能有一个
var address = "hhh";*/

//export default address;
export default function (num1) {
  return num1 * 10;
}
