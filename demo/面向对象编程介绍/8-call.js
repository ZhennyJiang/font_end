function fn(x, y) {
  console.log("hhhh");
  console.log(this);
}

var obj = {
  name: "andy",
};
fn.call(obj, 1, 2);
