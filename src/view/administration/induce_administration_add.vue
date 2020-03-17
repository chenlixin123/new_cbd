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
  margin: 0 auto;
  background: white;
  padding-bottom: 3%;
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
  /* height: 100%; */
  margin-top: 0.5%;
  padding-top: 2%;
}
.bottom1 {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 4%;
}
.bottom2 {
  width: 100%;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding-left: 4%;
  padding-top: 1%;
  /* border: 1px solid red; */
}

.span {
  display: inline-block;
}
.span1 {
  display: inline-block;
  min-width: 90px;
}
.total_data1 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid; */
}
.total_datas {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.total_data2 {
  width: 23%;
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
.add_car {
  width: 100%;
}
.add_car_btn {
  width: 100px;
  height: 25px;
  line-height: 25px;
  border: 1px dashed;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.module {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
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
.tops {
  width: 90%;
  margin: 0 auto;
  height: 70px;
  margin-top: 3%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tops1 {
  width: 90%;
  margin: 0 auto;
  height: 70px;
  margin-top: 3%;
  border-radius: 5px;
  padding-left: 5%;
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
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f66913;
  outline: none;
  cursor: pointer;
  font-size: 0.9vw;
}
.cancels {
  width: 40%;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #545c6a;
  outline: none;
  cursor: pointer;
}
.label1 {
  min-width: 60px;
  width: 30%;
  display: inline-block;
  text-align-last: justify;
}
.label1s {
  min-width: 60px;
  width: 6.5%;
  display: inline-block;
  text-align-last: justify;
}
.label2 {
  width: 25.5%;
  display: inline-block;
  text-align-last: justify;
}
.label3 {
  width: 25.5%;
  display: inline-block;
  text-align-last: justify;
}
.label4 {
  width: 20%;
  display: inline-block;
  text-align-last: justify;
}
.tag {
  cursor: pointer;
}
.dis {
  width: 100%;
  /* border: 1px solid; */
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.dies {
  width: 100%;
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
      <div class="title_left">编辑诱导屏信息</div>
      <button class="back" @click="success2">返回</button>
    </div>

    <div class="content" v-if="spinShow == false">
      <div class="bottom">
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">诱导屏编码</label>：
            <Input
              style="width:60%;"
              v-model="datas.screenCode"
              :readonly="readonly"
              v-if="!readonly"
            />
            <span v-if="readonly">{{datas.screenCode}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">屏体数</label>：
            <span class="span1">{{data1.screenSum}}</span>
          </div>
          <div class="total_data2">
            <label for class="label3">厂商ID</label>：
            <span class="span1">{{data1.factoryId}}</span>
          </div>
          <div class="total_data3">
            <label for class="label4">固件版本</label>：
            <span class="span1">{{data1.screenVersion}}</span>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">网络类型</label>：
            <span class="span">{{data1.screenModule}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">状态</label>：
            <span class="span1">{{data1.screenOnlineStatus == 0 ? '离线' : '在线'}}</span>
          </div>
          <div class="total_data2">
            <label for class="label3">信号强度</label>：
            <span class="span1">{{data1.screenSignal}}</span>
          </div>
        </div>

        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">图纸编号</label>：
            <Input style="width:60%" v-model="datas.drawNumber" />
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">运营商</label>：
            <!-- <Input style="width:" v-model="datas.operators" /> -->
            <Select v-model="datas.operators" style="width:65%" clearable>
              <Option
                v-for="item in operators"
                :value="item.value"
                :key="item.value"
              >{{ item.value }}</Option>
            </Select>
          </div>
          <div class="total_data2">
            <label class="label2" for>SIM卡号</label>：
            <Input style="width:65%;" v-model="datas.screenSim" />
          </div>
          <div class="total_data3">
            <label class="label4" for>屏幕亮度</label>：
            <InputNumber :max="50" :min="-50" v-model="datas.screenBright"></InputNumber>
          </div>
        </div>

        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">点位编号</label>：
            <Input style="width:60%" v-model="datas.pointNumber" />
          </div>
          <div class="total_data2">
            <label for style="color:red;">*</label>
            <label for class="label2">位置描述</label>：
            <Input style="width:65%" v-model="datas.screenAddress" />
          </div>
          <div class="total_data2">
            <label class="label3" for>经度</label>：
            <Input style="width:65%" v-model="datas.screenLongitude" />
          </div>
          <div class="total_data3">
            <label class="label4" for>纬度</label>：
            <Input style="width:55%;" v-model="datas.screenLatitude" />
          </div>
        </div>
        <div class="bottom2">
          <div class="total_datas">
            <label for style="color:red;">*</label>
            <label for class="label1s">诱导屏车场</label>：
            <div class="add_car">
              <div class="dies" v-for="(item,index) in data.plateNo" :key="index">
                <Tag
                  class="tag"
                  type="border"
                  checkable
                  closable
                  @on-change="updata(item,index)"
                  @on-close="handleClose4(item)"
                >{{item.parkName}}</Tag>
              </div>
              <div class="dis">
                <div class="add_car_btn" @click="add_car">添加车场</div>
                <div style="margin-left:15%;">(在诱导屏上显示的对应车场数字，顺序为由上至下)</div>
              </div>
            </div>
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
          <Button class="success" @click="success2">确定</Button>
          <Button class="canceles" @click="canceles2">取消</Button>
        </div>
      </div>
    </div>

    <div class="demo-spin-container">
      <Spin fix size="large" v-if="spinShow"></Spin>
    </div>

    <div class="module" v-if="show">
      <div class="contents">
        <div class="module_title">增加车场</div>
        <div class="tops1">
          <label for style="color:red;">*</label>
          <label for>车场名称：</label>
          <i-select v-model="value_parkCode" filterable style="width: 60%;">
            <i-option
              v-for="(item,index) in parkCodeList"
              :key="index"
              :value="item.parkCode"
            >{{ item.parkName }}</i-option>
          </i-select>
        </div>
        <hr style="border:1.5px solid #c5c8ce" />
        <div class="bottoms">
          <button class="save" @click="save">确定</button>
          <button class="cancels" @click="cancels">取消</button>
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
      data1: "",
      tag_index: "",
      readonly: "", //只读的启用禁用
      spinShow: true, //loading
      show: false, //添加车场显示隐藏
      show2: false, //取消编辑显示隐藏
      show3: false, //清除信息显示隐藏
      loading1: false, //保存loading
      parkCodeList: [], //车场名称
      value_parkCode: "",
      data: {
        plateNo: []
      },
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
      datas: {
        screenCode: "", //诱导屏编码
        pointNumber: "", //点位编号
        screenAddress: "", //位置描述
        screenLongitude: "", //经度
        screenLatitude: "", //纬度
        parkCodeList: [], //诱导屏车场从上到下排列
        screenFlag: 0, //诱导屏标识
        screenSum: 0, //诱导屏数量
        screenSim: "", //sim卡号
        drawNumber: "", //图纸编号
        operators: "", //运营商
        screenBright: 0 //屏幕亮度
      }
    };
  },
  created() {
    console.log(this.$route.query);
    if (JSON.stringify(this.$route.query) != "{}") {
      console.log("不等于空");
      this.readonly = true;
      this.list();
    } else {
      this.spinShow = false;
      this.readonly = false;
      this.floores();
    }
  },
  methods: {
    list() {
      let that = this;
      axios
        .request({
          url: url.url.car_name,
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.parkCodeList = res.data.data;
          axios
            .request({
              url: url.url.find_screen,
              params: {
                id: this.$route.query.id
              },
              method: "get"
            })
            .then(res => {
              this.spinShow = false;
              console.log(res.data.data);
              let data = res.data.data;
              this.datas.screenCode = data.screenCode;
              this.datas.pointNumber = data.pointNumber;
              this.datas.screenAddress = data.screenAddress;
              this.datas.screenLongitude = data.screenLongitude;
              this.datas.screenLatitude = data.screenLatitude;
              this.datas.parkCodeList = data.parkCodeList;
              this.datas.screenFlag = data.screenFlag;
              this.datas.screenSim = data.screenSim;
              this.datas.drawNumber = data.drawNumber;
              this.datas.operators = data.operators;
              this.datas.screenBright = data.screenBright;
              this.data1 = data;
              // console.log(res);
              this.datas.parkCodeList.map(reson => {
                this.parkCodeList.map(res => {
                  if (res.parkCode == reson) {
                    console.log(reson);
                    this.data.plateNo.push(res);
                  }
                });
              });
            });
        });
    },
    //车场名称
    floores() {
      axios
        .request({
          url: url.url.car_name,
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.parkCodeList = res.data.data;
        });
    },
    //添加车场
    add_car() {
      // console.log("添加车场");\
      if (this.data.plateNo.length >= 8) {
        this.$Message.warning("诱导屏车场数量上限为8个");
      } else {
        this.show = true;
      }
    },
    //保存车场
    save() {
      console.log("保存车场");
      let car = this.value_parkCode;
      if (this.value_parkCode) {
        this.parkCodeList.map((res, index, arry) => {
          if (res.parkCode == car) {
            // console.log(res);
            let name = res.parkName;
            if (this.datas.parkCodeList.length == 0) {
              // console.log("222222");
              this.data.plateNo.push(res);
              this.datas.parkCodeList.push(res.parkCode);
              this.value_parkCode = "";
              this.show = false;
            } else {
              let svn = true;
              this.datas.parkCodeList.map((reson, indexs, arrys) => {
                if (reson == car) {
                  this.$Message.warning("车场已存在,请勿重复添加");
                  // console.log("555555");
                  svn = false;
                  return;
                }
                if (indexs === this.tag_index) {
                  arrys[indexs] = this.value_parkCode;
                  this.data.plateNo.map((items, inde, arr) => {
                    if (inde === this.tag_index) {
                      arr[inde].parkName = name;
                      arr[inde].parkCode = this.value_parkCode;
                      this.show = false;
                      this.value_parkCode = "";
                    }
                  });
                }
              });
              if (svn == true && this.tag_index === "") {
                this.data.plateNo.push(res);
                this.datas.parkCodeList.push(res.parkCode);
                this.show = false;
                this.value_parkCode = "";
              }
            }
          }
        });
      } else {
        this.$Message.warning("请填写车场名称");
      }
    },
    //取消保存
    cancels() {
      console.log("取消保存");
      this.show = false;
      this.tag_index = "";
      this.value_parkCode = "";
    },
    //删除车场
    handleClose4(name) {
      this.data.plateNo.map((item, index, arry) => {
        if (item.parkCode == name.parkCode) {
          arry.splice(index, 1);
        }
      });
      this.datas.parkCodeList.map((res, index, arry) => {
        if (res == name.parkCode) {
          arry.splice(index, 1);
        }
      });
    },
    //保存
    Preservation() {
      let that = this;
      this.loading1 = true;
      console.log("保存");
      if (!this.datas.screenCode) {
        this.$Message.warning("请填写诱导屏编码");
        this.loading1 = false;
      } else if (!this.datas.pointNumber) {
        this.$Message.warning("请填写点位编号");
        this.loading1 = false;
      } else if (!this.datas.screenAddress) {
        this.$Message.warning("请填写位置描述");
        this.loading1 = false;
      } else if (this.datas.parkCodeList.length == 0) {
        this.$Message.warning("请添加诱导屏车场");
        this.loading1 = false;
      } else {
        if (this.readonly == false) {
          console.log("走新增");
          axios1
            .request({
              url: url.url.save_screen,
              data: this.datas,
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
          console.log("走编辑");
          console.log(this.datas);
          this.datas.id = this.$route.query.id;
          axios1
            .request({
              url: url.url.modify_scree,
              data: this.datas,
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
      }
    },
    //编辑诱导屏车场
    updata(data, index) {
      this.tag_index = index;
      this.value_parkCode = data.parkCode;
      this.show = true;
      console.log(data, index);
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