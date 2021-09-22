<template>
  <div class="notice">
    <carousel />
    <div class="bfc">
      <div class="message_wrapper">
        <i class="el-icon-plus" @click="dialogVisible=true"></i>
        <p style="text-align:center">场馆要闻</p>
        <div class="line"></div>
        <ul>
          <a @click="toMessage(item)" v-for="item in information" :key="item">
            <li>
              {{item.title}}
              <span class="deleteNotice" @click.stop="deleteNotice(item.id,)">删除</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <el-dialog title="新增公告" v-model="dialogVisible" width="40%" destroy-on-close center>
      <el-form :model="addNoticeForm">
        <el-form-item label="公告标题：">
          <el-input v-model="addNoticeForm.title"></el-input>
        </el-form-item>
        <el-form-item label="公告文章：">
          <el-input type="textarea" v-model="addNoticeForm.info"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addNotice">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import carousel from "./carousel";
export default {
  name: "notice",
  components: {
    carousel
  },
  data() {
    return {
      information: [],
      addNoticeForm: {
        title: "",
        info: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    async getInformation() {
      this.Axios.get("PublicAnnouncement/getAll")
        .then(res => {
          this.information = res.data;
          console.log(this.information);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toMessage(item) {
      window.sessionStorage.setItem("item", item);
      this.$router.push({ name: "message", params: item });
    },
    addNotice() {
      if (this.addNoticeForm.title == "" || this.addNoticeForm.info == "") {
        alert("请完整的输入信息");
      } else {
        this.Axios.post("PublicAnnouncement/insert", this.addNoticeForm)
          .then(res => {
            this.addNoticeForm.title = "";
            this.addNoticeForm.info = "";
            this.dialogVisible = false;
            this.$message.success("操作成功");
            this.getInformation();
          })
          .catch(err => {
            this.$message.error("操作成功");
          });
      }
    },
    deleteNotice(id) {
      console.log(id);
      let cm = confirm("是否确认删除该公告");
      if (cm) {
        this.Axios.post("PublicAnnouncement/delete?id=" + id)
          .then(res => {
            this.getInformation();

            this.$message.success("操作成功");
          })
          .catch(err => {
            this.$message.error("操作成功");
          });
      }
    }
  },
  created() {
    this.getInformation();
  }
};
</script>
<style>
.bfc {
  color: rgb(42, 130, 228);
  overflow: hidden;
  margin-top: 30px;
}
.message_wrapper {
  position: relative;
  margin: 0 auto;
  height: 400px;
  width: 425px;
  padding: 0 50px;
  border: 1 px solid rgb(205, 210, 212);
  line-height: 21px;
}
.message_wrapper > ul {
  padding: 5px 20px;
}
.line {
  margin-top: 5px;
  height: 3px;
  background-color: rgb(42, 130, 228);
}
.message_wrapper > ul > a {
  position: relative;
  display: block;
  font-size: 18px;
  padding: 5px 0;
  color: black;
  cursor: pointer;
}
.message_wrapper > ul > a:hover {
  text-decoration: underline;
}
.message_wrapper > ul > a > li > span {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  color: rgb(42, 110, 187);
}
.message_wrapper > ul > a:hover .deleteNotice {
  display: block;
}
.el-icon-plus {
  position: absolute;
  right: 60px;
  font-size: 20px;
  cursor: pointer;
}
.el-icon-plus:hover {
  color: rgb(42, 110, 187);
  background-color: rgb(245, 246, 247);
}
.notice .el-input {
  width: 400px !important;
}
.notice .el-form-item__content {
  width: 100%;
}
.notice .el-textarea {
  width: 400px !important;
}
</style>