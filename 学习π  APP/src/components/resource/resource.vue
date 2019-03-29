<template>
  <div>
    <!-- header -->
    <!-- <mt-header fixed :title="headermsg">
      <mt-button icon="back" slot="left" @click="$router.back(-1)"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->

			<!--页面标题栏开始-->
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title">我的</h1>
			</div>

      <!-- 顶部滑块 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">科技</a>
        </div>
      </div>
    </div>
    <!-- 图片展示 -->
    <ul>
        <router-link to="/home/picifo" v-for="item in list" :key="item.id" class="pic-container" tag="li">
          <img v-lazy="item">
          <div class="pic-content">了数据大幅拉升奥斯陆扩大飞机啊是浪费按时间分类静安寺发就是浪费骄傲了开始放假啊了奥拉夫就爱上了发啊就</div>
        </router-link>
    </ul>


  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
        list: [
            '../../images/banner1.png',
            '../../images/banner2.jpg',
            '../../images/banner1.png',
            '../../images/banner2.jpg',
            '../../images/banner1.png',
            '../../images/banner2.jpg',
        ],
        headermsg: "资源"
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
// 解决滑块滑动警告
* {
  touch-action: pan-y;
}
// 图片在加载时的样式
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul {
    position: relative;
    padding-left: 0px;
    list-style: none;
    img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
    }
    li {
        position: relative;
        margin: 5px 9px;
    }
    .pic-content {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2)
    }
}

.mui-slider {
  position: fixed;
  top: 40px;
  background: #fff;
}
</style>


