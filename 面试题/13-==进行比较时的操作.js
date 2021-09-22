/*
==进行比较的时候，如果左右两边数据类型不一样，则先转换为相同的数据类型再进行比较
1. {}=={} 对象进行比较，比较的是堆内存的地址
2. null==undefined 相等 null === undefined 不相等
3. NaN和谁都不相等，包括NaN==NaN
4. 其他数据类型和字符串进行比较，把其他类型toString()后和字符串进行比较
5. 剩余所有情况在进行比较的时候都是转换为数字（前提是数据类型不同）
*/
// console.log({} == {});
// console.log(null == undefined);
// console.log(NaN == NaN);
// console.log([1] == "1");
// console.log([1] == true);

// var a = {
//   n: 0,
//   toString() {
//     return ++this.n;
//   },
// };
var a = [1, 2, 3];
a.toString = a.shift; //使其toString方法改变，调用自己的私有方法
if (a == 1 && a == 2 && a == 3) {
  console.log(123);
}
