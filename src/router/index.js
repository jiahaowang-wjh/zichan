import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // to 表示将要访问的路径
    // from 表示由哪个路径跳转而来
    // next 表示一个函数,表示放行, next('/login'),表示强制跳转的路径
    // 1. 如果访问登录页面 直接放行
    if (to.path === '/login') {
        window.sessionStorage.setItem('token', 'Basic Y2xpZW50OjEyMzQ1Ng==')
        return next()
    } else {
        // 2. 获取token
        const tokenStr = window.sessionStorage.getItem('token')
        // 3. 如果没有token,跳转到登录页面
        if (!tokenStr) return next('/login')
        // 4. 如果存在则放行
    }
    next()
})

export default router
