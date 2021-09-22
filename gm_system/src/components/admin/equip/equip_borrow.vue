<template>
  <div>
    <div class="table_header">
      <span>审核列表</span>
      <el-row>
        <button
          v-for="(item,index) in myButton"
          :key="item"
          :class="{active: pageInfo.applyStatus  == index||pageInfo.applyStatus ==index+3} "
          @click="changeApllyStatus(index)"
        >{{item}}</button>
      </el-row>
    </div>

    <el-table :data="borrowList" style="width: 100%;" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="租用器材编号" width="180"></el-table-column>
      <el-table-column prop="equipName" label="器材名称" width="180"></el-table-column>
      <el-table-column prop="stuName" label="租用人" width="180"></el-table-column>
      <el-table-column prop="borrowDate" label="租用时间"></el-table-column>
      <el-table-column prop="stuNo" label="学号"></el-table-column>
      <el-table-column prop="phone" label="联系方式"></el-table-column>
      <el-table-column prop="price" label="器材费用"></el-table-column>
      <el-table-column prop="borrowStatus" label="审核状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <!-- scope.row是每一行封存的数据 -->
          <el-button
            @click="agreeBorrow(scope.row.id)"
            type="text"
            size="small"
            :class="{hiddenColunm: scope.row.borrowStatus== '已审核'}"
          >通过</el-button>
          <el-button
            type="text"
            size="small"
            @click="refuseBorrow(scope.row.id)"
            :class="{hiddenColunm: scope.row.borrowStatus== '已审核'}"
          >驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      v-model:currentPage="pageInfo.pageNum"
      :page-size="pageInfo.pageSize"
      layout="prev, pager, next, jumper"
      :total="pageInfo.total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "equip_borrow",
  data() {
    return {
      myButton: ["全部", "未审核", "已审核"],
      pageInfo: {
        applyStatus: 3,
        pageSize: 7, //每页放的数据
        total: 21, //总的数据
        pageNum: 1 //当前页
      },
      borrowList: []
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

    async getBorrowList() {
      this.Axios.post("EquipmentInfo/getEquipmentList", this.pageInfo)
        .then(res => {
          this.borrowList = res.data;
          console.log(this.borrowList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    agreeBorrow(id) {
      console.log(id);
      let cm = confirm("是否同意该申请");
      if (cm) {
        let obj = {
          id: id,
          borrowStatus: "已审核",
          state: "已租用"
        };
        this.Axios.post("EquipmentInfo/update", obj)
          .then(res => {
            this.getBorrowList();
            this.$message.success("操作成功");
          })
          .catch(err => {});
      }
    },
    refuseBorrow() {
      console.log(id);
      let cm = confirm("是否驳回该申请");
      if (cm) {
        let obj = {
          id: id,
          borrowStatus: "已审核",
          state: "未租用"
        };
        this.Axios.post("EquipmentInfo/update", obj)
          .then(res => {
            this.getBorrowList();
            this.$message.success("操作成功");
          })
          .catch(err => {});
      }
    },
    handleCurrentChange(newPage) {
      this.pageInfo.pageNum = newPage;
      this.getBorrowList();
    },
    changeApllyStatus(index) {
      console.log(index);

      if (index == 0) {
        this.pageInfo.applyStatus = 3;
      } else {
        this.pageInfo.applyStatus = index;
      }
      this.pageInfo.pageNum = 1;
      this.getBorrowList();
    }
  },
  created() {
    this.getCount();
    this.getBorrowList();
  }
};
</script>
<style>
.table_header {
  display: flex;
  height: 50px;
  padding: 0 20px;
  line-height: 40px;
}
.el-row {
  margin-left: 400px;
}
.el-row > button {
  width: 100px;
  height: 40px;
  float: left;
  margin: 0 !important;
  background-color: white;
  border: 1px solid #e9eef3;
  cursor: pointer;
  outline: none;
}
.active {
  color: #409eff;
  background-color: rgb(236, 245, 255) !important;
  border: 1px solid #409eff !important;
}
.el-row > button:hover {
  color: #409eff;
  background-color: rgb(236, 245, 255) !important;
  border: 1px solid #409eff !important;
}
.hiddenColunm {
  display: none !important;
}
</style>