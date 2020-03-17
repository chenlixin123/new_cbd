<style scoped>
.box {
  width: 100%;
  min-width: 1000px;
  height: 100%;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
}
.title {
  width: 99%;
  height: 10%;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 3%;
}
.title_left {
  font-size: 0.9vw;
}
.title_btn {
  width: 13%;
  height: 50%;
  border: none;
  background: #f66913;
  color: white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.basic {
  width: 99%;
  min-width: 70px;
  margin: 0 auto;
  margin-top: 0.5%;
  background: white;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 3%;
  padding-bottom: 3%;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid white;
}
.outputlist_upload {
  display: none;
}
.demo-spin-container {
  position: absolute;
  top: 50%;
  right: 50%;
  border: 1px solid #eee;
}
>>> .ivu-table th {
  text-align: center;
  height: 3vw;
  font-size: 0.8vw;
}
>>> .ivu-table td {
  font-size: 0.8vw;
}
/* >>> .ivu-btn > .ivu-icon + span,
.ivu-btn > span + .ivu-icon {
  font-size: 0.9vw;
} */
.table {
  width: 99%;
  min-height: 200px;
  padding-top: 4%;
  padding-bottom: 5%;
  margin: 0 auto;
  margin-top: 0.5%;
  background: white;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 2%;
  padding-right: 2%;
}
.btns {
  width: 99%;
  height: 7%;
  margin: 0 auto;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 2%;
}
.btn {
  width: 15%;
  height: 100%;
  background: #f66913;
  color: white;
  border: none;
  margin: 0 auto;
  outline: none;
}
.btn:hover {
  width: 15%;
  height: 100%;
  background: #f66913;
  color: white;
  border: none;
  margin: 0 auto;
  outline: none;
}
.btnes {
  outline: none;
  font-size: 0.7vw;
}
.demo-spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.btnes:hover {
  border: 1px solid #f66913;
  color: #f66913;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div class="title_left">Excel导入车位授权</div>
      <button class="title_btn" @click="back">返回</button>
    </div>
    <div class="basic">
      <Divider orientation="left" style="margin-top:3%;font-size:0.9vw;">
        导入EXCEL ||
        <span style="color:#f66913;cursor:pointer" @click="down">下载Excel模板</span>
      </Divider>
      <Upload
        action
        :before-upload="handleBeforeUpload"
        accept=".xls, .xlsx"
        style="width:10%;margin-left:2%;"
      >
        <Button class="btnes" icon="ios-cloud-upload-outline" type="default">上传文件</Button>
      </Upload>

      <div
        v-if="spinShows == true"
        style="font-size:16px;color:#666;margin-bottom:10px;margin-top:15px;margin-left:2%;font-size:0.9vw;"
      >
        <Icon type="ios-stats"></Icon>
        {{filename}}
      </div>
      <Progress v-if="spinShows == true" :percent="100" :stroke-width="5" style="margin-left:2%;" />
    </div>

    <div class="table">
      <Table
        v-if="spinShows == true"
        style="border:none;"
        highlight-row
        ref="currentRowTable"
        :no-data-text="loadingText ? loadingText : '暂无数据'"
        :columns="tableTitle"
        :data="tableData"
      ></Table>
    </div>
    <div class="btns">
      <Button
        @click="Submission"
        class="btn"
        size="large"
        icon="ios-cloud-upload-outline"
        type="default"
        :loading="loading"
        style="font-size:0.9vw;"
      >批量提交</Button>
    </div>
    <Spin fix v-if="loadinges"></Spin>
  </div>
</template>

<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
import XLSX from "xlsx";
import excel from "@/libs/excel";
export default {
  data() {
    return {
      data: "",
      spinShow: false,
      outputs: [],
      filename: "",
      number: 0,
      tableData: [],
      tableTitle: "",
      success: true,
      loadinges: false,
      loadingText: "",
      spinShows: false,
      loading: false
    };
  },
  created() {
    console.log(this.$route.query);
  },
  methods: {
    down() {
      console.log(url.url.excel);
      window.location.href = url.url.excel + "/固定车位信息-车场名称.xlsx";
    },
    //批量提交
    Submission() {
      console.log("提交");
      this.loading = true;
      // console.log(this.tableData.length);
      if (this.tableData.length == 0) {
        this.$Notice.error({
          title: "系统提示",
          desc: "Excel中未包含导入数据"
        });
        this.loading = false;
      } else {
        console.log("开始请求");
        console.log(this.tableData);
        axios1
          .request({
            url: url.url.batch_save,
            data: this.tableData,
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
            this.loading = false;
          });
      }
    },
    handleBeforeUpload(file) {
      console.log(file.name);
      this.loadinges = true;
      this.spinShows = false;
      const fileExt = file.name
        .split(".")
        .pop()
        .toLocaleLowerCase();
      if (fileExt === "xlsx" || fileExt === "xls") {
        this.readFile(file);
        this.file = file;
      } else {
        this.$Notice.warning({
          title: "文件类型错误",
          desc:
            "文件：" +
            file.name +
            "不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"
        });
      }
      return false;
    },
    // 读取文件
    readFile(file) {
      console.log(file);
      this.loadinges = true;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadstart = e => {
        // console.log(e);
        this.uploadLoading = true;
        this.tableLoading = true;
        this.showProgress = true;
      };

      reader.onprogress = e => {
        // console.log(e);
        this.progressPercent = Math.round((e.loaded / e.total) * 100);
      };
      reader.onerror = e => {
        this.$Message.error("文件读取出错");
      };
      reader.onload = e => {
        // console.log(e);
        let formatSuccess = true;
        const data = e.target.result;
        // console.log(data);
        const { header, results } = excel.read(data, "array");
        this.loadinges = true;
        console.log(header, results);
        results.map((res, index, arry) => {
          // console.log(typeof res["有效期止*"] == "number");
          // console.log(res["车牌号"]);
          if (res["车牌号"]) {
            res["车牌号"] = res["车牌号"].replace(/\s*/g, "");
            res["车牌号"] = res["车牌号"].replace("，", ",");
          }
          if (res["车牌号*"]) {
            res["车牌号*"] = res["车牌号*"].replace(/\s*/g, "");
            res["车牌号*"] = res["车牌号*"].replace("，", ",");
          }
        });

        // if (header.indexOf("车位号*") == -1 && header.indexOf("车位号") == -1) {
        //   formatSuccess = false;
        // }
        if (header.indexOf("车牌号*") == -1 && header.indexOf("车牌号") == -1) {
          formatSuccess = false;
        }
        if (formatSuccess) {
          const tableTitle = header.map(item => {
            // console.log(item);
            return {
              title: item,
              key:
                item == "车位号*"
                  ? "stallCode"
                  : item == "车位号"
                  ? "stallCode"
                  : item == "车牌号*"
                  ? "plateNumber"
                  : item == "车牌号"
                  ? "plateNumber"
                  : "",
              align: "center",
              tooltip: true
              // width:
              //   item == "车位号*"
              //     ? "100"
              //     : item == "车位号"
              //     ? "100"
              //     : item == "车牌号*"
              //     ? "160"
              //     : item == "车牌号"
              //     ? "160"
              //     : ""
            };
          });
          console.log(tableTitle);
          // console.log(results)
          let tableData = [];
          results.forEach(item => {
            // console.log(item);
            let obj = {
              stallCode:
                item["车位号*"] == undefined && item["车位号"] == undefined
                  ? ""
                  : item["车位号*"] == undefined
                  ? item["车位号"]
                  : item["车位号*"],

              plateNumber:
                item["车牌号*"] == undefined && item["车牌号"] == undefined
                  ? ""
                  : item["车牌号*"] == undefined
                  ? item["车牌号"]
                  : item["车牌号*"],
              plateFlag: 1,
              parkCode: this.$route.query.parkCode,
              id: ""
            };
            // console.log(obj);
            tableData.push(obj);
            // this.todata.params.push(obj);
            // console.log(this.tableData);
          });
          tableData.map(res => {
            // console.log(res);
            // if (res.stallNames == "") {
            //   this.$Notice.error({
            //     title: "系统提示",
            //     desc: "车位号不能为空"
            //   });
            //   this.success = false;
            // } else
            if (res.plateNos == "") {
              this.$Notice.error({
                title: "系统提示",
                desc: "车牌号码不能为空"
              });
              this.success = false;
            }
          });
          if (this.success != false) {
            setTimeout(res => {
              this.$Message.success("文件读取成功");
            }, 500);
            this.filename = file.name;
            this.tableTitle = tableTitle;
            this.tableData = tableData;
            this.spinShows = true;
            console.log(this.tableTitle);
            console.log(this.tableData);
          }
          this.loadinges = false;
          this.success = true;
        } else {
          this.loadinges = false;
          this.$Notice.error({
            title: "系统提示",
            desc: "文件格式不符合模板"
          });
          this.tableData = [];
        }
      };
    },
    //返回上一页
    back() {
      this.$router.go(-1);
    }
  }
};
</script>