import Vue from 'vue'
import axios from 'axios'
// 使用session和cookie,没有跨域问题
// 使用token,有跨域问题使用token
// token 原理
// 登录页面输入用户名和密码进行登录
// 服务器验证成功并生成当前用户的token进行返回
// 客户端拿到token后,进行存储token
// 客户端后续的所有请求都会携带该token发送请求
// 服务器验证token是否存在,决定是否返回数据
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://113.204.236.218:8889/'
axios.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
})
Vue.prototype.$http = axios
