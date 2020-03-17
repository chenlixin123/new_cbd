<template>
  <div class="box">
    <img class="img" src="@/assets/images/beijingtu@3x.png" alt />
    <div class="title">停车数据管理系统</div>
    <div class="input_content">
      <div class="input">
        <div class="title_text">系统登录</div>
        <input
          type="text"
          class="input_user"
          placeholder="请输入账号"
          v-model="username"
          @keyup.enter="login"
          autocomplete="off"
        />
        <input
          type="password"
          class="input_password"
          placeholder="请输入密码"
          v-model="password"
          @keyup.enter="login"
          autocomplete="new-password"
        />
        <i-button class="btn" :loading="loading" long @click="login">{{data}}</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/api/url";
import axios from "@/libs/api.request";
import axios1 from "@/libs/api.request.json";
export default {
  name: "login",
  data() {
    return {
      data: "登录",
      username: "",
      password: "",
      loading: false,
      img: "../assets/images/kong@3x.png",
      show: true
    };
  },
  created() {
    // console.log('created')
    // console.log(url.url.login)
    // console.log(axios)
    sessionStorage.setItem("logout_data", "true");
    sessionStorage.setItem("data", " ");
  },
  methods: {
    img1() {
      this.show = false;
    },
    img2() {
      this.show = true;
    },
    login() {
      if (this.loading == true) {
        console.log("登录中...");
      } else {
        if (this.username == "") {
          this.$Notice.error({
            title: "请输入账号",
            desc: ""
          });
        } else if (this.password == "") {
          this.$Notice.error({
            title: "请输入密码",
            desc: ""
          });
        } else {
          this.loading = true;
          this.data = "登录中";
          let username = this.username;
          let password = this.password;
          axios1
            .request({
              url: url.url.login,
              params: {
                username: username,
                password: password
              },
              method: "get"
            })
            .then(res => {
              console.log(res);
              if (res.data.login == true) {
                this.$Notice.success({
                  title: "登录成功",
                  desc: ""
                });
                sessionStorage.setItem("data", res.data.token);
                // sessionStorage.setItem("loging", "true");
                axios
                  .request({
                    url: url.url.member_info,
                    method: "get"
                  })
                  .then(res => {
                    console.log(res);
                    if (res.status == 200) {
                      sessionStorage.setItem("name", this.username);
                      sessionStorage.setItem(
                        "menuSet",
                        JSON.stringify(res.data)
                      );
                      res.data.map(item => {
                        if (item == "car_administration") {
                          this.$router.push({
                            path: "/car_administration"
                          });
                        } else if (item == "car_administrations") {
                          this.$router.push({
                            path: "/car_administrations"
                          });
                        }
                      });
                    }
                  });
              } else {
                this.data = "登录";
                this.$Notice.error({
                  title: res.data.message,
                  desc: ""
                });
              }
              this.loading = false;
            });
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
}
.title {
  width: 96%;
  height: 10%;
  font-size: 2vw;
  color: #2797dc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  /* border: 1px solid red; */
  position: fixed;
  top: 3%;
  left: 1%;
}
.img {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.input_content {
  width: 98%;
  height: 100%;
  padding-left: 1%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.title_text {
  width: 100%;
  font-size: 1vw;
  color: #63acdf;
}
.input {
  width: 40%;
  min-width: 450px;
  min-height: 400px;
  background: url("../assets/images/denglu-xiao@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 50px;
  /* border: 1px solid red; */
}
.btn {
  width: 70%;
  margin-top: 7%;
  height: 2.5vw;
  min-height: 40px;
  font-size: 1.3vw;
  margin-bottom: 5%;
  background: #2272a5;
  border: none;
  outline: none;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
}
.btn:hover {
  width: 70%;
  margin-top: 7%;
  height: 2.5vw;
  min-height: 40px;
  font-size: 1.3vw;
  margin-bottom: 5%;
  background: #2272a5;
  border: none;
  outline: none;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
}
input {
  width: 70%;
  height: 2.5vw;
  min-height: 50px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: 7%;
  font-size: 15px;
  text-indent: 20%;
  padding-left: 3%;
  padding-right: 3%;
  color: white;
  font-size: 1vw;
}
.input_user {
  background: url("../assets/images/zhanghU@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 3px;
}
.input_password {
  background: url("../assets/images/mima@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 3px;
}
input::-webkit-input-placeholder {
  color: #1a6ba3;
}
input:-moz-placeholder {
  color: #1a6ba3;
}
input::-moz-placeholder {
  color: #1a6ba3;
}
input:-ms-input-placeholder {
  color: #1a6ba3;
}
</style>
