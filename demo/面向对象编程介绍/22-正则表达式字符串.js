var reg1 = /123/; //只要包含有连续的123
console.log(reg1.test("13245"));
console.log("-------------------------------------");

var reg2 = /^abc/; //要以abc开头
console.log(reg2.test("abc"));
console.log(reg2.test("abcv"));
console.log(reg2.test("aabc"));
console.log("-------------------------------------");

var reg3 = /abc$/; //以abc结尾
console.log(reg3.test("abc"));
console.log(reg3.test("abcv"));
console.log(reg3.test("aabc"));
console.log("-------------------------------------");

var reg4 = /^abc$/; //只能输入abc
console.log(reg4.test("abc"));
console.log(reg4.test("abcv"));
console.log(reg4.test("aabc"));
console.log("-------------------------------------");

var reg5 = /[abc]/; //输入包含a或b或c
console.log(reg5.test("aqwe"));
console.log(reg5.test("baby"));
console.log(reg5.test("ert"));

console.log("-------------------------------------");

var reg6 = /^[abc]$/; //只能输入a或b或c
console.log(reg6.test("a"));
console.log(reg6.test("b"));
console.log(reg6.test("da"));
console.log("-------------------------------------");

var reg7 = /^[a-z]$/; //只能输入小写的英文字母a-z
console.log(reg7.test("a"));
console.log(reg7.test("z"));
console.log(reg7.test("A"));
console.log(reg7.test("0"));
console.log("-------------------------------------");

var reg8 = /^[a-zA-z]$/; //只能输入小写的英文字母a-z和或大写的字母A-Z
console.log(reg8.test("a"));
console.log(reg8.test("z"));
console.log(reg8.test("A"));
console.log(reg8.test(0));
console.log("-------------------------------------");

var reg9 = /^[a-zA-z0-9]$/; //只能输入小写的英文字母a-z和或大写的字母A-Z或数字0-9
console.log(reg9.test("a"));
console.log(reg9.test("z"));
console.log(reg9.test("A"));
console.log(reg9.test(0));
console.log(reg9.test("0"));
console.log(reg8.test(0));
console.log("-------------------------------------");
var reg10 = /^[^a-zA-z0-9]$/; //中括号里面的^是取反的意思，不能包含小写的英文字母a-z和或大写的字母A-Z或数字0-9
console.log(reg10.test("a"));
console.log(reg10.test("z"));
console.log(reg10.test("A"));
console.log(reg10.test(0));
console.log(reg10.test("20"));
console.log(reg10.test("@"));
console.log("-------------------------------------");
