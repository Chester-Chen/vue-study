<template>
  <div class="newsifo-container">
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
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
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
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "风景",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "夜晚",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "xxx",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "life",
          w: 1200,
          h: 900
        },
      ]
    };
  },
  created() {
    this.getNewsIfo();
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getNewsIfo() {
      this.$http.get("public/images/data.json").then(response => {
        if (response.body.status === 0) {
          this.newsifo = response.body.novel[0];
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

<style lang="scss" >
.my-gallery {
  text-align: center;
  figure {
    display: inline-block;
    margin: 0;
    img {
      margin: 5px;
      width: 90px;
      height: 90px;
    }
  }
}

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
