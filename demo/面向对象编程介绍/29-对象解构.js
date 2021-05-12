// let person = { name: "Jenny", age: "18", sex: "girl" };
// let { name, age, sex } = person;
// console.log(name, age, sex);

let person = { name: "Jenny", age: "18", sex: "girl" };
let { name: myName, age: myAge } = person; // myName myAge 属于别名
console.log(myName); // 'Jenny '
console.log(myAge); //18
