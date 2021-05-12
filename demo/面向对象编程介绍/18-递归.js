function fn(num) {
  if ((num = 1)) {
    return num;
  } else {
    num++;
    fn(num);
  }
  return num;
}
console.log(fn(0));
//递归阶乘
function Fbc(n) {
  if (n == 1) {
    return 1;
  }
  return n * Fbc(n - 1);
}
console.log(Fbc(3));

//利用递归函数求斐波那契数列(兔子序列)1、1、2、3、5、8、13、21
//用户输入一个数字n就可以求出这个数字对应的兔子序列值
//我们只需要知道用户输入的n的前面两项(n-1 n-2)就可以计算出n对应的序列值

function fb(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fb(n - 1) + fb(n - 2);
}
console.log(fb(4));
