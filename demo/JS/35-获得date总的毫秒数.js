function addZero(number) {
  if (number > 10) return number;
  else return "0" + number;
}
function countDown(time) {
  var nowTime = +new Date();
  var inputTime = +new Date(time);
  var times = (inputTime - nowTime) / 1000; //1000

  var d = addZero(parseInt(times / 60 / 60 / 24));
  var h = addZero(parseInt((times / 60 / 60) % 24));
  var m = addZero(parseInt((times / 60) % 60));
  var s = addZero(parseInt(times % 60));

  return d + "天" + h + "时" + m + "分" + s + "秒";
}
console.log(countDown("2021-7-22 14:00:00"));
