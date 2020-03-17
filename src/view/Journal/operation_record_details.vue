<style scoped>
.box {
  width: 100%;
  height: 100%;
  min-width: 980px;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
  color: #666;
}
.search {
  width: 99%;
  height: 5%;
  margin: 0 auto;
  margin-top: 0.5%;
  /* background: white; */
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
}
.button1,
.button2 {
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
  font-size: 0.9vw;
  cursor: pointer;
}
.button_right {
  width: 23%;
  height: 60%;
  margin-right: 2%;
  display: flex;
  justify-content: space-between;
}
.button_right1 {
  width: 100%;
  height: 60%;
  /* margin-right: 2%; */
  display: flex;
  justify-content: flex-end;
}
.button4 {
  width: 10%;
  min-width: 100px;
  height: 100%;
  border: none;
  outline: none;
  background: #f66913;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 0.9vw;
  cursor: pointer;
  margin-right: 2%;
}
.button_left {
  width: 25%;
  height: 60%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  margin-left: 2.5%;
}
.button_left1 {
  width: 20%;
  height: 60%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  margin-left: 2.5%;
}
.button1 {
  width: 25%;
  height: 100%;
}
.table_line {
  width: 99%;
  min-height: 440px;
  margin: 0 auto;
  background: white;
  margin-top: 10px;
  text-align: right;
  padding-right: 2%;
}
.table_line_top {
  width: 100%;
  padding-right: 2%;
}
.button3 {
  width: 9.5%;
  /* height: 100%; */
  background: #f66913;
  min-width: 100px;
  border: none;
  outline: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 0.9vw;
  cursor: pointer;
  margin-top: 10px;
  /* margin-right: 2.3%; */
}
.button3:hover {
  width: 9.5%;
  /* height: 100%; */
  background: #f66913;
  min-width: 100px;
  border: none;
  outline: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 0.9vw;
  cursor: pointer;
}
.button2 {
  width: 40%;
  height: 100%;
  color: white;
  background: white;
}
.button2:hover {
  width: 40%;
  height: 100%;
  background: white;
  color: white;
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
.input2 {
  width: 45%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  position: relative;
  /* border: 1px solid red; */
}
.text {
  width: 25%;
  min-width: 60px;
  box-sizing: border-box;
}
.texts {
  width: 13%;
  min-width: 60px;
  box-sizing: border-box;
  /* border: 1px solid green; */
}
.empower {
  width: 99%;
  height: 20%;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 1% 2% 1% 2%;
  border-radius: 5px;
  position: relative;
}
.empower_title {
  margin-top: 1%;
  width: 8%;
  min-width: 90px;
  height: 12%;
  display: flex;
  align-items: center;
}
.empower_titleleft {
  width: 100%;
  text-align-last: justify;
}
.empower_content {
  width: 100%;
  margin: 2% 0 0 2%;
}
.content_top,
.content_bottom {
  width: 100%;
  height: 20px;
  display: flex;
}
.content_bottom {
  margin-top: 1%;
}
.content_top1 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.content_top2 {
  width: 40%;
  min-height: 100px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* align-items: center;
  justify-content: flex-start; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border: 1px solid; */
}
.label {
  display: inline-block;
  min-width: 30%;
  margin-right: 2%;
  font-weight: bold;
  text-align-last: justify;
}
.label1 {
  display: inline-block;
  min-width: 15%;
  margin-right: 2%;
  font-weight: bold;
  text-align-last: justify;
}
.mansion {
  border: 1px solid #c5c8ce;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0px 6px;
  margin-right: 4px;
  color: #808695;
  /* display: inline-block; */
}
.empower_btns {
  width: 100%;
  height: 25%;
  text-align: right;
  position: absolute;
  right: 2%;
  bottom: 10%;
}
.empower_btn {
  width: 9.5%;
  min-width: 100px;
  height: 100%;
  border: none;
  outline: none;
  background: #515a6e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.plateNo {
  border: 1px solid;
  height: 20px;
  color: #9ea7b4;
  line-height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 7px;
  margin-right: 10px;
}
.demo-spin-container {
  position: absolute;
  top: 50%;
  right: 50%;
  border: 1px solid #eee;
}
.table {
  width: 100%;
  min-width: 580px;
  min-height: 580px;
  padding-top: 1%;
  padding-bottom: 2%;
  margin: 0 auto;
  margin-top: 0.5%;
  background: white;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 2%;
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
}
.module {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.contents {
  width: 33%;
  background: white;
  position: fixed;
  top: 20%;
  right: 30%;
  border-radius: 5px;
  padding-bottom: 20px;
}
.module_title {
  width: 100%;
  height: 10%;
  margin-top: 5%;
  margin-left: 5%;
}
.tops1 {
  width: 90%;
  margin: 0 auto;
  margin-top: 3%;
  border-radius: 5px;
  padding-left: 5%;
  padding-bottom: 3%;
}
.bottoms {
  width: 80%;
  height: 30px;
  margin: 0 auto;
  margin-top: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.save {
  width: 40%;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f66913;
  outline: none;
  cursor: pointer;
}
.save:hover {
  width: 40%;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f66913;
  outline: none;
  cursor: pointer;
}
.cancels {
  width: 40%;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #545c6a;
  outline: none;
  cursor: pointer;
}
.cancels:hover {
  width: 40%;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #545c6a;
  outline: none;
  cursor: pointer;
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
>>> .ivu-btn-primary {
  background: #f66913;
  border: 1px solid #f66913;
}
>>> .ivu-btn {
  color: white;
  /* background: #f66913; */
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
>>> .ivu-switch-checked {
  border: 1px solid #f66913;
  background: #f66913;
}
>>> .ivu-btn-primary {
  background: #f66913;
  border: 1px solid #f66913;
}
::-webkit-input-placeholder {
  color: rgba(21, 30, 38, 0.35);
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
.jump {
  width: 30%;
  background: #f66913;
  outline: none;
  border: none;
}
.jump:hover {
  width: 30%;
  background: #f66913;
  outline: none;
  border: none;
}
.add {
  width: 30%;
  height: 23px;
  display: inline-block;
  line-height: 15px;
  text-align: center;
  border: 1px dashed #657180;
  color: #657180;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 4px;
  font-weight: 200;
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

.simulation_btn_box {
  width: 99%;
  height: 35px;
  margin: 0 auto;
  margin-top: 1.5%;
  text-align: right;
  margin-bottom: 3%;
  /* border: 1px solid red; */
}
.simulation_btn {
  width: 10%;
  height: 100%;
  background: #f66913;
  color: white;
}
.simulation_btn:hover {
  width: 10%;
  height: 100%;
  background: #f66913;
  color: white;
}
</style>
<template>
  <div class="box">
    <div class="empower">
      <div class="empower_title">
        <div class="empower_titleleft">账号信息</div>
      </div>
      <!-- 车位信息模块 -->
      <div class="empower_content">
        <div class="content_top">
          <div class="content_top1">
            <label class="label" for>单位名称</label>：
            <div>{{data.company}}</div>
          </div>
          <div class="content_top1">
            <label class="label" for>账号</label>：
            <!-- <div>{{ins.length == 0 ? '' : ins.length}}</div> -->
            <div>{{data.accountName}}</div>
          </div>
          <div class="content_top1">
            <label class="label" for>姓名</label>：
            <!-- <div>{{outs.length == 0 ? '' : outs.length}}</div> -->
            <div>{{data.realname }}</div>
          </div>
          <div class="content_top2">
            <label class="label1" for>登录次数</label>：
            <!-- <span class="mansion" v-for="(item,index) in data.edifices" :key="index">{{item}}</span> -->
            <span>{{data.loginCount}}</span>
          </div>
        </div>
        <div class="content_bottom">
          <div class="content_top1">
            <label class="label" for>修改空位次数</label>：
            <div>{{data.modifyFreeCount}}</div>
          </div>
          <div class="content_top1">
            <label class="label" for>其他操作</label>：
            <div>{{data.otherCount}}</div>
          </div>
          <!-- <div class="content_top1">
            <label class="label" for></label>：
            <div>{{data.bindStallNumber}}</div>
          </div>-->
          <!-- <div class="content_top1">
            <label class="label" for>已绑定车牌</label>：
            <div>{{data.bindPlateNumber}}</div>
          </div>-->
        </div>
      </div>

      <div class="empower_btns">
        <button class="empower_btn" @click="back">返回</button>
      </div>
    </div>
    <!-- 表格模块 -->
    <div class="table_line">
      <!-- <div class="table_line_top"> -->
      <!-- <Button class="button3" :loading="loading1" @click="out_simulation">导出</Button> -->
      <!-- </div> -->
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
    <div class="demo-spin-container">
      <Spin fix size="large" v-if="spinShow"></Spin>
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
      plateNumbers: [],
      parkCodes: "",
      startTime: "",
      endTime: "",
      simulation: false,
      simulation_show: "true",
      social: [],
      id_delete: "",
      show_delete: false,
      loading_delete: false,
      car_loading: false,
      module_ellipsis: [],
      modal10: false,
      plate_id: 0,
      svn: false,
      disableds: true, //弹出框下拉框禁用启用
      plate: {
        id: 0,
        parkCode: "",
        plateFlag: 0,
        plateNumber: "",
        stallCode: ""
      },
      ins: [], //入口
      outs: [], //出口
      carname: "", //车位号
      carnames: [],
      module_carname: "", //弹出框车位号
      module_carnames: "",
      licensePlate: "", //车牌号
      plateNo: [],
      loading1: false,
      show: false,
      values: "",
      floor_name: "",
      show1: true,
      values1: "",
      loadinges: false,
      loadinges1: false,
      loadingText: "数据加载中...",
      loadingText1: "数据加载中...",
      spinShow: true,
      numbers: "",
      numbers1: "",
      data: {},
      pages: 1,
      datas: "",
      datas1: "",
      stallId: "", //车位ID
      start: 0, //开始页：从0开始
      pageSize: 10, //每页显示多少条
      filterJson: {},
      conditions: {
        condition: {
          accountName: null,
          company: null,
          endTime: null,
          realname: null,
          source: null,
          startTime: null
        },
        pageNo: 1,
        pageSize: 10
      },
      columns: [
        {
          title: "操作时间",
          align: "center",
          //   sortable: 'custom',
          key: "createTime",
          render: (h, params) => {
            // console.log(params.row.createTime);
            function renderTime(date) {
              var dateee = new Date(date).toJSON();
              return new Date(+new Date(dateee) + 8 * 3600 * 1000)
                .toISOString()
                .replace(/T/g, " ")
                .replace(/\.[\d]{3}Z/, "");
            }
            return h("div", renderTime(params.row.createTime));
          }
        },
        {
          title: "登录方式",
          align: "center",
          //   sortable: 'custom',
          key: "source",
          render: (h, params) => {
            let data =
              params.row.source == 1
                ? "网页+APP"
                : params.row.source == 2
                ? "网页"
                : params.row.source == 3
                ? "APP"
                : "";
            return h("div", data);
          }
        },
        {
          title: "操作内容",
          align: "center",
          //   sortable: 'custom',
          key: "content"
        },
        {
          title: "备注",
          align: "center",
          //   sortable: 'custom',
          key: "remark"
        }
      ],
      datas: { total: 0, list: [], loading: false },
      datas1: { total: 0, list: [], loading: false }
    };
  },
  created() {
    // console.log(sessionStorage.getItem("simulation_show"));
    console.log(this.$route.query);
    // console.log(this.conditions.condition);
    // if (sessionStorage.getItem("simulation_show")) {
    //   this.simulation_show = sessionStorage.getItem("simulation_show");
    // }
    this.loadingText = "";
    this.conditions.condition.accountName = this.$route.query.accountName;
    this.conditions.condition.source = this.$route.query.source;
    this.conditions.condition.startTime = this.$route.query.startTime;
    this.conditions.condition.endTime = this.$route.query.endTime;
    this.data.company = this.$route.query.company;
    this.data.loginCount = this.$route.query.loginCount;
    this.data.modifyFreeCount = this.$route.query.modifyFreeCount;
    this.data.otherCount = this.$route.query.otherCount;
    this.data.realname = this.$route.query.realname;
    this.data.accountName = this.$route.query.accountName;
    this.sear();
  },
  methods: {
    //查询
    sear() {
      let that = this;
      this.loadinges = true;
      this.datas = "";
      this.conditions.pageNo = 1;
      console.log(this.conditions);
      axios1
        .request({
          url: url.url.search_operate_detail_info,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          this.numbers = 1;
          this.pages = Number(1);
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
            this.spinShow = false;
            this.loadinges = false;
          } else {
            console.log(res);
            this.spinShow = false;
            this.loadinges = false;
            this.datas = res.data.data;
          }
        });
    },
    //导出
    out() {
      console.log("导出");
      let that = this;
      that.loading1 = true;
      this.conditions.pageSize = 1000;
      axios1
        .request({
          url: url.url.search_plate,
          data: this.conditions,
          method: "post"
        })
        .then(res => {
          console.log(res);
          that.spinShow = false;
          if (res.data.data.list.length == 0) {
            this.loadingText = "";
            that.loading1 = false;
            this.$Notice.error({
              title: "系统提示",
              desc: "导出数据不能为空"
            });
          } else {
            let datas = res.data.data.list.map(res => {
              // console.log(res);
              res.plateSource =
                res.plateSource == 1
                  ? "添加"
                  : res.plateSource == 2
                  ? "导入"
                  : res.plateSource == 3
                  ? "模拟"
                  : "";
              res.plateNumber = res.plateNumber.replace(",", "，");
              return res;
            });
            let columns = this.columns.filter(function(col, index) {
              return index < 3;
            });

            this.$refs.currentRowTable.exportCsv({
              filename: "车位信息",
              columns: columns,
              original: false,
              data: datas
            });
            that.loading1 = false;
            this.conditions.pageSize = 10;
          }
        });
    },
    //批量导入
    authorization() {
      console.log("批量导入");
      this.$router.push({
        path: "/car_administration_excel",
        query: {
          parkCode: this.data.parkCode,
          id: this.data.id
        }
      });
    },
    //下拉输入创建车位
    handleCreate1(val) {
      console.log(val);
      this.module_carnames.push({
        stallCode: val
      });
    },
    //添加车位
    add() {
      console.log("添加车位");
      this.disableds = true;
      this.show = true;
    },
    //启用
    enableParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.on_off_plate,
          params: {
            id: id,
            plateFlag: 1
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
          } else {
            this.$Notice.error({
              title: "系统提示",
              desc: res.data.message
            });
            this.lists();
          }
        });
    },
    //禁用
    disabledParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.on_off_plate,
          params: {
            id: id,
            plateFlag: 0
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
          } else {
            this.$Notice.error({
              title: "系统提示",
              desc: res.data.message
            });
            this.lists();
          }
        });
    },
    //确定
    save() {
      if (this.show1 == false) {
        let str = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领])|(使[0-9]{6}))$/;
        let sv = str.test(this.values1);
        if (sv) {
          if (this.plateNo.length == 0) {
            console.log("11111");
            this.show1 = true;
            this.plateNo.push(this.values1);
            this.values1 = "";
          } else {
            console.log("2222222222");
            this.svn = false;
            this.plateNo.map(res => {
              // console.log(res);
              res = res.replace(/\s*/g, "");
              if (res == this.values1) {
                this.$Message.warning("车牌号已存在,请勿重复添加");
                this.svn = true;
              }
            });
            if (this.svn != true) {
              this.show1 = true;
              this.plateNo.push(this.values1);
              this.values1 = "";
            }
          }
        } else {
          this.$Message.warning("请添写正确的车牌号");
        }
      } else {
        if (!this.module_carname) {
          this.$Message.warning("请选择车位号");
        } else if (this.plateNo.length == 0) {
          this.$Message.warning("请添加车牌号");
        } else {
          this.plate.id = 0;
          this.plate.parkCode = this.data.parkCode;
          this.plate.plateFlag = 1;
          this.plate.plateNumber = this.plateNo.join(",");
          this.plate.stallCode = this.module_carname;
          this.car_loading = true;
          // console.log(this.plate);
          console.log(this.disableds);
          if (this.disableds == true) {
            console.log("走新增");
            axios1
              .request({
                url: url.url.save_plate,
                data: this.plate,
                method: "post"
              })
              .then(res => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$Notice.success({
                    title: "系统提示",
                    desc: res.data.message
                  });
                  this.lists();
                } else {
                  this.$Notice.error({
                    title: "系统提示",
                    desc: res.data.message
                  });
                }
                this.car_loading = false;
                this.module_carname = "";
                this.plateNo = [];
                this.values1 = "";
                this.show = false;
              });
          } else {
            console.log("走编辑");
            console.log(this.plate);
            this.plate.id = this.plate_id;
            axios1
              .request({
                url: url.url.update_plate,
                data: this.plate,
                method: "post"
              })
              .then(res => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$Notice.success({
                    title: "系统提示",
                    desc: res.data.message
                  });
                  this.lists();
                } else {
                  this.$Notice.error({
                    title: "系统提示",
                    desc: res.data.message
                  });
                }
                this.car_loading = false;
                this.module_carname = "";
                this.plateNo = [];
                this.values1 = "";
                this.show = false;
              });
          }
        }
      }
    },
    //取消
    cancels() {
      console.log("取消");
      if (this.show1 == false) {
        this.show1 = true;
      } else {
        this.show = false;
        this.module_carname = "";
        this.plateNo = [];
        this.values1 = "";
        this.car_loading = false;
      }
    },
    //添加车牌
    adds() {
      // console.log(this.module_carname);
      if (this.module_carname) {
        this.show1 = false;
      } else {
        this.$Message.warning("请选择车位号");
      }
    },
    //输入车牌号
    ss1(obj) {
      this.values1 = obj.toUpperCase();
    },
    ss2(obj) {
      this.licensePlate = obj.toUpperCase();
    },
    //编辑
    edit(data) {
      console.log(data);
      // console.log(data.plateNumber.split(","));
      this.plate_id = data.id;
      this.plateNo = data.plateNumber.split(",");
      this.disableds = false;
      this.module_carname = data.stallCode;
      this.show = true;
    },
    //删除
    del(id) {
      console.log(id);
      this.show_delete = true;
      this.id_delete = id;
    },
    success_delete() {
      this.loading_delete = true;

      axios
        .request({
          url: url.url.delete_plate,
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
            this.lists();
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
    search(data1) {
      let that = this;
      this.loadinges = true;
      this.loadingText = "数据加载中...";
      console.log(data1);
      that.conditions.pageNo = data1;
      axios1
        .request({
          url: url.url.search_operate_detail_info,
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
          url: url.url.search_operate_detail_info,
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
    //返回
    back() {
      if (this.simulation == true) {
        this.simulation = false;
        this.startTime = "";
        this.endTime = "";
        this.social = [];
        this.datas1 = [];
      } else {
        this.$router.go(-1);
      }
    },
    //模拟导出
    out_simulation() {
      console.log("导出");
      if (this.startTime) {
        this.startTime = url.time(this.startTime);
      } else {
        this.$Message.warning("请选择起始时间");
        return;
      }
      if (this.endTime) {
        this.endTime = url.time(this.endTime);
      } else {
        this.$Message.warning("请选择截止时间");
        return;
      }
      if (new Date(this.startTime) > new Date(this.endTime)) {
        this.$Message.warning("起始时间不能大于截止时间");
        return;
      }
      if (this.social.length == 0) {
        this.$Message.warning("请选择到访次数");
        return;
      }
      let that = this;
      this.datas1 = "";
      this.conditions1.pageNo = 1;
      this.conditions1.pageSize = 100000;
      this.conditions1.condition.startTime = this.startTime;
      this.conditions1.condition.endTime = this.endTime;
      this.conditions1.condition.times = this.social.join();
      this.conditions1.condition.parkCode = this.conditions.condition.parkCode;
      axios1
        .request({
          url: url.url.search_analog_plate,
          data: this.conditions1,
          method: "post"
        })
        .then(res => {
          console.log(res);
          if (res.data.data.list.length == 0) {
            this.$Notice.error({
              title: "系统提示",
              desc: "导出数据不能为空"
            });
          } else {
            let datas = res.data.data.list.map(res => {
              console.log(res);
              res.startTime = res.startTime + "-" + res.endTime;
              res.type = res.type == 0 ? "临停" : res.type == 1 ? "固定" : "";
              return res;
            });
            // console.log(datas);
            let columns = this.columns1.filter(function(col, index) {
              return index > 0;
            });
            // console.log(columns);

            this.$refs.currentRowTable.exportCsv({
              filename: "模拟车位信息",
              columns: columns,
              original: false,
              data: datas
            });
            this.conditions1.pageSize = 10;
          }
        });
    }
  }
};
</script>
