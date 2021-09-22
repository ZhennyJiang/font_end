(function () {
  function myIndexOf(T) {
    // let lenT = T.length,
    //   lenS = this.length,
    //   res = -1;
    //if(lenT<lenS){
    //   for (let i = 0; i <= lenS - lenT; i++) {
    //    if (this.substr(i, lenT) === T) {
    //     res = i;
    //     break;
    //   }
    // }
    //}

    // return res;
    let reg = new RegExp(T);
    res = reg.exec(this);
    return res === null ? -1 : res.index;
  }
  String.prototype.myIndexOf = myIndexOf;
})();

let S = "zzzzsssssaaaaa",
  T = "sa";
console.log(S.myIndexOf(T));
