<template>
  <div>
    <!--页面标题栏开始-->
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button
        type="button"
        class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
      >
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">个人信息管理</h1>
    </div>

    <div class="mui-page-content">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <a id="head" class="mui-navigate-right">
                头像
                <span class="mui-pull-right head">
                  <img class="head-img mui-action-preview" id="head-img1" :src="account">
                </span>
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a>
                姓名
                <span class="mui-pull-right">陈志文</span>
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a>
                学习π账号
                <span class="mui-pull-right">16060075</span>
              </a>
            </li>
          </ul>
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <a>
                QQ号
                <span class="mui-pull-right">2630538239</span>
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a>
                手机号
                <span class="mui-pull-right">15222893977</span>
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a>
                邮箱地址
                <span class="mui-pull-right">2630538239@qq.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "../../images/account.jpg"
    };
  }
};
</script>


<style lang="scss" scoped>
.mui-page-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.mui-table-view {
  margin-top: 64px;
}
.head {
  height: 40px;
}
#head {
  line-height: 40px;
}
.head-img {
  width: 40px;
  height: 40px;
}
#head-img1 {
  position: absolute;
  bottom: 10px;
  right: 40px;
  width: 40px;
  height: 40px;
}
.mui-pull-right {
  color: #999;
}
</style>
