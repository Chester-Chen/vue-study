import VueRouter from 'vue-router'


// 导入对应路由组件
import HomeComponent from './components/tabbar/HomeComponent.vue'
import MessageComponent from './components/tabbar/MessageComponent.vue'
import LearnComponent from './components/tabbar/LearnComponent.vue'
import MyComponent from './components/tabbar/MyComponent.vue'
import Resource  from './components/resource/resource.vue'
import Account  from './components/subcomponents/AccountComponent.vue'
import learnifo  from './components/tabbar/LearnIfo.vue'
import login  from './components/subcomponents/login.vue'
import register  from './components/subcomponents/register.vue'
import chat  from './components/subcomponents/chat.vue'


// 新闻路由组件
import NewsList from './components/news/NewsList.vue'
import NewsIfo  from './components/news/NewsIfo.vue'


const router = new VueRouter({
    routes: [
        { path: '/' , redirect: '/home'},
        { path: '/home' , component: HomeComponent},
        { path: '/message' , component: MessageComponent},
        { path: '/learn' , component: LearnComponent},
        { path: '/my' , component: MyComponent},
        { path: '/my/account', component: Account },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsifo/:id', component: NewsIfo },
        { path: '/home/resource', component: Resource },
        { path: '/learn/learnifo', component: learnifo },
        { path: '/my/switchlogin', component: login },
        { path: '/my/switchlogin/register', component: register },
        { path: '/message/chat', component: chat },
    ],
    linkActiveClass: 'mui-active'
})

export default router;