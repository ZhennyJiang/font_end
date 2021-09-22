
<template>
  <div>
    <div class="table_header">
      <span>审核列表</span>
      <el-row>
        <button
          v-for="(item,index) in myButton"
          :key="item"
          :class="{active: pageInfo.applyStatus  == index} "
          @click="changeApllyStatus(index)"
        >{{item}}</button>
      </el-row>
    </div>

    <el-table :data="borrowList" style="width: 100%;" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="groundApplication" label="申请人" width="180"></el-table-column>
      <el-table-column prop="groundApplicationPhone" label="申请人电话" width="180"></el-table-column>
      <el-table-column prop="groundId" label="场地编号" width="180"></el-table-column>
      <el-table-column prop="groundAddress" label="场地地点"></el-table-column>
      <el-table-column prop="useTime" label="使用时间段"></el-table-column>
      <el-table-column prop="applicationTime" label="提交申请的时间"></el-table-column>
      <el-table-column prop="status" label="审核状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <!-- scope.row是每一行封存的数据 -->
          <el-button
            v-show="scope.row.status=='未审核'"
            @click="agreeBorrow(scope.row.id)"
            type="text"
            size="small"
            :class="{hiddenColunm: pageInfo.applyStatus == 2}"
          >通过</el-button>
          <el-button
            v-show="scope.row.status=='未审核'"
            type="text"
            size="small"
            @click="refuseBorrow(scope.row.id)"
            :class="{hiddenColunm: pageInfo.applyStatus == 2}"
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
  name: "ordinary_site",
  data() {
    return {
      myButton: ["全部", "未审核", "已审核"],
      pageInfo: {
        applyStatus: 0,
        pageSize: 7, //每页放的数据
        total: 21, //总的数据
        pageNum: 1 //当前页
      },
      borrowList: [
        {
          groundApplication: "", //申请人
          groundApplicationPhone: "", //申请人电话
          groundId: "", //场地编号
          groundAddress: "", //场地地点
          useTime: "", //使用时间段
          applicationTime: "", //提交申请的时间
          status: "" //审核状态
        }
      ]
    };
  },
  methods: {
    async getCount() {
      this.Axios.get("CommonApplicationInformation/getCount")
        .then(res => {
          this.pageInfo.total = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    async getBorrowList() {
      this.Axios.post("CommonApplicationInformation/getInfoList", this.pageInfo)
        .then(res => {
          console.log(res.data);

          this.borrowList = res.data;
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
          status: "已审核"
        };
        this.Axios.post("CommonApplicationInformation/update", obj)
          .then(res => {
            this.getBorrowList();
            this.$message.success("操作成功");
          })
          .catch(err => {});
      }
    },
    refuseBorrow(id) {
      console.log(id);
      let cm = confirm("是否驳回该申请");
      if (cm) {
        let obj = {
          id: id,
          status: "已审核"
        };
        this.Axios.post("CommonApplicationInformation/update", obj)
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
      this.pageInfo.applyStatus = index;

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