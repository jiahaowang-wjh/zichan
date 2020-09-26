import Vue from 'vue'
import axios from 'axios'
import {
  Message
} from 'element-ui';
import _loading from "./loading"
// 使用session和cookie, 
// 客户端后续的所有请求都会携带该token发送请求
// 服务器验证token是否存在,决定是否返回数据
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://113.204.236.218:8889/'
axios.interceptors.request.use(config => {
  _loading.open()
  const token = window.sessionStorage.getItem('token')
  config.headers.Authorization = token
  return config
}, error => {
  _loading.close();
  Message({
    message: 'err:' + error,
    type: 'error'
  });
  console.log('err:' + error) // for debug
  // 对请求错误做些什么
  return Promise.reject(error);
})
axios.interceptors.response.use(result => {
  _loading.close()
  const {
    status,
    data
  } = result
  if (status) {
    if (status !== 200) {
      Message({
        message: result.statusText,
        type: 'error'
      });
      return Promise.reject(result)
    } else if (data.resultCode !== '200') {
      Message({
        message: data.resultMessage,
        type: 'error'
      });
      return Promise.reject(data)
    }
  } else if (data.resultCode) {
    Message({
      message: '网络响应错误！',
      type: 'error'
    });
    return Promise.reject(result)
  }
  return result
}, error => {
  _loading.close()
  Message({
    message: "请求错误，请联系管理员",
    type: 'error'
  });
  return Promise.reject(error)
})
Vue.prototype.$http = axios
