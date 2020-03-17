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
/* >>> .ivu-icon-ios-calendar-outline:before {
  display: none;
}
>>> .ivu-input-suffix {
  display: none;
} */
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
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 4%;
  padding-top: 1%;
  /* border: 1px solid red; */
}
.bottom4 {
  width: 100%;
  box-sizing: border-box;
  padding-left: 4%;
  padding-top: 1%;
  /* border: 1px solid red; */
}
.bottom3 {
  width: 100%;
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
.lab {
  width: 6%;
  min-width: 70px;
  font-weight: bold;
  text-align-last: justify;
  /* border: 1px solid; */
}
.delete_img {
  margin-left: 10px;
  cursor: pointer;
}
.delete_img:hover {
  margin-left: 10px;
  cursor: pointer;
  color: #f66913;
}
.mansion_btn {
  border: none;
  outline: none;
}
.file {
  /* margin-left: 10%; */
  display: flex;
}
.file_del {
  margin-left: 1%;
  cursor: pointer;
}
.file_del:hover {
  color: #f66913;
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
  <!-- 运维任务添加 -->
  <div class="box">
    <div class="title">
      <div class="title_left">编辑任务</div>
      <button class="back" @click="success2">返回</button>
    </div>

    <div class="content" v-if="spinShow == false">
      <div class="bottom">
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">任务名称</label>：
            <Input
              style="width:60%;"
              v-model="datas.taskName"
              :readonly="readonly"
              v-if="!readonly"
              placeholder="请输入名称"
            />
            <span v-if="readonly">{{datas.taskName}}</span>
          </div>
        </div>
        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">任务类别</label>：
            <Select v-model="datas.taskType" style="width:60%" clearable>
              <Option v-for="item in taskTypes" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
          </div>
          <div class="total_data2">
            <label for style="color:red;">*</label>
            <label for class="label2">任务状态</label>：
            <Select v-model="datas.taskStatus" style="width:65%" clearable>
              <Option v-for="item in taskStatus1" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
          </div>
        </div>

        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:red;">*</label>
            <label for class="label1">负责人</label>：
            <Input style="width:60%" v-model="datas.header" placeholder="负责人姓名" />
          </div>

          <div class="total_data2">
            <label for style="color:red;">*</label>
            <label for class="label2">人数</label>：
            <Input style="width:65%" v-model="datas.personNum" placeholder="请输入人数" />
          </div>
        </div>

        <div class="bottom1">
          <div class="total_data1">
            <label for style="color:white;">*</label>
            <label for class="label1">开始时间</label>：
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              size="default"
              placeholder="选择开始时间"
              v-model="datas.startTime"
              style="width:60%"
            ></DatePicker>
          </div>
          <div class="total_data2">
            <label for style="color:white;">*</label>
            <label for class="label2">结束时间</label>：
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              size="default"
              placeholder="选择结束时间"
              style="width:65%"
              v-model="datas.endTime"
            ></DatePicker>
          </div>
          <div class="total_data2">
            <label class="label3" for>工时</label>：
            <Input style="width:65%" v-model="datas.manHour" placeholder="请输入工时" />
          </div>
        </div>
        <div class="bottom2">
          <label for style="color:white;font-weight:200;">*</label>
          <div class="lab">任务描述</div>：
          <Input
            maxlength="120"
            style="width:25%;outline:none;border-radius:5px;padding-top:5px;"
            show-word-limit
            type="textarea"
            :rows="5"
            placeholder="请输入任务描述"
            v-model="datas.taskDesc"
          />
        </div>
        <div class="bottom2">
          <label for style="color:white;font-weight:200;">*</label>
          <div class="lab">备注</div>：
          <Input
            maxlength="120"
            style="width:25%;outline:none;border-radius:5px;padding-top:5px;"
            show-word-limit
            type="textarea"
            :rows="5"
            placeholder="请输入备注"
            v-model="datas.remark"
          />
        </div>
        <div class="bottom3">
          <div class="mansion_top">
            <Upload
              class="Upload"
              ref="upload1"
              :headers="headers"
              name="file"
              :with-credentials="true"
              :before-upload="handleUpload1"
              :show-upload-list="false"
              :on-success="uploadSuccess1"
              action="/api/task/image_upload"
            >
              <Button class="mansion_btn" size="small">+ 添加文件</Button>
              <span style="color:#c5c8ce">(不超过50M)</span>
            </Upload>
          </div>
          <div v-for="(item, index) in file1" :key="index" class="img_modal">
            <span class="img_title">文件名称: {{ item.name }}</span>
            <span class="delete_img" @click="delectFile1(item.name)">删除</span>
            <Button
              v-if="image_show1 == true"
              style="margin-left:23px;background:#545c6a;color:white;"
              size="small"
              type="primary"
              :loading="loading"
              @click="upload1"
            >上传</Button>
          </div>
        </div>
        <div class="bottom4">
          <label for style="color:white;font-weight:200;">*</label>
          <div class="lab">已上传文件</div>
          <div class="file" v-for="(item,index) in datas.taskAttachList" :key="index">
            <div>文件名称：{{item.fileName + " (" + item.fileSize + ")"}}</div>
            <span class="file_del" @click="file_del(item,index)">删除</span>
            <span class="file_del" @click="file_down(item)">下载</span>
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
      index_delete: "",
      show_delete: false,
      loading_delete: false,
      loading: false,
      file1: [],
      image_show1: false,
      uploadFile1: [],
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      file: null,
      loadingStatus: false,
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
      taskTypes: [
        {
          id: 1,
          value: "巡检"
        },
        {
          id: 2,
          value: "维修"
        },
        {
          id: 3,
          value: "演示"
        }
      ],
      taskStatus1: [
        {
          id: 1,
          value: "未分配"
        },
        {
          id: 2,
          value: "进行中"
        },
        {
          id: 3,
          value: "已完成"
        },
        {
          id: 4,
          value: "已取消"
        }
      ],
      datas: {
        attUrl: "", //附件地址
        endTime: "", //结束时间
        header: "", //负责人
        manHour: "", //工时
        personNum: "", //人数
        remark: "", //任务备注
        startTime: "", //开始时间
        taskDesc: "", //任务描述
        taskName: "", //任务名称
        taskStatus: "", //任务状态
        taskType: "", //任务类别
        taskAttachList: []
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
    }
  },
  methods: {
    list() {
      let that = this;
      axios
        .request({
          url: url.url.find_task_info,
          params: {
            id: this.$route.query.id
          },
          method: "get"
        })
        .then(res => {
          this.spinShow = false;
          console.log(res.data.data);
          this.datas = res.data.data;
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
      if (!this.datas.taskName) {
        this.$Message.warning("请填写任务名称");
        this.loading1 = false;
      } else if (!this.datas.taskType) {
        this.$Message.warning("请选择任务类别");
        this.loading1 = false;
      } else if (!this.datas.taskStatus) {
        this.$Message.warning("请选择任务状态");
        this.loading1 = false;
      } else if (!this.datas.header) {
        this.$Message.warning("请填写负责人");
        this.loading1 = false;
      } else if (!this.datas.personNum) {
        this.$Message.warning("请填写人数");
        this.loading1 = false;
      } else {
        if (this.datas.startTime) {
          this.datas.startTime = url.time(this.datas.startTime);
        }
        if (this.datas.endTime) {
          this.datas.endTime = url.time(this.datas.endTime);
        }
        console.log(this.datas);
        if (this.readonly == false) {
          console.log("走新增");
          axios1
            .request({
              url: url.url.save_task_info,
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
              url: url.url.update_task_info,
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
    },
    delectFile1(keyID) {
      this.loading = false;
      // console.log(keyID);
      // 删除文件
      // 删除总展示文件里的当前文件
      this.file1 = [];
      // 删除需要上传文件数据里的当前文件
      this.uploadFile1 = [];
    },
    handleUpload1(file) {
      console.log(file);
      console.log(parseInt(file.size / 1024));
      if (file.size > 50 * 1024 * 1024) {
        this.$Message.warning("上传文件应小于50M");
        return false;
      } else {
        this.file1 = [];
        // 删除需要上传文件数据里的当前文件
        this.uploadFile1 = [];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.onload = () => {
        //   const _base64 = reader.result;
        //   this.parkManage.blueCarImg = _base64; //将_base64赋值给图片的src，实现图片预览
        // };
        // 上传文件前的事件钩子
        // 选择文件后 这里判断文件类型 保存文件 自定义一个keyid 值 方便后面删除操作
        let keyID = Math.random()
          .toString()
          .substr(2);
        file["keyID"] = keyID;
        // 保存文件到总展示文件数据里
        this.file1.push(file);
        // 保存文件到需要上传的文件数组里
        this.uploadFile1.push(file);
        this.image_show1 = true;
        // 返回 falsa 停止自动上传 我们需要手动上传
        return false;
      }
    },
    upload1() {
      // 上传文件
      this.loading = true;
      for (let i = 0; i < this.uploadFile1.length; i++) {
        let item = this.file1[i];
        console.log(item);
        this.$refs.upload1.post(item);
      }
    },
    uploadSuccess1(res, file, fileList) {
      // 文件上传回调 上传成功后删除待上传文件
      console.log(res);
      console.log(file);
      if (res.code == 200) {
        let data1 = {
          fileName: file.name,
          fileSize: Math.ceil(file.size / 1024) + "KB",
          fileUrl: res.data,
          id: ""
        };
        this.datas.taskAttachList.push(data1);
        console.log(this.datas);
        this.image_show1 = false;
        this.$Notice.success({
          title: "系统提示",
          desc: "上传成功"
        });
      } else {
        this.$Notice.error({
          title: "系统提示",
          desc: res.message
        });
        this.image_show1 = true;
      }
      this.loading = false;
    },
    file_del(data, index) {
      console.log(data);
      console.log("删除");
      console.log(data.id);
      this.show_delete = true;
      this.id_delete = data.id;
      this.index_delete = index;
    },
    file_down(data) {
      console.log(data.fileUrl);
      window.location.href = data.fileUrl;
    },
    //删除任务
    success_delete() {
      console.log(this.id_delete);
      console.log(this.index_delete);
      if (this.id_delete) {
        axios
          .request({
            url: url.url.delete_task_attach,
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
      } else {
        this.datas.taskAttachList.splice(this.index_delete, 1);
        this.$Notice.success({
          title: "系统提示",
          desc: "删除成功"
        });
      }
      this.show_delete = false;
    },
    //取消删除
    canceles_delete() {
      this.show_delete = false;
      this.loading_delete = false;
      this.id_delete = "";
    }
  }
};
</script>