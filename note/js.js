// function queryCode() {
//   //1.准备验证码获取的范围
//   var str = "";
//   var codeArea =
//     "qwertyuipoasdfghjklzxcvbnm" + "QWERTYUIPOASDFGHJKLZXCVBNM" + "1234567890"; //62
//   for (let i = 0; i < 4; i++) {
//     var char = codeArea.charAt(Math.round(Math.random() * 61));
//     if (str.indexOf(char) !== -1) {
//       i--;
//       continue;
//     }
//     str += char;
//   }
//   return str;
// }
// console.log(queryCode());

f = function () {
  return true;
};
g = function () {
  return false;
};
console.log("11");

~(function () {
  if (g() && [] == ![]) {
    f = function () {
      return false;
    };
    function g() {
      return true;
    }
  }
})();

console.log(f()); //xxx
console.log(g()); //true
console.log([] == ![]);
