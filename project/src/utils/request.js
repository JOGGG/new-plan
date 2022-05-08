import axios from 'axios'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout
  })
  service.interceptors.request.use(
    config => {
      return config
    },
    error => {
     console.error('axiosEr=>',error)
      return Promise.reject(error)
    }
  )
  export default service