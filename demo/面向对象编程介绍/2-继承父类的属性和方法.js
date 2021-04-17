class Father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  money() {
    console.log(this.x + this.y);
  }
}
class Son extends Father {
  constructor(x, y) {
    super(x, y);
  }
}
var xx = new Son(1, 2);
xx.money();
