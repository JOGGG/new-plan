<template>
  <div class="headNav">
    <el-avatar icon="el-icon-user-solid"> </el-avatar>
    <el-dropdown class="menuDrop" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ nickName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="setting">系统设置</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      nickName: null,
    };
  },
  mounted() {
    let userData = sessionStorage.getItem("userData");
    if (userData) {
      this.nickName = JSON.parse(userData).userName;
    } else {
      this.msgE("未获取到用户信息");
    }
  },
  methods: {
    handleCommand(command) {
      eval(`this.${command}()`);
    },
    setting() {
      this.msgI("setting");
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.msgS('退出登录')
    },
  },
};
</script>

<style scoped>
.headNav {
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.menuDrop {
  margin-left: 10px;
}
</style>
