// 入口文件

// 导入 vue.js
import Vue from 'vue'

// 引入路由包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter);
import router from './router.js'

// 导入 App 组件
import app from './App.vue'

// 导入mui
import './lib/mui/js/mui.min.js'
// import './lib/mui/js/mui.view.js'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入fab
import VueFab from 'vue-float-action-button'
Vue.use(VueFab);

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource);
Vue.http.options.root = "http://60.205.222.7:9980";

// 按需导入 mint-ui 组件
// import MintUI from 'mint-ui'
// Vue.use(MintUI);
// import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 格式化时间插件 
import moment from 'moment'

// 缩约图
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

// 注册全局过滤器
Vue.filter('dateFormat', function(date, pattern='YYYY-MM-DD') {
    return moment(date).format(pattern);
})

var vm = new Vue({
    el: '#app',
    render: createElement => createElement (app),
    router: router
})