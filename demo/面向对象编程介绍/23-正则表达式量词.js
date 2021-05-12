var reg1 = /^a*$/; //重复0或更多次
console.log(reg1.test(""));
console.log(reg1.test("a"));
console.log(reg1.test("aaa"));
console.log("-------------------------------------");

var reg2 = /^a+$/; //重复1或更多次
console.log(reg2.test(""));
console.log(reg2.test("a"));
console.log(reg2.test("aaa"));
console.log("-------------------------------------");

var reg3 = /^a?$/; //重复0或1次
console.log(reg3.test(""));
console.log(reg3.test("a"));
console.log(reg3.test("aaa"));
console.log("-------------------------------------");

var reg4 = /^a{3}$/; //重复3次
console.log(reg4.test(""));
console.log(reg4.test("a"));
console.log(reg4.test("aaa"));
console.log(reg4.test("aaaa"));
console.log("-------------------------------------");

var reg5 = /^a{3,}$/; //重复3次或以上
console.log(reg5.test(""));
console.log(reg5.test("a"));
console.log(reg5.test("aaa"));
console.log(reg5.test("aaaa"));
console.log("-------------------------------------");

var reg6 = /^a{3,6}$/; //重复大于等于3次并且小于等于6次
console.log(reg6.test(""));
console.log(reg6.test("a"));
console.log(reg6.test("aaa"));
console.log(reg6.test("aaaa"));
console.log(reg6.test("aaaaaaa"));
console.log("-------------------------------------");

var reg = /[a-zA-Z0-9_]{3,6}/;
console.log(reg.test("aaa_-"));
