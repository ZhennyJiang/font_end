var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(arr);

var arr = ["a", "b", "c", "d"];
var iterator1 = arr.keys();
var iterator2 = arr.values();
var iterator3 = arr.entries();
for (let key of iterator1) {
  console.log(key);
}

for (let key of iterator2) {
  console.log(key);
}
for (let key of iterator3) {
  console.log(key);
}
