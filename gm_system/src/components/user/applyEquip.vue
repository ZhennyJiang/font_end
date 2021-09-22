<template>
  <div class="applyEquip">
    <el-form :inline="true">
      <el-form-item label="名称">
        <el-input v-model="searchInfo.equipName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="equipQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="equipList" style="width: 50%;">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="器材编号" width="180"></el-table-column>
      <el-table-column prop="equipName" label="器材名称" width="180"></el-table-column>
      <el-table-column prop="price" label="器材费用" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <!-- scope.row是每一行封存的数据 -->
          <el-button @click="apply(scope.row)" type="text" size="small">申请</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <!-- 分页组件 size-change 每页最大变化 
      current-change 当前最大变化 layout 功能插件
      page-size是每页最多显示多少数据，total是总共有多少条数据-->
      <!-- @size-change="handleSizeChange" -->
      <el-pagination
        @current-change="handleCurrentChange"
        v-model:currentPage="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        layout="prev, pager, next, jumper"
        :total="pageInfo.total"
      ></el-pagination>
    </div>
    <el-dialog title="申请器材" v-model="dialogVisible" width="30%" destroy-on-close center>
      <el-form :model="equipForm">
        <el-form-item label="器材名称：">
          <el-input :disabled="true" v-model="equipForm.equipName"></el-input>
        </el-form-item>
        <el-form-item label=" 器材费用：">
          <el-input :disabled="true" v-model="equipForm.price"></el-input>
        </el-form-item>
        <el-form-item label=" 租用用户：">
          <el-input v-model="applyant.stuName"></el-input>
        </el-form-item>
        <el-form-item label=" 用户学号：">
          <el-input v-model="applyant.stuNo"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input v-model="applyant.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="applyEquip">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "applyEquip",
  data() {
    return {
      pageInfo: {
        total: "",
        pageSize: 5, //每页放的数据
        pageNum: 1 //当前页
      },
      searchInfo: {
        equipName: ""
      },

      equipList: [],

      dialogVisible: false,
      equipForm: {},
      applyant: {
        id: 0,
        borrowStatus: "未审核",
        price: "",
        equipName: "",
        stuName: "",
        stuNo: "",
        phone: ""
      }
    };
  },
  methods: {
    async getCount() {
      this.Axios.get("EquipmentInfo/getCount")
        .then(res => {
          this.pageInfo.total = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取器材列表信息
    async getEquipList() {
      if (this.pageInfo.id != "") {
        this.pageInfo.id = this.pageInfo.id - 0;
      }
      this.Axios.post("EquipmentInfo/getEquipmentList", this.pageInfo)
        .then(res => {
          console.log(res);
          this.equipList = res.data;
          this.equipList.forEach(v => {
            v.price = 20;
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查询数据
    async equipQuery() {
      if (this.searchInfo.equipName == "") {
        this.getEquipList();
      } else {
        this.Axios.post("EquipmentInfo/search", this.searchInfo)
          .then(res => {
            this.equipList = res.data;
          })
          .catch(err => {});
      }
    },
    apply(item) {
      this.equipForm = item;
      this.applyant.id = item.id;
      this.applyant.price = item.price;
      this.dialogVisible = true;
    },
    //器材申请
    async applyEquip(item) {
      if (
        this.applyant.stuName == "" ||
        this.applyant.stuNo == "" ||
        this.applyant.phone == ""
      ) {
        alert("请输入完成信息");
      } else {
        this.dialogVisible = false;
        this.Axios.post("EquipmentInfo/update", this.applyant)
          .then(res => {
            this.$message.success("操作成功");
          })
          .catch(err => {
            this.$message.error("操作成功");
          });
      }
    },

    //换页时更新数据
    handleCurrentChange(newPage) {
      this.pageInfo.pageNum = newPage;
      this.getEquipList();
    }
  },
  created() {
    this.getCount();
    this.getEquipList();
  }
};
</script>
<style >
.el-main[data-v-8dc7cce2] {
  line-height: 0px;
  text-align: left;
  padding: 30px;
}
.applyEquip .el-form {
  text-align: center;
}
.el-form-item__content {
  width: 300px;
}
.el-table th,
.el-table td {
  text-align: center !important;
}
.el-table__fixed-right::before,
.el-table__fixed::before,
.el-table::before {
  height: 0px !important;
}
.el-pagination {
  padding-top: 10px !important;
  text-align: center;
}
.applyEquip .el-table--fit {
  margin: 0 auto;
}
.el-dialog {
  padding: 0 60px;
}
.el-dialog .el-input {
  width: 200px;
}
.applyEquip > .el-form .el-form-item:nth-child(2) .el-form-item__content {
  width: 100px;
}
</style>