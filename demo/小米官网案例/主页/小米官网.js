window.onload = function () {
  var hours = document.querySelector(".hours");
  var minutes = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");
  var inputTime = +new Date("2021-8-12 22:00:00");
  var goBack = document.querySelector(".goBack");
  goBack.style.display = "none";

  countDown();
  setInterval(countDown, 1000);
  function countDown() {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000;
    var h = parseInt((times / 60 / 60) % 24);
    h = h >= 10 ? h : "0" + h;
    hours.innerHTML = h;
    var m = parseInt((times / 60) % 60);
    m = m >= 10 ? m : "0" + m;
    minutes.innerHTML = m;
    var s = parseInt(times % 60);
    s = s >= 10 ? s : "0" + s;
    seconds.innerHTML = s;
  }
  goBack.addEventListener("click", function () {
    animate(window, 0);
  });
  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 550) {
      goBack.style.display = "block";
    } else {
      goBack.style.display = "none";
    }
  });
  function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
      console.log(window.pageYOffset);
      if (window.pageYOffset == target) {
        clearInterval(obj.timer);
        // if (callback) {
        //   callback();
        // }相当于：
        callback && callback();
      } else {
        obj.step = (target - window.pageYOffset) / 10;
        if (obj.step >= 0) {
          obj.step = Math.ceil(obj.step);
        } else {
          obj.step = Math.floor(obj.step);
        }
        window.scroll(0, window.pageYOffset + obj.step);
      }
    }, 15);
  }
};
