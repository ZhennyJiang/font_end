<template>
  <div class="carousel">
    <div class="wrapper" @mouseenter="myMouseEnter()" @mouseleave="myMouseLeave()">
      <a href="javascript:;" class="prev" v-show="btnIsShow" @click="prevPicture"></a>
      <ul class="img_wrapper" ref="img_wrapper">
        <li v-for="(item) in myImg" :key="item">
          <img :src="item" alt="slide" />
        </li>
      </ul>
      <a href="javascript:;" class="next" v-show="btnIsShow" @click="nextPicture"></a>
      <ul class="circle">
        <li
          v-for="(item,index) in myImg.slice(0,myImg.length-1)"
          :key="item"
          :class="{current:activeIndex ==index}"
          @click="circleClick(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      myImg: [
        require("../../../assets/images/1.jpg"),
        require("../../../assets/images/2.jpg"),
        require("../../../assets/images/3.jpg")
      ],
      btnIsShow: false,
      flag: true,
      num: 0,
      activeIndex: 0,
      myTimer: null,
      img_wrapper: null
    };
  },
  methods: {
    nextPicture() {
      let img_wrapper = this.$refs.img_wrapper;
      if (this.flag) {
        this.flag = false;
        if (this.num == this.img_wrapper.children.length - 1) {
          this.img_wrapper.style.left = 0 + "px";
          this.num = 0;
          this.activeIndex = this.num;
        }

        this.num++;
        this.activeIndex++;

        if (this.activeIndex == this.myImg.length - 1) {
          this.activeIndex = 0;
        }

        this.animate(
          this.img_wrapper,
          -this.num * this.img_wrapper.parentElement.offsetWidth
        );
      }
    },
    prevPicture() {
      let img_wrapper = this.$refs.img_wrapper;
      if (this.flag) {
        if (this.num == 0) {
          this.num = this.myImg.length - 1;
          this.activeIndex = this.num;
          this.img_wrapper.style.left =
            -this.num * this.img_wrapper.parentElement.offsetWidth + "px";
        }
        this.num--;
        this.activeIndex--;
        if (this.activeIndex == -1) {
          this.activeIndex = 3;
        }
        this.animate(
          img_wrapper,
          -this.num * this.img_wrapper.parentElement.offsetWidth
        );
      }
    },
    animate(obj, target) {
      clearInterval(obj.timer);
      obj.timer = setInterval(() => {
        if (obj.offsetLeft == target) {
          clearInterval(obj.timer);
          this.flag = true;
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
    },
    circleClick(index) {
      this.activeIndex = index;
      this.animate(
        this.img_wrapper,
        -this.img_wrapper.parentElement.offsetWidth * index
      );
    },
    myMouseEnter() {
      this.btnIsShow = !this.btnIsShow;
      clearInterval(this.myTimer);
    },
    myMouseLeave() {
      this.btnIsShow = !this.btnIsShow;
      this.myTimer = setInterval(() => {
        this.nextPicture();
      }, 1500);
    }
  },
  mounted() {
    this.img_wrapper = this.$refs.img_wrapper;
    this.myImg.push(this.myImg[0]);
    this.myTimer = setInterval(() => {
      this.nextPicture();
    }, 1500);
  }
};
</script>
<style>
ul {
  list-style: none;
}
.carousel {
  margin-top: -30px;
  width: 1405px;
  height: 460px;
  background-color: pink;
}
.carousel-inner > .item > img {
  width: 1405px;
  height: 460px;
}
.wrapper {
  position: relative;
  height: 460px;
  margin: 10px auto;
  overflow: hidden;
}
.img_wrapper {
  position: absolute;
  top: 0;
  width: 0;
  width: 400%;
  height: 460px;
}
.img_wrapper > li {
  width: 1405px;
  height: 460px;
  float: left;
}
.img_wrapper > li > img {
  width: 1405px;
  height: 460px;
}
.prev {
  left: 0;
  background: url("../../../assets/images/prev.png") no-repeat center;
}
.next {
  right: 0;
  background: url("../../../assets/images/next.png") no-repeat center;
}
.wrapper > a {
  position: absolute;
  top: 50%;
  width: 35px;
  height: 35px;
  margin-top: -17.5px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
}
.circle {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 10px;
  left: 50%;
  background-color: rgba(245, 245, 245, 0.4);
  padding: 2px 5px;
  border-radius: 5px;
}
.circle > li {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid white;
  margin: 0 3px;
  cursor: pointer;
}
.current {
  background-color: white;
}
</style>
