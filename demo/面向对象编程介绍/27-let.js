var arr1 = [];
for (var i = 0; i < 2; i++) {
  arr1[i] = function () {
    console.log(i);
  };
}

arr1[0]();
arr1[1]();

console.log("---------------------------");

var arr2 = [];
for (let j = 0; j < 2; j++) {
  arr2[j] = function () {
    console.log(j);
  };
}
arr2[0]();
arr2[1]();
