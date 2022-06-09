// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import { Message } from 'element-ui';


Vue.config.productionTip = false
Vue.prototype.BASE_URL = process.env.BASE_API
// success Message
Vue.prototype.msgS = function (msg,dur) {
  this.$message({  message: msg,duration:dur||2000 ,type:'success'});
}
// waring Message
Vue.prototype.msgW = function (msg,dur) {
  this.$message({  message: msg,duration:dur||2000 ,type:'warning'});
}
// info Message
Vue.prototype.msgI = function (msg,dur) {
  this.$message({  message: msg,duration:dur||2000 ,type:'info'});
}
// error Message
Vue.prototype.msgE = function (msg,dur) {
  this.$message({  message: msg,duration:dur||2000 ,type:'error'});
}
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, },
  template: '<App/>'
})
