var o = {
  id: 1,
  name: "汽车",
  product: {
    id: 2,
    name: "冰箱",
  },
};

var obj = {};
function deepCopy(newObj, targetObj) {
  for (var k in targetObj) {
    if (targetObj[k] instanceof Array) {
      newObj[k] = [];
      deepCopy(newObj[k], targetObj[k]);
    } else if (targetObj[k] instanceof Object) {
      newObj[k] = {};
      deepCopy(newObj[k], targetObj[k]);
    } else {
      newObj[k] = targetObj[k];
    }
  }
}
deepCopy(obj, o);
console.log(obj);
