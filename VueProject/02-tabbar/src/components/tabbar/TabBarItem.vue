<template>
  <div :style="{ color: activeStyle }" class="tab_bar_item" @click="itemClick">
    <slot name="icon"></slot>
    <slot name="icon_text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? this.activeColor : s;
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "pink",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      console.log(this.$route.path);

      // console.log(this.path);
    },
  },
};
</script>

<style>
.tab_bar_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.active {
  color: red;
}
</style>
