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
      <h1 class="mui-center mui-title">消息</h1>
    </div>
    <div class="usua-contact">常用联系人</div>
    <ul class="mui-table-view">
      <router-link to="/message/chat">
        <li
          class="mui-table-view-cell mui-media"
          v-for="item in contactlist"
          :key="item.contact_name"
        >
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
            <img class="mui-media-object mui-pull-left" :src="item.avatar_url">
            <div class="mui-media-body">
              {{item.name}}
              <p class="mui-ellipsis">{{item.descr}}</p>
            </div>
          </a>
        </li>
      </router-link>
    </ul>
    <!-- fab -->
    <testfab></testfab>
  </div>
</template>


<script>
import testfab from "./fabtest.vue";

export default {
  data() {
    return {
      headermsg: "消息",
      contactlist: []
    };
  },
  created() {
    this.getContact();
  },
  methods: {
    getContact() {
      this.$http.get("public/images/data.json").then(
        response => {
          // success callback
          if (response.body.status === 0) {
            this.contactlist = response.body.contact;
            Toast("加载成功！");
          } else {
            Toast("获取信息失败！");
          }
        },
        response => {
          // error callback
        }
      );
    }
  },
  components: {
    testfab
  }
};
</script>


<style lang="scss" scoped>
a {
  color: black;
}
.usua-contact {
  color: #aaa;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

