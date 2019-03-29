<template>
  <div>
    <!-- <mt-header fixed :title="headermsg"></mt-header> -->
    <!--页面标题栏开始-->
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button
        type="button"
        class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
      >
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">学习圈</h1>
    </div>

    <!-- 卡片 -->
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <img src="../../images/account.jpg">
        <div class="mui-media-body">小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <router-link class="mui-card-content" to="/learn/learnifo">
        <img src="../../images/yuantiao.jpg" alt width="100%">
      </router-link>
      <div class="mui-card-footer">
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-star"></span>Like
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-chatboxes"></span>Comment
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-more"></span>Read more
        </a>
      </div>
    </div>
    <!-- 卡片 -->
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <img src="../../images/account.jpg">
        <div class="mui-media-body">小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <router-link class="mui-card-content" to="/learn/learnifo">
        <img src="../../images/bk03.jpg" alt width="100%">
      </router-link>
      <div class="mui-card-footer">
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-star"></span>Like
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-chatboxes"></span>Comment
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-more"></span>Read more
        </a>
      </div>
    </div>
    <!-- 卡片 -->
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <img src="../../images/account.jpg">
        <div class="mui-media-body">小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <router-link class="mui-card-content" to="/learn/learnifo">
        <img src="../../images/bk01.jpg" alt width="100%">
      </router-link>
      <div class="mui-card-footer">
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-star"></span>Like
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-chatboxes"></span>Comment
        </a>
        <a class="mui-card-link">
          <span class="mui-icon mui-icon-more"></span>Read more
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      headermsg: "备忘录"
    };
  },
  methods: {
    
  },
};
</script>


<style lang="scss" scoped>
</style>
