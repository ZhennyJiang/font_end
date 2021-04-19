window.addEventListener("load", function () {
  var that = null;
  class Tab {
    constructor(id) {
      //获取元素
      that = this;
      this.main = document.querySelector(id);
      this.add = this.main.querySelector(".tab_add");
      this.ul = this.main.querySelector(".first_nav ul:first-child");
      this.tabs_con = this.main.querySelector(".tabs_con");

      console.log(this.ul);

      this.init();
    }
    init() {
      this.updateNode();
      this.add.onclick = this.addTab;
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i;
        this.lis[i].onclick = this.toggleTab;
        this.close[i].onclick = this.removeTab;
        this.spans[i].ondblclick = this.editTab;
        this.sections[i].ondblclick = this.editTab;
      }
    }
    updateNode() {
      this.lis = this.main.querySelectorAll("li");
      this.sections = this.main.querySelectorAll("section");
      this.close = this.main.querySelectorAll(".icon-guanbi");
      this.spans = this.main.querySelectorAll(".first_nav li span:first-child");
    }
    //1. 切换功能
    toggleTab() {
      that.clearClass();
      that.sections[this.index].className = "con_active";
      this.className = "li_active";
    }
    //2. 添加功能
    addTab() {
      var num = Math.floor(Math.random() * 10);
      that.clearClass();
      var li =
        '<li class="li_active"><span>测试' +
        num +
        '</span><span class="icon-guanbi"></span></li >';

      that.ul.insertAdjacentHTML("beforeend", li);
      var section = '<section class="con_active">测试' + num + "</section>";
      that.tabs_con.insertAdjacentHTML("beforeend", section);

      that.init();
    }
    //3. 删除功能
    removeTab(e) {
      e.stopPropagation();
      //由于其父亲li也有点击事件，因此需要停止冒泡
      var index = this.parentNode.index;

      that.ul.removeChild(that.ul.children[index]);
      that.tabs_con.removeChild(that.tabs_con.children[index]);
      if (document.querySelector("li_active")) {
        return;
      } else if (index == 0) {
        that.lis[1] && that.lis[1].click();
      } else {
        index > 0 && that.lis[--index].click();
      }

      that.init();
    }
    //4. 修改功能
    editTab(e) {
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.selection.empty();
      var str = this.innerHTML;
      this.innerHTML = '<input type="text"/>';
      var input = this.children[0];
      input.value = str;
      input.select();
      input.onblur = function () {
        this.parentNode.innerHTML = this.value;
      };
      input.onkeyup = function (e) {
        if (e.keyCode === 13) {
          this.blur();
        }
      };
    }
    clearClass() {
      for (var i = 0; i < that.lis.length; i++) {
        this.lis[i].className = "";
        this.sections[i].className = "";
      }
    }
  }
  var tab = new Tab("#tab");
});
