<template>
  <div class="cmt-container">
    <p>发表评论</p>
    <hr>
    <textarea placeholder="最多评论120字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="pushComment">发布评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="item in commentList" :key="item.id">
           <div class="cmt-title">
               用户：匿名用户&nbsp;&nbsp;发表时间：{{ item.time | dateFormat }}
           </div>
           <div class="cmt-body">
               {{item.title}}
           </div>
        </div>
    </div>



    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template> 

<script>
    import { Toast } from 'mint-ui';
    export default {
    data() {
        return {
            commentList: [],
            msg: ''
        }
    },
    created() {
        this.getCommet()
    },
    methods: {
        getCommet() {
            this.$http.get("public/images/data.json").then( response => {
                if ( response.body.status === 0 ) {
                    this.commentList = response.body.message;
                } else {
                    Toast("评论加载失败");
                }
            } )
        },
        pushComment() {
            // this.msg.time = Date.now();
            var cmt = {
                time: Date.now(),
                title: this.msg
            };
            if ( this.msg.trim() == '' ) {
                Toast("评论不能为空哦！");
            } else {
                // var myDate = new Date();
                // cmt.time = myDate.toLocaleDateString();
                this.commentList.unshift(cmt);
                this.msg = '';
            }
           
        }
    },
    };
</script>

<style lang="scss" scoped>
    .cmt-container {
        p {
            font-weight: bold;
            color: black;
            font-size: 16px;
        }
        .cmt-list {
            margin: 10px 4px;
            .cmt-item {
                .cmt-title {
                    background-color: rgba(114, 113, 113, 0.3);
                }
                .cmt-body {
                    text-indent: 10px;
                }
            }
        }
    }

</style>


