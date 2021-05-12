var o = {
  id: 1,
  name: "汽车",
  product: {
    id: 2,
    name: "冰箱",
  },
};

var obj = {};
Object.assign(obj, o); //将o浅拷贝给obj
console.log(obj);
