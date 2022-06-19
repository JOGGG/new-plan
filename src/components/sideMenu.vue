<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    :collapse="isCollapse"
    router
  >
    <el-menu-item
      :class="{ collapseItem: isCollapse }"
      class="collapseItemAll"
      @click="isCollapse = !isCollapse"
    >
      <i
        class="el-icon-arrow-right"
        style="color: white"
        v-show="isCollapse"
      ></i>
      <div class="collBtn" v-show="!isCollapse">
        <i class="el-icon-arrow-left" style="color: white"></i>收起
      </div>
    </el-menu-item>
    <el-menu-item index="/table/index">
      <i class="el-icon-menu"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">个人中心</el-menu-item>
        <el-menu-item index="1-2">系统设置</el-menu-item>
        <el-menu-item index="1-3">帮助</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-aside ul {
  border: 0px;
}
.collapseItemAll {
  padding: 0 !important;
}
.collBtn {
  display: inline-block;
  color: #ffffff;
  height: 100%;
  width: 100%;
  background-color: #409eff;
  transform: translateY(-1px);
}
.collBtn:hover {
  background-color: #b3d8ff;
  color: #409eff;
}
.collapseItem {
  background-color: #409eff;
}
</style>
