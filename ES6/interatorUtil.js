function iteratorUtil(arr) {
  let index = 0;
  return {
    next() {
      return index < arr.length
        ? { value: arr[index++], done: false }
        : { value: arr[index++], done: true };
    },
  };
}
var arr = [2, 5, 6, 6, 8, 9, 9];
var iteratorObj = iteratorUtil(arr);

var str = "asdf";
for (let i of str) {
  console.log(i);
}
