<template>
  <div class="newsifo-container">
    <!-- header -->
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

    <h3 class="title">{{ newsifo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsifo.time }}</span>
      <span>点击 {{ newsifo.click }} 次</span>
    </p>

    <hr>

    <div class="content" v-html="newsifo.article"></div>

    <comment-box></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsifo: {},
      headermsg: "newsifo"
    };
  },
  created() {
    this.getNewsIfo();
  },
  methods: {
    getNewsIfo() {
      this.$http.get("public/images/data.json").then(response => {
        if (response.body.status === 0) {
          this.newsifo = response.body.novel[0];
          Toast("加载成功！");
        } else {
          Toast("加载失败！");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsifo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    color: red;
    text-align: center;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: aqua;
  }
  .content {
    padding: 4px 4px 0 4px;
  }
}
</style>


