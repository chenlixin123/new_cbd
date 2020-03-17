<template>
  <div class="box">
    <div class="head" v-if="show">
      <Headers />
    </div>
    <div class="navigation" v-if="show">
      <Navigation />
    </div>
    <div :class="show == false ?'contents1' : 'contents'">
      <router-view />
    </div>
  </div>
</template>
<script>
import Headers from "@/components/head";
import Navigation from "@/components/navigation";
export default {
  components: {
    Headers,
    Navigation
  },
  data() {
    return {
      data: "",
      show: true
    };
  },
  mounted() {
    this.$root.event.$on("show", res => {
      this.show = res;
      console.log(res);
    });
  },
  methods: {},
  beforeDestroy() {
    console.log(sessionStorage.getItem("logout"));
    console.log(sessionStorage.getItem("token"));
    if (
      sessionStorage.getItem("logout") == 1 ||
      sessionStorage.getItem("token") == null ||
      sessionStorage.getItem("token") == ""
    ) {
      sessionStorage.setItem("logout", 0);
      console.log("退出");
    } else {
      this.$router.push({
        path: "/car_administration"
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #e3e8ee;
}
.head {
  width: 100%;
  height: 11%;
  line-height: 80px;
  position: absolute;
  top: 0;
  left: 0;
}
.navigation {
  width: 15%;
  height: 88%;
  overflow: auto;
  position: fixed;
  top: 12%;
  left: 0;
  z-index: 100;
  background: #161b30;
}
.contents {
  width: 85%;
  height: 88%;
  overflow: auto;
  position: fixed;
  top: 12%;
  left: 15%;
}
.contents1 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>