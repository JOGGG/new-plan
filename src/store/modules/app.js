import { sendLogin } from "@/api/login";

const app = {
  state: {
    loading: false,
    userData: window.sessionStorage.getItem("userData") || ""
  },
  mutations: {
    SET_loading: (state, setting) => {
      state.loading = setting;
      // console.log('s-loading=>', setting)
    },
    SET_userData: (state, setting) => {
      state.userData = setting;
      // console.log('s-userData=>', setting)
    }
  },
  actions: {
    sendLogin({ commit }, data) {
      return new Promise((resolve, reject) => {
        sendLogin(data.data)
          .then(res => {
            if (res.data.success) {
              //Loading Off
              commit("SET_loading", false);
              commit("SET_userData", JSON.stringify(res.data.data));
              data._this.msgS("登录成功");
              //Set Storage
              window.sessionStorage.setItem("token", res.data.data.token);
              window.sessionStorage.setItem(
                "userData",
                JSON.stringify(res.data.data)
              );
              window.location.href = data._this.BASE_URL;
            }
            resolve(res);
          })
          .catch(error => {
            //Any Type Error(timeout...)
            data._this.getCode(); //Get New VerifyCode
            data._this.$message.error("登录失败，请检查网络");
            commit("SET_loading", false);
            reject(error);
          });
      });
    }
  }
};
export default app;
