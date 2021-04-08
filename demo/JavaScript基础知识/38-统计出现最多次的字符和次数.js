var str = "asdsoobozol";
var o = {};
for (var i = 0; i < str.length; i++) {
  var chars = str.charAt(i);
  if (o[chars]) {
    o[chars]++;
  } else {
    o[chars] = 1;
  }
}
console.log(o);

//遍历对象
var max = 0;
var key;
for (var k in o) {
  if (max < o[k]) {
    max = o[k];
    key = k;
  }
}
console.log(key + max);
