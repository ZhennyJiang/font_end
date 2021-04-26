var array = Array.of(2, 5, 9, 10, "a");
console.log(array);

var str = "asdfgh";
var arr1 = Array.from(str);
console.log(arr1);

function test() {
  console.log(Array.from(arguments));
  console.log([...arguments]);
}
test(1, 2, 3, 4, 5);
