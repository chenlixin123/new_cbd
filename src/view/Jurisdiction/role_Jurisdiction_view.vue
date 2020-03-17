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
.title {
  width: 99%;
  min-width: 700px;
  height: 10%;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 3%;
}
>>> .ivu-btn-primary {
  background: #f66913;
  border: 1px solid #f66913;
}

.button1,
.button2,
.button3,
.button4 {
  width: 8%;
  min-width: 100px;
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
  margin-top: 1%;
  margin-bottom: 1.5%;
  height: 2vw;
}
.button4 {
  margin-right: 2.5%;
  margin-top: 1%;
  margin-bottom: 1.5%;
  height: 2vw;
  background: #545c6a;
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
  width: 40%;
  min-width: 60px;
  text-align-last: justify;
  box-sizing: border-box;
  /* border: 1px solid; */
}
.table {
  width: 99%;
  min-width: 580px;
  margin: 0 auto;
  min-height: 80%;
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
>>> .demo-spin-container {
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

.title_modau {
  width: 100%;
  margin-bottom: 15px;
  /* font-size: 1vw; */
  border-bottom: 1px solid #e8eaec;
  padding: 1% 1% 1% 3%;
}
.center_modal {
  width: 100%;
  /* min-height: 75%; */
  /* border: 1px solid red; */
  /* border: 1px solid; */
}
.modal_box {
  width: 100%;
  height: 100%;
  min-width: 700px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.modal {
  width: 60%;
  min-width: 700px;
  /* height: 60%; */
  /* border: 1px solid green; */
  background: white;
  position: absolute;
  top: 0;
  left: 10%;
  border-radius: 10px;
  z-index: 200;
}
.modal_btn {
  width: 100%;
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border-top: 1px solid #e8eaec; */
  /* border: 1px solid red; */
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
.btn_box {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <!-- 标题 -->
    <div class="title">
      <div class="title_left">已授权菜单</div>
    </div>

    <div class="table">
      <div class="btn_box">
        <button class="button1" @click="edit('ss')">新增菜单</button>
        <button class="button4" @click="back">返回</button>
      </div>
      <Table
        :row-class-name="rowClassName"
        highlight-row
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
        <Button
          style="margin-left:20px;background:#f66913;color:white;border:none;"
          @click="jump"
        >跳转</Button>
      </div>
    </div>

    <!-- <Spin></Spin> -->
    <div class="demo-spin-container">
      <Spin fix size="large" v-if="spinShow"></Spin>
    </div>

    <!-- 新增弹出框 -->
    <div class="modal_box" v-if="modal_show"></div>
    <div class="modal" v-if="modal_show">
      <div class="title_modau">{{title_modau}}</div>
      <div class="center_modal">
        <Table
          @on-selection-change="change"
          :row-class-name="rowClassNames"
          highlight-row
          ref="selection"
          :no-data-text="loadingText1 ? loadingText1 : '暂无数据'"
          :columns="columns1"
          :data="data1.list"
          :loading="loadinges1"
        ></Table>
        <div class="tables">
          <Page
            :total="data1.total"
            show-total
            :page-size="tableList1.pageSize"
            :current="pages1"
            @on-change="search1"
            class="page"
          />
          <div class="tab">
            <div>跳至</div>
            <Input
              @input="number1"
              :value="numbers1"
              style="width: 50px;margin-left:5px;margin-right:5px;"
              placeholder="1"
            />
            <div>页</div>
            <Button
              style="margin-left:20px;background:#f66913;color:white;border:none;"
              @click="jump1"
            >跳转</Button>
          </div>
        </div>
      </div>
      <div class="modal_btn">
        <Button
          style="width: 15%;height:2vw;background: #f66913;border-radius: 5px;border: none;outline: none;cursor: pointer;color: white;"
          @click="success_modal"
          :loading="button_loading"
        >保存</Button>
        <Button
          style="width: 15%;height:2vw;background: #545c6a;border-radius: 5px;border: none;outline: none;color: white;"
          @click="del"
        >取消</Button>
      </div>
    </div>
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
      button_loading: false,
      resourceIds: [], //菜单ID
      button_loading: false,
      title_modau: "授权菜单",
      modal_show: false,
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
      modal10: false,
      //   loading1: false,
      loadinges: false,
      loadinges1: false,
      spinShow: false,
      totalPages: "",
      totalPages1: "",
      loadingText: "数据加载中...",
      loadingText1: "数据加载中...",
      pages: 1,
      pages1: 1,
      numbers: "",
      numbers1: "",
      tableList: {
        condition: {
          bindType: 1,
          menuName: "",
          roleId: 0,
          state: ""
        },
        pageNo: 1,
        pageSize: 10
      },
      tableList1: {
        condition: {
          bindType: 0,
          menuName: "",
          roleId: 0,
          state: ""
        },
        pageNo: 1,
        pageSize: 20
      },
      data: "",
      show: "",
      columns: [
        {
          title: "菜单编码",
          align: "center",
          //   sortable: 'custom',
          key: "menuCode",
          tooltip: "true",
          minWidth: 100
        },
        {
          title: "菜单名称",
          align: "center",
          //   sortable: 'custom',
          key: "menuName",
          minWidth: 90
        },
        {
          title: "url",
          align: "center",
          //   sortable: 'custom',
          key: "url",
          minWidth: 90
        },
        {
          title: "状态",
          align: "center",
          //   sortable: 'custom',
          key: "state",
          minWidth: 90,
          render: (h, params) => {
            let data = "";
            let parking = params.row;
            data =
              parking.state == 0 ? "禁用" : parking.state == 1 ? "启用" : "";
            // console.log(parking.state);
            return h("div", {}, data);
          }
        },
        {
          title: "创建时间",
          align: "center",
          //   sortable: 'custom',
          key: "createTime",
          minWidth: 135,
          render: (h, params) => {
            let parking = params.row;
            if (parking.createTime) {
              parking.createTime = url.TT(parking.createTime);
            } else {
              parking.createTime = "";
            }

            // console.log(parking.createTime);
            return h("div", {}, parking.createTime);
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
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "菜单编码",
          align: "center",
          //   sortable: 'custom',
          key: "menuCode",
          tooltip: "true",
          minWidth: 100
        },
        {
          title: "菜单名称",
          align: "center",
          //   sortable: 'custom',
          key: "menuName",
          minWidth: 90
        },
        {
          title: "url",
          align: "center",
          //   sortable: 'custom',
          key: "url",
          minWidth: 90
        },
        {
          title: "状态",
          align: "center",
          //   sortable: 'custom',
          key: "state",
          minWidth: 90,
          render: (h, params) => {
            let data = "";
            let parking = params.row;
            data =
              parking.state == 0 ? "禁用" : parking.state == 1 ? "启用" : "";
            // console.log(parking.state);
            return h("div", {}, data);
          }
        }
      ],
      data: { total: 0, list: [], loading: true },
      data1: { total: 0, list: [], loading: true }
    };
  },
  created() {
    // console.log(url.time(1556553600000));
    console.log(this.$route.query.id);
    this.list();
    this.list1();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    rowClassName(row, index) {
      // console.log(row);
      if (row.parentId === 0) {
        return "demo-table-info-row";
      }
      return "";
    },
    rowClassNames(row, index) {
      // console.log(row);
      if (row.parentId === 0) {
        return "demo-table-info-row";
      }
      return "";
    },
    //table列表
    list() {
      let that = this;
      this.loadinges = true;
      this.data = [];
      this.pages = 1;
      this.tableList.condition.roleId = this.$route.query.id;
      this.tableList.pageNo = 1;
      this.totalPages = 0;
      axios1
        .request({
          url: url.url.search_bind,
          data: this.tableList,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.spinShow = false;
          this.numbers = 1;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.loadinges = false;
        });
    },
    list1() {
      let that = this;
      this.loadinges1 = true;
      this.data1 = [];
      this.pages1 = 1;
      this.tableList1.condition.roleId = this.$route.query.id;
      this.tableList1.pageNo = 1;
      this.totalPages1 = 0;
      axios1
        .request({
          url: url.url.search_bind,
          data: this.tableList1,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.spinShow = false;
          this.numbers1 = 1;
          if (res.data.data.list.length == 0) {
            this.loadingText1 = "";
          } else {
            this.data1 = res.data.data;
            this.totalPages1 = res.data.data.totalPages;
          }
          this.loadinges1 = false;
        });
    },
    //取消删除
    canceles_delete() {
      this.show_delete = false;
      this.loading_delete = false;
      this.id_delete = "";
    },
    //删除角色信息
    delete(id) {
      console.log("删除");
      console.log(id);
      this.show_delete = true;
      this.id_delete = id;
    },
    success_delete() {
      this.loading_delete = true;

      axios
        .request({
          url: url.url.delete_auth_role,
          params: {
            roleId: this.$route.query.id,
            resourceId: this.id_delete
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
            this.list1();
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
      let that = this;
      this.data = "";
      this.loadinges = true;
      this.tableList.pageNo = data;
      axios1
        .request({
          url: url.url.search_bind,
          params: this.tableList,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers = data;
          this.pages = Number(data);
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data.data;
            this.totalPages = res.data.data.totalPages;
          }
          this.loadinges = false;
        });
    },
    search1(data) {
      this.data1 = [];
      this.loadinges1 = true;
      this.pages1 = Number(data);
      let that = this;
      this.tableList1.pageNo = data;
      axios1
        .request({
          url: url.url.search_bind,
          params: this.tableList1,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers1 = data;
          if (res.data.data.list.length == 0) {
            this.loadingText1 = "";
          } else {
            this.data1 = res.data.data;
            this.totalPages1 = res.data.data.totalPages;
          }
          this.loadinges1 = false;
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
    number1(data) {
      if (data == "") {
        this.numbers1 = data;
      } else {
        var reg = /^\d{1,}$/;
        console.log(reg.test(data));
        if (reg.test(data) == false) {
          this.numbers1 = 1;
        } else {
          if (data >= 1) {
            this.numbers1 = data;
          } else {
            this.numbers1 = 1;
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
          url: url.url.search_bind,
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
    jump1() {
      console.log(this.totalPages1);
      this.data1 = [];
      this.loadinges1 = true;
      let that = this;
      if (this.numbers1 == "") {
        this.numbers1 = 1;
      } else if (this.numbers1 > this.totalPages1) {
        this.numbers1 = this.totalPages1;
        console.log(this.totalPages1);
      }
      console.log(this.numbers1);
      this.tableList1.pageNo = this.numbers1;
      // console.log(this.tableList);
      axios1
        .request({
          url: url.url.search_bind,
          params: this.tableList1,
          method: "post"
        })
        .then(res => {
          that.pages1 = Number(this.numbers1);
          console.log(res);
          that.spinShow = false;
          if (res.data.data.list.length == 0) {
            this.loadingText1 = "";
          } else {
            this.data1 = res.data.data;
            this.totalPages1 = res.data.data.totalPages;
          }
          this.loadinges1 = false;
        });
    },
    del() {
      this.modal_show = false;
      this.button_loading = false;
    },
    //新建角色
    success_modal() {
      if (!this.resourceIds) {
        this.$Message.warning("请选择授权菜单");
      } else {
        this.button_loading = true;
        axios1
          .request({
            url: url.url.auth_role_bind,
            params: {
              roleId: this.$route.query.id,
              resourceIds: this.resourceIds
            },
            method: "post"
          })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$Notice.success({
                title: "系统提示",
                desc: res.data.message
              });
              this.modal_show = false;
              this.list();
              this.list1();
            } else {
              this.$Notice.error({
                title: "系统提示",
                desc: res.data.message
              });
            }
            this.modal10 = false;
            this.button_loading = false;
          });
        console.log("添加授权菜单");
      }
    },
    //编辑
    edit(data) {
      console.log(data);
      console.log("走新增");
      this.modal_show = true;
    },
    change(data) {
      console.log(data);
      let id = [];
      data.map(res => {
        console.log(res.id);
        id.push(res.id);
      });
      this.resourceIds = id.join(",");
      console.log(this.resourceIds);
    }
  }
};
</script>