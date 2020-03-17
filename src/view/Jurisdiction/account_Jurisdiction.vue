<style scoped>
.box {
  width: 100%;
  min-width: 1000px;
  height: 100%;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
  color: #666;
}
>>> .ivu-btn:hover {
  background: #f66913;
  color: white;
  border: none;
  outline: none;
}
>>> .ivu-btn-primary {
  background: #f66913;
  border: 1px solid #f66913;
}
>>> .ivu-btn {
  color: white;
  background: #f66913;
  border: none;
  outline: none;
}
.search {
  width: 99%;
  min-width: 580px;
  height: 20%;
  margin: 0 auto;
  background: white;
}
.top {
  width: 100%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.bottom {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.button1,
.button2,
.button3 {
  width: 10%;
  min-width: 100px;
  height: 60%;
  border: none;
  outline: none;
  background: #f66913;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9vw;
}
.button_right {
  width: 23%;
  height: 60%;
  margin-right: 2%;
  display: flex;
  justify-content: flex-end;
}
.button1 {
  margin-left: 2.5%;
}
.input1 {
  width: 16%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  margin-right: 2%;
  position: relative;
}
.text {
  width: 24%;
  min-width: 50px;
  box-sizing: border-box;
  text-align-last: justify;
  /* border: 1px solid; */
}
.table {
  width: 99%;
  min-width: 580px;
  margin: 0 auto;
  min-height: 70%;
  background: white;
  margin-top: 0.5%;
}
.tables {
  width: 99%;
  min-width: 580px;
  margin: 0 auto;
  margin-top: 1%;
  text-align: right;
  padding-bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* border: 1px solid; */
}
.tab {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 200px;
  /* border: 1px solid; */
}
.page {
  margin-right: 15px;
}
>>> .ivu-switch-checked {
  border: 1px solid #f66913;
  background: #f66913;
}
>>> .ivu-btn-primary {
  background: #f66913;
  border: 1px solid #f66913;
}
.se {
  width: 50%;
  height: 75%;
  padding-left: 5px;
  border: 1px solid white;
  outline: none;
  position: absolute;
  top: 10%;
  right: 25px;
  color: #464c5b;
}
::-webkit-input-placeholder {
  color: rgba(21, 30, 38, 0.35);
}
.demo-spin-container {
  position: absolute;
  top: 50%;
  right: 50%;
  border: 1px solid #eee;
}
.ellipsis {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #dcdee2;
}

.close {
  width: 80%;
  height: 100%;
  background: #afb7c9;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
}
.close:hover {
  width: 80%;
  background: #afb7c9;
  color: white;
  cursor: pointer;
}
.button3 {
  width: 40%;
  height: 100%;
  background: #545c6a;
}
.button3:hover {
  width: 40%;
  height: 100%;
  background: #545c6a;
}
.button2 {
  width: 40%;
  height: 100%;
}
>>> .ivu-table th {
  text-align: center;
  font-size: 0.9vw;
  height: 3vw;
}
>>> .ivu-table td {
  font-size: 0.8vw;
  color: #666;
}
>>> .ivu-page-item-active {
  border: 1px solid #f66913;
}
>>> .ivu-page-item-active:hover {
  border: 1px solid #f66913;
}
>>> .ivu-page-item-active a {
  color: #f66913;
}
>>> .ivu-page-item-active:hover a {
  color: #f66913;
}
>>> .ivu-page-item:hover {
  border: 1px solid #f66913;
}
>>> .ivu-page-item:hover a {
  color: #f66913;
}
.modules_delete {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 1, 1, 0.5);
  z-index: 100;
}
.contentes_delete {
  width: 33%;
  height: 25%;
  background: white;
  border-radius: 10px;
  position: fixed;
  top: 20%;
  right: 30%;
}
.content_top_delete {
  width: 100%;
  height: 65%;
  text-align: center;
  border-bottom: 3px solid #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
}
.content_bottom_delete {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.success_delete {
  width: 35%;
  height: 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9vw;
  background: #f66913;
  cursor: pointer;
}
.success_delete:hover {
  width: 35%;
  background: #f66913;
  color: white;
}
.canceles_delete {
  width: 35%;
  height: 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9vw;
  background: #545c6a;
  cursor: pointer;
}
.canceles_delete:hover {
  width: 35%;
  height: 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9vw;
  background: #545c6a;
  cursor: pointer;
}
</style>
<template>
  <div class="box">
    <!-- 搜索模块 -->
    <div class="search">
      <div class="top">
        <div class="input1">
          <div class="text">账号</div>：
          <Input
            style="width:200px;"
            v-model="tableList.condition.accountName"
            placeholder="请输入账号"
          />
        </div>
        <div class="input1">
          <div class="text">姓名</div>：
          <Input style="width:200px;" v-model="tableList.condition.realname" placeholder="请输入姓名" />
        </div>
        <div class="input1">
          <div class="text">手机号</div>：
          <Input style="width:200px;" v-model="tableList.condition.cellphone" placeholder="请输入手机号" />
        </div>
        <div class="input1">
          <div class="text">状态</div>：
          <i-select v-model="tableList.condition.status" style="width:200px" clearable>
            <i-option v-for="(item,index) in status" :key="index" :value="item.id">{{ item.value }}</i-option>
          </i-select>
        </div>
      </div>
      <div class="bottom">
        <button class="button1" @click="edit('ss')">新增账号</button>
        <div class="button_right">
          <Button class="button2" @click="sear">查询</Button>
          <!-- <Button class="button3" :loading="loading1" @click="out">导出</Button> -->
        </div>
      </div>
    </div>

    <div class="table">
      <Table
        highlight-row
        ref="currentRowTable"
        :no-data-text="loadingText ? loadingText : '暂无数据'"
        :columns="columns"
        :data="data.list"
        :loading="loadinges"
      ></Table>
    </div>

    <div class="tables">
      <Page
        :total="data.total"
        show-total
        :page-size="tableList.pageSize"
        :current="pages"
        @on-change="search"
        class="page"
      />
      <div class="tab">
        <div>跳至</div>
        <Input
          @input="number"
          :value="numbers"
          style="width: 50px;margin-left:5px;margin-right:5px;"
          placeholder="1"
        />
        <div>页</div>
        <Button style="margin-left:20px;" @click="jump">跳转</Button>
      </div>
    </div>

    <!-- <Spin></Spin> -->
    <div class="demo-spin-container">
      <Spin fix size="large" v-if="spinShow"></Spin>
    </div>
    <Modal v-model="modal10" :closable="false">
      <p class="ellipsis" v-for="(item,index) in module_ellipsis" :key="index">{{item}}</p>
      <div slot="footer" style="width:100%;height:35px;textAlign:center;">
        <button class="close" @click="del">关闭</button>
      </div>
    </Modal>
    <div class="modules_delete" v-if="show_delete">
      <div class="contentes_delete">
        <div class="content_top_delete">确定删除？</div>
        <div class="content_bottom_delete">
          <Button class="success_delete" :loading="loading_delete" @click="success_delete">确定</Button>
          <Button class="canceles_delete" @click="canceles_delete">取消</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  data() {
    return {
      id_delete: "",
      show_delete: false,
      loading_delete: false,
      status: [
        {
          id: 1,
          value: "启用"
        },
        {
          id: 0,
          value: "禁用"
        }
      ],
      module_ellipsis: [],
      modal10: false,
      //   loading1: false,
      loadinges: false,
      spinShow: false,
      totalPages: "",
      loadingText: "数据加载中...",
      pages: 1,
      numbers: "",
      tableList: {
        condition: {
          accountName: "",
          cellphone: "",
          realname: "",
          status: ""
        },
        pageNo: 1,
        pageSize: 10
      },
      data: "",
      show: "",
      columns: [
        {
          title: "账号",
          align: "center",
          //   sortable: 'custom',
          key: "accountName",
          tooltip: "true",
          minWidth: 100
        },
        {
          title: "单位",
          align: "center",
          //   sortable: 'custom',
          key: "company",
          tooltip: "true",
          minWidth: 100
        },
        {
          title: "角色",
          align: "center",
          //   sortable: 'custom',
          tooltip: "true",
          minWidth: 150,
          render: (h, params) => {
            let data = "";
            if (params.row.roleNameList.length != 0) {
              data = params.row.roleNameList.join(" / ");
            }
            return h("div", data);
            console.log(data);
          }
        },
        {
          title: "姓名",
          align: "center",
          //   sortable: 'custom',
          key: "realname",
          minWidth: 90
        },
        {
          title: "手机号",
          align: "center",
          //   sortable: 'custom',
          key: "cellphone",
          minWidth: 110
        },
        {
          title: "备注",
          align: "center",
          //   sortable: 'custom',
          key: "remark",
          minWidth: 135
        },
        {
          title: "最后登录",
          align: "center",
          //   sortable: 'custom',
          key: "loginTime",
          minWidth: 135,
          render: (h, params) => {
            let parking = params.row;
            if (parking.loginTime) {
              parking.loginTime = url.TT(parking.loginTime);
            } else {
              parking.loginTime = "";
            }
            // console.log(parking.loginTime);
            return h("div", {}, parking.loginTime);
          }
        },
        {
          title: "操作",
          key: "id",
          minWidth: 205,
          align: "center",
          render: (h, params) => {
            let parking = params.row;
            // console.log(parking);
            let menu = null;
            menu = h("div", [
              h("i-switch", {
                props: {
                  type: "warning",
                  size: "large",
                  // disabled:
                  //   params.row.fixedId === null || params.row.rentStatus == 3,
                  value: params.row.status === 1 // 控制开关的打开或关闭状态，官网文档属性是value
                },
                style: {
                  marginRight: "10px"
                },
                scopedSlots: {
                  open: () => h("span", "启用"),
                  close: () => h("span", "禁用")
                },
                on: {
                  "on-change": state => {
                    if (state) {
                      this.enableParking(parking.id);
                    } else {
                      this.disabledParking(parking.id);
                    }
                  }
                }
              }),
              h(
                "span",
                {
                  style: {
                    size: 26,
                    cursor: "pointer",
                    marginRight: "5px",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.edit(parking);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "span",
                {
                  style: {
                    size: 26,
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.delete(parking.id);
                    }
                  }
                },
                "删除"
              )
            ]);
            return menu;
          }
        }
      ],
      data: { total: 0, list: [], loading: true }
    };
  },
  created() {
    // console.log(url.time(1556553600000));
    this.list();
  },
  mounted() {
    this.$root.event.$on("logout", res => {
      this.show = res;
    });
  },
  methods: {
    //table列表
    list() {
      let that = this;
      this.loadinges = true;
      this.data = "";
      this.tableList.pageNo = 1;
      this.totalPages = 0;
      axios1
        .request({
          url: url.url.search_admin,
          params: this.tableList,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.spinShow = false;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.loadinges = false;
        });
    },
    //取消删除
    canceles_delete() {
      this.show_delete = false;
      this.loading_delete = false;
      this.id_delete = "";
    },
    //删除账号
    delete(id) {
      this.show_delete = true;
      this.id_delete = id;
      console.log("删除");
    },

    success_delete() {
      this.loading_delete = true;

      axios
        .request({
          url: url.url.delete_admin,
          params: {
            id: this.id_delete
          },
          method: "delete"
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$Notice.success({
              title: "系统提示",
              desc: res.data.message
            });
            this.list();
          } else {
            this.$Notice.error({
              title: "系统提示",
              desc: res.data.message
            });
          }
          this.loading_delete = false;
          this.show_delete = false;
        });
    },
    //跳转第几页
    search(data) {
      this.data = "";
      this.loadinges = true;
      console.log(data - 1);
      this.pages = data;
      let that = this;
      this.tableList.pageNo = data;
      axios1
        .request({
          url: url.url.search_admin,
          params: this.tableList,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers = data;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.loadinges = false;
        });
    },
    number(data) {
      if (data == "") {
        this.numbers = data;
      } else {
        var reg = /^\d{1,}$/;
        console.log(reg.test(data));
        if (reg.test(data) == false) {
          this.numbers = 1;
        } else {
          if (data >= 1) {
            this.numbers = data;
          } else {
            this.numbers = 1;
          }
        }
      }
    },
    //点击跳转
    jump() {
      console.log(this.totalPages);
      this.data = "";
      this.loadinges = true;
      let that = this;
      if (this.numbers == "") {
        this.numbers = 1;
      } else if (this.numbers > this.totalPages) {
        this.numbers = this.totalPages;
        console.log(this.totalPages);
      }
      console.log(this.numbers);
      this.tableList.pageNo = this.numbers;
      // console.log(this.tableList);
      axios1
        .request({
          url: url.url.search_admin,
          params: this.tableList,
          method: "post"
        })
        .then(res => {
          that.pages = Number(this.numbers);
          console.log(res);
          that.spinShow = false;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.loadinges = false;
        });
    },
    del() {
      this.modal10 = false;
    },
    success() {
      this.show = false;
      axios
        .request({
          url: url.url.logout,
          method: "post"
        })
        .then(res => {
          console.log(res);
          if (res.data.logout == true) {
            sessionStorage.setItem("logout", 1);
            this.$router.replace({ path: "/" });
            sessionStorage.setItem("token", "");
          } else {
            this.$Notice.error({
              title: res.data.message,
              desc: ""
            });
          }
        });
    },
    cancel() {
      this.show = false;
    },
    //启用
    enableParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.on_Off_admin,
          params: {
            id: id,
            status: 1
          },
          method: "post"
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$Notice.success({
              title: "系统提示",
              desc: res.data.message
            });
          } else {
            this.$Notice.error({
              title: "系统提示",
              desc: res.data.message
            });
          }
          console.log(res);
        });
    },
    //禁用
    disabledParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.on_Off_admin,
          params: {
            id: id,
            status: 0
          },
          method: "post"
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$Notice.success({
              title: "系统提示",
              desc: res.data.message
            });
          } else {
            this.$Notice.error({
              title: "系统提示",
              desc: res.data.message
            });
          }
          console.log(res);
        });
    },
    edit(data) {
      console.log(data);
      if (data.id == "ss") {
        console.log("走新增");
        this.$router.push({
          path: "/account_Jurisdiction_add"
        });
      } else {
        console.log("走编辑");
        let datas = JSON.stringify(data);
        this.$router.push({
          path: "/account_Jurisdiction_add",
          query: {
            data: datas
          }
        });
      }
    },
    //搜索
    sear() {
      let that = this;
      this.loadinges = true;
      console.log("查询");
      that.loadingText = "数据加载中...";
      this.data = "";
      this.tableList.pageNo = 1;
      that.tableList.pageSize = 10;
      axios1
        .request({
          url: url.url.search_admin,
          params: this.tableList,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.spinShow = false;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.numbers = 1;
          this.loadinges = false;
        });
    }
  }
};
</script>