<template>
  <div class="box">
    <iframe id="ifr" :src="url" width="100%" height="100%" frameborder="0"></iframe>
    <button :class="show == true ? 'btn' : 'btn1'" @click="getFullCreeen">
      <Icon :type="show == true ? 'ios-expand' : 'ios-contract'" />
    </button>
    <div class="modal" v-if="loading">
      <div class="content">
        <img class="img" src="@/assets/images/loading.gif" alt />
      </div>
    </div>
    <div class="tab_left" v-if="!loading">
      <button class="button_two" @click="one">整体概览</button>
      <button class="button_two button_one">车场列表</button>
      <button class="button_two" @click="three">实时地图</button>
    </div>
    <img class="imgs" src="~@/assets/images/tab_left.png" alt v-if="!loading" />
  </div>
</template>

<script>
import screenfull from "screenfull";
import url from "@/api/url";
import axios from "@/libs/api.request";
export default {
  data() {
    return {
      data: "",
      url: "",
      show: true,
      show1: "",
      loading: true
    };
  },
  mounted() {
    let that = this;
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!that.checkFull()) {
        that.show = true;
        that.$root.event.$emit("show", true);
      }
    };
    const iframe = document.querySelector("#ifr");
    // 处理兼容行问题
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", function() {
        // iframe加载完毕以后执行操作
        console.log("iframe已加载完毕");
        setTimeout(() => {
          that.loading = false;
        }, 2000);
      });
    } else {
      iframe.onload = function() {
        // iframe加载完毕以后执行操作
        console.log("iframe已加载完毕");
        setTimeout(() => {
          that.loading = false;
        }, 2000);
      };
    }
  },
  beforeCreate() {
    axios
      .request({
        url: url.url.car_name,
        method: "get"
      })
      .then(res => {
        // console.log(res);
      });
  },
  created() {
    this.url =
      "https://datav.aliyuncs.com/share/eeccd4dd4644112fa51bf82e494caf83?timestamp=" +
      new Date().getTime();
  },
  methods: {
    one() {
      this.$router.push({
        path: "/new_cbd_one"
      });
    },
    three() {
      this.$router.push({
        path: "/new_cbd_three"
      });
    },
    checkFull() {
      var isFull =
        window.fullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
    //全屏事件
    getFullCreeen() {
      if (screenfull.isEnabled) {
        screenfull.toggle();
      }
      if (this.show == true) {
        this.show = false;
        this.show1 = false;
      } else {
        this.show = true;
        this.show1 = true;
      }
      this.$root.event.$emit("show", this.show);
    }
  }
};
</script>
  
<style scoped>
.imgs {
  width: 40px;
  height: 69vh;
  position: absolute;
  left: 0;
  top: 20%;
  z-index: 1;
}
.tab_left {
  width: 40px;
  height: 69vh;
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0);
  /* border: 1px solid red; */
}
.button_two {
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  color: white;
  width: 40px;
  height: 23vh;
  margin: 0 auto;
  line-height: 28px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  /* border: 1px solid red; */
}
.button_one {
  color: #00c7fd;
}
.box {
  width: 100%;
  height: 100%;
}
.btn {
  width: 2.8vw;
  height: 2.6vw;
  position: absolute;
  top: 1.5vw;
  right: 1.5vw;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.8vw;
  background: rgb(194, 194, 194);
  opacity: 0;
  z-index: 1000;
}
.btn:hover {
  color: white;
  opacity: 1;
  z-index: 1000;
}
.btn1 {
  width: 3.5vw;
  height: 3.5vw;
  position: absolute;
  top: 1.7vw;
  right: 1.75vw;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 2.3vw;
  line-height: 3.5vw;
  opacity: 0;
  font-weight: 1800;
  background: rgb(194, 194, 194);
  z-index: 1000;
}
.btn1:hover {
  color: white;
  opacity: 1;
  z-index: 1000;
}
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #0e1a39;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 7%;
  height: 7%;
}
.img {
  width: 100%;
  height: 100;
}
</style>