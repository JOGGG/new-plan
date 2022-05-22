<template>
  <div class="main">
    <div class="mainForm">
      <div class="formLeft">欢迎登录蛋糕铺子</div>
      <div class="formRight">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :rules="rules"
          hide-required-asterisk
          :model="loginForm"
          ref="loginForm"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verCode">
            <el-input v-model="loginForm.verCode">
              <template slot="append">
                <div class="verification-code" @click="getCode()">
                  {{ getVerCode }}
                </div></template
              >
            </el-input>
          </el-form-item>
        </el-form>
        <div class="loginBtn" @click="goLogin()">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendLogin } from "@/api/login";
import { mapState } from "vuex";

export default {
  mounted() {
    this.getCode();
  },
   computed: {
    ...mapState(["app"]),
    getVerCode() {
      let newData = this.verCodeShowA + "+" + this.verCodeShowB + "=?";
      return newData;
    },
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (
        this.loginForm.verCode !=
        this.verCodeShowA + this.verCodeShowB
      ) {
        callback(new Error("验证码错误!"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "top",
      loginForm: {
        account: "",
        password: "",
        verCode: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verCode: [{ validator: validatePass, trigger: "blur" }],
      },
      verCodeShowA: "",
      verCodeShowB: "",
    };
  },
  methods: {
    //change validate code
    getCode() {
      this.verCodeShowA = Math.floor(Math.random() * 100);
      this.verCodeShowB = Math.floor(Math.random() * 100);
    },
    goLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.commit('SET_loading',true)
          //validate pass
          let data = Object.assign({}, this.loginForm);
          this.$store.dispatch("sendLogin", data);
        } else {
          // this.$message.error("请再次确认输入信息");
        }
      });
    },
    //send LoginData
    async sendLogin(data) {
      var res = await sendLogin(data);
      if (res.data.success) {
        //login success
        this.$refs.loginForm.resetFields();
        console.log(this.$store);
        this.$message.success("登录成功");
      } else {
        console.log(res);
        this.$message.warning("登录失败");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$fl: flex;
$tblue: #409eff;
/deep/ .el-form-item__label {
  font-size: 24px;
  color: #40485b;
}
.main {
  height: 100vh;
  overflow: hidden;
}
.verification-code {
  background: #ccc;
  padding: 0 10px;
  width: 110px;
  text-align: center;
  color: #ffffff;
  border-radius: 4px;
  letter-spacing: 4px;
  font-size: 18px;
  cursor: pointer;
}
.mainForm {
  width: 50vw;
  display: $fl;
  position: absolute;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 400%;
  background-image: linear-gradient(
    45deg,
    #b721ff 0%,
    #1d8fe1 48%,
    #acb6e5,
    #86fde8
  );
  animation: process 20s infinite;
  @keyframes process {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  .formLeft {
    width: 60%;
    text-align: center;
    margin-top: 40px;
    color: #ffb6c1;
    font-size: 36px;
  }
  .formRight {
    padding: 20px;
    flex: 1;
    background-color: #ffffff;
    .loginBtn {
      border-radius: 8px;
      padding: 15px 40px;
      text-align: center;
      background-color: $tblue;
      color: #ffffff;
      cursor: pointer;
      &:hover {
        background-color: #1e90ff;
      }
      &:active {
        background-color: #a0cfff;
      }
    }
  }
}
</style>

