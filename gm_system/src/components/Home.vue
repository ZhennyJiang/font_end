<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div class="h_left">
        <img src="../assets/images/university_logo.png" alt />
        <span>
          <span style="font-size:18px">GDOU</span>
          <span>GM-system</span>
        </span>
      </div>
      <div class="h_right">
        <i class="el-icon-bell"></i>
      </div>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          background-color="rgb(0,21,41)"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          :default-active="activePath"
        >
          <!-- 添加router之后点击选项会根据item.id跳转页面 -->
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item
              :index="it.path"
              @click="savePath(it.path)"
              v-for="it in item.mList"
              :key="it.id"
            >{{it.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      menuList: [
        // {
        //   id: 100,
        //   path: "user",
        //   title: "申请",
        //   mList: [{ id: 101, title: "器材申请", path: "/applyEquip" },
        //     { id: 102, title: "场地申请", path: "/applySite" }]
        // },
        // {
        //   id: 200,
        //   path: "admin",
        //   title: "赛事管理",
        //   mList: []
        // },
        // {
        //   id: 300,
        //   path: "admin",
        //   title: "器材管理",
        //   mList: [
        //     { id: 301, title: "器材管理", path: "/equip_management" },
        //     { id: 302, title: "租用审批", path: "/equip_borrow" }
        //   ]
        // },
        // {
        //   id: 400,
        //   path: "admin",
        //   title: "场地管理",
        //   mList: [
        //     { id: 401, title: "公告", path: "/notice" },
        //     { id: 402, title: "场地管理", path: "/site" },
        //     { id: 403, title: "场地审核", path: "/ordinary_site" }
        //     { id: 403, title: "普通场地", path: "/ordinary_site" },
        //     { id: 404, title: "特殊场地", path: "/special_site" },
        //     { id: 405, title: "失约处理", path: "/break_deal" }
        //   ]
        // }
      ],
      activePath: "/notice"
    };
  },
  created() {
    this.getMenuList();
    // this.aaa();
    if (window.sessionStorage.getItem("activePath")) {
      this.activePath = window.sessionStorage.getItem("activePath");
    }
  },
  methods: {
    getMenuList() {
      this.Axios.post("Menu/getMenuList")
        .then(res => {
          this.menuList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    savePath(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    }
  }
};
</script>
<style scoped>
.home-container {
  height: 100%;
  box-sizing: border-box;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 80px !important;
  display: flex;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  background-color: rgb(0, 21, 41);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.h_left {
  display: flex;
  padding: 10px;
  width: 200px;
  box-sizing: border-box;
  background-color: rgb(0, 33, 64);
}
.h_left > img {
  width: 50px;
  height: 50px;
}
.h_left > span {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}
.h_left > span > span {
  flex: 1;
  line-height: 30px;
}
.h_right {
  flex: 1;
  text-align: right;
  padding-right: 80px;
  line-height: 80px;
  background-color: white;
  border-bottom: 2px solid rgb(219, 219, 219);
}
.el-main {
  background-color: white;
}
</style>