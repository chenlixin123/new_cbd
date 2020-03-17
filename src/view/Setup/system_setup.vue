<style scoped>
.box {
  width: 99%;
  height: 100%;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
  color: #666;
}
.title {
  width: 99%;
  height: 10%;
  min-width: 800px;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 0 2%;
}
p {
  height: 100%;
  display: flex;
  align-items: center;
}
.p2 {
  font-size: 0.9vw;
  font-weight: bold;
}
.center {
  width: 99%;
  min-width: 800px;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 2% 3% 5% 3%;
  margin-top: 0.5%;
}
.h4 {
  padding-left: 1%;
}
.center_input1 {
  margin-top: 1%;
}
.title_name {
  width: 40%;
  min-width: 600px;
  display: flex;
  align-items: center;
  margin-bottom: 1%;
}
.title_name1 {
  margin-top: 0.5%;
  min-width: 600px;
  width: 40%;
  height: 3vw;
  min-height: 60px;
  display: flex;
  align-items: center;
}
.title_text {
  text-align: center;
  width: 15%;
  font-size: 0.8vw;
  margin-left: 2%;
}
.title_text1 {
  width: 20%;
  font-size: 0.8vw;
  text-align: center;
  margin-left: 2%;
}
.title_text_input {
  text-align: center;
  width: 15%;
  margin-left: 2%;
}
.title_text_input1 {
  width: 20%;
  text-align: center;
  margin-left: 2%;
}
.label {
  display: flex;
  align-items: center;
  width: 11%;
  height: 100%;
  font-size: 0.8vw;
  font-weight: bold;
  cursor: pointer;
}
.input1 {
  width: 40%;
  height: 100%;
  text-indent: 5px;
  outline: none;
  display: flex;
  align-items: center;
}
::-webkit-input-placeholder {
  color: rgba(21, 30, 38, 0.35);
}
.bottom {
  width: 99%;
  min-width: 580px;
  height: 6%;
  margin: 0 auto;
  margin-top: 3%;
  display: flex;
  justify-content: flex-end;
}
.btns {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.btn1,
.btn2 {
  width: 45%;
  font-size: 0.9vw;
  border-radius: 10px;
  border: none;
  outline: none;
  color: white;
  background: #f66913;
  cursor: pointer;
}
.btn2 {
  background: #545c6a;
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
  font-size: 0.9vw;
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
  font-size: 0.9vw;
}
.canceles {
  background: #545c6a;
  cursor: pointer;
}
.span {
  margin-left: 2%;
}
.span1 {
  margin-left: 2%;
  color: white;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <p class="p2">通用设置</p>
    </div>
    <div class="center" v-if="!spinShow">
      <h4 class="h4">诱导屏亮度设置</h4>
      <div class="center_input1">
        <div class="title_name">
          <label for class="label"></label>
          <div class="title_text">起始时间</div>
          <span class="span1">—</span>
          <div class="title_text">截止时间</div>
          <div class="title_text1">亮度值（0-64）</div>
        </div>

        <div class="title_name1">
          <label for class="label">时间段1:</label>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data1.startTime"></InputNumber>
          <span class="span">—</span>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data1.endTime"></InputNumber>
          <InputNumber class="title_text_input1" :max="64" :min="0" v-model="data1.bright"></InputNumber>
        </div>
        <div class="title_name1">
          <label for class="label">时间段2:</label>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data2.startTime"></InputNumber>
          <span class="span">—</span>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data2.endTime"></InputNumber>
          <InputNumber class="title_text_input1" :max="64" :min="0" v-model="data2.bright"></InputNumber>
        </div>
        <div class="title_name1">
          <label for class="label">时间段3:</label>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data3.startTime"></InputNumber>
          <span class="span">—</span>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data3.endTime"></InputNumber>
          <InputNumber class="title_text_input1" :max="64" :min="0" v-model="data3.bright"></InputNumber>
        </div>
        <div class="title_name1">
          <label for class="label">时间段4:</label>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data4.startTime"></InputNumber>
          <span class="span">—</span>
          <InputNumber class="title_text_input" :max="23" :min="0" v-model="data4.endTime"></InputNumber>
          <InputNumber class="title_text_input1" :max="64" :min="0" v-model="data4.bright"></InputNumber>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="!spinShow">
      <div class="btns">
        <button class="btn1" @click="success">{{data}}</button>
        <button class="btn2" @click="cancel">取消</button>
      </div>
    </div>
    <div class="modules" v-if="show1">
      <div class="contentes">
        <div class="content_top">确认提交诱导屏亮度修改？</div>
        <div class="content_bottom">
          <Button class="success" @click="success1" :loading="loading1">确定</Button>
          <button class="canceles" @click="canceles1">取消</button>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  data() {
    return {
      spinShow: true,
      show1: false,
      loading1: false,
      data: "提交",
      data1: {
        startTime: 0, //起始时间
        endTime: 0, //截止时间
        bright: 0, //亮度值
        id: "" //id
      },
      data2: {
        startTime: 0, //起始时间
        endTime: 0, //截止时间
        bright: 0, //亮度值
        id: "" //id
      },
      data3: {
        startTime: 0, //起始时间
        endTime: 0, //截止时间
        bright: 0, //亮度值
        id: "" //id
      },
      data4: {
        startTime: 0, //起始时间
        endTime: 0, //截止时间
        bright: 0, //亮度值
        id: "" //id
      }
    };
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      // console.log("获取设置数据");
      this.spinShow = true;
      this.data1.startTime = 0;
      this.data1.endTime = 0;
      this.data1.bright = 0;
      this.data2.startTime = 0;
      this.data2.endTime = 0;
      this.data2.bright = 0;
      this.data3.startTime = 0;
      this.data3.endTime = 0;
      this.data3.bright = 0;
      this.data4.startTime = 0;
      this.data4.endTime = 0;
      this.data4.bright = 0;
      axios1
        .request({
          url: url.url.screen_bright_list,
          method: "post"
        })
        .then(res => {
          console.log(res);
          sessionStorage.setItem("number", JSON.stringify(res.data.data));
          if (res.data.data.length != 0) {
            res.data.data.map((res, index, arry) => {
              // console.log(res);
              arry[index].startTime = arry[index].startTime
                ? arry[index].startTime
                : 0;
              arry[index].endTime = arry[index].endTime
                ? arry[index].endTime
                : 0;
              if (index == 0) {
                this.data1 = res;
              } else if (index == 1) {
                this.data2 = res;
              } else if (index == 2) {
                this.data3 = res;
              } else if (index == 3) {
                this.data4 = res;
              }
            });
          }
          this.spinShow = false;
        });
    },
    success1() {
      console.log(this.data1);
      console.log(this.data2);
      this.loading1 = true;
      let data = [];
      if (this.data1.startTime || this.data1.endTime) {
        data.push(this.data1);
      }
      if (this.data2.startTime || this.data2.endTime) {
        data.push(this.data2);
      }
      if (this.data3.startTime || this.data3.endTime) {
        data.push(this.data3);
      }
      if (this.data4.startTime || this.data4.endTime) {
        data.push(this.data4);
      }
      console.log(data);
      axios1
        .request({
          url: url.url.screen_bright,
          data: data,
          method: "post"
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.list();
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
          this.show1 = false;
          this.loading1 = false;
        });
    },
    canceles1() {
      this.show1 = false;
      this.loading1 = false;
    },
    success() {
      this.show1 = true;
    },
    cancel() {
      let data = JSON.parse(sessionStorage.getItem("number"));
      console.log(data);
      if (data.length != 0) {
        data.map((res, index, arry) => {
          // console.log(res);
          arry[index].startTime = arry[index].startTime
            ? arry[index].startTime
            : 0;
          arry[index].endTime = arry[index].endTime ? arry[index].endTime : 0;
          if (index == 0) {
            this.data1 = res;
          } else if (index == 1) {
            this.data2 = res;
          } else if (index == 2) {
            this.data3 = res;
          } else if (index == 3) {
            this.data4 = res;
          }
        });
      }
    }
  }
};
</script>