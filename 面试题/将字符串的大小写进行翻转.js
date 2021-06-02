var str = "哈哈哈hhhLLL";
str = str.replace(/[a-zA-Z]/g, (content) => {
  return content.toUpperCase() === content //如果转换成大写之后等于原先的字符即原先的字符就是大写
    ? content.toLowerCase()
    : content.toUpperCase();
});
console.log(str);
