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
.button1,
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
  justify-content: space-between;
}
.button1 {
  margin-left: 2.5%;
}
.input1 {
  width: 22%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.5%;
  margin-right: 2%;
  position: relative;
}
.text {
  width: 25%;
  min-width: 60px;
  box-sizing: border-box;
  text-align-last: justify;
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
  font-size: 19px;
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
.title_modau {
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  font-size: 0.8vw;
  border-bottom: 1px solid #e8eaec;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding-right: 10%;
}
.center_modal {
  width: 100%;
  /* border: 1px solid; */
  padding-left: 7%;
}
>>> .vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
>>> .ivu-modal {
  top: 15%;
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
.success {
  width: 30%;
  height: 100%;
  background: #f66913;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
}
.success:hover {
  width: 30%;
  height: 100%;
  background: #f66913;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
}
.close_number {
  width: 30%;
  height: 100%;
  background: #545c6a;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
}
.close_number:hover {
  width: 30%;
  background: #545c6a;
  color: white;
  cursor: pointer;
}
</style>
<template>
  <div class="box">
    <!-- 搜索模块 -->
    <div class="search">
      <div class="top">
        <div class="input1">
          <div class="text">车场名称</div>：
          <i-select v-model="carname" filterable style="width:200px" clearable>
            <i-option
              v-for="(item,index) in carnames"
              :key="index"
              :value="item.id"
            >{{ item.parkName }}</i-option>
          </i-select>
        </div>
        <div class="input1">
          <div class="text">车场大厦</div>：
          <i-select v-model="carmansion" filterable style="width:200px" clearable>
            <i-option
              v-for="(item,index) in carmansions"
              :key="index"
              :value="item.id"
            >{{ item.edificeName }}</i-option>
          </i-select>
        </div>
      </div>
      <div class="bottom">
        <button class="button1" @click="edit('ss')">新增车场</button>
        <div class="button_right">
          <Button class="button2" @click="sear">查询</Button>
          <Button class="button3" :loading="loading1" @click="out">导出</Button>
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

    <div class="modules_delete" v-if="show_delete">
      <div class="contentes_delete">
        <div class="content_top_delete">确定删除？</div>
        <div class="content_bottom_delete">
          <Button class="success_delete" :loading="loading_delete" @click="success_delete">确定</Button>
          <Button class="canceles_delete" @click="canceles_delete">取消</Button>
        </div>
      </div>
    </div>
    <!-- 修改弹出框 -->
    <Modal v-model="modal11" :closable="false" :mask-closable="false">
      <div class="title_modau">
        <div>{{title_modau}}</div>
        <div>{{Large_building_name}}</div>
      </div>

      <div class="center_modal">
        <label for style="color:white;">*</label>
        <label for>剩余临停车位</label>：
        <InputNumber
          :max="max_temp"
          :min="0"
          v-model="success_data.freeTempStallSum"
          placeholder="请输入车位数"
          style="width: 300px"
        ></InputNumber>
        <br />
        <br />
        <label for style="color:white;">*</label>
        <label for>剩余固定车位</label>：
        <InputNumber
          :max="max_fix"
          :min="0"
          v-model="success_data.freeFixStallSum"
          placeholder="请输入车位数"
          style="width: 300px"
        ></InputNumber>
      </div>
      <div slot="footer" style="width:100%;height:35px;display:flex;justify-content: space-around;">
        <Button class="success" @click="success_modal" :loading="button_loading">保存</Button>
        <Button class="close_number" @click="del">取消</Button>
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
      Large_building_name: "", //大厦名称
      max_temp: "",
      max_fix: "",
      success_data: {
        freeTempStallSum: 0, //剩余临停车位
        freeFixStallSum: 0, //剩余固定车位
        id: ""
      },
      button_loading: false,
      title_modau: "车位修正",
      modal11: false,
      id_delete: "",
      show_delete: false,
      loading_delete: false,
      carname: "", //车位名称
      carnames: [],
      carmansion: "", //车位大厦
      carmansions: "",
      carmansions1: "",
      module_ellipsis: [],
      modal10: false,
      loading1: false,
      loadinges: false,
      spinShow: false,
      totalPages: "",
      loadingText: "数据加载中...",
      pages: 1,
      numbers: "",
      tableList: {
        condition: {
          edificeId: null,
          parkId: null
        },
        pageNo: 1,
        pageSize: 10
      },
      data: "",
      show: "",
      columns: [
        {
          title: "车场名称",
          align: "center",
          //   sortable: 'custom',
          key: "parkName",
          tooltip: "true",
          minWidth: 220
        },
        {
          title: "车位总数",
          align: "center",
          //   sortable: 'custom',
          key: "stallSum",
          width: 80
        },
        {
          title: "固定车位",
          align: "center",
          //   sortable: 'custom',
          key: "fixStallSum",
          width: 80
        },
        {
          title: "已绑固定车位",
          align: "center",
          //   sortable: 'custom',
          key: "bindedStallSum",
          width: 100
        },
        {
          title: "已绑固定车牌",
          align: "center",
          //   sortable: 'custom',
          key: "bindedPlateSum",
          width: 100
        },
        {
          title: "临停车位",
          align: "center",
          //   sortable: 'custom',
          key: "tempStallSum",
          width: 80
        },
        {
          title: "剩余临停车位",
          align: "center",
          //   sortable: 'custom',
          key: "freeTempStallSum",
          width: 100
        },
        {
          title: "剩余固定车位",
          align: "center",
          //   sortable: 'custom',
          key: "freeFixStallSum",
          width: 100
        },
        {
          title: "统计算法",
          align: "center",
          //   sortable: 'custom',
          key: "statistics",
          minWidth: 120,
          render: (h, params) => {
            let data = "";
            data =
              params.row.statistics == 1
                ? "视频计算"
                : params.row.statistics == 2
                ? "软件计算"
                : "";
            return h("div", data);
          }
        },
        {
          title: "入口",
          align: "center",
          //   sortable: 'custom',
          key: "inSum",
          minWidth: 80
        },
        {
          title: "出口",
          align: "center",
          //   sortable: 'custom',
          key: "outSum",
          minWidth: 80
        },
        {
          title: "一体机",
          align: "center",
          //   sortable: 'custom',
          key: "cameraSum",
          minWidth: 100
        },
        {
          title: "合用大厦",
          //   sortable: 'custom',
          align: "left",
          key: "edifices",
          minWidth: 240,
          render: (h, params) => {
            // console.log(params);
            let clist = params.row.edifices;
            const list = [];
            let sindex = 0;
            if (clist && clist !== null) {
              // console.log(clist);
              clist.forEach((value, index) => {
                // console.log(index);
                if (index == 0) {
                  list[index] = h(
                    "div",
                    {
                      style: {
                        width: "80px",
                        display: "inline",
                        textAlign: "center",
                        // border: "1px solid #464c5b",
                        borderRadius: "5px",
                        margin: "0 auto",
                        marginLeft: "5px"
                      },
                      domProps: {
                        title: params.row.edifices
                      }
                    },
                    value
                  );
                } else if (index == 1) {
                  list[index] = h(
                    "div",
                    {
                      style: {
                        width: "80px",
                        display: "inline",
                        textAlign: "center",
                        // border: "1px solid #464c5b",
                        // paddingLeft: "5px",
                        // paddingRight: "5px",
                        borderRadius: "5px",
                        margin: "0 auto"
                        // marginLeft: "5px"
                      },
                      domProps: {
                        title: params.row.edifices
                      }
                    },
                    " / " + value
                  );
                } else if (index == 2) {
                  // console.log(params.row);
                  list[index] = h("span", [
                    h(
                      "span",
                      {
                        style: {
                          fontSize: "20px",
                          cursor: "pointer",
                          display: "inline"
                        },
                        on: {
                          click: () => {
                            this.showEllipsis(params.row.id);
                          }
                        }
                      },
                      "..."
                    ),
                    h(
                      "div",
                      {
                        style: {
                          fontSize: "10px",
                          cursor: "pointer",
                          display: "inline",
                          // border: "1px solid red",
                          marginBottom: "20px"
                        },
                        on: {
                          click: () => {
                            this.showEllipsis(params.row.id);
                          }
                        }
                      },
                      clist.length
                    )
                  ]);
                }
              });
            }
            return list;
          }
        },
        {
          title: "操作",
          key: "id",
          minWidth: 380,
          align: "center",
          render: (h, params) => {
            let parking = params.row;
            // console.log(parking);
            let menu = null;
            menu = h(
              "div",
              {
                style: {
                  display: "flex"
                }
              },
              [
                h("i-switch", {
                  props: {
                    type: "warning",
                    size: "large",
                    // disabled:
                    //   params.row.fixedId === null || params.row.rentStatus == 3,
                    value: params.row.parkFlag === 1 // 控制开关的打开或关闭状态，官网文档属性是value
                  },
                  style: {
                    marginRight: "10px"
                  },
                  scopedSlots: {
                    open: () => h("span", "正常"),
                    close: () => h("span", "禁用")
                  },
                  on: {
                    "on-change": state => {
                      if (state) {
                        this.enableParking(parking.id);
                      } else {
                        this.disabledParking(parking.id);
                      }
                    }
                  }
                }),
                h(
                  "span",
                  {
                    props: {
                      size: 26,
                      color: "#19be6b"
                    },
                    style: {
                      marginRight: "5px",
                      cursor: "pointer"
                    },
                    on: {
                      click: () => {
                        this.edit_number(params.row);
                      }
                    }
                  },
                  "车位修正"
                ),
                h(
                  "span",
                  {
                    props: {
                      size: 26,
                      color: "#19be6b"
                    },
                    style: {
                      marginRight: "5px",
                      cursor: "pointer"
                    },
                    on: {
                      click: () => {
                        this.toViewRental(params.row);
                      }
                    }
                  },
                  "固定车位"
                ),
                h(
                  "span",
                  {
                    style: {
                      size: 26,
                      cursor: "pointer",
                      marginRight: "5px",
                      cursor: "pointer"
                    },
                    on: {
                      click: () => {
                        this.edit(parking.id);
                      }
                    }
                  },
                  "编辑"
                ),
                h(
                  "span",
                  {
                    style: {
                      size: 26,
                      cursor: "pointer"
                    },
                    on: {
                      click: () => {
                        this.delete(parking.id);
                      }
                    }
                  },
                  "删除"
                )
              ]
            );
            return menu;
          }
        }
      ],
      data: { total: 0, list: [], loading: true }
    };
  },
  watch: {
    carname() {
      console.log(this.carname);
      this.carnames.map(res => {
        if (res.id == this.carname) {
          console.log(res);
          this.carmansions = res.edificeInfos;
          return;
        } else if (this.carname == undefined) {
          console.log("1");
          this.carmansions = this.carmansions1;
          this.carmansion = "";
        }
      });
    }
  },
  created() {
    console.log(url.time(1556553600000));
    this.list();
  },
  mounted() {
    this.$root.event.$on("logout", res => {
      this.show = res;
    });
  },
  methods: {
    //车位名称 车位大厦
    floores() {
      axios
        .request({
          url: url.url.car_name,
          method: "get"
        })
        .then(res => {
          this.carnames = res.data.data;
          res.data.data.map(res => {
            this.carmansions = [...this.carmansions, ...res.edificeInfos];
            this.carmansions1 = [...this.carmansions1, ...res.edificeInfos];
          });
        });
    },
    //table列表
    list() {
      let that = this;
      this.loadinges = true;
      that.floores();
      this.data = "";
      this.tableList.pageNo = 1;
      this.totalPages = 0;
      axios1
        .request({
          url: url.url.ren_list,
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
    //显示省略车牌号
    showEllipsis(id) {
      console.log(id);
      console.log(this.data.list);
      this.data.list.map(res => {
        console.log(res.id);
        if (res.id == id) {
          if (res.edifices) {
            this.module_ellipsis = res.edifices;
            console.log(this.module_ellipsis);
            this.modal10 = true;
          }
        }
      });
    },
    //取消删除
    canceles_delete() {
      this.show_delete = false;
      this.loading_delete = false;
      this.id_delete = "";
    },
    //删除车位授权信息
    delete(id) {
      this.show_delete = true;
      this.id_delete = id;
      console.log("删除");
      console.log(id_delete);
    },
    success_delete() {
      this.loading_delete = true;
      axios
        .request({
          url: url.url.delete,
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
          url: url.url.ren_list,
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
          url: url.url.ren_list,
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
    //启用
    enableParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.open,
          params: {
            id: id,
            parkFlag: 1
          },
          method: "post"
        })
        .then(res => {
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
          }
          console.log(res);
        });
    },
    //禁用
    disabledParking(id) {
      console.log(id);
      axios1
        .request({
          url: url.url.open,
          params: {
            id: id,
            parkFlag: 0
          },
          method: "post"
        })
        .then(res => {
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
          }
          console.log(res);
        });
    },
    //详情
    toViewRental(id) {
      console.log(id);
      sessionStorage.setItem("simulation_show", true);
      let ids = id.id;
      this.$router.push({
        path: "/car_administration_view",
        query: {
          id: ids
        }
      });
    },
    //编辑
    edit(id) {
      console.log(id);
      if (id == "ss") {
        console.log("走新增");
        this.$router.push({
          path: "/car_administration_edit"
        });
      } else {
        console.log("走编辑");
        this.$router.push({
          path: "/car_administration_edit",
          query: {
            id: id
          }
        });
      }
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
      this.tableList.condition.edificeId = null;
      this.tableList.condition.parkId = null;
      if (this.carname) {
        this.tableList.condition.parkId = this.carname;
      }
      if (this.carmansion) {
        this.tableList.condition.edificeId = this.carmansion;
      }
      axios1
        .request({
          url: url.url.ren_list,
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
    },
    //导出
    out() {
      let that = this;
      that.loading1 = true;
      that.tableList.pageSize = 1000;
      axios1
        .request({
          url: url.url.ren_list,
          params: this.tableList,
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
            let datas = res.data.data.list;
            datas.map(res => {
              res.edifices = res.edifices.join("/");
              // console.log(res.edifices);
              return res;
            });
            let columns = this.columns.filter(function(col, index) {
              return index < 12;
            });
            // console.log(columns);
            this.$refs.currentRowTable.exportCsv({
              filename: "车场管理",
              columns: columns,
              original: false,
              data: datas
            });
            that.tableList.pageSize = 10;
            that.loading1 = false;
          }
        });
    },
    //可用车位修正点击
    edit_number(data) {
      console.log(data);
      this.Large_building_name = data.parkName;
      this.max_temp = data.tempStallSum;
      this.max_fix = data.fixStallSum;
      this.success_data.freeTempStallSum = data.freeTempStallSum;
      this.success_data.freeFixStallSum = data.freeFixStallSum;
      this.success_data.id = data.id;
      this.modal11 = true;
    },
    //修正车位
    success_modal() {
      this.button_loading = true;
      if (!this.success_data.freeTempStallSum) {
        this.success_data.freeTempStallSum = 0;
      }
      if (!this.success_data.freeFixStallSum) {
        this.success_data.freeFixStallSum = 0;
      }
      console.log("修正车位");
      console.log(this.success_data);
      axios1
        .request({
          url: url.url.update_park_info_free,
          data: this.success_data,
          method: "post"
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
          this.modal11 = false;
          this.button_loading = false;
        });
    },
    del() {
      this.modal11 = false;
    }
  }
};
</script>