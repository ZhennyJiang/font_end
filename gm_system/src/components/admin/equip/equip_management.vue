<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="名称">
        <el-input v-model="searchInfo.equipName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="searchInfo.id" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="equipQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="dialogVisible = true">+ 新建</el-button>

    <el-table :data="equipList" style="width: 100%;">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="器材编号" width="180"></el-table-column>
      <el-table-column prop="equipName" label="器材名称" width="180"></el-table-column>
      <el-table-column prop="state" label="器材状态"></el-table-column>
      <el-table-column prop="stuName" label="租用人"></el-table-column>
      <el-table-column prop="borrowDate" label="租用时间"></el-table-column>
      <el-table-column prop="stuNo" label="学号"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <!-- scope.row是每一行封存的数据 -->
          <el-button @click="deleteEquip(scope.row.id)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="toRepair(scope.row.id)">报修</el-button>
          <el-button
            @click="returnEquip(scope.row.id)"
            type="text"
            size="small"
            v-show="scope.row.state!='未租用'"
          >归还</el-button>
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
    <el-dialog title="新建器材" v-model="dialogVisible" width="30%" destroy-on-close center>
      <el-form :model="addEquipForm">
        <el-form-item label="器材名称：">
          <el-input v-model="addEquipForm.equipName"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addEquip">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "equip_management",
  data() {
    return {
      pageInfo: {
        applyStatus: 0,
        pageSize: 5, //每页放的数据
        pageNum: 1 //当前页
      },
      searchInfo: {
        equipName: ""
      },

      equipList: [],

      dialogVisible: false,
      addEquipForm: {
        equipName: "",
        state: "未租用",
        price: null,
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
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查询数据
    async equipQuery() {
      if (
        this.searchInfo.equipName == "" &&
        (this.searchInfo.id == undefined ||
          this.searchInfo.id == 0 ||
          this.searchInfo.id == "")
      ) {
        this.getEquipList();
      } else {
        this.Axios.post("EquipmentInfo/search", this.searchInfo)
          .then(res => {
            this.equipList = res.data;
          })
          .catch(err => {});
      }
    },
    //删除数据
    async deleteEquip(id) {
      console.log(id);
      let cm = confirm("是否确认删除该器材");
      if (cm) {
        this.Axios.post("EquipmentInfo/delete?id=" + id)
          .then(res => {
            this.pageInfo.pageNum = 1;
            this.getEquipList();
          })
          .catch(err => {});
      }
    },
    //修改报修状态
    async toRepair(id) {
      let cm = confirm("是否确认报修该器材");
      if (cm) {
        let obj = {
          id: id,
          state: "报修中"
        };
        this.Axios.post("EquipmentInfo/update", obj)
          .then(res => {
            this.getEquipList();
            this.$message.success("操作成功");
          })
          .catch(err => {});
      }
    },
    async returnEquip(id) {
      let cm = confirm("是否确认归还该器材");
      if (cm) {
        let obj = {
          id: id,
          state: "未租用"
        };
        this.Axios.post("EquipmentInfo/update", obj)
          .then(res => {
            this.getEquipList();
            this.$message.success("操作成功");
          })
          .catch(err => {});
      }
    },
    addEquip() {
      if (this.addEquipForm.equipName == "") {
        alert("请输入器材名称");
      } else {
        this.Axios.post("EquipmentInfo/insert", this.addEquipForm)
          .then(res => {
            this.addEquipForm.id = "";
            this.addEquipForm.equipName = "";
            this.dialogVisible = false;
            this.$message.success("操作成功");
            this.getEquipList();
          })
          .catch(err => {
            this.$message.console.error("操作成功");
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
.el-dialog {
  padding: 0 60px;
}
.el-dialog .el-input {
  width: 200px;
}
</style>