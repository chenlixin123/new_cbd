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
  padding-bottom: 5%;
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
  /* border: 1px solid red; */
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
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 4%;
}
.total_data1 {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.total_data2 {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
}
.total_data3 {
  width: 100%;
  height: 18vw;
  margin-top: 2%;
  display: flex;
}
.total_data4 {
  width: 25%;
  margin-top: 2%;
  display: flex;
}
.label1 {
  min-width: 80px;
  width: 15%;
  display: inline-block;
  text-align-last: justify;
}
.label2 {
  min-width: 90px;
  width: 30%;
  display: inline-block;
  text-align-last: justify;
}
.label3 {
  min-width: 60px;
  display: inline-block;
  text-align-last: justify;
}
>>> .ivu-transfer-list {
  height: 80%;
  width: 100%;
}
.modify {
  background: white;
  color: black;
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
      <div>编辑账号信息</div>
      <button class="back" @click="back">返回</button>
    </div>

    <div class="content" v-if="spinShow == false">
      <div class="bottom">
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;" v-if="!readonly">*</label>
            <label for style="color:white;" v-if="readonly">*</label>
            <label for class="label1">账号</label>：
            <Input style="width:60%" v-model="datas.accountName" v-if="!readonly" />
            <span v-if="readonly">{{datas.accountName}}</span>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label1">手机号</label>：
            <Input style="width:60%" v-model="datas.cellphone" />
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">{{text}}</label>：
            <Input style="width:60%;" v-model="datas.password" v-if="!readonlys" />
            <Button class="modify" @click="modify" v-if="readonlys">修改</Button>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label1">姓名</label>：
            <Input style="width:60%" v-model="datas.realname" />
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">单位</label>：
            <Input style="width:60%" v-model="datas.company" />
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label1">车场</label>：
            <Select v-model="datas.parkFlag" style="width:60%;">
              <Option
                v-for="(item,index) in parkFlaglist"
                :value="item.id"
                :key="index"
              >{{ item.name }}</Option>
            </Select>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">状态</label>：
            <Select v-model="datas.status" style="width:60%;">
              <Option v-for="item in status" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label1">登录权限</label>：
            <Select v-model="datas.appFlag" style="width:60%;">
              <Option v-for="item in appFlag" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
          </div>
        </div>
        <div style="margin-left:3%;margin-top:20px;">维护功能（通过手机APP查看）</div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">一体机</label>：
            <Select v-model="datas.cameraFlag" :disabled="dis" style="width:60%;">
              <Option
                v-for="(item,index) in cameraFlaglist"
                :value="item.id"
                :key="index"
              >{{ item.name }}</Option>
            </Select>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label1">诱导屏</label>：
            <Select v-model="datas.screenFlag" :disabled="dis" style="width:60%;">
              <Option
                v-for="(item,index) in screenFlaglist"
                :value="item.id"
                :key="index"
              >{{ item.name }}</Option>
            </Select>
          </div>
        </div>
        <div class="bottom2">
          <div class="total_data4">
            <label for style="color:white;">*</label>
            <label for class="label1">备注</label>：
            <Input
              v-model="datas.remark"
              maxlength="120"
              show-word-limit
              type="textarea"
              :rows="4"
              placeholder="请输入少于120字"
            />
          </div>
        </div>

        <div class="bottom2">
          <div class="total_data3">
            <label for style="color:red;">*</label>
            <label for class="label3">授权角色</label>：
            <Transfer
              style="width:70%;"
              :titles="titles"
              :data="transfer_data"
              :target-keys="transfer_data1"
              :render-format="render1"
              :list-style="listStyle"
              @on-change="handleChange1"
            ></Transfer>
          </div>
        </div>

        <div class="bottom2">
          <div class="total_data3">
            <label for style="color:white;">*</label>
            <label for class="label3">授权车场</label>：
            <Transfer
              style="width:70%;"
              :titles="titles2"
              :data="transfer_data2"
              :target-keys="transfer_data3"
              :render-format="render2"
              :list-style="listStyle"
              @on-change="handleChange2"
            ></Transfer>
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
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  data() {
    return {
      parkFlaglist: [
        {
          id: 1,
          name: "启用",
        },
        {
          id: 0,
          name: "禁用",
        },
      ],
      screenFlaglist: [
        {
          id: 1,
          name: "启用",
        },
        {
          id: 0,
          name: "禁用",
        },
      ],
      cameraFlaglist: [
        {
          id: 1,
          name: "启用",
        },
        {
          id: 0,
          name: "禁用",
        },
      ],
      text: "",
      listStyle: {
        width: "40%",
        height: "100%",
      }, //穿梭框样式
      titles: ["全选", "全选"],
      transfer_data: [],
      transfer_data1: [],
      titles2: ["全选", "全选"],
      transfer_data2: [],
      transfer_data3: [],
      readonly: "", //只读的启用禁用
      readonlys: "",
      spinShow: true, //loading
      show2: false, //取消编辑显示隐藏
      loading1: false, //保存loading
      appFlag: [
        {
          id: 1,
          value: "APP+网页",
        },
        {
          id: 2,
          value: "仅网页",
        },
        {
          id: 3,
          value: "仅APP",
        },
      ],
      status: [
        {
          id: 1,
          value: "启用",
        },
        {
          id: 0,
          value: "禁用",
        },
      ],
      datas: {
        accountName: "",
        appFlag: 1,
        cellphone: "",
        id: 0,
        parkIds: "",
        password: "",
        remark: "",
        realname: "",
        roleIds: "",
        status: 1,
        parkFlag: 0,
        cameraFlag: 0,
        screenFlag: 0,
        company: "",
      },
      dis: true,
    };
  },
  watch: {
    "datas.appFlag"(val, oldval) {
      console.log(val);
      if (val == 1 || val == 3) {
        this.dis = false;
      } else {
        this.dis = true;
        this.datas.cameraFlag = 0;
        this.datas.screenFlag = 0;
      }
    },
  },
  created() {
    // console.log(JSON.parse(this.$route.query.data));
    this.$route.query.data = JSON.parse(this.$route.query.data);
    if (this.$route.query.data != "ss") {
      console.log("不等于空");
      this.readonly = true;
      this.readonlys = true;
      this.text = "修改密码";
      this.list();
    } else {
      this.spinShow = false;
      this.readonly = false;
      this.readonlys = false;
      this.text = "密码";
      this.dis = false;
    }
    this.getMockData();
  },
  methods: {
    //返回
    back() {
      this.$router.go(-1);
    },
    list() {
      let that = this;
      this.spinShow = false;
      this.$route.query.data.password = null;
      console.log(this.$route.query.data);
      this.datas = this.$route.query.data;
      if (this.$route.query.data.appFlag == null) {
        this.$route.query.data.appFlag = 0;
      }
      if (this.$route.query.data.status == null) {
        this.$route.query.data.status = 0;
      }
      console.log(this.$route.query.data.appFlag);
      if (
        this.$route.query.data.appFlag == 1 ||
        this.$route.query.data.appFlag == 3
      ) {
        this.dis = false;
      } else {
        this.dis = true;
        this.datas.cameraFlag = 0;
        this.datas.screenFlag = 0;
      }
    },
    getMockData() {
      let userId = "";
      if (this.readonly == true) {
        userId = this.$route.query.data.id;
      }
      axios
        .request({
          url: url.url.search_role,
          params: {
            userId: userId,
          },
          method: "get",
        })
        .then((res) => {
          console.log(res);
          let data = [];
          res.data.data.map((res) => {
            // console.log(res);
            data.push({
              key: res.id,
              label: res.name,
            });
            if (res.selected == true) {
              this.transfer_data1.push(res.id);
            }
          });
          // console.log(this.transfer_data1);
          this.transfer_data = data;
        });
      axios
        .request({
          url: url.url.search_park_ids,
          params: {
            userId: userId,
          },
          method: "get",
        })
        .then((res) => {
          console.log(res);
          let data = [];
          res.data.data.map((res) => {
            // console.log(res);
            data.push({
              key: res.id,
              label: res.name,
            });
            if (res.selected == true) {
              this.transfer_data3.push(res.id);
            }
          });
          this.transfer_data2 = data;
        });
    },
    render1(item) {
      return item.label;
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      this.transfer_data1 = newTargetKeys;
      console.log(this.transfer_data1);
    },
    render2(item) {
      return item.label;
    },
    handleChange2(newTargetKeys, direction, moveKeys) {
      this.transfer_data3 = newTargetKeys;
      console.log(this.transfer_data3);
    },
    //保存
    Preservation() {
      let that = this;
      this.loading1 = true;
      this.datas.roleIds = this.transfer_data1.join(",");
      this.datas.parkIds = this.transfer_data3.join(",");
      console.log("保存");
      console.log(this.datas);
      if (!this.datas.accountName) {
        this.$Message.warning("请填写账号");
        this.loading1 = false;
      } else if (!this.datas.password && this.text != "修改密码") {
        this.$Message.warning("请填写密码");
        this.loading1 = false;
      } else if (this.datas.roleIds.length == 0) {
        this.$Message.warning("请选择授权角色");
        this.loading1 = false;
      } else if (this.datas.parkIds.length == 0 && this.datas.appFlag == 1) {
        this.$Message.warning("请选择授权车场");
        this.loading1 = false;
      } else {
        if (this.readonly == false) {
          console.log("走新增");
          console.log(this.datas);
          axios1
            .request({
              url: url.url.save_admin,
              data: this.datas,
              method: "post",
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.$Notice.success({
                  title: "系统提示",
                  desc: res.data.message,
                });
                this.$router.go(-1);
              } else {
                this.$Notice.error({
                  title: "系统提示",
                  desc: res.data.message,
                });
              }
              this.loading1 = false;
            });
        } else {
          console.log("走编辑");
          console.log(this.datas);
          this.datas.id = this.$route.query.data.id;
          axios1
            .request({
              url: url.url.modify_admin,
              data: this.datas,
              method: "post",
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.$Notice.success({
                  title: "系统提示",
                  desc: res.data.message,
                });
                this.$router.go(-1);
              } else {
                this.$Notice.error({
                  title: "系统提示",
                  desc: res.data.message,
                });
              }
              this.loading1 = false;
            });
        }
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
    },
    //修改密码
    modify() {
      this.readonlys = false;
    },
  },
};
</script>