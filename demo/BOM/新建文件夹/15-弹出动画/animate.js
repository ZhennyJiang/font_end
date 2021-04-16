function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(() => {
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
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
