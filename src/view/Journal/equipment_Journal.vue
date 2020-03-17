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
  background: white;
  color: white;
  border: none;
  outline: none;
}
.input1 {
  width: 15%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  /* margin-right: 2%; */
  position: relative;
  /* border: 1px solid red; */
}
.input2 {
  width: 22%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  /* margin-right: 2%; */
  position: relative;
  /* border: 1px solid; */
}
.text {
  width: 45%;
  min-width: 80px;
  box-sizing: border-box;
  text-align-last: justify;
  /* border: 1px solid; */
}
.text1 {
  width: 15%;
  min-width: 60px;
  box-sizing: border-box;
  text-align-last: justify;
  /* border: 1px solid; */
}
.text2 {
  width: 30%;
  min-width: 60px;
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
</style>
<template>
  <!-- 设备日志 -->
  <div class="box">
    <!-- 搜索模块 -->
    <div class="search">
      <div class="top">
        <div class="input2">
          <div class="text1">时间</div>：
          <!-- <Input style="width:300px;" v-model="tableList.condition.accountName" /> -->
          <DatePicker
            type="daterange"
            placement="bottom-start"
            placeholder="请选择要查询的时间"
            :options="options4"
            style="width: 100%;font-size:0.7vw;"
            @on-change="change"
          ></DatePicker>
        </div>
        <div class="input1">
          <div class="text">设备类型</div>：
          <i-select v-model="tableList.condition.deviceType" style="width:100%" clearable>
            <i-option
              v-for="(item,index) in deviceType"
              :key="index"
              :value="item.id"
            >{{ item.value }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">日志类型</div>：
          <i-select v-model="tableList.condition.onlineStatus" style="width:100%" clearable>
            <i-option
              v-for="(item,index) in onlineStatus"
              :key="index"
              :value="item.id"
            >{{ item.value }}</i-option>
          </i-select>
        </div>
        <div class="input2">
          <div class="text2">设备说明</div>：
          <Input style="width:100%;" v-model="tableList.condition.remark" placeholder="请输入设备说明" />
        </div>
      </div>
      <div class="bottom">
        <button class="button1"></button>
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
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  data() {
    return {
      options4: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      deviceType: [
        {
          id: 1,
          value: "一体机"
        },
        {
          id: 2,
          value: "诱导屏"
        }
      ],
      onlineStatus: [
        {
          id: 1,
          value: "在线"
        },
        {
          id: 0,
          value: "离线"
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
          deviceCode: "", //设备编号
          deviceType: "", //设备类型
          endTime: "", //结束时间
          onlineStatus: "", //状态
          remark: "", //设备备注信息
          startTime: "" //开始时间
        },
        pageNo: 1,
        pageSize: 10
      },
      data: "",
      show: "",
      columns: [
        {
          title: "时间",
          align: "center",
          //   sortable: 'custom',
          key: "createTime",
          tooltip: "true",
          minWidth: 140,
          render: (h, params) => {
            let parking = params.row;
            if (parking.createTime) {
              parking.createTime = url.TT(parking.createTime);
            } else {
              parking.createTime = "";
            }
            // console.log(parking.loginTime);
            return h("div", {}, parking.createTime);
          }
        },
        {
          title: "设备类型",
          align: "center",
          //   sortable: 'custom',
          key: "deviceType",
          minWidth: 70,
          render: (h, params) => {
            let parking = params.row;
            let data = "";
            // console.log(parking);
            data =
              parking.deviceType == 1
                ? "一体机"
                : parking.deviceType == 2
                ? "诱导屏"
                : "";
            return h("div", {}, data);
          }
        },
        {
          title: "设备编号",
          align: "center",
          //   sortable: 'custom',
          key: "deviceCode",
          minWidth: 150
        },
        {
          title: "厂商ID",
          align: "center",
          //   sortable: 'custom',
          key: "factoryId",
          minWidth: 70
        },
        {
          title: "运营商",
          align: "center",
          //   sortable: 'custom',
          key: "operators",
          minWidth: 70
        },
        {
          title: "日志类型",
          align: "center",
          //   sortable: 'custom',
          key: "onlineStatus",
          minWidth: 70,
          render: (h, params) => {
            let parking = params.row;
            let data = "";
            // console.log(parking.onlineStatus);
            data =
              parking.onlineStatus == 1
                ? "在线"
                : parking.onlineStatus == 0
                ? "离线"
                : "";
            // console.log(parking.loginTime);
            return h("div", {}, data);
          }
        },
        {
          title: "设备说明",
          align: "center",
          //   sortable: 'custom',
          key: "remark",
          minWidth: 220
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
          url: url.url.search_device,
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
    //选择时间
    change(date) {
      console.log(date);
      if (date[0] != "") {
        this.tableList.condition.startTime = date[0] + " 23:59:59";
        this.tableList.condition.endTime = date[1] + " 00:00:00";
      } else {
        this.tableList.condition.startTime = date[0];
        this.tableList.condition.endTime = date[1];
      }
      // console.log(this.tableList.condition.startTime);
      // console.log(this.tableList.condition.endTime);
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
          url: url.url.search_device,
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
          url: url.url.search_device,
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
          url: url.url.search_device,
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