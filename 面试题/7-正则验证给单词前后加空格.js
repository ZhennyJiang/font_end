let str = "no哈哈哈h，ho，好借好还",
  reg = /\b[a-z]+\b/gi;
str = str.replace(reg, (value) => {
  return " " + value + " ";
});
console.log(str);
