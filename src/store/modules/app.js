import {
  sendLogin
} from "@/api/login";

const app = {
  state: {
    loading: false,
    userData:window.sessionStorage.getItem('userData')||''
  },
  mutations: {
    SET_loading: (state, setting) => {
      state.loading = setting
      console.log('s-loading=>', setting)
    },
    SET_userData: (state, setting) => {
      state.userData = setting
      console.log('s-userData=>', setting)
    },
  },
  actions: {
    sendLogin({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        sendLogin(data.data).then(res => {
          if (res.data.success) {
            commit('SET_loading', false) //loading off
            commit('SET_userData', JSON.stringify(res.data.data)) //loading off
            data._this.msgS("登录成功");
            window.sessionStorage.setItem('token',res.data.data.token);
            window.sessionStorage.setItem('userData',JSON.stringify(res.data.data));
            window.location.href = data._this.BASE_URL 
          }
          resolve(res)
        }).catch(error => {
          //any type error(timeout...)
          data._this.getCode() //get new verifyCode
          data._this.$message.error("登录失败，请检查网络");
          commit('SET_loading', false)
          reject(error)
        })
      })
    },
  }
}
export default app
