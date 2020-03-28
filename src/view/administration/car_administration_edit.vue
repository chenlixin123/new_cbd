<style scoped>
.box {
  width: 100%;
  min-width: 1200px;
  min-height: 800px;
  height: 100%;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
  color: #666;
}
.title {
  width: 99%;
  min-width: 1000px;
  height: 10%;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 3%;
  margin-bottom: 0.5%;
  /* border: 1px solid; */
}
.content {
  width: 99%;
  min-width: 900px;
  /* height: 80%; */
  margin: 0 auto;
  background: white;
  padding-bottom: 1%;
  position: relative;
  border: 1px solid white;
}
.empower {
  width: 100%;
  margin: 0 auto;
  min-height: 500px;
  /* margin-top: 0.5%; */
  background: white;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 3%;
  height: 80%;
  /* padding-top: 1%; */
  padding-bottom: 5%;
  font-weight: bold;
  border-radius: 5px;
  /* border: 1px solid greenyellow; */
}
.empower_text1 {
  width: 100%;
  /* height: 3vw; */
  min-height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2%;
  font-weight: 600;
  /* border: 1px solid; */
}
.empower_text5 {
  width: 60%;
  /* height: 3vw; */
  min-height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2%;
  font-weight: 600;
  /* border: 1px solid; */
}
.text5_left {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.empower_text4 {
  width: 100%;
  /* height: 3vw; */
  min-height: 60px;
  display: flex;
  align-items: top;
  box-sizing: border-box;
  padding-left: 2%;
  font-weight: 600;
  margin-top: 2%;
  /* border: 1px solid; */
}
.empower_text2 {
  width: 65%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-left: 2%;
  font-weight: 600;
  /* border: 1px solid; */
}
.empower_text3 {
  width: 65%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-left: 2%;
  font-weight: 600;
  margin-bottom: 1%;
  /* border: 1px solid; */
}
.empower_textleft {
  width: 6%;
  min-width: 78px;
  height: 100%;
  font-weight: 600;
  text-align-last: justify;
  /* border: 1px solid red; */
}
.empower_textleft2 {
  display: inline-block;
  width: 6%;
  min-width: 78px;
  height: 100%;
  font-weight: 600;
  text-align-last: justify;
  /* border: 1px solid red; */
}
.empower_textleft3 {
  display: inline-block;
  width: 11%;
  min-width: 78px;
  height: 100%;
  font-weight: 600;
  text-align-last: justify;
  /* border: 1px solid red; */
}
.empower_textleft4 {
  display: inline-block;
  width: 20%;
  min-width: 78px;
  height: 100%;
  font-weight: 600;
  text-align-last: justify;
  /* border: 1px solid red; */
}
.empower_textleft1 {
  width: 9.5%;
  min-width: 78px;
  font-weight: 600;
  text-align-last: justify;
}
.empower_textright {
  font-weight: 200;
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
.empower_textrights {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
}
.add {
  height: 18px;
  line-height: 18px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dashed #657180;
  color: #657180;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 200;
  font-size: 0.8vw;
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
  min-width: 340px;
  background: white;
  position: fixed;
  top: 20%;
  right: 30%;
  border-radius: 5px;
  padding-bottom: 20px;
  /* border: 1px solid red; */
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
.tops2 {
  width: 90%;
  margin: 0 auto;
  /* height: 140px; */
  margin-top: 3%;
  border-radius: 5px;
  padding-left: 5%;
  padding-bottom: 1%;
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
  width: 35%;
  background: #f66913;
  cursor: pointer;
}
.success:hover {
  width: 35%;
  background: #f66913;
  color: white;
}
.canceles {
  background: #545c6a;
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
  /* height: 6vw; */
  min-height: 100px;
  padding-bottom: 1%;
  /* border: 1px solid red; */
}
.bottom_bottom {
  width: 100%;
  /* height: 50%; */
  margin-top: 2%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 4%;
}
.bottom_top {
  width: 100%;
  /* height: 50%; */
  margin-top: 2%;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 4%;
}
.watch {
  color: #f66913;
}
.switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  /* border: 1px solid; */
}
>>> .ivu-tag-text {
  color: #999;
}
.modal_label {
  width: 19%;
  min-width: 65px;
  /* border: 1px solid red; */
  display: inline;
  text-align-last: justify;
}
.tag {
  cursor: pointer;
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
.mansion_img {
  /* border: 1px solid; */
  width: 22%;
  height: 50%;
  position: absolute;
  top: 10%;
  right: 5%;
  z-index: 1000;
}
.mansion_img2 {
  /* border: 1px solid; */
  width: 22%;
  height: 50%;
  position: absolute;
  top: 10%;
  right: -2%;
  z-index: 1000;
}
.mansion_img1 {
  /* border: 1px solid; */
  width: 25%;
  height: 55%;
}
.mansion_top {
  width: 100%;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
}
.mansion_btn {
  margin-left: 10%;
  background: #545c6a;
  color: white;
  border: none;
  outline: none;
}
.mansion_btn:hover {
  margin-left: 10%;
  background: #545c6a;
  color: white;
  border: none;
  outline: none;
}
.Upload {
  display: flex;
  align-items: center;
}
.delete_img {
  cursor: pointer;
  color: #f66913;
}
.img_title {
  display: inline-block;
  /* border: 1px solid; */
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.img_modal {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid; */
}
.tab2 {
  width: 100%;
  /* border: 1px solid red; */
  text-align: right;
  margin-top: 1%;
  padding-right: 1%;
}
.tab2_add {
  width: 10%;
  height: 2vw;
  background: #f66913;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
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
.tab2_img {
  width: 98%;
  margin: 0 auto;
  margin-top: 2%;
  display: flex;
  /* border: 1px solid red; */
  margin-bottom: 3%;
}
.tab3_content {
  width: 98%;
  padding-bottom: 1%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.tab3_content1 {
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-top: 1%;
  margin-bottom: 1%;
  position: relative;
}
.tab3_text {
  width: 35%;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
}
.tab3_text1 {
  width: 18%;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
}
.tab3_text2 {
  width: 25%;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
}
.tags {
  border: 1px solid #dcdee2;
  min-height: 30px;
  border-radius: 10px;
  padding: 0 5px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tags1 {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #dcdee2;
  min-height: 30px;
  border-radius: 10px;
  padding: 0 5px;
  margin-left: 3px;
  cursor: pointer;
}
.tag_btn {
  border: 1px solid #dcdee2;
  display: inline-block;
  width: 30%;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.total_data {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 20%;
  margin-right: 3%;
}
.total_datas {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 20%;
  margin-right: 3%;
}
.total_data1 {
  /* border: 1px solid red; */
  /* margin-left: 3%; */
  display: flex;
  min-width: 180px;
  align-items: center;
  width: 15%;
}
.total_data3 {
  /* border: 1px solid red; */
  display: flex;
  min-width: 180px;
  align-items: center;
  width: 15%;
}
.total_data2 {
  width: 30%;
  /* border: 1px solid; */
}
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal_content {
  width: 50%;
  min-width: 700px;
  /* height: 50%; */
  background: white;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 5px;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 1%;
}
.modal_content1 {
  width: 50%;
  min-width: 700px;
  /* height: 50%; */
  background: white;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 5px;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 1%;
}
.modal_text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 100%; */
  margin-top: 2%;
  padding-left: 2%;
}
.modal_text1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* height: 100%; */
  margin-top: 2%;
  padding-left: 2%;
}
.modal_input {
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid red; */
}
.modal_input1 {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid red; */
}
.modal_input2 {
  width: 50%;
  display: flex;
  align-items: top;
  justify-content: flex-start;
  /* border: 1px solid red; */
}
.modal_label1 {
  width: 25%;
  text-align-last: justify;
}
.modal_label2 {
  display: inline-block;
  width: 25%;
  height: 100%;
  text-align-last: justify;
  /* border: 1px solid; */
}
.modal_put {
  width: 60%;
}
.modal_btn_br {
  border: 1px solid #dcdee2;
  margin-top: 4%;
}
.modal_btn {
  width: 100%;
  height: 40px;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid red; */
}
.modal_btn1 {
  width: 25%;
  height: 100%;
  background: #f66913;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
}
.modal_btn1:hover {
  width: 25%;
  height: 100%;
  background: #f66913;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div class="title_left">编辑车场信息</div>
      <button class="back" @click="success2">返回</button>
    </div>

    <Tabs
      v-model="name"
      type="card"
      style="background:white;width:99%;margin:0 auto;"
      @on-click="tab_click"
    >
      <TabPane label="基本信息" name="name1">
        <div class="content" v-if="spinShow == false">
          <div class="empower">
            <div class="empower_text1">
              <label for style="color:red;font-weight:200;">*</label>&nbsp;
              <div class="empower_textleft">车场名称</div>：&nbsp;&nbsp;
              <i-input v-model="params.parkName" placeholder="请输入车场名称" style="width:25%;"></i-input>
              <!-- 
              <div class="empower_textleft" style="margin-left:7%;">区域编码</div>：&nbsp;&nbsp;
              <i-input v-model="params.areaCode" placeholder="请输入区域编码" style="width:18%;"></i-input>-->
              <div class="mansion_img">
                <div class="mansion_top">
                  <label for>大厦照片：</label>
                  <!-- <Button class="mansion_btn" size="small">更换照片</Button> -->
                  <Upload
                    class="Upload"
                    ref="upload"
                    :headers="headers"
                    name="file"
                    :with-credentials="true"
                    :before-upload="handleUpload"
                    :show-upload-list="false"
                    :on-success="uploadSuccess"
                    action="/api/admin/park/image_upload"
                  >
                    <Button class="mansion_btn" size="small">浏览</Button>
                  </Upload>
                </div>
                <div v-for="(item, index) in file" class="img_modal">
                  <span class="img_title">文件名称: {{ item.name }}</span>
                  <span class="delete_img" @click="delectFile(item.name)">X</span>
                  <Button
                    v-if="image_show == true"
                    style="margin-left:23px;background:#545c6a;color:white;"
                    size="small"
                    type="primary"
                    :loading="loading"
                    @click="upload"
                  >上传</Button>
                </div>
                <img style="width:288px;height:200px;margin-top:3%;" :src="params.parkImageUrl" alt />
              </div>
            </div>

            <div class="empower_text3">
              <label for style="color:red;font-weight:200;">*</label>&nbsp;
              <div class="empower_textleft1">合用大厦</div>：&nbsp;&nbsp;
              <div class="empower_textrights">
                <Tag
                  class="tag"
                  @on-change="dell(item,index)"
                  type="border"
                  color="warning"
                  closable
                  checkable
                  @on-close="handleClose(item)"
                  v-for="(item,index) in edificeName"
                  :key="index"
                >{{item}}</Tag>
              </div>
              <div class="add" @click="add">添加大厦</div>
            </div>

            <div class="empower_text2">
              <label for style="color:red;font-weight:200;">*</label>&nbsp;
              <div class="empower_textleft1">出入口</div>：&nbsp;&nbsp;
              <div class="empower_textrights">
                <Tag
                  class="tag"
                  @on-change="dell1(item,index)"
                  type="border"
                  :color="item.gateFlag == 0 ? 'default' : 'warning'"
                  closable
                  checkable
                  @on-close="handleClose1(item)"
                  v-for="(item,index) in gateIn"
                  :key="index"
                >{{item.gateDes}}</Tag>
              </div>
              <div class="add" @click="add1">添加出入口</div>
            </div>

            <div class="empower_text1">
              <label for style="color:white;font-weight:200;">*</label>&nbsp;
              <div class="empower_textleft">车场地址</div>：&nbsp;&nbsp;
              <i-input v-model="params.parkAdress" placeholder="请输入车场地址" style="width:30%;"></i-input>
            </div>
            <div class="empower_text5">
              <div class="text5_left">
                <label for style="color:white;font-weight:200;">*</label>&nbsp;
                <div class="empower_textleft4">车场经度</div>：&nbsp;&nbsp;
                <i-input v-model="params.longitude" placeholder="请输入车场经度" style="width:71%;"></i-input>
              </div>

              <div class="text5_left">
                <div class="empower_textleft4" style="margin-left:7%;">车场纬度</div>：&nbsp;&nbsp;
                <i-input v-model="params.latitude" placeholder="请输入车场纬度" style="width:70%;"></i-input>
              </div>
            </div>

            <div class="empower_text5">
              <label for style="color:white;font-weight:200;">*</label>&nbsp;
              <label class="empower_textleft3">大厦边界</label>：&nbsp;&nbsp;
              <Input
                v-model="params.region"
                maxlength="1200"
                style="width:94%;outline:none;border-radius:5px;"
                show-word-limit
                type="textarea"
                :rows="2"
                placeholder="请输入大厦边界"
              />
            </div>

            <div class="empower_text4">
              <label for style="color:white;font-weight:200;">*</label>&nbsp;
              <label class="empower_textleft2">备注</label>：&nbsp;&nbsp;
              <Input
                v-model="params.remark"
                maxlength="120"
                style="width:23%;outline:none;border-radius:5px;padding-top:5px;"
                show-word-limit
                type="textarea"
                :rows="6"
                placeholder="请输入少于120字"
              />
            </div>
          </div>
          <div class="bottom">
            <hr style="border:1px solid #c5c8ce" />
            <div class="bottom_top">
              <div class="total_data">
                <label for style="color:red;">*</label>
                <label for style="display: inline-block;minWidth:85px;">总车位数：</label>
                <Input placeholder size="small" style="width: 150px" v-model="params.stallSum" />
              </div>
              <div class="total_data1">
                <label for>紧张数(黄色)：</label>
                <Input placeholder style="width: 40px" size="small" v-model="params.yellowValue" />
              </div>
              <div class="total_data1">
                <label for>紧缺数(红色)：</label>
                <Input style="width: 40px" size="small" v-model="params.redValue" />
              </div>
              <div class="total_data1">
                <label for>空位统计：</label>
                <Select v-model="params.statistics" size="small" style="width:100px">
                  <Option
                    v-for="item in statistics"
                    :value="item.id"
                    :key="item.id"
                  >{{ item.value }}</Option>
                </Select>
              </div>
              <div class="total_data2" v-if="params.statistics==2">
                <label for>相似车场：</label>
                <Tag
                  type="border"
                  closable
                  @on-close="tagclose(index)"
                  v-for="(item,index) in parkCodeList_name"
                  :key="index"
                >{{item}}</Tag>
                <span class="tag_btn" @click="tag_btn">添加相似</span>
              </div>
            </div>
            <div class="bottom_bottom">
              <div class="total_datas">
                <label for style="color:red;">*</label>
                <label for style="display: inline-block;minWidth:85px;">固定车位数：</label>
                <Input placeholder size="small" style="width: 135px" v-model="params.fixStallSum" />
              </div>
              <div class="total_data3">
                <label for>已绑定车位数：</label>
                <span style="width: 37px;display: inline-block;">{{bindStallNumber}}</span>
              </div>
              <div class="total_data3">
                <label for>已绑定车牌数：</label>
                <span>{{bindPlateNumber}}</span>
              </div>
              <div
                v-if="span_show"
                class="total_data3 watch"
                style="cursor:pointer;"
                @click="watch_fixed"
              >
                <span>查看固定车位</span>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <!-- :summary-method="handleSummary" -->
      <!-- show-summary -->
      <TabPane label="详细信息" name="name2">
        <div style="width:98%;margin:0 auto;">
          <!-- <i-table :columns="columns3" :data="data3" border></i-table> -->
          <i-table :columns="columns3" :data="data3" border></i-table>
        </div>
        <div class="tab2">
          <button class="tab2_add" @click="tab2_add">添加</button>
        </div>
        <div class="tab2_img">
          <div class="mansion_img1" v-for="(item,index) in data3" :key="index">
            <div class="mansion_top">
              <label for>{{item.floor + '车场平面图' }}：</label>
              <Upload
                class="Upload"
                ref="uploads5"
                :headers="headers"
                :with-credentials="true"
                :before-upload="handleUpload2"
                :show-upload-list="false"
                :on-success="uploadSuccess2"
                action="/api/admin/park/image_upload"
              >
                <Button class="mansion_btn" size="small" @click="watchs(index)">浏览</Button>
              </Upload>
            </div>
            <div v-for="(items, indexs) in tab2_file[index]" :key="indexs" class="img_modal">
              <span class="img_title">文件名称: {{ items.name }}</span>
              <span class="delete_img" @click="delectFile2(items.name,index)">X</span>
              <Button
                v-if="image_show2[index] == 'true'"
                style="margin-left:23px;background:#545c6a;color:white;"
                size="small"
                type="primary"
                @click="upload2(index)"
              >上传</Button>
            </div>
            <img style="width:288px;height:200px;margin-top:3%;" :src="item.floorPlanImg" alt />
          </div>
        </div>
      </TabPane>
      <TabPane label="经营信息" name="name3">
        <div class="tab3_content">
          <div class="tab3_content1">
            <div class="tab3_text">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>项目属性</div>：&nbsp;&nbsp;
              <Select v-model="parkManage.projectProperty" style="width:60%;">
                <Option
                  v-for="item in tab3_list"
                  :value="item.value"
                  :key="item.value"
                >{{ item.value }}</Option>
              </Select>
            </div>
            <div class="tab3_text">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>蓝牌编号</div>：&nbsp;&nbsp;
              <i-input v-model="parkManage.blueCardNumber" placeholder="请输入蓝牌编号" style="width:60%;"></i-input>
            </div>
            <div class="mansion_img2">
              <div class="mansion_top">
                <label for>蓝牌照片：</label>
                <Upload
                  class="Upload"
                  ref="upload1"
                  :headers="headers"
                  name="file"
                  :with-credentials="true"
                  :before-upload="handleUpload1"
                  :show-upload-list="false"
                  :on-success="uploadSuccess1"
                  action="/api/admin/park/image_upload"
                >
                  <Button class="mansion_btn" size="small">浏览</Button>
                </Upload>
              </div>
              <div v-for="(item, index) in file1" class="img_modal">
                <span class="img_title">文件名称: {{ item.name }}</span>
                <span class="delete_img" @click="delectFile1(item.name)">X</span>
                <Button
                  v-if="image_show1 == true"
                  style="margin-left:23px;background:#545c6a;color:white;"
                  size="small"
                  type="primary"
                  :loading="loading"
                  @click="upload1"
                >上传</Button>
              </div>
              <img style="width:288px;height:200px;margin-top:3%;" :src="parkManage.blueCarImg" alt />
            </div>
          </div>
          <div class="tab3_content1">
            <div class="tab3_text">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>道闸品牌</div>：&nbsp;&nbsp;
              <i-input v-model="parkManage.gateBrand" placeholder="请输入道闸品牌" style="width:60%;"></i-input>
            </div>
          </div>
          <div style="width:80%;margin-top:1%;">
            <Divider orientation="left" style="margin-top:2%;">日间收费</Divider>
          </div>
          <div class="tab3_content1">
            <div class="tab3_text2">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>计时时段</div>：
              <TimePicker
                type="time"
                placement="bottom-start"
                placeholder="请选择时间"
                style="width:33.5%;font-size:0.6vw;"
                clearable
                v-model="dayTimeInterval_starttime"
              ></TimePicker>&nbsp;-&nbsp;
              <TimePicker
                type="time"
                placement="bottom-start"
                placeholder="请选择时间"
                style="width:33.5%;font-size:0.6vw;"
                clearable
                v-model="dayTimeInterval_endtime"
              ></TimePicker>
            </div>
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div style="minWidth:60px;">小型车收费</div>：
              <i-input v-model="parkManage.dayMiniCarCharge" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>&nbsp;
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div style="minWidth:60px;">大型车收费</div>：
              <i-input v-model="parkManage.dayBigCarCharge" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>封顶金额</div>：
              <i-input v-model="parkManage.dayTopMoney" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>
          </div>
          <div style="width:80%;margin-top:1%;">
            <Divider orientation="left" style="margin-top:2%;">夜间收费</Divider>
          </div>
          <div class="tab3_content1">
            <div class="tab3_text2">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>计时时段</div>：
              <TimePicker
                type="time"
                placement="bottom-start"
                placeholder="请选择时间"
                style="width:33.5%;font-size:0.6vw;"
                clearable
                v-model="nightTimeInterval_starttime"
              ></TimePicker>&nbsp;-&nbsp;
              <TimePicker
                type="time"
                placement="bottom-start"
                placeholder="请选择时间"
                style="width:33.5%;font-size:0.6vw;"
                clearable
                v-model="nightTimeInterval_endtime"
              ></TimePicker>
            </div>
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div style="minWidth:60px;">小型车收费</div>：
              <i-input
                v-model="parkManage.nightMiniCarCharge"
                placeholder="请输入金额"
                style="width:60%;"
              ></i-input>
            </div>&nbsp;
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div style="minWidth:60px;">大型车收费</div>：
              <i-input
                v-model="parkManage.nightBigCarCharge"
                placeholder="请输入金额"
                style="width:60%;"
              ></i-input>
            </div>
            <div class="tab3_text1">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>封顶金额</div>：
              <i-input v-model="parkManage.nightTopMoney" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>
            <!-- <Select v-model="model1" style="width:20%;">
              <Option v-for="item in tab3_list" :value="item.value" :key="item.id">{{ item.value }}</Option>
            </Select>-->
          </div>
          <div style="width:80%;margin-top:1%;">
            <Divider orientation="left" style="margin-top:2%;">长租收费</Divider>
          </div>
          <div class="tab3_content1">
            <div class="tab3_text">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>包月固定车位</div>：&nbsp;&nbsp;
              <i-input v-model="parkManage.monthFix" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>
            <div class="tab3_text">
              <label for style="color:white;font-weight:200;"></label>&nbsp;
              <div>包月非固定车位</div>：&nbsp;&nbsp;
              <i-input v-model="parkManage.monthNotFix" placeholder="请输入金额" style="width:60%;"></i-input>
            </div>
          </div>
          <div style="width:80%;margin-top:1%;">
            <Divider orientation="left" style="margin-top:2%;">项目信息</Divider>
          </div>
          <i-table :columns="columns4" :data="data4" border></i-table>
          <div class="tab2">
            <button class="tab2_add" @click="tab2_add1">添加</button>
          </div>
        </div>
      </TabPane>
    </Tabs>

    <div v-if="spinShow == false" class="btn">
      <Button class="button1" @click="Preservation" :loading="loading1">保存</Button>
      <button class="button2" @click="cancel">取消</button>
    </div>

    <div class="modules" v-if="show2">
      <div class="contentes">
        <div class="content_top">确定取消编辑？</div>
        <div class="content_bottom">
          <button class="success" @click="success2">确定</button>
          <button class="canceles" @click="canceles2">取消</button>
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

    <div class="module" v-if="show">
      <div class="contents">
        <div class="module_title">增加车场大厦</div>
        <div class="tops1">
          <label for style="color:red;">*</label>
          <label for>大厦名称：</label>
          <input
            v-model="values"
            placeholder="请输入大厦名称"
            style="width: 60%;height:25px;margin-left:2px;border:1px solid #e3e8ee;border-radius:5px;outline:none;padding-left:5px;"
          />
        </div>
        <hr style="border:1.5px solid #c5c8ce" />
        <div class="bottoms">
          <button class="save" @click="save">确定</button>
          <button class="cancels" @click="cancels">取消</button>
        </div>
      </div>
    </div>

    <div class="module" v-if="tag_show">
      <div class="contents">
        <div class="module_title">增加相似车场</div>
        <div class="tops1">
          <label for style="color:red;">*</label>
          <label for>车场名称：</label>
          <i-select v-model="serial" filterable style="width:60%;" clearable>
            <i-option
              v-for="(item,index) in serials"
              :key="index"
              :value="item.parkCode"
            >{{ item.parkName }}</i-option>
          </i-select>
          <!-- <input
            v-model="values"
            placeholder="请输入大厦名称"
            style="width: 60%;height:25px;margin-left:2px;border:1px solid #e3e8ee;border-radius:5px;outline:none;padding-left:5px;"
          />-->
        </div>
        <hr style="border:1.5px solid #c5c8ce" />
        <div class="bottoms">
          <button class="save" @click="save_tag">确定</button>
          <button class="cancels" @click="cancels_tag">取消</button>
        </div>
      </div>
    </div>

    <div class="module" v-if="show1">
      <div class="contents">
        <div class="module_title">编辑车场出入口</div>
        <div class="tops2">
          <div class="switch">
            <label for style="color:white;">*</label>
            <label class="modal_label" for>车场名称</label>：
            <span>&nbsp;{{Mansionname}}</span>
          </div>

          <div class="switch">
            <label for style="color:red;">*</label>
            <label class="modal_label" for>属性</label>：
            <Select v-model="inout_attribute" style="width:50%" size="default">
              <Option
                v-for="item in inout_attributes"
                :value="item.id"
                :key="item.id"
              >{{ item.value }}</Option>
            </Select>
          </div>

          <div class="switch">
            <label for style="color:red;">*</label>
            <label class="modal_label" for>出入口描述</label>：
            <input
              v-model="values1"
              placeholder="请输入出入口名称"
              size="large"
              style="width: 50%;min-height:30px;margin-left:2px;border:1px solid #e3e8ee;border-radius:5px;outline:none;padding-left:5px;margin-right:10px;"
            />
            <i-switch v-model="switch1" size="large" true-color="#f66913" @on-change="change1">
              <span slot="open">开启</span>
              <span slot="close">禁用</span>
            </i-switch>
          </div>
          <div class="switch">
            <label for style="color:white;">*</label>
            <label class="modal_label" for>位置描述</label>：
            <input
              v-model="remark"
              placeholder="请输入位置描述"
              size="large"
              style="width: 50%;min-height:30px;margin-left:2px;border:1px solid #e3e8ee;border-radius:5px;outline:none;padding-left:5px;margin-right:10px;"
            />
          </div>
          <div class="switch" v-if="span_show">
            <label for style="color:white;">*</label>
            <label class="modal_label" for>一体机</label>：
            <div
              class="tags"
              v-for="(item,index) in cameraCodeList"
              :key="index"
              @click="one_edit(item,index)"
            >{{item}}</div>
            <div class="tags1" @click="one_add">添加</div>
          </div>
        </div>
        <hr style="border:1.5px solid #c5c8ce" />
        <div class="bottoms">
          <button class="save" @click="save1">确定</button>
          <button class="cancels" @click="cancels1">取消</button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="modal">
      <div class="modal_content">
        <div class="modal_title">编辑车位信息</div>
        <div class="modal_text">
          <div class="modal_input">
            <label class="modal_label1" for>楼层</label>：
            <Input class="modal_put" v-model="modal_input.floor" />
          </div>
        </div>
        <Divider orientation="left">固定车位</Divider>
        <div class="modal_text">
          <div class="modal_input">
            <label class="modal_label1" for>普通车位</label>：
            <Input class="modal_put" v-model="modal_input.fixCommon" />
          </div>
          <div class="modal_input">
            <label class="modal_label1" for>立体车位</label>：
            <Input class="modal_put" v-model="modal_input.fixSteric" />
          </div>
          <div class="modal_input">
            <label class="modal_label1" for>充电车位</label>：
            <Input class="modal_put" v-model="modal_input.fixElectric" />
          </div>
        </div>
        <Divider orientation="left">临停车位</Divider>
        <div class="modal_text">
          <div class="modal_input">
            <label class="modal_label1" for>普通车位</label>：
            <Input class="modal_put" v-model="modal_input.tempCommon" />
          </div>
          <div class="modal_input">
            <label class="modal_label1" for>立体车位</label>：
            <Input class="modal_put" v-model="modal_input.tempSteric" />
          </div>
          <div class="modal_input">
            <label class="modal_label1" for>充电车位</label>：
            <Input class="modal_put" v-model="modal_input.tempElectric" />
          </div>
        </div>
        <div class="modal_btn_br"></div>
        <div class="modal_btn">
          <Button class="modal_btn1" @click="modal_succes">保存</Button>
          <Button class="modal_btn1" @click="modal_cancel">取消</Button>
        </div>
      </div>
    </div>

    <div class="modal" v-if="modal1">
      <div class="modal_content1">
        <div class="modal_title">编辑项目信息</div>

        <div class="modal_text1">
          <div class="modal_input1">
            <label class="modal_label1" for>类别</label>：
            <Input class="modal_put" v-model="modal_input1.projectType" />
          </div>
          <div class="modal_input1">
            <label class="modal_label1" for>单位名称</label>：
            <Input class="modal_put" v-model="modal_input1.unitName" />
          </div>
        </div>
        <div class="modal_text1">
          <div class="modal_input1">
            <label class="modal_label1" for>联系人</label>：
            <Input class="modal_put" v-model="modal_input1.contacts" />
          </div>
          <div class="modal_input1">
            <label class="modal_label1" for>职位</label>：
            <Input class="modal_put" v-model="modal_input1.position" />
          </div>
        </div>
        <div class="modal_text1">
          <div class="modal_input1">
            <label class="modal_label1" for>联系方式</label>：
            <Input class="modal_put" v-model="modal_input1.mobile" />
          </div>
        </div>
        <div class="modal_text1">
          <div class="modal_input2">
            <label class="modal_label2" for>备注</label>：
            <Input
              v-model="modal_input1.remark"
              class="modal_put"
              maxlength="120"
              show-word-limit
              type="textarea"
              :rows="6"
              placeholder="请输入少于120字"
            />
          </div>
        </div>

        <div class="modal_btn_br"></div>
        <div class="modal_btn">
          <Button class="modal_btn1" @click="modal_succes1">保存</Button>
          <Button class="modal_btn1" @click="modal_cancel1">取消</Button>
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
      modal: false,
      modal1: false,
      serial: "",
      serials: [],
      tag_show: false,
      parkCodeList_name: [],
      parkCodeList: [],
      name: "name1",
      model1: true,
      columns4: [
        {
          title: "类别",
          key: "projectType",
          align: "center"
        },
        {
          title: "单位名称",
          key: "unitName",
          align: "center"
        },
        {
          title: "联系人",
          key: "contacts",
          align: "center"
        },
        {
          title: "职位",
          key: "position",
          align: "center"
        },
        {
          title: "联系方式",
          key: "mobile",
          align: "center"
        },
        {
          title: "备注",
          key: "remark",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          render: (h, params) => {
            let menu = null;
            menu = h("div", [
              h(
                "Button",
                {
                  style: {
                    background: "#f66913",
                    color: "white",
                    borderRadius: "5px"
                  },
                  props: {
                    type: "text",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleEdit1(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  style: {
                    background: "#f66913",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "5px"
                  },
                  props: {
                    type: "text",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.delete(params.row);
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
      data4: [],
      tab3_list: [
        {
          value: "写字楼"
        },
        {
          value: "公寓"
        },
        {
          value: "商场"
        },
        {
          value: "综合体"
        },
        {
          value: "住宅"
        }
      ],
      img1: require("@/assets/images/timg.jpg"),
      img2: require("@/assets/images/t.jpg"),
      tab_page: "",
      show_delete: false,
      loading_delete: false,
      modal_input: {
        floor: "", //楼层
        stallTotal: "", //总数
        fixCommon: "", //固普
        fixSteric: "", //固立
        fixElectric: "", //固充
        tempCommon: "", //临普
        tempSteric: "", //临立
        tempElectric: "", //临充
        floorPlanImg: "", //车场平面图路径
        id: ""
      },
      modal_index: "", //点击下标
      modal_input1: {
        contacts: "", //联系人
        mobile: "", //"联系方式"
        position: "", //"职位"
        projectType: "", //"停车场经营"
        remark: "", //"备注"
        unitName: "", //"单位名称"
        id: ""
      },
      modal_index1: "", //点击下标
      columns3: [
        {
          title: "停车位分布",
          align: "center",
          children: [
            {
              title: "楼层",
              key: "floor",
              align: "center",
              // width: 200,
              sortable: false
            },
            {
              title: "总数",
              align: "center",
              key: "stallTotal",
              // width: 200,
              sortable: false
            },
            {
              title: "固定车位",
              align: "center",
              // width: 200,
              sortable: false,
              children: [
                {
                  title: "普通车位",
                  align: "center",
                  key: "fixCommon",
                  // width: 200,
                  sortable: false
                },
                {
                  title: "立体车位",
                  key: "fixSteric",
                  align: "center",
                  sortable: false
                },
                {
                  title: "充电车位",
                  key: "fixElectric",
                  align: "center",
                  // width: 200,
                  sortable: false
                }
              ]
            },
            {
              title: "临停车位",
              align: "center",
              // width: 200,
              sortable: false,
              children: [
                {
                  title: "普通车位",
                  key: "tempCommon",
                  align: "center",
                  // width: 200,
                  sortable: false
                },
                {
                  title: "立体车位",
                  key: "tempSteric",
                  align: "center",
                  // width: 200,
                  sortable: false
                },
                {
                  title: "充电车位",
                  key: "tempElectric",
                  align: "center",
                  // width: 200,
                  sortable: false
                }
              ]
            }
          ]
        },
        {
          title: "操作",
          align: "center",
          width: 200,
          render: (h, params) => {
            let menu = null;
            menu = h("div", [
              h(
                "Button",
                {
                  style: {
                    background: "#f66913",
                    color: "white",
                    borderRadius: "5px"
                  },
                  props: {
                    type: "text",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleEdit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  style: {
                    background: "#f66913",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "5px"
                  },
                  props: {
                    type: "text",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.delete(params.row);
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
      data3: [],
      loading: false,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      credentials: true,
      statistics: [
        {
          id: 1,
          value: "视频计算"
        },
        {
          id: 2,
          value: "软件计算"
        }
      ],
      inout_attribute: "", //出入口属性
      inout_attributes: [
        {
          id: 2,
          value: "出口"
        },
        {
          id: 1,
          value: "入口"
        },
        {
          id: 3,
          value: "复合"
        }
      ],
      span_show: false,
      bindStallNumber: "", //已绑定车位数
      bindPlateNumber: "", //已绑定车牌数
      gateIn: [],
      gateout: [],
      edificeName: [],
      params: {
        areaCode: "", //区域编码
        contactNumber: "", //联系电话
        contactPerson: "", //联系人
        edificeName: [], //合用大厦
        fixStallSum: "", //固定车位总数
        gateInfos: [
          //出入口信息
          {
            gateDes: "", //出入口名称
            gateFlag: "", //出入口状态
            gateId: "", //出入口主键ID
            gateType: "" //出入口类型
          }
        ],
        latitude: "", //纬度
        longitude: "", //经度
        parkAdress: "", //车场所在地址
        parkName: "", //车场名称
        redValue: "", //红色临界值
        remark: "", //备注
        stallSum: "", //车场车位总数
        statistics: 1, //空位统计 默认方式为1,1一体机采集方式 2人工模拟数据
        yellowValue: "", //黄色临界值
        parkImageUrl: "", //图片路径
        parkDetails: [], //车场详情列表
        parkProjects: [], //车场经营信息列表
        parkManage: {} //车场经营信息
      }, //请求参数
      parkManage: {},
      dayTimeInterval: "",
      dayTimeInterval_starttime: "",
      dayTimeInterval_endtime: "",
      nightTimeInterval: "",
      nightTimeInterval_starttime: "",
      nightTimeInterval_endtime: "",
      status: "",
      switch1: true,
      switch2: true,
      loadings: false,
      index: "",
      spinShow: true, //loading
      show: false, //增加车场显示隐藏
      show1: false, //增加车场入口显示隐藏
      show2: false, //取消编辑显示隐藏
      show3: false, //清除显示隐藏
      show4: false, //增加车场出口
      values: "",
      values1: "",
      values4: "",
      loading1: false, //保存按钮loading
      svn: "",
      Mansionname: "",
      file: [],
      uploadFile: [],
      image_show: false,
      tab2_uploadFile: [],
      tab2_file: [],
      image_show2: [],
      image_index: "",
      file1: [],
      image_show1: false,
      uploadFile1: [],
      cameraCodeList: "",
      remark: "",
      parkCode: ""
    };
  },
  watch: {},
  created() {
    // console.log(this.$route.query);
    if (JSON.stringify(this.$route.query) != "{}") {
      console.log("不等于空");
      this.span_show = true;
      this.list();
      this.floores();
    } else {
      this.spinShow = false;
    }
  },
  methods: {
    handleEdit(row) {
      console.log(row);
      this.modal_input.floor = row.floor;
      this.modal_input.fixCommon = row.fixCommon;
      this.modal_input.fixSteric = row.fixSteric;
      this.modal_input.fixElectric = row.fixElectric;
      this.modal_input.tempCommon = row.tempCommon;
      this.modal_input.tempSteric = row.tempSteric;
      this.modal_input.tempElectric = row.tempElectric;
      this.modal_input.floorPlanImg = row.floorPlanImg;
      this.modal_input.id = row.id;
      this.modal_index = row._index;
      console.log(this.modal_input);
      this.modal = true;
    },
    handleEdit1(row) {
      console.log(row);
      this.modal_input1.projectType = row.projectType;
      this.modal_input1.unitName = row.unitName;
      this.modal_input1.contacts = row.contacts;
      this.modal_input1.position = row.position;
      this.modal_input1.mobile = row.mobile;
      this.modal_input1.remark = row.remark;
      this.modal_input1.id = row.id;
      this.modal_index1 = row._index;

      console.log(this.modal_input1);
      this.modal1 = true;
    },
    // 添加表格项
    tab2_add() {
      console.log(this.data3);
      this.modal_index = -1;
      this.modal_input.floor = "";
      this.modal_input.fixCommon = "";
      this.modal_input.fixSteric = "";
      this.modal_input.fixElectric = "";
      this.modal_input.tempCommon = "";
      this.modal_input.tempSteric = "";
      this.modal_input.tempElectric = "";
      this.modal_input.floorPlanImg = "";
      this.modal_input.id = "";
      this.modal = true;
    },
    tab2_add1() {
      this.modal_index1 = -1;
      this.modal_input1.projectType = "";
      this.modal_input1.unitName = "";
      this.modal_input1.contacts = "";
      this.modal_input1.position = "";
      this.modal_input1.mobile = "";
      this.modal_input1.remark = "";
      this.modal_input1.id = "";
      this.modal1 = true;
    },
    floores() {
      axios
        .request({
          url: url.url.select_park,
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.serials = res.data.data;
        });
    },
    list() {
      let that = this;
      axios
        .request({
          url: url.url.find_park,
          params: {
            id: this.$route.query.id
          },
          method: "get"
        })
        .then(res => {
          console.log(res);
          this.Mansionname = res.data.data.parkName;
          axios
            .request({
              url: url.url.select_park,
              method: "get"
            })
            .then(res1 => {
              console.log(res1);
              res.data.data.parkCodeList.map(reson => {
                // console.log(reson);
                res1.data.data.map(reson1 => {
                  // console.log(reson1);
                  if (reson == reson1.parkCode) {
                    this.parkCodeList_name.push(reson1.parkName);
                    this.parkCodeList.push(reson1.parkCode);
                  }
                });
              });
              console.log(this.params.statistics);
            });
          this.spinShow = false;
          console.log(res.data.data);
          this.parkCode = res.data.data.parkCode;
          this.data3 = res.data.data.parkDetails;
          this.data3.map(res => {
            this.tab2_file.push([]);
            this.tab2_uploadFile.push([]);
            this.image_show2.push("false");
          });
          console.log(this.tab2_file);
          this.data4 = res.data.data.parkProjects;
          this.parkManage = res.data.data.parkManage;
          console.log(res.data.data.parkManage.dayTimeInterval.split("-"));
          if (res.data.data.parkManage.dayTimeInterval) {
            this.dayTimeInterval_starttime = res.data.data.parkManage.dayTimeInterval.split(
              "-"
            )[0];
            this.dayTimeInterval_endtime = res.data.data.parkManage.dayTimeInterval.split(
              "-"
            )[1];
          }
          if (res.data.data.parkManage.nightTimeInterval) {
            this.nightTimeInterval_starttime = res.data.data.parkManage.nightTimeInterval.split(
              "-"
            )[0];
            this.nightTimeInterval_endtime = res.data.data.parkManage.nightTimeInterval.split(
              "-"
            )[1];
          }
          this.bindStallNumber = res.data.data.bindStallNumber;
          this.bindPlateNumber = res.data.data.bindPlateNumber;
          let gatein = [];
          let gateout = [];
          res.data.data.gateInfos.map(res => {
            // console.log(res);
            if (res.gateType == 1) {
              gatein.push(res);
              this.gateIn = gatein;
            } else {
              gateout.push(res);
              this.gateout = gateout;
            }
          });
          this.gateIn = [...this.gateout, ...this.gateIn];
          console.log(this.gateIn);
          this.params = res.data.data;
          console.log(this.params);
          this.params.edificeName = this.params.edifices;
          delete this.params.edifices;
          this.edificeName = this.params.edificeName;
        });
    },

    handleUpload(file) {
      console.log(file);
      this.file = [];
      // 删除需要上传文件数据里的当前文件
      this.uploadFile = [];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.params.parkImageUrl = _base64; //将_base64赋值给图片的src，实现图片预览
        // console.log(this.params.parkImageUrl);
      };
      // 上传文件前的事件钩子
      // 选择文件后 这里判断文件类型 保存文件 自定义一个keyid 值 方便后面删除操作
      let keyID = Math.random()
        .toString()
        .substr(2);
      file["keyID"] = keyID;
      // 保存文件到总展示文件数据里
      this.file.push(file);
      // 保存文件到需要上传的文件数组里
      this.uploadFile.push(file);
      this.image_show = true;
      // 返回 falsa 停止自动上传 我们需要手动上传
      return false;
    },
    watchs(index) {
      console.log(index);
      this.image_index = index;
    },
    handleUpload2(file) {
      console.log(file);
      this.image_show2[this.image_index] = "true";
      console.log(this.image_show2);
      this.tab2_file[this.image_index] = [];
      // 删除需要上传文件数据里的当前文件
      this.tab2_uploadFile[this.image_index] = [];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.data3[this.image_index].floorPlanImg = _base64; //将_base64赋值给图片的src，实现图片预览
        // console.log(this.params.parkImageUrl);
      };
      // 上传文件前的事件钩子
      // 选择文件后 这里判断文件类型 保存文件 自定义一个keyid 值 方便后面删除操作
      let keyID = Math.random()
        .toString()
        .substr(2);
      file["keyID"] = keyID;
      // 保存文件到总展示文件数据里
      this.tab2_file[this.image_index].push(file);
      // 保存文件到需要上传的文件数组里
      this.tab2_uploadFile[this.image_index].push(file);
      this.image_show2[this.image_index] = "true";
      // 返回 falsa 停止自动上传 我们需要手动上传
      return false;
    },
    upload2(index) {
      console.log(index);
      // console.log(this.tab2_uploadFile);
      // console.log(this.tab2_file);
      // 上传文件
      this.image_index = index;
      this.loading = true;
      for (let i = 0; i < this.tab2_uploadFile[index].length; i++) {
        let item = this.tab2_file[index][i];
        console.log(item);
        console.log(this.$refs);
        this.$refs.uploads5[index].post(item);
      }
    },
    uploadSuccess2(res, file, fileList) {
      // 文件上传回调 上传成功后删除待上传文件
      console.log(res);
      if (res.code == 200) {
        this.data3[this.image_index].floorPlanImg = res.data;
        this.image_show2[this.image_index] = "false";
        console.log(this.image_show2);
        this.$Notice.success({
          title: "系统提示",
          desc: "上传成功"
        });
      } else {
        this.$Notice.error({
          title: "系统提示",
          desc: res.message
        });
        this.image_show2[this.image_index] = "true";
      }
      this.loading = false;
      console.log(file);
      console.log(fileList);
    },
    delectFile2(keyID, index) {
      this.loading = false;

      // 删除需要上传文件数据里的当前文件

      // console.log(keyID);
      // 删除文件
      // 删除总展示文件里的当前文件
      this.tab2_file[index] = [];
      // 删除需要上传文件数据里的当前文件
      this.tab2_uploadFile[index] = [];
      this.data3[index].floorPlanImg = "";
    },
    delectFile(keyID) {
      this.loading = false;
      // console.log(keyID);
      // 删除文件
      // 删除总展示文件里的当前文件
      this.file = [];
      // 删除需要上传文件数据里的当前文件
      this.uploadFile = [];
      this.params.parkImageUrl = "";
    },
    upload() {
      // 上传文件
      this.loading = true;
      for (let i = 0; i < this.uploadFile.length; i++) {
        let item = this.file[i];
        console.log(item);
        this.$refs.upload.post(item);
      }
    },
    delectFile1(keyID) {
      this.loading = false;
      // 删除文件
      // 删除总展示文件里的当前文件
      this.file1 = [];
      // 删除需要上传文件数据里的当前文件
      this.uploadFile1 = [];
      this.parkManage.blueCarImg = "";
    },
    handleUpload1(file) {
      console.log(file);
      this.file1 = [];
      // 删除需要上传文件数据里的当前文件
      this.uploadFile1 = [];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.parkManage.blueCarImg = _base64; //将_base64赋值给图片的src，实现图片预览
      };
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
    },
    upload1() {
      // 上传文件
      this.loading = true;
      for (let i = 0; i < this.uploadFile1.length; i++) {
        let item = this.file1[i];
        this.$refs.upload1.post(item);
      }
    },
    uploadSuccess1(res, file, fileList) {
      // 文件上传回调 上传成功后删除待上传文件
      console.log(res);
      if (res.code == 200) {
        this.parkManage.blueCarImg = res.data;
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
      console.log(file);
      console.log(fileList);
    },
    uploadSuccess(res, file, fileList) {
      // 文件上传回调 上传成功后删除待上传文件
      console.log(res);
      if (res.code == 200) {
        this.params.parkImageUrl = res.data;
        this.image_show = false;
        this.$Notice.success({
          title: "系统提示",
          desc: "上传成功"
        });
      } else {
        this.$Notice.error({
          title: "系统提示",
          desc: res.message
        });
        this.image_show = true;
      }
      this.loading = false;
    },
    change1() {
      console.log(this.switch1);
      if (this.switch1 == false) {
        this.gateIn[this.index].gateFlag = 0;
        console.log(this.gateIn[this.index].gateFlag);
      } else if (this.switch1 == true) {
        this.gateIn[this.index].gateFlag = 1;
      }
    },
    //查看固定车位
    watch_fixed() {
      console.log("查看固定车位");
      sessionStorage.setItem("simulation_show", true);
      this.$router.push({
        path: "/car_administration_view",
        query: {
          id: this.$route.query.id
        }
      });
    },
    //删除大厦
    handleClose(name) {
      console.log(name);
      this.params.edificeName.map((item, index, arry) => {
        if (item == name) {
          arry.splice(index, 1);
        }
      });
      this.edificeName.map((item, index, arry) => {
        if (item == name) {
          arry.splice(index, 1);
        }
      });
      console.log(this.params.edificeName);
    },
    //删除入口
    handleClose1(name) {
      console.log(this.gateIn);
      console.log(name);
      if (name.gateId != null) {
        this.spinShow = true;
        axios
          .request({
            url: url.url.delete_gate,
            params: {
              id: name.gateId
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
              this.gateIn.map((item, index, arry) => {
                if (item.gateDes == name.gateDes) {
                  arry.splice(index, 1);
                }
              });
            } else {
              this.$Notice.error({
                title: "系统提示",
                desc: res.data.message
              });
            }
            this.spinShow = false;
          });
      } else {
        this.gateIn.map((item, index, arry) => {
          if (item.gateDes == name.gateDes) {
            arry.splice(index, 1);
          }
        });
      }
    },
    dell(item, index) {
      console.log(index);
      this.show = true;
      this.index = index;
      this.values = item;
    },
    dell1(item, index) {
      console.log(index, item);
      this.gateCode = item.gateCode;
      this.inout_attribute = item.gateType;
      this.show1 = true;
      this.index = index;
      if (item.gateFlag == 0) {
        this.switch1 = false;
      } else {
        this.switch1 = true;
      }
      this.values1 = item.gateDes;
      this.cameraCodeList = item.cameraCodeList;
      this.remark = item.remark;
    },
    dell4(item, index) {
      console.log(item, index);
      this.show4 = true;
      this.index = index;
      if (item.gateFlag == 0) {
        this.switch2 = false;
      } else {
        this.switch2 = true;
      }
      this.values4 = item.gateDes;
    },
    //删除出口
    handleClose4(name) {
      console.log(name);
      if (name.gateId != null) {
        this.spinShow = true;
        console.log("走接口");
        axios
          .request({
            url: url.url.delete_gate,
            params: {
              id: name.gateId
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
              this.gateout.map((item, index, arry) => {
                if (item.gateDes == name.gateDes) {
                  arry.splice(index, 1);
                }
              });
            } else {
              this.$Notice.error({
                title: "系统提示",
                desc: res.data.message
              });
            }
            this.spinShow = false;
          });
      } else {
        this.gateout.map((item, index, arry) => {
          if (item.gateDes == name.gateDes) {
            arry.splice(index, 1);
          }
        });
      }
    },
    //保存大厦
    save() {
      console.log("保存大厦");
      let car = this.values;
      if (this.values != "") {
        if (this.params.edificeName.length == 0) {
          console.log(car);
          this.params.edificeName.push(car);
          this.show = false;
        } else {
          console.log("2222222222222");
          this.svn = false;
          this.params.edificeName.map((res, index, arry) => {
            if (res == car) {
              this.$Message.warning("已有该大厦，请勿重复添加");
              this.svn = true;
              return;
            }
            console.log(this.index);
            console.log(index);
            if (this.index === index) {
              console.log(arry);
              arry[index] = this.values;
              this.show = false;
            }
          });
          console.log(this.index);
          if (this.svn != true && this.index === "") {
            console.log("3333333333");
            this.params.edificeName.push(car);
            this.show = false;
          }
        }

        if (this.edificeName.length == 0) {
          console.log(car);
          this.edificeName.push(car);
          this.show = false;
          this.values = "";
        } else {
          console.log("2222222222222");
          this.svn = false;
          console.log(this.edificeName);
          this.edificeName.map((res, index, arry) => {
            if (res == car) {
              // this.$Message.warning("已有该大厦，请勿重复添加");
              this.svn = true;
              return;
            }
            console.log(this.index);
            console.log(index);
            if (this.index === index) {
              // console.log(arry);
              // console.log(this.values);
              arry[index] = this.values;
              this.show = false;
              this.values = "";
            }
          });
          console.log(this.index);
          if (this.svn != true && this.index === "") {
            console.log("3333333333");
            this.edificeName.push(car);
            this.values = "";
          }
          this.index = "";
        }
      } else {
        this.$Message.warning("请填写大厦名称");
      }
    },
    //取消保存大厦
    cancels() {
      console.log("取消保存");
      this.index = "";
      this.show = false;
      this.values = "";
    },
    //保存入口
    save1() {
      console.log("保存入口");
      console.log(this.gateIn);
      let car = {
        gateDes: this.values1,
        gateFlag: 1,
        gateId: null,
        gateType: this.inout_attribute,
        remark: this.remark
      };
      console.log(this.inout_attribute);
      if (!this.inout_attribute) {
        this.$Message.warning("请选择属性");
      } else if (this.values1 != "") {
        if (this.gateIn.length == 0) {
          console.log(car);
          this.gateIn.push(car);
          this.show1 = false;
          this.values1 = "";
          this.remark = "";
        } else {
          console.log("2222222222222");
          this.svn = false;
          this.gateIn.map((res, index, arry) => {
            if (res.gateDes == car.gateDes && this.index === "") {
              this.$Message.warning("已有该入口，请勿重复添加");
              this.svn = true;
            }
            if (this.index === index) {
              arry[index].gateDes = this.values1;
              arry[index].remark = this.remark;
              arry[index].gateType = this.inout_attribute;
              console.log(this.inout_attribute);
              console.log(arry);
              if (this.switch1 == true) {
                arry[index].gateFlag = 1;
              } else {
                arry[index].gateFlag = 0;
              }
              this.show1 = false;
              this.values = "";
              this.inout_attribute = "";
            }
          });
          if (this.svn != true && this.index === "") {
            console.log("3333333333");
            this.gateIn.push(car);
            this.show1 = false;
            this.values1 = "";
            this.remark = "";
            this.inout_attribute = "";
          }
          this.index = "";
        }
      } else {
        this.$Message.warning("请填写出入口名称");
      }
    },
    //取消保存入口
    cancels1() {
      console.log("取消保存");
      this.index = "";
      this.show1 = false;
      this.values1 = "";
    },
    //保存出口
    save4() {
      console.log("保存出口");
      let car = {
        gateDes: this.values4,
        gateFlag: 1,
        gateId: null,
        gateType: 2
      };
      if (this.values4 != "") {
        if (this.gateout.length == 0) {
          console.log(car);
          this.gateout.push(car);
          this.show4 = false;
          this.values4 = "";
        } else {
          this.svn = false;
          this.gateout.map((res, index, arry) => {
            if (res.gateDes == car.gateDes && this.index === "") {
              this.$Message.warning("已有该出口，请勿重复添加");
              this.svn = true;
            }
            if (this.index === index) {
              arry[index].gateDes = this.values4;
              if (this.switch2 == true) {
                arry[index].gateFlag = 1;
              } else {
                arry[index].gateFlag = 0;
              }
              this.show4 = false;
              this.values4 = "";
            }
          });
          if (this.svn != true && this.index === "") {
            console.log("3333333333");
            this.gateout.push(car);
            this.show4 = false;
            this.values4 = "";
          }
          this.index = "";
        }
      } else {
        this.$Message.warning("请填写出口名称");
      }
    },
    //取消保存出口
    cancels4() {
      console.log("取消保存");
      this.index = "";
      this.show4 = false;
      this.values4 = "";
    },
    //保存
    Preservation() {
      console.log(this.data3);
      if (this.image_show == true) {
        this.$Message.warning("请上传大厦图片后在提交");
        return;
      }
      let zoo = true;
      this.data3.map((res, index) => {
        if (this.image_show2[index] == "true") {
          zoo = false;
        }
      });
      if (zoo == false) {
        this.$Message.warning("请上传车场平面图后在提交");
        return;
      }
      if (this.image_show1 == true) {
        this.$Message.warning("请上传蓝牌图片后在提交");
        return;
      }
      if (this.params.region) {
        this.params.region = this.params.region.replace(/\s+/g, "");
      }
      console.log(this.params);
      this.loading1 = true;
      if (!this.params.parkName) {
        this.$Message.warning("请填写车场名称");
        this.loading1 = false;
      } else if (this.params.edificeName.length == 0) {
        this.$Message.warning("请添加合用大厦");
        this.loading1 = false;
      } else if (this.gateIn.length == 0) {
        this.$Message.warning("请添加出入口");
        this.loading1 = false;
      } else if (!this.params.stallSum) {
        this.$Message.warning("请填写总车位数");
        this.loading1 = false;
      } else if (this.params.fixStallSum === "") {
        console.log(this.params.fixStallSum);
        this.$Message.warning("请填写固定车位数");
        this.loading1 = false;
      } else {
        console.log("提交");
        this.params.parkDetails = this.data3;
        this.params.parkProjects = this.data4;
        this.params.parkCodeList = this.parkCodeList;
        console.log(this.dayTimeInterval_starttime);
        if (this.dayTimeInterval_starttime && this.dayTimeInterval_endtime) {
          this.parkManage.dayTimeInterval =
            this.dayTimeInterval_starttime + "-" + this.dayTimeInterval_endtime;
        }
        // console.log(this.parkManage.dayTimeInterval);
        if (
          this.nightTimeInterval_starttime &&
          this.nightTimeInterval_endtime
        ) {
          this.parkManage.nightTimeInterval =
            this.nightTimeInterval_starttime +
            "-" +
            this.nightTimeInterval_endtime;
        }
        // console.log(this.parkManage.nightTimeInterval);
        this.params.parkManage = this.parkManage;
        if (JSON.stringify(this.$route.query) == "{}") {
          console.log("走新增");
          this.params.gateInfos = [...this.gateIn, ...this.gateout];
          console.log(this.params);
          axios1
            .request({
              url: url.url.save,
              data: this.params,
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
          console.log(this.params);
          this.params.gateInfos = [...this.gateIn, ...this.gateout];
          console.log(this.params);
          axios1
            .request({
              url: url.url.update,
              data: this.params,
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
    //取消
    cancel() {
      console.log("取消");
      this.show2 = true;
    },
    //添加大厦
    add() {
      console.log("添加大厦");
      this.values = "";
      this.show = true;
    },
    //添加入口
    add1() {
      console.log("添加入口");
      this.cameraCodeList = [];
      this.remark = "";
      this.inout_attribute = "";
      this.values1 = "";
      this.show1 = true;
    },
    //添加出口
    add4() {
      console.log("添加出口");
      this.values4 = "";
      this.show4 = true;
    },
    //确定取消编辑
    success2() {
      this.$router.go(-1);
    },
    //取消取消编辑
    canceles2() {
      this.show2 = false;
    },
    //删除数据
    delete(data) {
      this.show_delete = true;
      this.id_delete = data._index;
      console.log(data._index);
    },
    success_delete() {
      // this.loading_delete = true;
      console.log(this.tab_page);
      if (this.tab_page == "name2") {
        this.data3.splice(this.id_delete, 1);
        this.$Notice.success({
          title: "系统提示",
          desc: "删除成功"
        });
      } else if (this.tab_page == "name3") {
        this.data4.splice(this.id_delete, 1);
        this.$Notice.success({
          title: "系统提示",
          desc: "删除成功"
        });
      }

      this.loading_delete = false;
      this.show_delete = false;
    },
    //取消删除
    canceles_delete() {
      this.show_delete = false;
      this.loading_delete = false;
      this.id_delete = "";
    },
    tab_click(name) {
      console.log(name);
      this.tab_page = name;
      if (this.name != "name1") {
        if (!this.params.parkName) {
          this.$Message.warning("请填写必填项：车场名称");
          this.loading1 = false;
        } else if (this.params.edificeName.length == 0) {
          this.$Message.warning("请添加必填项：合用大厦");
          this.loading1 = false;
        } else if (this.gateIn.length == 0) {
          this.$Message.warning("请添加必填项：出入口");
          this.loading1 = false;
        } else if (!this.params.stallSum) {
          this.$Message.warning("请填写必填项：总车位数");
          this.loading1 = false;
        } else if (this.params.fixStallSum === "") {
          console.log(this.params.fixStallSum);
          this.$Message.warning("请填写必填项：固定车位数");
          this.loading1 = false;
        }
      }
    },
    // 添加一体机
    one_add() {
      // console.log("添加");
      this.$router.push({
        path: "/one_administration_edit",
        query: {
          carname: this.params.parkName,
          parkCode: this.parkCode,
          gateCode: this.gateCode,
          inout: this.values1,
          ss: true
        }
      });
    },
    //编辑一体机
    one_edit(name, index) {
      console.log(name);
      this.$router.push({
        path: "/one_administration_edit",
        query: {
          carename: name,
          index: index + 1
        }
      });
    },
    tagclose(index) {
      console.log(index);
      this.parkCodeList_name.splice(index, 1);
      this.parkCodeList.splice(index, 1);
    },
    // 添加相似车场
    tag_btn() {
      // console.log("添加");
      this.tag_show = true;
    },
    // 相似车场弹框确定
    save_tag() {
      if (this.serial) {
        let show = true;
        // console.log(this.serial);
        this.parkCodeList.map(res => {
          // console.log(res);
          if (this.serial == res) {
            this.$Message.warning("请勿重复添加");
            show = false;
          }
        });
        if (show == true) {
          this.parkCodeList.push(this.serial);
          this.serials.map(res => {
            if (res.parkCode == this.serial) {
              this.parkCodeList_name.push(res.parkName);
              this.tag_show = false;
              this.serial = "";
              console.log(this.parkCodeList);
              console.log(this.parkCodeList_name);
            }
            // console.log(res);
          });
        }
      } else {
        this.$Message.warning("请选择车场");
      }
    },
    // 相似车场弹框取消
    cancels_tag() {
      this.serial = "";
      this.tag_show = false;
    },
    // 编辑车位信息取消按钮
    modal_cancel() {
      this.modal = false;
    },
    modal_succes() {
      console.log(this.modal_index);
      if (this.modal_index != -1) {
        console.log("下标不为空");
        this.data3[this.modal_index].floor = this.modal_input.floor;
        this.data3[this.modal_index].fixCommon = this.modal_input.fixCommon;
        this.data3[this.modal_index].fixSteric = this.modal_input.fixSteric;
        this.data3[this.modal_index].fixElectric = this.modal_input.fixElectric;
        this.data3[this.modal_index].tempCommon = this.modal_input.tempCommon;
        this.data3[this.modal_index].tempSteric = this.modal_input.tempSteric;
        this.data3[
          this.modal_index
        ].tempElectric = this.modal_input.tempElectric;
        this.data3[this.modal_index].id = this.modal_input.id;
      } else if (this.modal_index == -1) {
        console.log("下标为空");
        let data = {
          floor: "",
          fixCommon: "",
          fixSteric: "",
          fixElectric: "",
          tempCommon: "",
          tempSteric: "",
          tempElectric: "",
          floorPlanImg: "",
          id: ""
        };
        this.data3.push(data);
        let indexs = "";
        this.data3.map((res, index) => {
          indexs = index;
        });
        this.data3[indexs].floor = this.modal_input.floor;
        this.data3[indexs].fixCommon = this.modal_input.fixCommon;
        this.data3[indexs].fixSteric = this.modal_input.fixSteric;
        this.data3[indexs].fixElectric = this.modal_input.fixElectric;
        this.data3[indexs].tempCommon = this.modal_input.tempCommon;
        this.data3[indexs].tempSteric = this.modal_input.tempSteric;
        this.data3[indexs].tempElectric = this.modal_input.tempElectric;
        this.data3[indexs].id = this.modal_input.id;
      }
      console.log("未知");
      console.log(this.data3);
      this.modal = false;
    },
    // 编辑项目信息取消按钮
    modal_cancel1() {
      this.modal1 = false;
    },
    modal_succes1() {
      console.log(this.modal_index1);
      if (this.modal_index1 != -1) {
        console.log("下标不为空");
        this.data4[
          this.modal_index1
        ].projectType = this.modal_input1.projectType;
        this.data4[this.modal_index1].unitName = this.modal_input1.unitName;
        this.data4[this.modal_index1].contacts = this.modal_input1.contacts;
        this.data4[this.modal_index1].position = this.modal_input1.position;
        this.data4[this.modal_index1].mobile = this.modal_input1.mobile;
        this.data4[this.modal_index1].remark = this.modal_input1.remark;
        this.data4[this.modal_index1].id = this.modal_input1.id;
      } else if (this.modal_index1 == -1) {
        console.log("下标为空");
        let data = {
          projectType: "",
          unitName: "",
          contacts: "",
          position: "",
          mobile: "",
          remark: "",
          id: ""
        };
        this.data4.push(data);
        let indexs = "";
        this.data4.map((res, index) => {
          indexs = index;
        });
        this.data4[indexs].projectType = this.modal_input1.projectType;
        this.data4[indexs].unitName = this.modal_input1.unitName;
        this.data4[indexs].contacts = this.modal_input1.contacts;
        this.data4[indexs].position = this.modal_input1.position;
        this.data4[indexs].mobile = this.modal_input1.mobile;
        this.data4[indexs].remark = this.modal_input1.remark;
        this.data4[indexs].id = this.modal_input1.id;
      }
      console.log(this.data4);
      this.modal1 = false;
    }
  }
};
</script>