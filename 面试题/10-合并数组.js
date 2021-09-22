let arr1 = ["A1", "A2", "B1", "B2", "C1", "C3", "D1"];
let arr2 = ["A", "B", "C"];
//实现合并后的数组为["A1", "A1","A" ,"B1", "B2","B", "C1", "C2","C", "D1"]

// arr2 = arr2.map((item) => item + "Z");
// arr1 = arr1
//   .concat(arr2)
//   .sort((a, b) => a.localeCompare(b))
//   .map((item) => item.replace("Z", ""));
// console.log(arr1);

let index = null;
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j].includes(arr2[i])) {
      index = j;
    }
  }
  if (index != null) {
    arr1.splice(index + 1, 0, arr2[i]);
    index = null;
  }
}
console.log(arr1);
