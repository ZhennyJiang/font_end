const sum1 = (first, ...arg) => {
  console.log(first); //1
  console.log(arg); //[2,3]
};
sum1(1, 2, 3);

const sum2 = (...args) => {
  let sum = 0;
  args.forEach((value) => (sum += value));
  return sum;
};
console.log(sum2(1, 2, 3, 4, 5));

let students = ["wangwu", "zhangsan", "lisi"];
let [s1, ...s2] = students;
console.log(s1); //'wangwu '
console.log(s2); // ['zhangsan' ,'lisi']
