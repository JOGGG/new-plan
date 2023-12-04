<template>
  <el-container style="min-height: 100vh">
    <el-aside style="width: unset">
      <sideMenu />
    </el-aside>
    <el-container>
      <el-header style="height: 56px">
        <router-view name="top"></router-view>
      </el-header>
      <el-main style="padding: unset"> <router-view></router-view> </el-main>
      <el-footer>这里是底部栏</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import sideMenu from "@/components/sideMenu.vue";
import { sentOne } from "@/api/apiOne";
export default {
  name: "mainIndex",
  data() {
    return {
      msg: "Welcome to App-project",
      data: "data content",
    };
  },
  mounted() {},
  methods: {
    async sent() {
      var res = await sentOne({});
      if (res.status == 200) {
        this.data = res.data.data;
        console.log(res);
      } else {
        console.error();
      }
    },
  },
  components: {
    sideMenu,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-aside::-webkit-scrollbar-button {
  display: none;
}
</style>
