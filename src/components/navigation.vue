<template>
  <div class="box">
    <Menu
      theme="dark"
      :active-name="activemenu"
      style="width:100%;height:100%;font-size:0.6vw; background: #161b30;"
      @on-select="tap"
    >
      <!-- 系统分析导航 -->
      <MenuGroup
        title="统计分析"
        v-if="holistic_analysis || new_holistic_analysis || newyard_analysis || operation_analysis"
      >
        <MenuItem name="1" v-if="holistic_analysis">
          <Icon type="document-text"></Icon>实时分析
        </MenuItem>
        <MenuItem name="2" v-if="new_holistic_analysis">
          <Icon type="chatbubbles"></Icon>新实时分析
        </MenuItem>
        <!-- 15 新历史总览 -->
        <MenuItem name="15" v-if="newyard_analysis">
          <Icon type="chatbubbles"></Icon>历史总览
        </MenuItem>
        <MenuItem name="3" v-if="operation_analysis">
          <Icon type="document-text"></Icon>运维大屏
        </MenuItem>
      </MenuGroup>
      <!-- 系统管理导航 -->
      <MenuGroup
        title="系统管理"
        v-if="car_administration || one_administration || induce_administration || car_administrations"
      >
        <MenuItem name="4" v-if="car_administration">
          <Icon type="heart"></Icon>车场管理
        </MenuItem>
        <MenuItem name="14" v-if="car_administrations">
          <Icon type="heart"></Icon>固定车位管理
        </MenuItem>
        <MenuItem name="5" v-if="one_administration">
          <Icon type="heart-broken"></Icon>一体机管理
        </MenuItem>
        <MenuItem name="6" v-if="induce_administration">
          <Icon type="heart-broken"></Icon>诱导屏管理
        </MenuItem>
      </MenuGroup>
      <!-- 账号权限导航 -->
      <MenuGroup title="账号权限" v-if="account_Jurisdiction || role_Jurisdiction || menu_Jurisdiction">
        <MenuItem name="7" v-if="account_Jurisdiction">
          <Icon type="heart-broken"></Icon>账号管理
        </MenuItem>
        <MenuItem name="8" v-if="role_Jurisdiction">
          <Icon type="heart-broken"></Icon>角色管理
        </MenuItem>
        <MenuItem name="11" v-if="menu_Jurisdiction">
          <Icon type="heart-broken"></Icon>菜单管理
        </MenuItem>
      </MenuGroup>
      <!-- 日志报表导航 -->
      <MenuGroup
        title="日志报表"
        v-if="system_Journal || equipment_Journal || operation_Journal || operation_record"
      >
        <MenuItem name="9" v-if="system_Journal">
          <Icon type="heart-broken"></Icon>系统日志
        </MenuItem>
        <MenuItem name="12" v-if="equipment_Journal">
          <Icon type="heart"></Icon>设备日志
        </MenuItem>
        <MenuItem name="13" v-if="operation_Journal">
          <Icon type="heart"></Icon>运维任务
        </MenuItem>
        <MenuItem name="16" v-if="operation_record">
          <Icon type="heart"></Icon>操作记录
        </MenuItem>
      </MenuGroup>
      <!-- 系统设置导航 -->
      <MenuGroup title="系统设置" v-if="system_setup">
        <MenuItem name="10">
          <Icon type="heart"></Icon>通用设置
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      activemenu: "4",
      menuSet: "",
      holistic_analysis: false, //实时分析
      new_holistic_analysis: false, //新实时分析
      newyard_analysis: false, //新历史总览
      operation_analysis: false, //车场分析
      car_administration: false, //车场管理
      car_administrations: false, //固定车位管理
      one_administration: false, //一体机管理
      induce_administration: false, //诱导屏管理
      account_Jurisdiction: false, //账号管理
      role_Jurisdiction: false, //角色管理
      menu_Jurisdiction: false, //菜单管理
      system_Journal: false, //系统日志
      equipment_Journal: false, //设备日志
      operation_Journal: false, //运维任务
      operation_record: false, //操作记录
      system_setup: false //通用设置
    };
  },
  created() {
    // console.log('我是导航')
    this.menuSet = JSON.parse(sessionStorage.getItem("menuSet"));
    this.menuSet.map(res => {
      // console.log(res);
      if (res == "holistic_analysis") {
        this.holistic_analysis = true;
      }
      if (res == "new_holistic_analysis") {
        this.new_holistic_analysis = true;
      }
      if (res == "newyard_analysis") {
        this.newyard_analysis = true;
      }
      if (res == "operation_analysis") {
        this.operation_analysis = true;
      }
      if (res == "car_administration") {
        this.car_administration = true;
      }
      if (res == "car_administrations") {
        this.car_administrations = true;
      }
      if (res == "one_administration") {
        this.one_administration = true;
      }
      if (res == "induce_administration") {
        this.induce_administration = true;
      }
      if (res == "account_Jurisdiction") {
        this.account_Jurisdiction = true;
      }
      if (res == "role_Jurisdiction") {
        this.role_Jurisdiction = true;
      }
      if (res == "menu_Jurisdiction") {
        this.menu_Jurisdiction = true;
      }
      if (res == "system_setup") {
        this.system_setup = true;
      }
      if (res == "system_Journal") {
        this.system_Journal = true;
      }
      if (res == "equipment_Journal") {
        this.equipment_Journal = true;
      }
      if (res == "operation_Journal") {
        this.operation_Journal = true;
      }
      if (res == "operation_record") {
        this.operation_record = true;
      }
      if (res == "system_setup") {
        this.system_setup = true;
      }
    });
    if (this.$route.path == "/holistic_analysis") {
      this.activemenu = "1";
    } else if (this.$route.path == "/new_holistic_analysis") {
      this.activemenu = "2";
    } else if (this.$route.path == "/newyard_analysis") {
      this.activemenu = "15";
    } else if (
      this.$route.path == "/car_administrations" ||
      this.$route.path == "/car_administration_view"
    ) {
      this.activemenu = "14";
    } else if (
      this.$route.path == "/car_administration" ||
      this.$route.path == "/car_administration_view" ||
      this.$route.path == "/car_administration_edit" ||
      this.$route.path == "/car_administration_excel"
    ) {
      this.activemenu = "4";
    } else if (
      this.$route.path == "/one_administration" ||
      this.$route.path == "/one_administration_edit"
    ) {
      this.activemenu = "5";
    } else if (
      this.$route.path == "/induce_administration" ||
      this.$route.path == "/induce_administration_add"
    ) {
      this.activemenu = "6";
    } else if (
      this.$route.path == "/account_Jurisdiction" ||
      this.$route.path == "/account_Jurisdiction_add"
    ) {
      this.activemenu = "7";
    } else if (
      this.$route.path == "/role_Jurisdiction" ||
      this.$route.path == "/role_Jurisdiction_view"
    ) {
      this.activemenu = "8";
    } else if (this.$route.path == "/system_Journal") {
      this.activemenu = "9";
    } else if (this.$route.path == "/system_setup") {
      this.activemenu = "10";
    } else if (this.$route.path == "/menu_Jurisdiction") {
      this.activemenu = "11";
    } else if (this.$route.path == "/equipment_Journal") {
      this.activemenu = "12";
    } else if (this.$route.path == "/operation_record") {
      this.activemenu = "16";
    } else if (
      this.$route.path == "/operation_Journal" ||
      this.$route.path == "/operation_Journal_add"
    ) {
      this.activemenu = "13";
    }
  },
  methods: {
    tap(data) {
      console.log(data);
      if (data == 1) {
        this.$router.replace({
          path: "/holistic_analysis"
        });
      } else if (data == 2) {
        this.$router.replace({
          path: "/new_holistic_analysis"
        });
      } else if (data == 3) {
        this.$router.replace({
          path: "/operation_analysis"
        });
      } else if (data == 4) {
        this.$router.replace({
          path: "/car_administration"
        });
      } else if (data == 5) {
        this.$router.replace({
          path: "/one_administration"
        });
      } else if (data == 6) {
        this.$router.replace({
          path: "/induce_administration"
        });
      } else if (data == 7) {
        this.$router.replace({
          path: "/account_Jurisdiction"
        });
      } else if (data == 8) {
        this.$router.replace({
          path: "/role_Jurisdiction"
        });
      } else if (data == 9) {
        this.$router.replace({
          path: "/system_Journal"
        });
      } else if (data == 10) {
        this.$router.replace({
          path: "/system_setup"
        });
      } else if (data == 11) {
        this.$router.replace({
          path: "/menu_Jurisdiction"
        });
      } else if (data == 12) {
        this.$router.replace({
          path: "/equipment_Journal"
        });
      } else if (data == 13) {
        this.$router.replace({
          path: "/operation_Journal"
        });
      } else if (data == 14) {
        this.$router.replace({
          path: "/car_administrations"
        });
      } else if (data == 15) {
        this.$router.replace({
          path: "/newyard_analysis"
        });
      } else if (data == 16) {
        this.$router.replace({
          path: "/operation_record"
        });
      } else {
        this.$router.replace({
          path: "/noauthority"
        });
      }
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #161b30;
}
>>> .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-group-title {
  font-size: 0.9vw;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
  font-size: 0.8vw;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
  color: white;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu):hover,
.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
  background: #f66913;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  background: #5a516e;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
  color: rgba(255, 255, 255, 1);
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-group-title {
  color: rgba(255, 255, 255, 0.7);
}
</style>