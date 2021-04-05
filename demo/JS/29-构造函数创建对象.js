function Hero(name, blood, type, attack, heroSlogan) {
  this.name = name;
  this.blood = blood;
  this.type = type;
  this.attack = attack;
  this.slogan = function () {
    console.log(heroSlogan);
  };
}

var houYi = new Hero("后羿", 500, "射手", "远程", "苏醒了，猎杀时刻");
var wangZhaoJun = new Hero(
  "王昭君",
  400,
  "法师",
  "远程",
  "美貌是种罪孽，暴雪也无法掩埋。"
);

wangZhaoJun.slogan();
for (var i in wangZhaoJun) {
  console.log(wangZhaoJun[i]);
}
