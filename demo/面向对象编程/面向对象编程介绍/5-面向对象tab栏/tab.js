window.addEventListener("load", function () {
  var that = null;
  class Tab {
    constructor(id) {
      //获取元素
      that = this;
      this.main = document.querySelector(id);
      this.lis = this.main.querySelectorAll("li");
      this.sections = this.main.querySelectorAll("section");
      this.init();
    }
    init() {
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i;
        this.lis[i].onclick = this.toggleTab;
      }
    }
    //1. 切换功能
    toggleTab() {
      for (var i = 0; i < that.lis.length; i++) {
        that.lis[i].className = "";
        that.sections[i].className = "";
      }
      that.sections[this.index].className = "con_active";
      this.className = "li_active";
    }
    //2. 添加功能
    addTab() {}
    //3. 删除功能
    removeTab() {}
    //4. 修改功能
    editTab() {}
    clearClass() {}
  }
  var tab = new Tab("#tab");
});
