<template>
  <div class="headNav">
    <!-- 当前时间 -->
    <div class="nowTime">
      {{ nowTime }}
    </div>
    <div class="mainTitle">{{ mainTitle }}</div>

    <!-- 用户头像下拉 -->
    <el-avatar icon="el-icon-user-solid"> </el-avatar>
    <el-dropdown class="menuDrop" @command="handleCommand">
      <span class="el-dropdown-link" style="color: black">
        {{ nickName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user">个人中心</el-dropdown-item>
        <el-dropdown-item command="setting">系统设置</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
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
      nowTime: new Date().toTimeString(),
      mainTitle: "你好，欢迎进入清清家庭",
    };
  },
  mounted() {
    let userData = sessionStorage.getItem("userData");
    if (userData) {
      this.nickName = JSON.parse(userData).userName;
    } else {
      this.msgE("未获取到用户信息");
    }
    this.setTime();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  methods: {
    handleCommand(command) {
      eval(`this.${command}()`);
    },
    user() {
      this.msgI("user");
    },
    setting() {
      this.msgI("setting");
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
      this.msgS("退出登录");
    },
    setTime() {
      this.timer = setInterval(() => {
        this.nowTime =new Date().toJSON().slice(0, 9) +'.'+ new Date().toTimeString().slice(0, 9);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.headNav {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.menuDrop {
  margin-left: 10px;
  cursor: pointer;
}

.mainTitle {
  position: absolute;
  font-size: 24px;
  color: black;
  left: 50%;
  transform: translateX(-50%);
}
.nowTime{
  position: absolute;
  left: 0px;
}
</style>
