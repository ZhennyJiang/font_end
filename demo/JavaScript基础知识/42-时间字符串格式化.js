//有一个时间字符串是“ 2021-04-04 16:47:08 ” 变为“ 04月04日 16时47分 ”

// 1.
var str = "2021-4-4 16:47:8";
var arr = str.split(" ");
var aL = arr[0].split("-"),
  aR = arr[1].split(":");

var mouth = aL[1] > 10 ? aL[1] : "0" + aL[1],
  day = aL[2] > 10 ? aL[2] : "0" + aL[2],
  hour = aR[0] > 10 ? aR[0] : "0" + aR[0],
  minute = aR[1] > 10 ? aR[1] : "0" + aR[1];

var result = mouth + "月" + day + "日 " + hour + "时" + minute + "分";
console.log(result);

// 2.
String.prototype.formatTime = function (template) {
  template = template || "{1}年{2}月{3}日{4}时{5}分{6}秒";
  var arr = this.match(/\d+/g);
  console.log("arr", arr);

  template = template.replace(/\{(\d+)\}/g, function () {
    var n = arguments[1],
      val = arr[n - 1] || "0";
    console.log(n, arr[n], arguments);
    val < 10 ? (val = "0" + val) : null;
    return val;
  });
  return template;
};
console.log(str.formatTime());
