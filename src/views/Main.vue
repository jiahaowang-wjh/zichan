<template>
    <div class="main">
        <el-container class='main-container'>
            <!-- 头部区域 -->
            <el-header class='main-container-header'>
                <!-- 左侧logo -->
                <div class='main-container-header-logo'>
                    <img  src="@imgs/Login/zichan-logo.png" alt="">
                    <span >资产系统</span>
                </div>
                <!-- 右侧用户身份信息及退出按钮 -->
                <div class='main-container-header-user'>
                    <!-- 头部右侧栏 -->
                    <div class='main-container-header-user-msg'>
                        <img :src="userMsg.userLogo" alt="">
                        <span>{{userName}}</span>
                    </div>
                    <div class='main-container-header-user-back' @click='logout'>
                        <img src="@imgs/home/back.svg" alt="">
                    </div>
                </div>
            </el-header>
            <!-- 主体区域 -->
            <el-container class='main-container-body'>
                <!-- 侧边栏 -->
                <div class='main-container-body-aside'>
                    <div class='main-container-body-aside-menu' text-color="#fff" active-text-color="#fff">
                        <!-- 一级菜单 -->
                        <div  v-for='(item,index) in AsideListContent' :key='item.id' class='main-container-body-aside-menu-item'>
                            <div class='main-container-body-aside-menu-item-content' @click="showToggle(item,index)" :class='{active: item.isSelected}'>
                                <span class='main-container-body-aside-menu-item-title'>{{item.authName}}</span>
                                <img src="@imgs/home/right.svg" alt="" v-if='item.children'>
                            </div>
                            <!-- 二级菜单 -->
                            <!-- <transition name='Toggle'> -->
                            <div v-if='item.isSelected'>
                                <div v-for='(subItem,index) in item.children'  :key='subItem.id' class='main-container-body-aside-menu-item-subitem' @click.stop='subItemToggle(subItem,index)' :class='{active: subItem.isChildSelected}'>
                                    <span>{{subItem.authName}}</span>
                                </div>
                            </div>
                            <!-- </transition> -->
                        </div>
                    </div>
                </div>
                <!-- 右侧内容主体 -->
                <el-main class='main-container-body-main'>
                   <component :is="currentComponent" @onChangeFragment='onChangeFragment'></component>  <!-- :ComponentName='Componentname'-->
                </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data () {
        return {
            userMsg: {
                username: '',
                userLogo: require('@imgs/home/user-logo.png')
            },
            // 一级侧边栏动态激活下标
            AsideActiveIndex: 0,
            // 二级菜单样式变换
            AsideSubActiveIndex: 0,
            AsideListContent: [],
            currentComponent: 'MyDebt',
            userName: '用户名或身份'
        }
    },
    components: {
        MyDebt: () => import('@c/MyDebt'),
        PayDetail: () => import('@c/PayDetail'),
        Password: () => import('@c/Password'),
        Assess: () => import('@c/MyDebt/Assess'),
        // DebtMessage: () => import('@c/DebtMessage'),
        // FinanceMessage: () => import('@c/FinanceMessage'),
        Assignment: () => import('@c/MyDebt/Assignment'),
        ConfirmAssignment: () => import('@c/MyDebt/ConfirmAssignment'),
        Notification: () => import('@c/MyDebt/Notification'),
        SalesAgreement: () => import('@c/MyDebt/SalesAgreement'),
        CollectionLetters: () => import('@c/MyDebt/CollectionLetters'),
        Compromise: () => import('@c/MyDebt/Compromise'),
        Guarantee: () => import('@c/MyDebt/Guarantee'),
        ReportInfo: () => import('@c/myapproval/ReportInfo'),
        CivilMedia: () => import('@c/myapproval/CivilMedia'),
        UnlockApply: () => import('@c/myapproval/UnlockApply'),
        PaymentVoucher: () => import('@c/myapproval/PaymentVoucher'),
        AssetInformation: () => import('@c/myapproval/AssetInformation'),
        PropertyAssessment: () => import('@c/myapproval/PropertyAssessment'),
        AssessApprove: () => import('@c/myapproval/AssessApprove'),
        DebtConfirm: () => import('@c/MyDebt/DebtConfirm'),
        AssetInformationApprove: () => import('@c/myapproval/AssetInformationApprove'),
        Payment: () => import('@c/myapproval/Payment'),
        PaymentApprove: () => import('@c/myapproval/PaymentApprove')
    },
    methods: {
        // 退出登录
        logout () {
            window.localStorage.clear()
            this.$router.push({
                name: 'Login'
            })
        },
        // 切换组件
        onChangeFragment (ComponentName) {
            this.currentComponent = ComponentName
        },
        // 获取数据
        getAsideList () {
            // this.$http.get()
            const result = {
                data: [
                    {
                        id: 110,
                        authName: '我的债行',
                        path: 'MyDebt',
                        isSelected: true
                    },
                    {
                        id: 120,
                        authName: '支付明细',
                        path: 'PayDetail',
                        isSelected: false
                    },
                    {
                        id: 130,
                        authName: '修改密码',
                        path: 'Password',
                        isSelected: false
                    },
                    {
                        id: 140,
                        authName: '我的审批',
                        path: 'MyApproval',
                        isSelected: false,
                        children: [
                            {
                                id: 141,
                                authName: '录入信息',
                                path: 'ReportInfo',
                                isChildSelected: false
                            },
                            {
                                id: 142,
                                authName: '调解信息',
                                path: 'CivilMedia',
                                isChildSelected: false
                            },
                            {
                                id: 143,
                                authName: '债权处理',
                                path: 'UnlockApply',
                                isChildSelected: false
                            },
                            {
                                id: 144,
                                authName: '支付凭证',
                                path: 'PaymentVoucher',
                                isChildSelected: false
                            },
                            {
                                id: 145,
                                authName: '资产评估',
                                path: 'PropertyAssessment',
                                isChildSelected: false
                            },
                            {
                                id: 146,
                                authName: '资产资料',
                                path: 'AssetInformation',
                                isChildSelected: false
                            }
                        ]
                    }
                ],
                meta: {
                    msg: '获取菜单列表成功',
                    status: 200
                }
            }
            if (result.meta.status !== 200) return this.$message.error(result.meta.msg)
            this.AsideListContent = result.data
        },
        // 一级菜单菜单
        showToggle (item, index) {
            this.AsideListContent.forEach(v => {
                if (v.isSelected !== this.AsideListContent[index].isSelected) {
                    v.isSelected = false
                }
            })
            item.isSelected = !item.isSelected
            // 页面切换
            if (item.path === 'MyApproval') return false
            this.currentComponent = item.path
        },
        // 下级菜单样式及组件切换变换
        subItemToggle (subItem, index) {
            this.AsideListContent[3].children.forEach(v => {
                if (v.isChildSelected !== this.AsideListContent[3].children[index].isChildSelected) {
                    v.isChildSelected = false
                }
            })
            subItem.isChildSelected = true
            this.currentComponent = subItem.path
        },
        initData () {
            // 初始化头像和用户信息
            const username = localStorage.getItem('username')
            this.userName = username
            //  获取左侧导航栏数据
            this.getAsideList()
        }
    },
    created () {
        this.initData()
    }
}
</script>
<style lang="scss" scoped>
@import '@css/style.scss';
.main {
    width: 100%;
    height: 100%;
    font-size: px2rem(12);

    &-container {
        height: 100%;

        &-header {
            background-color: #fff;
            display: flex;
            align-items: center;
            padding: 0 px2rem(10);
            height: px2rem(20) !important;
            justify-content: space-between;
            // 左侧logo
            &-logo {
                display: flex;
                align-items: center;
                img {
                    width: px2rem(14);
                    height: px2rem(14);
                }
                span {
                    font-size: px2rem(6);
                    margin-left: px2rem(4);
                    font-weight: 600;
                    color: #616789;
                }
            }
            // 右侧用户信息
            &-user {
                display: flex;
                justify-items: center;

                &-msg {
                    display: flex;
                    align-items: center;
                    img {
                        width: px2rem(6);
                        height: px2rem(6);
                        border-radius: 50%;
                    }
                    span {
                        font-size: px2rem(4);
                        margin-left: px2rem(2);
                        margin-right: px2rem(8);
                    }
                }

                &-back {
                    display: flex;
                    justify-items: center;
                    img {
                        width: px2mre(6);
                        height: px2rem(6);
                    }
                }
            }
        }

        &-body {
            &-aside {
                background-image: linear-gradient(to bottom, #5C6283 , #191A38);
                width: px2rem(55);
                height: 100%;
                &-menu {
                        height: 100%;
                        width: 100%;
                    &-item {
                        display: flex;
                        flex-direction: column;
                        &-content {
                            background-color: transparent;
                            color: #fff;
                            line-height: px2rem(9);
                            display: flex;
                            padding-left: px2rem(10);
                            justify-content: space-between;
                            align-items: center;
                            height: px2rem(10);
                        }

                        &-subitem {
                            height: px2rem(9);
                            display: flex;
                            justify-content: center;
                            padding-left: px2rem(14);
                        }
                        span {
                            font-size: px2rem(4);
                            color: #fff;
                            width: 100%;
                            height: px2rem(9);
                            line-height: px2rem(9);
                        }
                        img {
                            height: px2rem(8);
                            width: px2rem(4);
                        }
                        .active {
                            background-color: #FC7F89;

                            img {

                            }
                        }
                    }
                }
            }

            &-main {
                width: 100%;
                height: 100%;
                padding: 0!important;
            }
        }
    }
}
</style>
