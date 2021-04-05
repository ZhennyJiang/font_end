function getTime() {
  var time = new Date();
  var h = time.getHours();
  h = h > 10 ? h : "0" + h;
  var m = time.getMinutes();
  m = m > 10 ? m : "0" + m;
  var s = time.getSeconds();
  s = s > 10 ? s : "0" + s;
  return h + ":" + m + ":" + s;
}
console.log(getTime());
