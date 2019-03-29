<template>
  <div class="container">
    <!-- header -->
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">chat (聊天窗口)</h1>
    </header>

    <!-- content -->
    <div class="mui-content">
      <div id="msg-list"></div>
    </div>

    <!-- footer -->
    <footer>
      <div class="footer-left">
        <i id="msg-image" class="mui-icon mui-icon-camera" style="font-size: 28px;"></i>
      </div>
      <div class="footer-center">
        <textarea id="msg-text" type="text" class="input-text"></textarea>
        <button id="msg-sound" type="button" class="input-sound" style="display: none;">按住说话</button>
      </div>
      <label for class="footer-right">
        <i id="msg-type" class="mui-icon mui-icon-mic"></i>
      </label>
    </footer>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
    * {
    touch-action: none;
    }
    .container {
    height: 100%;
    padding: 44px 0 50px 0;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    }
    footer {
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-top: solid 1px #bbb;
    left: 0px;
    bottom: 0px;
    overflow: hidden;
    padding: 0px 50px;
    background-color: #fafafa;
    }
    .footer-left {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 0px;
    bottom: 0px;
    text-align: center;
    vertical-align: middle;
    line-height: 100%;
    padding: 12px 4px;
    }
    .footer-right {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0px;
    bottom: 0px;
    text-align: center;
    vertical-align: middle;
    line-height: 100%;
    padding: 12px 5px;
    display: inline-block;
    }
    .footer-center {
    height: 100%;
    padding: 5px 0px;
    }
    .footer-center [class*="input"] {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    }
    .footer-center .input-text {
    background: #fff;
    border: solid 1px #ddd;
    padding: 10px !important;
    font-size: 16px !important;
    line-height: 18px !important;
    font-family: verdana !important;
    overflow: hidden;
    }
    .footer-center .input-sound {
    background-color: #eee;
    }
    .mui-content {
    position: relative;
    top: -50px;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    background-color: #eaeaea;
    }
    #msg-list {
    height: 750px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    }
</style>
