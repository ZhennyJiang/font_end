<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="编号">
        <el-input v-model="searchId" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="siteQuery">查询</el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="dialogVisible = true">+ 新建</el-button>
    <el-table :data="siteList" style="width: 100%;" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="groundId" label="场地编号" width="180"></el-table-column>
      <el-table-column prop="groundType" label="场地类型" width="180"></el-table-column>
      <el-table-column prop="groundAddress" label="场地地点" width="180"></el-table-column>
      <el-table-column prop="useTime" label="场地可申请时间段"></el-table-column>
      <el-table-column prop="superIntendent" label="负责人"></el-table-column>
      <el-table-column prop="cost" label="场地费用"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <!-- scope.row是每一行封存的数据 -->
          <el-button @click="deleteSite(scope.row.groundId)" type="text" size="small">删除</el-button>
          <el-button @click="deleteSite(scope.row.groundId)" type="text" size="small">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        v-model:currentPage="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        layout="prev, pager, next, jumper"
        :total="pageInfo.total"
      ></el-pagination>
    </div>
    <el-dialog title="新建场地" v-model="dialogVisible" width="30%" destroy-on-close center>
      <el-form :model="addSiteForm">
        <el-form-item label="场地类型:">
          <el-select v-model="addSiteForm.groundType">
            <el-option label="羽毛球场" value="羽毛球场"></el-option>
            <el-option label="篮球场" value="篮球场"></el-option>
            <el-option label="足球场" value="足球场"></el-option>
            <el-option label="网球场" value="网球场"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="场地地址:">
          <el-input v-model="addSiteForm.groundAddress"></el-input>
        </el-form-item>
        <el-form-item label="可用时间:">
          <el-select v-model="addSiteForm.useTime">
            <el-option label="周一 8:10~11:50" value="周一 8:10~11:50"></el-option>
            <el-option label="周二 14:30~17:30" value="周二 14:30~17:30"></el-option>
            <el-option label="周三 8:10~11:50" value="周三 8:10~11:50"></el-option>
            <el-option label="周四 14:30~17:30" value="周四 14:30~17:30"></el-option>
            <el-option label="周五 8:10~11:50" value="周五 8:10~11:50"></el-option>
            <el-option label="周六 14:30~17:30" value="周六 14:30~17:30"></el-option>
            <el-option label="周日 14:30~17:30" value="周日 14:30~17:30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人员:">
          <el-input v-model="addSiteForm.superIntendent"></el-input>
        </el-form-item>
        <el-form-item label="场地费用:">
          <el-input v-model="addSiteForm.cost"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addSite">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "site",
  data() {
    return {
      searchId: null,
      pageInfo: {
        pageSize: 7, //每页放的数据
        total: 21, //总的数据
        pageNum: 1 //当前页
      },
      siteList: [
        // {
        //   groundId: "1111", //场地编号
        //   groundType: "篮球场", //场地类型
        //   groundAddress: "体育馆201", //场地地点
        //   useTime: "周一 8:10~11:50", //场地可申请时间段
        //   superIntendent: "张三", //负责人
        //   cost: "30" //场地费用
        // }
      ],
      dialogVisible: false,
      addSiteForm: {
        groundType: "",
        groundAddress: "",
        useTime: "",
        superIntendent: "",
        cost: 20
      }
    };
  },
  methods: {
    async getCount() {
      this.Axios.get("Ground/getCount")
        .then(res => {
          console.log(res.data);

          this.pageInfo.total = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取场地列表
    async getSiteList() {
      this.getCount();
      this.Axios.post("Ground/getGroundList", this.pageInfo)
        .then(res => {
          this.siteList = res.data;
        })
        .catch(err => {});
    },
    //根据id删除场地列表
    async deleteSite(id) {
      console.log(id);
      let cm = confirm("是否确认删除该场地");
      if (cm) {
        this.Axios.post("Ground/delete?groundId=" + id)
          .then(res => {
            this.pageInfo.pageNum = 1;
            this.getSiteList();
          })
          .catch(err => {});
      }
    },
    //换页
    handleCurrentChange(newPage) {
      this.pageInfo.pageNum = newPage;
      this.getSiteList();
    },
    //新增场地
    addSite() {
      if (
        this.addSiteForm.groundType &&
        this.addSiteForm.groundAddress &&
        this.addSiteForm.useTime &&
        this.addSiteForm.superIntendent &&
        this.addSiteForm.cost
      ) {
        this.Axios.post("Ground/insert", this.addSiteForm)
          .then(res => {
            this.addSiteForm.groundType = "";
            this.addSiteForm.groundAddress = "";
            this.addSiteForm.useTime = "";
            this.addSiteForm.superIntendent = "";
            this.addSiteForm.cost = 20;
            this.dialogVisible = false;
            this.$message.success("操作成功");
            this.getSiteList();
          })
          .catch(err => {
            this.$message.error("操作失败了！");
          });
      } else {
        alert("请将信息输入完整");
      }
    },
    // 查询场地
    async siteQuery() {
      if (this.searchId == "") {
        this.getSiteList;
      } else {
        this.searchId = this.searchId - 0;
        this.Axios.post("Ground/getGroundById?groundId=" + this.searchId)
          .then(res => {
            console.log(res.data);
            console.log(this.siteList);
            this.siteList = [];
            this.siteList[0] = res.data;
            this.searchId = null;
            // this.siteList = res.data;
            // console.log(this.siteList);
          })
          .catch(err => {});
      }
    }
  },
  created() {
    this.getSiteList();
  }
};
</script>
<style></style>
