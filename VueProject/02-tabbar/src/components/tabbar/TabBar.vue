<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>
<style>
#tab_bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 30px 50px rgba(128, 128, 128, 0.8);
}
.tab_bar_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 49px;
}
.tab_bar_icon {
  font-family: "iconfont" !important;
}
</style>
