
import router from '@/router'
/**
 * 获取token
 */
export const getToken = () => {
    const token = sessionStorage.getItem('token');
    if (token) return token
    else return null
}
/**
 * 设置token
 */
export const setToken = (token) => {
    sessionStorage.setItem('token',token);
}

/*用户是否有当前菜单权限*/
export const hasMenuAuth = () => {
    

}
export const loginOut =()=>{
    sessionStorage.clear();
    localStorage.clear();
    router.push('/login');
}
