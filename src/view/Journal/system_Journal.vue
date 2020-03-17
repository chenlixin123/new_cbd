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
  height: 30%;
  margin: 0 auto;
  background: white;
}
.top {
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  margin-left: 2.5%;
  background: white;
  color: white;
  outline: none;
  border: none;
}
.button2 {
  width: 40%;
  height: 100%;
}
.button3 {
  width: 40%;
  height: 100%;
  background: white;
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
  width: 22%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  position: relative;
}
.text {
  width: 20%;
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
</style>
<template>
  <!-- 系统日志 -->
  <div class="box">
    <div class="search">
      <div class="top">
        <div class="input1">
          <div class="text">操作类别</div>：
          <i-select v-model="operateCategory" style="width:200px;" clearable>
            <i-option
              v-for="(item,index) in operateCategorys"
              :key="index"
              :value="item.value"
            >{{ item.label }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">操作人</div>：
          <i-input v-model="createBy" placeholder="请输入账号名" style="width:200px;"></i-input>
        </div>
        <div class="input1">
          <div class="text">车牌号</div>：
          <i-input v-model="plateNo" placeholder="请输入车牌号" style="width:200px;"></i-input>
        </div>
        <div class="input1">
          <div class="text">车位号</div>：
          <i-select v-model="stallName" filterable style="width:200px;" clearable>
            <i-option
              v-for="(item,index) in stallNames"
              :key="index"
              :value="item.stallName"
            >{{ item.stallName }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">租用公司</div>：
          <i-input v-model="company" placeholder="请输入公司名" style="width:200px;"></i-input>
        </div>
        <div class="input2">
          <div class="text">时间段</div>：
          <DatePicker
            type="daterange"
            format="yyyy-MM-dd"
            size="default"
            v-model="timeslot"
            placeholder="请选择要查询的时间"
            style="width:200px;font-size:0.6vw;"
            :options="options1"
          ></DatePicker>
        </div>
      </div>
      <div class="bottom">
        <button class="button1"></button>
        <div class="button_right">
          <button class="button3">导出</button>
          <button class="button2" @click="sear">查询</button>
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
        :page-size="condition.pageSize"
        :current="pages"
        @on-change="search"
        class="page"
      />
      <div class="tab">
        <div>跳至</div>
        <Input @input="number" v-model="numbers" style="width: 50px" placeholder="1" />
        <div>页</div>
        <Button style="margin-left:20px;font-size:0.7vw;" @click="jump">跳转</Button>
      </div>
    </div>
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
export default {
  data() {
    return {
      totalPages: "",
      options1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      plateNo: "", //车牌号
      createBy: "", //操作人
      timeslot: "", //时间段
      startDate: "", //开始日期
      endDate: "", //结束日期
      module_ellipsis: [],
      modal10: false,
      loadinges: true,
      spinShow: false,
      loadingText: "数据加载中...",
      pages: 1,
      numbers: "",
      condition: {
        start: 0,
        pageSize: 20,
        filterJson: {
          filters: []
        }
      },
      data: "",
      show: "",
      floor: "", //楼层
      floors: "",
      stallName: "", //车位号
      stallNames: "",
      company: "", //租用公司
      operateCategory: "", //操作类别
      operateCategorys: [
        {
          value: "系统登录",
          label: "系统登录"
        },

        {
          value: "系统退出",
          label: "系统退出"
        },
        {
          value: "车位授权",
          label: "车位授权"
        },
        {
          value: "用户授权",
          label: "用户授权"
        }
      ],
      mode: "", //出租状态
      modes: [
        {
          value: "1",
          label: "用户"
        },
        {
          value: "2",
          label: "管理员"
        },
        {
          value: "3",
          label: "系统"
        }
      ],
      plateNos: "", //车牌号
      columns: [
        {
          title: "操作时间",
          align: "center",
          //   sortable: 'custom',
          key: "createTime",
          minWidth: 150,
          render: (h, params) => {
            let data = url.TT(params.row.createTime);
            return h("span", data);
          }
        },
        {
          title: "操作人",
          align: "center",
          //   sortable: 'custom',
          key: "createBy",
          minWidth: 70
        },
        {
          title: "操作对象",
          align: "center",
          //   sortable: 'custom',
          key: "operateObj",
          minWidth: 150
        },
        {
          title: "操作类别",
          align: "center",
          minWidth: 90,
          render: (h, params) => {
            let state = params.row.operateCategory;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state
            );
          }
        },
        {
          title: "操作方式",
          align: "center",
          minWidth: 90,
          render: (h, params) => {
            // console.log(params.row.operateType);
            let state = params.row.operateType;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state == 1
                ? "新增"
                : state == 2
                ? "更新"
                : state == 3
                ? "关闭"
                : state == 4
                ? "开启"
                : state == 5
                ? "清空"
                : state == 6
                ? "通过"
                : state == 7
                ? "取消"
                : ""
            );
          }
        },
        {
          title: "属性",
          align: "center",
          minWidth: 100,
          render: (h, params) => {
            // console.log(params.row.changeProperty);
            let state = params.row.changeProperty;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state
            );
          }
        },
        {
          title: "操作内容",
          align: "left",
          //   sortable: 'custom',
          key: "postChange",
          minWidth: 150
        }
      ],
      data: { total: 0, list: [] }
    };
  },
  created() {
    this.list();
    this.floores();
  },
  watch: {
    timeslot(val, oldval) {
      if (val[0] == "") {
        this.startDate = "";
        this.endDate = "";
      } else {
        this.startDate = url.time(val[0]);
        this.endDate = url.time(val[1]) + " " + "23:59:59";
      }
    },
    floor(val, oldVal) {
      //普通的watch监听
      this.floors.map(res => {
        if (val == res.floorName) {
          this.stallNamea = res.stallSelect;
        }
      });
    }
  },
  methods: {
    list() {
      console.log("列表");
      let data = { property: "preId", value: localStorage.getItem("preId") };
      this.condition.filterJson.filters.push(data);
      axios
        .request({
          url: url.url.system_list,
          params: {
            start: 0,
            pageSize: 20,
            filterJson: this.condition.filterJson
          },
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.data = res.data;
          this.totalPages = res.data.totalPages;
          this.loadinges = false;
        });
    },
    //楼层车位数据
    floores() {
      let preId = localStorage.getItem("preId");
      console.log(preId);
      axios
        .request({
          url: url.url.floor,
          params: {
            preId
          },
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.floors = res.data;
          res.data.map(res => {
            if (this.stallNames.length == 0) {
              console.log(res.stallSelect);
              this.stallNames = res.stallSelect;
            } else {
              console.log("2222222222");
              console.log(this.stallNames);
              this.stallNames = this.stallNames.concat(res.stallSelect);
            }
          });
        });
    },
    //搜索
    sear() {
      let that = this;
      this.loadinges = true;
      console.log("查询");
      that.loadingText = "数据加载中...";
      console.log(that.operateCategory); //操作类别
      console.log(that.createBy); //操作人
      console.log(that.plateNo); //车牌号
      console.log(that.stallName); //车位号
      console.log(that.company); //租用公司
      console.log(that.startDate); //开始日期
      console.log(that.endDate); //结束日期
      this.data = "";
      this.condition.filterJson.filters = [];
      console.log(this.condition.filterJson.filters);
      let data = { property: "preId", value: localStorage.getItem("preId") };
      this.condition.filterJson.filters.push(data);
      if (this.operateCategory) {
        let data = { property: "operateCategory", value: this.operateCategory };
        this.condition.filterJson.filters.push(data);
      }
      if (this.createBy) {
        let data = { property: "createBy", value: this.createBy };
        this.condition.filterJson.filters.push(data);
      }
      if (this.plateNo) {
        let data = { property: "plateNo", value: this.plateNo };
        this.condition.filterJson.filters.push(data);
      }
      if (this.stallName) {
        let data = { property: "stallName", value: this.stallName };
        this.condition.filterJson.filters.push(data);
      }
      if (this.company) {
        let data = { property: "company", value: this.company };
        this.condition.filterJson.filters.push(data);
      }
      if (this.startDate) {
        let data = { property: "startDate", value: this.startDate };
        this.condition.filterJson.filters.push(data);
      }
      if (this.endDate) {
        let data = { property: "endDate", value: this.endDate };
        this.condition.filterJson.filters.push(data);
      }
      let start = this.condition.start;
      let pageSize = this.condition.pageSize;
      let filterJson = this.condition.filterJson;
      axios
        .request({
          url: url.url.system_list,
          params: {
            start,
            pageSize,
            filterJson
          },
          method: "post"
        })
        .then(res => {
          console.log(res);
          if (res.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.numbers = 1;
            this.data = res.data;
          }

          this.loadinges = false;
        });
      console.log(this.condition.filterJson.filters);
    },
    //跳转第几页
    search(data) {
      this.data = "";
      this.loadinges = true;
      console.log(data - 1);
      this.pages = data;
      // this.data.total = data;
      let that = this;
      let pageSize = 20;
      let start = (data - 1) * pageSize;
      let filterJson = this.condition.filterJson;
      axios
        .request({
          url: url.url.system_list,
          params: {
            start,
            pageSize,
            filterJson
          },
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers = data;
          if (res.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data;
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
    jump() {
      console.log(this.numbers);
      this.data = "";
      this.loadinges = true;
      let that = this;
      let pageSize = 20;
      // let datas = { property: "preId", value: localStorage.getItem("preId") };
      // this.condition.filterJson.filters.push(datas);
      let filterJson = this.condition.filterJson;
      if (this.numbers == "") {
        this.numbers = 1;
      } else if (this.numbers > this.totalPages) {
        this.numbers = this.totalPages;
      }
      let start = (this.numbers - 1) * pageSize;
      axios
        .request({
          url: url.url.system_list,
          params: {
            start,
            pageSize,
            filterJson
          },
          method: "post"
        })
        .then(res => {
          that.pages = Number(this.numbers);
          console.log(res);
          if (res.data.list.length == 0) {
            this.loadingText = "";
          } else {
            this.data = res.data;
          }
          this.loadinges = false;
        });
    }
  }
};
</script>