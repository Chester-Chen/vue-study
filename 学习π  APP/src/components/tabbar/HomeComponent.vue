<template>
  <div class="container">
    <!-- header -->
    <!-- <mt-header fixed :title="headermsg"></mt-header> -->
    <!--页面标题栏开始-->
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <!-- <button
        type="button"
        class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
      >
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>-->
      <h1 class="mui-center mui-title">主页</h1>
    </div>
    <div class="test">
      <!-- 搜索框 -->
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder style="background: #ddd;">
        <span class="mui-placeholder">
          <span class="mui-icon mui-icon-search"></span>
        </span>
      </div>

      <!-- 轮播 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://cs.xinghuo100.com/upload/2018/12/25/15457282712026pq13x.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://cs.xinghuo100.com/upload/2019/02/14/155013624013516ebpo.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <!-- <span class="mui-icon mui-icon-home"></span> -->
          <img src="../../images/课程.png" alt>
          <div class="mui-media-body">课程</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/resource">
          <!-- <span class="mui-icon mui-icon-email"></span> -->
          <img src="../../images/资源.png" alt>
          <div class="mui-media-body">资源</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/activity">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <img src="../../images/活动.png" alt>
          <div class="mui-media-body">活动</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/community">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <img src="../../images/社区.png" alt>
          <div class="mui-media-body">社区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/contact">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <img src="../../images/客服.png" alt>
          <div class="mui-media-body">客服</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/more">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <img src="../../images/使用情况.png" alt>
          <div class="mui-media-body">使用情况</div>
        </router-link>
      </li>
    </ul>

    <!-- 列表项 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in book" :key="item.img_url">
        <div class="mui-slider-left mui-disabled">
          <a class="mui-btn mui-btn-red mui-icon mui-icon-email"></a>
          <a class="mui-btn mui-btn-yellow mui-icon mui-icon-phone"></a>
          <a class="mui-btn mui-btn-grey mui-icon mui-icon-person"></a>
        </div>
        <div class="mui-slider-right mui-disabled">
          <a class="mui-btn mui-btn-grey mui-icon mui-icon-person"></a>
          <a class="mui-btn mui-btn-yellow mui-icon mui-icon-phone"></a>
          <a class="mui-btn mui-btn-red mui-icon mui-icon-email"></a>
        </div>
        <a class="mui-slider-handle">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{ item.title }}
            <p class="mui-ellipsis">{{item.descr}}</p>
          </div>
        </a>
      </li>
    </ul>

    <!-- fab -->
    <testfab></testfab>
  </div>
</template>

<script>
import testfab from "./fabtest.vue";
import { Toast } from "mint-ui";
export default {
  name: "example",
  data() {
    return {
      headermsg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=614260955,2280579637&fm=26&gp=0.jpg",
      book: []
    };
  },
  components: {
    testfab
  },
  created() {
    this.getBooks();
  },
  methods: {
    tip() {
      Toast("还没有写功能哦,亲！");
    },
    getBooks() {
      this.$http.get("public/images/data.json").then(response => {
        if (response.body.status == 0) {
          this.book = response.body.book;
        } else {
          console.log("数据获取失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  touch-action: none;
}
// .container {
//   padding: 0 6px;
// }
.mui-input-clear {
  margin-bottom: 0;
}
.mui-search {
  margin: 4px 0;
}
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  li {
    border: none;
  }
}

.mui-col-sm-3 {
  width: 33%;
}

img {
  width: 40px;
  height: 40px;
}
</style>
