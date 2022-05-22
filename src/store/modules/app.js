import {
  sendLogin
} from "@/api/login";

const app = {
  state: {
    loading: false
  },
  mutations: {
    SET_loading: (state, setting) => {
		state.loading = setting
        console.log('s-loading=>',setting)
    }
  },
  actions: {
    sendLogin({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        sendLogin(data).then(res => {
            console.error(res.data)
            if(res.data.success){
                commit('SET_loading', false) //loading off
            } 
            resolve(res)
        }).catch(error => {
          reject(error)
        })


      })
    },
  }
}
export default app
