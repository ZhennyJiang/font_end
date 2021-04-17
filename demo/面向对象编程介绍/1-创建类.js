class Beautiful {
  constructor(uName, age) {
    this.uName = uName;
    this.age = age;
  }
  sayHi() {
    console.log("Hi.I'm " + this.uName);
  }
}
var jenny = new Beautiful("Jenny", 18);
console.log(jenny);
for (k in jenny) {
  console.log(jenny[k]);
}
jenny.sayHi();
