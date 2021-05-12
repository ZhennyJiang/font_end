let result = {
  name: "zhangsan ",
  age: 20,
  sex: "男",
};
let html = `<div>
    <span>$ {result.name} </span>
    <span>$ {result.age}</span>
    <span>$ {result.sex}</span>
</div> `;
console.log(html);

const sayHello = () => "哈哈哈哈哈";
console.log(`${sayHello()}拜拜`);

let str = "Hello world!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

console.log("x".repeat(3)); //"xxx"
console.log("hello".repeat(2)); // "hellohello"
