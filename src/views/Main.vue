<template>
  <div class="main">
    <el-container class="main-container">
      <!-- 头部区域 -->
      <el-header class="main-container-header">
        <!-- 左侧logo -->
        <div class="main-container-header-logo">
          <img src="@imgs/Login/zichan-logo.png" alt />
          <span>资产系统</span>
        </div>
        <!-- 右侧用户身份信息及退出按钮 -->
        <div class="main-container-header-user">
          <!-- 头部右侧栏 -->
          <div class="main-container-header-user-msg">
            <img :src="userMsg.userLogo" alt />
            <span>{{userName}}</span>
          </div>
          <div class="main-container-header-user-back" @click="logout">
            <img src="@imgs/home/back.svg" alt />
          </div>
        </div>
      </el-header>
      <!-- 主体区域 -->
      <el-container class="main-container-body">
        <!-- 侧边栏 --> 
        <div class="main-container-body-aside">
          <div class="main-container-body-aside-menu" text-color="#fff" active-text-color="#fff">
            <el-menu :default-active="currentRoute" class="main-container-body-aside-menu" router>
              <template v-for="(item ) in userMenuTree">
                <el-submenu :index="item.menuUrl" :key="item.menuId" v-if="item.list.length>0">
                  <template slot="title">{{item.menuName }}</template>
                  <el-menu-item
                    :index="itemSon.menuUrl"
                    v-for="(itemSon) in item.list"
                    :key="itemSon.menuId"
                  >{{itemSon.menuName}}</el-menu-item>
                </el-submenu>
                <el-menu-item :index="item.menuUrl" :key="item.menuId" v-else>{{item.menuName }}</el-menu-item>
              </template>
            </el-menu>
          </div>
        </div>
        <!-- 右侧内容主体 -->
        <el-main class="main-container-body-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Main",
  data() {
    return {
      currentRoute: "",
      userMsg: {
        username: "",
        userLogo: require("@imgs/home/user-logo.png")
      },
      // 一级侧边栏动态激活下标
      AsideActiveIndex: 0,
      // 二级菜单样式变换
      AsideSubActiveIndex: 0,
      AsideListContent: [],
      currentComponent: "MyDebt",
      userName: "用户名或身份"
    };
  },
  
  created() {
    // 初始化数据
    this.initData();
  },
  watch: {
    $route(to) {
      this.currentRoute = to.meta.leftMenu;
    }
  },
  mounted() {
    this.currentRoute = this.$route.meta.leftMenu;
  },
  computed: {
    ...mapState(["userInfo", "userMenuTree"])
  },
  methods: {
    initData() {
      // 初始化头像和用户信息
      const username = localStorage.getItem("username");
      this.userName = username;
    }
  },
  created() {
    this.initData();
  }
};
</script>
<style lang="scss" scoped>
@import "@css/style.scss";
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
        background-image: linear-gradient(to bottom, #5c6283, #191a38);
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
              background-color: #fc7f89;

              img {
              }
            }
          }
        }
      }

      &-main {
        width: 100%;
        height: 100%;
        padding: 0 !important;
      }
    }
  }
}
</style>
