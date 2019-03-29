<template>
    
    <div>

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


        <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
            <router-link :to="'/home/newsifo/' + item.id ">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{ item.title }}</h1>
                    <p class='mui-ellipsis'>
                        <span>发表时间：{{item.time}}</span>
                        <span>点击次数：{{item.click}}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                headermsg: "课程信息",
                newslist: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                this.$http.get("public/images/data.json").then( response => {
                    // success callback
                    if ( response.body.status ===0  ){
                        this.newslist = response.body.message;
                        Toast("加载成功！");

                    } else {
                        Toast("获取信息失败！");
                    }
                }, response => {
                    // error callback

                })
            }
        },
    };
</script>

<style lang="scss" scoped>
   .mui-table-view {
       
        li {
            h1 {
                font-size: 16px; 
            }
            .mui-ellipsis {
                font-size: 13px;
                color: blue;
                display: flex;
                justify-content: space-between;
            }

        }


   }
</style>
