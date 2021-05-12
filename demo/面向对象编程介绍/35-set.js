const s1 = new Set([1, 2, 6]);
console.log(s1.size);

let arr = ["a", "a", "b", "b"];
const s2 = new Set(arr);
console.log(s2);
arr = [...s2];
console.log(arr);

const s = new Set();
console.log(s.add(1).add(2).add(3)); //向 set 结构中添加值
console.log(s.delete(3)); //删除 set 结构中的 2 值,返回是否删除成功的布尔值
s.has(1); //表示 set 结构中是否有 1 这个值返回布尔值
console.log(s);

s.forEach((value) => console.log(value));
