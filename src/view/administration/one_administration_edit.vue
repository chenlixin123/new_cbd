<style scoped>
.box {
  width: 100%;
  min-width: 900px;
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
.content {
  width: 99%;
  height: 48%;
  margin: 0 auto;
  background: white;
  padding-bottom: 1%;
}
.btn {
  width: 70%;
  min-width: 700px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.button1 {
  width: 20%;
  height: 40px;
  background: #f66913;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9vw;
}
.button1:hover {
  background: #f66913;
  color: white;
}
.button2 {
  width: 20%;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  background: #545c6a;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9vw;
}
.modules {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 1, 1, 0.5);
  z-index: 100;
}
.contentes {
  width: 33%;
  height: 25%;
  background: white;
  border-radius: 10px;
  position: fixed;
  top: 20%;
  right: 30%;
}
.content_top {
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
.content_bottom {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.success,
.canceles {
  width: 35%;
  height: 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9vw;
}
.success {
  background: #f66913;
  cursor: pointer;
}
.success:hover {
  background: #f66913;
  color: white;
}
.canceles {
  background: #545c6a;
  color: white;
  cursor: pointer;
}
.canceles:hover {
  background: #545c6a;
  color: white;
  cursor: pointer;
}
.demo-spin-container {
  position: absolute;
  top: 50%;
  right: 50%;
  border: 1px solid #eee;
}
input::-webkit-input-placeholder {
  color: #c5c8ce;
}
input::-moz-placeholder {
  color: #c5c8ce;
}
input:-moz-placeholder {
  color: #c5c8ce;
}
>>> .ivu-icon-ios-calendar-outline:before {
  display: none;
}
>>> .ivu-input-suffix {
  display: none;
}
input:-ms-input-placeholder {
  color: #c5c8ce;
}
.bottom {
  width: 100%;
  height: 100%;
  margin-top: 0.5%;
  padding-top: 2%;
}
.bottom1 {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 4%;
}
.watch {
  color: #f66913;
}
.span {
  display: inline-block;
}
.span1 {
  display: inline-block;
  min-width: 80px;
}
.total_data1 {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.total_data2 {
  width: 21%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
}
.total_data3 {
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
label {
  font-weight: bold;
}
.label1 {
  width: 31%;
  display: inline-block;
  text-align-last: justify;
  /* border: 1px solid; */
}
.label2 {
  width: 21%;
  display: inline-block;
  text-align-last: justify;
  /* border: 1px solid; */
}
.label3 {
  width: 28%;
  display: inline-block;
  text-align-last: justify;
  /* border: 1px solid red; */
}
.back {
  width: 10%;
  height: 50%;
  background: #545c6a;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-right: 2%;
  cursor: pointer;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div class="title_left">编辑一体机信息</div>
      <button class="back" @click="success2">返回</button>
    </div>

    <div class="content" v-if="spinShow == false">
      <div class="bottom">
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">一体机编码</label>：
            <Input v-model="cameraCode" style="width:60%;" :readonly="readonly" v-if="!readonly" />
            <span v-if="readonly">{{cameraCode}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">厂商ID</label>：
            <span class="span1">{{manufacturerid}}</span>
          </div>
          <div class="total_data2">
            <label for class="label3">固件版本</label>：
            <span class="span1">{{edition}}</span>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">网络类型</label>：
            <span class="span">{{network_type}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">状态</label>：
            <span class="span1">{{state}}</span>
          </div>
          <div class="total_data2">
            <label for class="label3">信号强度</label>：
            <span class="span1">{{signal_intensity}}</span>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">SIM卡号</label>：
            <Input style="width:60%" v-model="sim" />
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">运营商</label>：
            <i-select v-model="operators1" filterable style="width:60%" clearable>
              <i-option
                v-for="(item,index) in operators"
                :key="index"
                :value="item.value"
              >{{ item.value }}</i-option>
            </i-select>
          </div>
        </div>

        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">车场名称</label>：
            <i-select
              v-model="carname"
              filterable
              style="width:60%"
              clearable
              @on-change="change"
              v-if="!ss"
            >
              <i-option
                v-for="(item,index) in carnames"
                :key="index"
                :value="item.parkCode"
              >{{item.parkName}}</i-option>
            </i-select>
            <span v-if="ss">{{carname1}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:red;">*</label>
            <label for class="label2">出入口</label>：
            <i-select v-model="inout" filterable style="width:60%" clearable v-if="!ss">
              <i-option
                v-for="(item,index) in inouts"
                :key="index"
                :value="item.gateCode"
              >{{ item.gateDes }}</i-option>
            </i-select>
            <span v-if="ss">{{inout1}}</span>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">一体机描述</label>：
            <Input style="width:60%" v-model="describe" />
          </div>
          <div class="total_data2">
            <label for style="color:red;">*</label>
            <label for class="label2">序号</label>：
            <i-select v-model="serial" filterable style="width:60%;" clearable>
              <i-option
                v-for="(item,index) in serials"
                :key="index"
                :value="item.value"
              >{{ item.value }}</i-option>
            </i-select>
          </div>
        </div>
      </div>
    </div>

    <div v-if="spinShow == false" class="btn">
      <Button class="button1" @click="Preservation" :loading="loading1">保存</Button>
      <button class="button2" @click="cancel">取消</button>
    </div>

    <div class="modules" v-if="show2">
      <div class="contentes">
        <div class="content_top">确定取消编辑？</div>
        <div class="content_bottom">
          <Button class="success" @click="success2" :loading="loading3">确定</Button>
          <Button class="canceles" @click="canceles2">取消</Button>
        </div>
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
      parkid: "",
      ss: false,
      floor: false,
      carname1: "",
      carname: "", //车场名称
      carnames: "",
      readonly: "", //启用禁用的开启
      spinShow: true,
      user_modile: "",
      show2: false,
      show3: false,
      show4: false,
      loading1: false,
      loading3: false,
      cameraCode: "", //一体机编码
      manufacturerid: "", //厂商ID
      edition: "", //固件版本
      network_type: "", //网络类型
      state: "", //状态
      signal_intensity: "", //信号强度
      sim: "",
      inout: "", //出入口
      inouts: "",
      inouts1: "",
      describe: "", //一体机描述
      serial: 1, //序号
      operators: [
        {
          value: "移动"
        },
        {
          value: "联通"
        },
        {
          value: "电信"
        }
      ],
      operators1: "",
      serials: [
        {
          value: 1
        },
        {
          value: 2
        },
        {
          value: 3
        },
        {
          value: 4
        },
        {
          value: 5
        },
        {
          value: 6
        }
      ]
    };
  },
  created() {
    console.log(this.$route.query);
    console.log(this.$route.query.ss);
    if (this.$route.query.ss) {
      this.carname = this.$route.query.parkCode;
      this.carname1 = this.$route.query.carname;
      this.inout = this.$route.query.gateCode;
      this.inout1 = this.$route.query.inout;
      this.readonly = false;
      this.spinShow = false;
      this.ss = true;
    } else {
      if (JSON.stringify(this.$route.query) != "{}") {
        console.log("不等于空");
        // console.log(this.$route.query.id);
        this.readonly = true;
        this.list();
      } else {
        console.log("新增");
        this.readonly = false;
        this.spinShow = false;
      }
    }
    this.floores();
  },
  watch: {
    floor() {
      this.list();
    }
  },
  methods: {
    //楼层车位数据
    floores() {
      axios
        .request({
          url: url.url.select_park,
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.carnames = res.data.data;
          res.data.data.map(res => {
            this.inouts = [...this.inouts, ...res.gateInfos];
            this.inouts1 = [...this.inouts, ...res.gateInfos];
          });
          this.floor = true;
          // console.log(this.inouts);
        });
    },
    list() {
      let that = this;
      let data = "";
      // 车场出入口列表
      axios
        .request({
          url: url.url.select_park,
          method: "get"
        })
        .then(res => {
          console.log(res);
          data = res.data.data;
          // 一体机详情
          console.log(this.$route.query.id);
          if (this.$route.query.id) {
            axios
              .request({
                url: url.url.find_camera,
                params: {
                  id: this.$route.query.id
                },
                method: "get"
              })
              .then(res => {
                this.spinShow = false;
                console.log(res);
                this.parkid = res.data.data.id;
                this.cameraCode = res.data.data.cameraCode; //一体机编码
                let parkCode = res.data.data.parkCode; //车场名称
                let gateCode = res.data.data.gateCode; //出入口编码
                this.sim = res.data.data.cameraSim;
                this.operators1 = res.data.data.operators;
                this.inouts = "";
                data.map(res => {
                  // console.log(res);
                  if (res.parkCode == parkCode) {
                    this.carname = res.parkCode;
                    this.inouts = res.gateInfos;
                  }
                  res.gateInfos.map(res => {
                    // console.log(res);
                    if (res.gateCode == gateCode) {
                      this.inout = res.gateCode;
                    }
                  });
                });
                console.log(this.inout);
                this.serial = res.data.data.sortNumber; //序号
                this.describe = res.data.data.cameraDes; //一体机描述
                this.state =
                  res.data.data.cameraOnlineStatus == 1 ? "在线" : "离线"; //状态
                this.manufacturerid = res.data.data.factoryId; //厂商ID
                this.edition = res.data.data.firmwareVersion; //固件版本
                this.signal_intensity = res.data.data.cameraSignal; //信号强度
              });
          } else {
            console.log("跳转");
            axios
              .request({
                url: url.url.find_cameras,
                params: {
                  cameraCode: this.$route.query.carename
                },
                method: "get"
              })
              .then(res => {
                this.spinShow = false;
                console.log(res);
                this.parkid = res.data.data.id;
                this.cameraCode = res.data.data.cameraCode; //一体机编码
                let parkCode = res.data.data.parkCode; //车场名称
                let gateCode = res.data.data.gateCode; //出入口编码
                this.sim = res.data.data.cameraSim;
                this.operators1 = res.data.data.operators;
                this.inouts = "";
                data.map(res => {
                  // console.log(res);
                  if (res.parkCode == parkCode) {
                    this.carname = res.parkCode;
                    this.inouts = res.gateInfos;
                  }
                  res.gateInfos.map(res => {
                    // console.log(res);
                    if (res.gateCode == gateCode) {
                      this.inout = res.gateCode;
                    }
                  });
                });
                console.log(this.inout);
                if (this.$route.query.index) {
                  this.serial = Number(this.$route.query.index);
                } else {
                  this.serial = res.data.data.sortNumber; //序号
                }
                this.describe = res.data.data.cameraDes; //一体机描述
                this.state =
                  res.data.data.cameraOnlineStatus == 1 ? "在线" : "离线"; //状态
                this.manufacturerid = res.data.data.factoryId; //厂商ID
                this.edition = res.data.data.firmwareVersion; //固件版本
                this.signal_intensity = res.data.data.cameraSignal; //信号强度
              });
          }
        });
    },
    change() {
      console.log("修改了");
      console.log(this.carname);
      this.carnames.map(res => {
        if (res.parkCode == this.carname) {
          this.inouts = res.gateInfos;
          return;
        } else if (this.carname == undefined) {
          this.inouts = this.inouts1;
          this.inout = "";
        }
      });
    },
    //保存
    Preservation() {
      console.log(this.sim);
      let that = this;
      this.loading1 = true;
      let data = {
        cameraCode: "", //一体机编码
        cameraDes: "", //一体机描述
        gateCode: "", //出入口编码
        parkCode: "", //车场编码
        sortNumber: "", //序号
        id: 0,
        cameraSim: "" //sim卡号
      };
      if (this.cameraCode) {
        data.cameraCode = this.cameraCode;
      } else {
        data.cameraCode = "";
        this.$Message.warning("请填写一体机编码");
        this.loading1 = false;
        return;
      }
      if (this.carname) {
        data.parkCode = this.carname;
      } else {
        data.parkCode = "";
        this.$Message.warning("请选择车场名称");
        this.loading1 = false;
        return;
      }
      if (this.inout) {
        data.gateCode = this.inout;
      } else {
        data.gateCode = "";
        this.$Message.warning("请选择出入口");
        this.loading1 = false;
        return;
      }
      if (this.serial) {
        data.sortNumber = this.serial;
      } else {
        data.sortNumber = "";
        this.$Message.warning("请选择序号");
        this.loading1 = false;
        return;
      }
      if (this.describe) {
        data.cameraDes = this.describe;
      } else {
        data.cameraDes = "";
      }
      if (this.sim) {
        data.cameraSim = this.sim;
      } else {
        data.cameraSim = "";
      }
      if (this.operators1) {
        data.operators = this.operators1;
      } else {
        data.operators = "";
      }
      if (this.readonly == false) {
        console.log("走新增");
        axios1
          .request({
            url: url.url.save_camera,
            params: data,
            method: "post"
          })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$Notice.success({
                title: "系统提示",
                desc: res.data.message
              });
              this.$router.go(-1);
            } else {
              this.$Notice.error({
                title: "系统提示",
                desc: res.data.message
              });
            }
            this.loading1 = false;
          });
      } else {
        console.log("走修改");
        data.id = this.parkid;
        console.log(data);
        axios1
          .request({
            url: url.url.modify_camera,
            params: data,
            method: "post"
          })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$Notice.success({
                title: "系统提示",
                desc: res.data.message
              });
              this.$router.go(-1);
            } else {
              this.$Notice.error({
                title: "系统提示",
                desc: res.data.message
              });
            }
            this.loading1 = false;
          });
      }
    },
    //取消
    cancel() {
      this.show2 = true;
    },
    //确定取消编辑
    success2() {
      console.log("确定取消编辑");
      this.show2 = false;
      this.$router.go(-1);
    },
    //取消取消编辑
    canceles2() {
      console.log("取消取消编辑");
      this.show2 = false;
    }
  }
};
</script>