/* 1.先找到问号，把问号后面的信息截取下来即可
*   A.首先我们需要验证是否存在#哈希值，存在我们从问号开始截取到#，不存在我们直接截取到字符串的末尾
*  2.以 & 进行拆分(数组)
   3.遍历数组中的每一项，把每一项在按照 = 进行拆分，把拆分后的第一项作为对象2、的属性名, 第二项作为属性值进行存储即可
*/

var str = "http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher"; //=>#后面的称为哈希(HASH)值，这个值可能有可能没有，我们需要处理，有的话我们截取的时候需要过滤掉
var indexA = str.indexOf("?"),
  indexB = str.indexOf("#");

if (indexB === -1) {
  //没有#号
  str = str.substr(indexA + 1);
} else {
  //有#号
  str = str.substring(indexA + 1, indexB);
}

console.log(str);
var arr = str.split("&");
var obj = {};
for (let i = 0; i < arr.length; i++) {
  var a = arr[i].split("=");
  obj[a[0]] = a[1];
}
console.log(obj);
