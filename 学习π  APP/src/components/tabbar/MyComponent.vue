<template>
  <div>
    <!-- <mt-header fixed :title="headermsg"></mt-header> -->
    <!--单页面开始-->
    <div id="setting" class="mui-page">
      <!--页面标题栏开始-->
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">我的</h1>
      </div>
      <!--页面标题栏结束-->
      <!--页面主内容区开始-->
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper" style="padding-top: 45px">
          <div class="mui-scroll">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media">
                <router-link class="mui-navigate-right" to="/my/account">
                  <img
                    class="mui-media-object mui-pull-left head-img"
                    id="head-img"
                    src="../../images/account.jpg"
                  >
                  <div class="mui-media-body">陈志文
                    <p class="mui-ellipsis">账号:16060075</p>
                  </div>
                </router-link>
              </li>
            </ul>
            <!-- <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#account" class="mui-navigate-right">账号与安全</a>
              </li>
            </ul> -->
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">我的收藏</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">我最喜欢的</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#notifications" class="mui-navigate-right">新消息通知</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#privacy" class="mui-navigate-right">隐私</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#general" class="mui-navigate-right">通用</a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#about" class="mui-navigate-right">
                  关于学习π
                  <i class="mui-pull-right update">V1.0.0</i>
                </a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell" style="text-align: center;">
                <a style="background-color: #dd524d; color: #fff;" href="#">退出登录</a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell" style="text-align: center;">
                <router-link style="background-color: #4cd964; color: #fff;" to="/my/switchlogin">切换账号</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--页面主内容区结束-->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      headermsg: "我的"
    };
  }
};
</script>


<style lang="scss" scoped>
// 页面padding

// bgcolor

.mui-scroll-wrapper,
.mui-scroll {
  background-color: #efeff4;
}

.mui-page .mui-table-view:first-child {
  margin-top: 15px;
}
.mui-page .mui-table-view:last-child {
  margin-bottom: 30px;
}
.mui-table-view {
  margin-top: 20px;
}

.mui-table-view span.mui-pull-right {
  color: #999;
}
.mui-table-view-divider {
  background-color: #efeff4;
  font-size: 14px;
}
.mui-table-view-divider:before,
.mui-table-view-divider:after {
  height: 0;
}
.mui-pull-right {
    color: #999;
}
</style>
