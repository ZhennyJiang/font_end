window.onload = function () {
  var password = document.getElementById("password");
  var eye = document.getElementById("eye");
  var flag = false;
  eye.onclick = function () {
    if (!flag) {
      eye.src = "img/eye.png";
      password.type = "text";
      flag = true;
    } else {
      eye.src = "img/eye-close.png";
      password.type = "password";
      flag = false;
    }
  };
};
