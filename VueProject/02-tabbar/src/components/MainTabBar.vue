<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <template v-slot:icon>
          <span class="tab_bar_icon">&#xe64c;</span>
        </template>
        <template v-slot:icon_text>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <template v-slot:icon>
          <span class="tab_bar_icon">&#xe670;</span>
        </template>
        <template v-slot:icon_text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <span class="tab_bar_icon">&#xe68d;</span>
        </template>
        <template v-slot:icon_text>
          <span>我的</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/setting">
        <template v-slot:icon>
          <span class="tab_bar_icon">&#xe624;</span>
        </template>
        <template v-slot:icon_text>
          <span>设置</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>


<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem }
};
</script>

<style>
.tab_bar_icon {
  margin-top: 6px;
  font-family: "iconfont" !important;
  font-size: 22px;
}
</style>