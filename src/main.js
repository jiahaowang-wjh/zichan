import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/style.scss'
import './assets/js/htmlFontSize.js'
import './assets/js/axios.config.js'
// 按需引入echarts
// 定义全局上传函数
Vue.prototype.$UpdateFile = async function (file) {
    const formData = new FormData()
    formData.append('file', file)
    const { data: result } = await this.$http({
        method: 'post',
        url: '/api/api/fileUploading/uploading',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if (result.resultCode !== '200') return this.$message.error('上传失败, 请重试')
    return 'http://47.108.135.174:9000/' + result.data.split('/')[3]
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
