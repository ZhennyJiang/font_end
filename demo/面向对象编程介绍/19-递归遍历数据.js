var data = [
  {
    id: 1,
    name: "汽车",
    product: [
      { id: 11, name: "大众" },
      { id: 12, name: "奔驰" },
    ],
  },
  {
    id: 2,
    name: "冰箱",
  },
];
function getID(arr, id) {
  var o = {};
  arr.forEach(function (value) {
    if (id === value.id) {
      o = value;
    } else if (value.product && value.product.length > 0) {
      o = getID(value.product, id);
    }
  });
  return o;
}
console.log(getID(data, 12));
