window.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector(".wrapper");
  var prev = document.querySelector(".prev");
  var next = document.querySelector(".next");
  var img_wrapper = document.querySelector(".img_wrapper");
  var circle = document.querySelector(".circle");
  var flag = true;
  var num = 0;
  var timerA = setInterval(() => {
    console.log(123);
    next.click();
  }, 1500);
  //利用for循环生成circle
  for (var i = 0; i < img_wrapper.children.length; i++) {
    var li = document.createElement("li");
    circle.appendChild(li);
    li.setAttribute("index", i);
    li.addEventListener("click", function () {
      for (var j = 0; j < circle.children.length; j++) {
        circle.children[j].className = "";
      }
      this.className = "current";
      num = this.getAttribute("index");
      animate(
        img_wrapper,
        -img_wrapper.parentElement.offsetWidth * this.getAttribute("index")
      );
    });
  }

  var firstImg = img_wrapper.children[0].cloneNode(true);
  img_wrapper.appendChild(firstImg);
  var circleLis = circle.querySelectorAll("li");
  circleLis[0].className = "current";
  circle.style.marginLeft = -(circle.offsetWidth / 2) + "px";

  wrapper.addEventListener("mouseenter", function () {
    prev.style.display = "block";
    next.style.display = "block";
    clearInterval(timerA);
    timerA = null;
  });
  wrapper.addEventListener("mouseleave", function () {
    prev.style.display = "none";
    next.style.display = "none";
    timerA = setInterval(() => {
      next.click();
    }, 1500);
  });

  next.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == img_wrapper.children.length - 1) {
        img_wrapper.style.left = 0 + "px";
        num = 0;
      }
      num++;

      animate(
        img_wrapper,
        -num * img_wrapper.parentElement.offsetWidth,
        function () {
          flag = true;
        }
      );

      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";

        if (num == img_wrapper.children.length - 1) {
          circleLis[0].className = "current";
        } else {
          circleLis[num].className = "current";
        }
      }
    }
  });

  prev.addEventListener("click", function () {
    if (flag) {
      if (num == 0) {
        num = img_wrapper.children.length - 1;
        img_wrapper.style.left =
          -num * img_wrapper.parentElement.offsetWidth + "px";
      }
      num--;
      animate(
        img_wrapper,
        -num * img_wrapper.parentElement.offsetWidth,
        function () {
          flag = true;
        }
      );

      for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].className = "";
        circleLis[num].className = "current";
      }
    }
  });

  function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
      if (obj.offsetLeft == target) {
        clearInterval(obj.timer);
        // if (callback) {
        //   callback();
        // }相当于：
        callback && callback();
      } else {
        obj.step = (target - obj.offsetLeft) / 10;
        if (obj.step >= 0) {
          obj.step = Math.ceil(obj.step);
        } else {
          obj.step = Math.floor(obj.step);
        }

        obj.style.left = obj.offsetLeft + obj.step + "px";
      }
    }, 15);
  }
});
