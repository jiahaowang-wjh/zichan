
 
import Vue from 'vue'
import { Message } from 'element-ui';
function filterRouteData(menuArr) {
    let parentArr = []
    let childArr = [];
    menuArr.forEach((item) => {
        if (item.prantId === '0') {
            item.list = [];
            parentArr.push(item)
        } else {
            childArr.push(item)

        }

    })
    childArr.forEach(item => {
        const pIndex = parentArr.findIndex(obj => item.prantId === obj.menuId);
        if (pIndex != -1) {
            parentArr[pIndex].list.push(item)
        }
    })
    return parentArr
}

function auth(){
    
}



export default {
    // 异步获取登录人信息
    async getUserInfo({ commit, state }) {

        let res = await getUserData()
        res = res.data
        if (res.flag != '0') {
            // 获取失败
            throw new Error(res.resultMsg);
        }
        // 把获取到的登录信息储存到vuex中
        if (res.user) {
            // 保存用户信息


        }
    },
    async userMenus({ commit, state }) {
        const menuTree = state.userMenuTree;
        if (menuTree.length) {
            return true
        }
        const formData = new FormData()
        formData.append('userId', window.sessionStorage.getItem('userId'))
        const { data } = await Vue.prototype.$http({
            method: 'post',
            url: '/api/api/pubUser/selectMenuByUserId',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(data)
        if (data) {
            const menuTree = filterRouteData(data.data);
            commit('SAVE_USER_MENU', data.data);
            commit('SAVE_USER_MENU_TREE', menuTree);

        } else {
            Message({ type: 'warning', message: '菜单获取失败!请尝试刷新' });
        }
        return true
    }

}