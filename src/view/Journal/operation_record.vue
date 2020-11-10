<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
  color: #666;
}
.search {
  width: 99%;
  min-width: 580px;
  height: 25%;
  margin: 0 auto;
  background: white;
  /* border: 1px solid red; */
}
.top {
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* border: 1px solid red; */
}
.bottom {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.button2,
.button3 {
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
  justify-content: space-between;
}
.button1 {
  width: 10%;
  height: 60%;
  margin-left: 2.5%;
  background: white;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.button2 {
  width: 40%;
  height: 100%;
}
.button3 {
  width: 40%;
  height: 100%;
  background: #f66913;
}
.module {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 1, 1, 0.5);
  z-index: 10000000000;
}
.content {
  width: 400px;
  height: 28%;
  background: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10%;
}
.input1 {
  width: 25%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  position: relative;
}
.text {
  width: 23%;
  min-width: 70px;
  box-sizing: border-box;
  text-align-last: justify;
}
.input2 {
  width: 25%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
}
.table {
  width: 99%;
  min-width: 580px;
  min-height: 60%;
  background: white;
  margin: 0 auto;
  margin-top: 0.5%;
}
.tables {
  width: 99%;
  min-width: 580px;
  margin: 0 auto;
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 17px;
  margin-bottom: 1%;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
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
>>> .ivu-btn {
  background: #f66913;
  color: white;
  border: none;
  outline: none;
}
>>> .ivu-btn:hover {
  background: #f66913;
  color: white;
  border: none;
  outline: none;
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
.bottomr {
  width: 99%;
  height: 68%;
  margin: 0 auto;
  background: white;
  margin-top: 1%;
}
>>> .ivu-table th {
  text-align: center;
  height: 3vw;
  font-size: 0.9vw;
}
>>> .ivu-table td {
  font-size: 0.8vw;
}
.modules_delete {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 1, 1, 0.5);
  z-index: 20000000;
}
.contentes_delete {
  width: 33%;
  height: 25%;
  background: white;
  border-radius: 10px;
  position: fixed;
  top: 20%;
  right: 30%;
  z-index: 20000000;
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
  <!-- 操作记录 -->
  <div class="box">
    <div class="search">
      <div class="top">
        <div class="input1">
          <div class="text">登录方式</div>：
          <i-select v-model="source" style="width:200px;" clearable>
            <i-option
              v-for="(item,index) in source1"
              :key="index"
              :value="item.value"
            >{{ item.label }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">单位名称</div>：
          <!-- <i-input v-model="header" placeholder="单位名称" style="width:200px;"></i-input> -->
          <i-select v-model="company" filterable style="width:200px;" clearable>
            <i-option v-for="(item,index) in companys" :key="index" :value="item">{{ item }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">账号</div>：
          <i-input v-model="accountName" placeholder="账号" style="width:200px;"></i-input>
        </div>
        <div class="input2">
          <div class="text">姓名</div>：
          <i-input v-model="realname" placeholder="姓名" style="width:200px;"></i-input>
        </div>
        <div class="input2">
          <div class="text">操作时间</div>：
          <DatePicker
            type="daterange"
            format="yyyy-MM-dd"
            size="default"
            v-model="times1"
            placeholder="请选择要查询的时间"
            style="width:200px;font-size:0.6vw;"
            :options="options1"
          ></DatePicker>
        </div>
      </div>
      <div class="bottom">
        <button class="button1" @click="but1"></button>
        <div class="button_right">
          <button class="button3" @click="sear">查询</button>
          <button class="button2" :loading="loading1" @click="out_simulation">导出</button>
        </div>
      </div>
    </div>

    <div class="table">
      <Table
        style="border:none;"
        highlight-row
        ref="currentRowTable"
        :no-data-text="loadingText ? loadingText : '暂无数据'"
        :columns="columns"
        :data="datas.list"
        :loading="loadinges"
      ></Table>
    </div>

    <div class="tables">
      <Page
        :total="datas.total"
        show-total
        :page-size="conditions.pageSize"
        :current="pages"
        @on-change="search"
        class="page"
      />
      <div class="tab">
        <div>跳至</div>
        <i-input
          @input="number"
          :value="numbers"
          style="width: 50px;margin-left:5px;margin-right:5px;"
          placeholder="1"
        ></i-input>
        <div>页</div>
        <i-button class="jump" type="primary" style="margin-left:20px;" @click="jump">跳转</i-button>
      </div>
    </div>
    <!-- <div class="modules_delete" v-if="show_delete">
      <div class="contentes_delete">
        <div class="content_top_delete">确定删除？</div>
        <div class="content_bottom_delete">
          <Button class="success_delete" :loading="loading_delete" @click="success_delete">确定</Button>
          <Button class="canceles_delete" @click="canceles_delete">取消</Button>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  data() {
    return {
      loading1: false,
      id_delete: "",
      show_delete: false,
      loading_delete: false,
      totalPages: "",
      options1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      loadinges: false,
      loadingText: "",
      pages: 1,
      numbers: "",
      condition: {
        start: 0,
        pageSize: 20,
        filterJson: {
          filters: []
        }
      },
      //单位名称
      companys: [],
      taskStatus: "", //登录方式
      source1: [
        {
          value: "1",
          label: "网页+APP"
        },
        {
          value: "2",
          label: "网页"
        },
        {
          value: "3",
          label: "APP"
        }
      ],
      columns: [
        {
          title: "登录方式",
          align: "center",
          minWidth: 90,
          key: "source",
          render: (h, params) => {
            let state = params.row.source;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state == 1
                ? "网页+APP"
                : state == 2
                ? "网页"
                : state == 3
                ? "APP"
                : ""
            );
          }
        },
        {
          title: "单位名称",
          align: "center",
          //   sortable: 'custom',
          key: "company",
          minWidth: 200
        },
        {
          title: "账号",
          align: "center",
          //   sortable: 'custom',
          key: "accountName",
          minWidth: 150
        },
        {
          title: "姓名",
          align: "center",
          //   sortable: 'custom',
          key: "realname",
          minWidth: 150
        },
        {
          title: "登录次数",
          align: "center",
          minWidth: 100,
          key: "loginCount"
        },
        {
          title: "修改空位次数",
          align: "center",
          minWidth: 150,
          key: "modifyFreeCount"
        },
        {
          title: "其他操作",
          align: "center",
          minWidth: 100,
          key: "otherCount"
        },
        {
          title: "操作",
          key: "id",
          minWidth: 150,
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
                    color: "#f66913",
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
                "详情"
              )
            ]);
            return menu;
          }
        }
      ],
      conditions: {
        condition: {
          accountName: "",
          company: "",
          endTime: "",
          realname: "",
          source: "",
          startTime: ""
        },
        pageNo: 1,
        pageSize: 10
      },
      accountName: "", //账号
      company: "", //单位名称
      endTime: "", //结束时间
      realname: "", //姓名
      source: "", //登录方式
      times1: "", //时间段
      datas: { total: 0, list: [], loading: false }
    };
  },
  created() {
    this.sear();
    this.sear_company_list();
  },
  methods: {
    sear_company_list() {
      axios
        .request({
          url: url.url.select_companyVlist,
          method: "get"
        })
        .then(res => {
          // console.log(res.data.data);
          this.companys = res.data.data;
        });
    },
    //查询
    sear() {
      let that = this;
      this.loadinges = true;
      this.datas = "";
      this.conditions.pageNo = 1;
      console.log("查询");
      if (this.accountName) {
        this.conditions.condition.accountName = this.accountName;
      } else {
        this.conditions.condition.accountName = null;
      }
      if (this.company) {
        this.conditions.condition.company = this.company;
      } else {
        this.conditions.condition.company = null;
      }
      if (this.realname) {
        this.conditions.condition.realname = this.realname;
      } else {
        this.conditions.condition.realname = null;
      }
      if (this.source) {
        this.conditions.condition.source = this.source;
      } else {
        this.conditions.condition.source = null;
      }
      // console.log(this.times1[0]);
      if (this.times1[0] != "" && this.times1[0]) {
        this.conditions.condition.startTime = url.time(this.times1[0]);
        this.conditions.condition.endTime = url.time(this.times1[1]);
        console.log(this.conditions.condition);
      } else {
        this.conditions.condition.startTime = null;
        this.conditions.condition.endTime = null;
      }
      console.log(this.conditions);
      axios1
        .request({
          url: url.url.search_operate_log_list,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers = 1;
          this.pages = Number(1);
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
            this.loadinges = false;
          } else {
            this.loadinges = false;
            this.datas = res.data.data;
          }
        });
    },
    //跳转第几页
    search(data1) {
      let that = this;
      this.loadinges = true;
      this.loadingText = "数据加载中...";
      console.log(data1);
      that.conditions.pageNo = data1;
      axios1
        .request({
          url: url.url.search_operate_log_list,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
            this.loadinges = false;
          } else {
            this.numbers = data1;
            this.loadinges = false;
            this.datas = res.data.data;
          }
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
    jump() {
      let that = this;
      console.log(this.numbers);
      // this.datas = "";
      // this.datas.list = "";
      this.loadinges = true;
      this.loadingText = "数据加载中...";
      if (this.numbers == "") {
        this.numbers = 1;
      } else if (this.numbers > this.datas.totalPages) {
        this.numbers = this.datas.totalPages;
      }
      this.conditions.pageNo = this.numbers;

      axios1
        .request({
          url: url.url.search_operate_log_list,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.pages = Number(this.numbers);
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
            this.loadinges = false;
          } else {
            this.loadinges = false;
            this.datas = res.data.data;
          }
        });
    },
    but1() {
      this.$router.push({
        path: "/operation_Journal_add"
      });
    },
    //跳转详情页
    edit(data) {
      let that = this;
      console.log(data);
      // console.log(this.conditions.condition);
      this.$router.push({
        path: "/operation_record_details",
        query: {
          accountName: data.accountName,
          source: that.conditions.condition.source,
          startTime: that.conditions.condition.startTime,
          endTime: that.conditions.condition.endTime,
          company: data.company,
          loginCount: data.loginCount,
          modifyFreeCount: data.modifyFreeCount,
          otherCount: data.otherCount,
          realname: data.realname
        }
      });
    },
    //导出数据
    out_simulation() {
      console.log("导出");
      let that = this;
      that.loading1 = true;
      this.datas1 = "";
      this.conditions.pageNo = 1;
      this.conditions.pageSize = this.datas.total;
      console.log(this.datas.total);
      // this.conditions1.condition.startTime = this.startTime;
      // this.conditions1.condition.endTime = this.endTime;
      // this.conditions1.condition.times = this.social.join();
      // this.conditions1.condition.parkCode = this.conditions.condition.parkCode;
      axios1
        .request({
          url: url.url.search_operate_log_list,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.loading1 = false;
          if (res.data.data.list.length == 0) {
            this.$Notice.error({
              title: "系统提示",
              desc: "导出数据不能为空"
            });
          } else {
            let datas = res.data.data.list.map(res => {
              // console.log(res);
              res.source =
                res.source == 1
                  ? "网页+APP"
                  : res.source == 2
                  ? "网页"
                  : res.source == 3
                  ? "APP"
                  : "";
              return res;
            });
            // console.log(datas);
            let columns = this.columns.filter(function(col, index) {
              return index < 7;
            });
            // console.log(columns);

            this.$refs.currentRowTable.exportCsv({
              filename: "操作记录信息",
              columns: columns,
              original: false,
              data: datas
            });
            this.conditions.pageSize = 10;
          }
        });
    }
    //删除任务
    // success_delete() {
    //   this.loading_delete = true;
    //   axios
    //     .request({
    //       url: url.url.delete_task_info,
    //       params: {
    //         id: this.id_delete
    //       },
    //       method: "delete"
    //     })
    //     .then(res => {
    //       console.log(res);
    //       if (res.data.code == 200) {
    //         this.$Notice.success({
    //           title: "系统提示",
    //           desc: res.data.message
    //         });
    //         this.sear();
    //       } else {
    //         this.$Notice.error({
    //           title: "系统提示",
    //           desc: res.data.message
    //         });
    //       }
    //       this.loading_delete = false;
    //       this.show_delete = false;
    //     });
    // },
    // //取消删除
    // canceles_delete() {
    //   this.show_delete = false;
    //   this.loading_delete = false;
    //   this.id_delete = "";
    // },
    // //删除
    // delete(id) {
    //   console.log("删除");
    //   console.log(id);
    //   this.show_delete = true;
    //   this.id_delete = id;
    // }
  }
};
</script>