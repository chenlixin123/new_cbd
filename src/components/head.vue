<template>
  <div class="head">
    <div style="width:100%;padding-left:15%;">{{realname}}</div>
    <div class="head_right">
      <img
        src="@/assets/images/touxiang@3x.png"
        alt
        style="width:10%;height:10%;margin-right:10px;"
      />
      <span class="span">{{name}}</span>

      <Dropdown trigger="click" @on-click="logout" transfer>
        <Icon type="md-arrow-dropdown" style="cursor:pointer;"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem name="1">修改密码</DropdownItem>
          <DropdownItem name="2">退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Modal v-model="modal3" loading :closable="false" style="margin-top:100px;">
      <p style="text-align:center;height:50px;line-height:50px;font-size:25px;">确定退出？</p>
      <div slot="footer" class="footer">
        <Button
          class="success_btn2"
          size="large"
          :loading="loading1"
          @click="success1"
        >{{successo1}}</Button>
        <Button class="cancel_btn2" size="large" @click="cancel1">取消</Button>
      </div>
    </Modal>
    <Modal v-model="modal4" loading :closable="false" style="margin-top:100px;">
      <div class="module_lab">
        <label class="lab">旧密码:</label>
        <Input class="input" type="password" placeholder="请输入旧密码" v-model="input1" />
      </div>
      <div class="module_lab">
        <label class="lab">新密码:</label>
        <Input class="input" type="password" placeholder="请输入新密码" v-model="input2" />
      </div>
      <div class="module_lab">
        <label class="lab">确认密码:</label>
        <Input class="input" type="password" placeholder="请输入确认密码" v-model="input3" />
      </div>
      <div slot="footer" class="footer">
        <Button class="success_btn2" size="large" @click="success2">{{successo2}}</Button>
        <Button class="cancel_btn2" size="large" @click="cancel2">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
export default {
  data() {
    return {
      data: "",
      name: "",
      modal3: false,
      modal4: false,
      input1: "",
      input2: "",
      input3: "",
      realname: "停车数据管理系统",
      loading2: false,
      loading1: false,
      successo2: "确定",
      successo1: "确定",
      modify: true
    };
  },
  created() {
    this.name = sessionStorage.getItem("name");
    // if (sessionStorage.getItem("loging") != "true") {
    //   window.location.href = window.location.pathname + "#/";
    // }
    // console.log(JSON.parse(sessionStorage.getItem("menuSet")));
  },
  methods: {
    logout(name) {
      if (name == 1) {
        console.log("修改密码");
        this.modal4 = true;
      } else {
        console.log("退出登录");
        this.modal3 = true;
      }
    },
    //修改密码
    success2() {
      if (this.modify == true) {
        this.modify = false;
        this.successo2 = "修改中...";
        if (this.input2 != this.input3) {
          this.$Message.warning("新密码与确认密码不一致");
          this.successo2 = "确定";
          this.modal4 = false;
          this.loading2 = false;
          this.input1 = "";
          this.input2 = "";
          this.input3 = "";
          setTimeout(res => {
            this.modify = true;
          }, 1000);
          return;
        }
        axios
          .request({
            url: url.url.update_password,
            params: {
              oldPassword: this.input1,
              password: this.input3
            },
            method: "post"
          })
          .then(res => {
            console.log(res);
            if (res.data.update == true) {
              this.$Message.warning("密码修改成功");
              this.modal4 = false;
              sessionStorage.setItem("logout", 1);
              this.$router.replace({ path: "/" });
              sessionStorage.setItem("token", "");
            } else {
              this.modal4 = false;
              this.$Notice.error({
                title: res.data.message,
                desc: ""
              });
            }
            setTimeout(res => {
              this.modify = true;
            }, 1000);
            this.successo2 = "确定";
            this.input1 = "";
            this.input2 = "";
            this.input3 = "";
          });
      }
    },
    cancel2() {
      console.log("取消");
      this.modal4 = false;
    },
    //退出登录
    success1() {
      if (this.modify == true) {
        this.modify = false;
        this.successo1 = "退出中...";
        axios
          .request({
            url: url.url.logout,
            method: "post"
          })
          .then(res => {
            console.log(res);
            if (res.data.logout == true) {
              this.modal3 = false;
              sessionStorage.setItem("logout", 1);
              this.$router.replace({ path: "/" });
              sessionStorage.setItem("loging", "false");
              sessionStorage.setItem("token", "");
              this.$Notice.success({
                title: "退出成功",
                desc: ""
              });
            } else {
              this.modal3 = false;
              this.$Notice.error({
                title: res.data.message,
                desc: ""
              });
            }
            this.successo1 = "确定";
            setTimeout(res => {
              this.modify = true;
            }, 1000);
          });
      }
    },
    cancel1() {
      this.modal3 = false;
    }
  }
};
</script>
<style scoped>
.head {
  /* font-family: "微软雅黑"; */
  background: #161b30;
  width: 100%;
  height: 100%;
  font-size: 2vw;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 3%;
  color: white;
  display: flex;
  align-items: center;
}
.head_right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.6vw;
  /* border: 1px solid white; */
  width: 30%;
}
.span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.imgs {
  width: 13%;
}
.logout {
  width: 30%;
  height: 50%;
  background: red;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid; */
}
>>> .cancel_btn2 {
  width: 40%;
  background: #545c6a;
  color: white;
  border: none;
  outline: none;
}
>>> .cancel_btn2:hover {
  background: #545c6a;
  color: white;
}
>>> .success_btn2 {
  width: 40%;
  background: #f66913;
  border: none;
  outline: none;
  color: white;
}
>>> .success_btn2:hover {
  background: #f66913;
  color: white;
}
>>> .ivu-modal-footer {
  display: flex;
  justify-content: space-around;
}
.lab {
  display: inline-block;
  width: 15%;
  text-align-last: left;
  /* border: 1px solid red; */
}
.module_lab {
  width: 100%;
  height: 35px;
  padding-left: 3%;
  margin-top: 15px;
  margin-bottom: 10px;
}
.input {
  width: 82%;
  height: 100%;
  border-radius: 5px;
  outline: none;
  padding-left: 15px;
  font-size: 13px;
}
</style>