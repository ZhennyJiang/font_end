<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="场地类型:">
        <el-input v-model="pageInfo.groundType" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="siteQuery">查询</el-button>
      </el-form-item>
    </el-form>

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
          <el-button @click="apply(scope.row)" type="text" size="small">申请</el-button>
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
    <el-dialog title="申请场地" v-model="dialogVisible" width="30%" destroy-on-close center>
      <el-form :model="siteForm">
        <el-form-item label="场地名称:">
          <el-input :disabled="true" v-model="siteForm.groundType"></el-input>
        </el-form-item>
        <el-form-item label="场地地址:">
          <el-input :disabled="true" v-model="siteForm.groundAddress"></el-input>
        </el-form-item>
        <el-form-item label="可用时间:">
          <el-input :disabled="true" v-model="siteForm.useTime"></el-input>
        </el-form-item>
        <el-form-item label="所需费用:">
          <el-input :disabled="true" v-model="siteForm.cost"></el-input>
        </el-form-item>
        <el-form-item label="申 请 人:">
          <el-input v-model="applyant.groundApplication"></el-input>
        </el-form-item>
        <el-form-item label="联系电话:">
          <el-input v-model="applyant.groundApplicationPhone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="applyMessage">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog title="申请场地支付" v-model="payVisible" width="30%" destroy-on-close center>
      <el-form :model="siteForm">
        <el-form-item label="支付:">
          <img src="../../../assets/images/erweima.png" alt />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="applySite">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "applySite",
  data() {
    return {
      pageInfo: {
        groundType: "",
        pageSize: 7, //每页放的数据
        total: 21, //总的数据
        pageNum: 1 //当前页
      },
      siteList: [
        {
          groundId: "1111", //场地编号
          groundType: "篮球场", //场地类型
          groundAddress: "体育馆201", //场地地点
          useTime: "周一 8:10~11:50", //场地可申请时间段
          superIntendent: "张三", //负责人
          cost: "30" //场地费用
        }
      ],

      dialogVisible: false,
      payVisible: false,
      siteForm: {},
      applyant: {
        groundId: "",
        useTime: "",
        groundAddress: "",
        groundApplication: "",
        groundApplicationPhone: ""
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
    apply(item) {
      this.siteForm = item;
      this.applyant.groundId = item.groundId;
      this.applyant.useTime = item.useTime;
      this.applyant.groundAddress = item.groundAddress;
      this.applyant.status = "未审核";
      this.dialogVisible = true;
    },
    //场地申请
    async applyMessage() {
      this.dialogVisible = false;
      this.payVisible = true;
    },
    async applySite() {
      this.payVisible = false;
      this.Axios.post("CommonApplicationInformation/insert", this.applyant)
        .then(res => {
          this.$message.success("操作成功");
        })
        .catch(err => {
          this.$message.error("操作成功");
        });
    },
    //换页
    handleCurrentChange(newPage) {
      this.pageInfo.pageNum = newPage;
      this.getSiteList();
    },

    //查询场地
    async siteQuery() {
      if (this.pageInfo.groundType == "") {
        alert("请输入数据");
      } else {
        this.pageInfo.pageNum = 1;
        this.getEquipList();
        this.pageInfo.groundType = "";
      }
    }
  },
  created() {
    this.getSiteList();
  }
};
</script>
<style>
</style>