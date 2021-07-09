<template>
    <ul v-if="comments[0]">
        <li v-for="comment in comments" :key="comment.id">
            <img :src="comment.avatarurl | img('19200.27000')" alt="">
            <div class="text">
                <p>{{comment.nickName}}</p>
                <van-rate v-model="comment.score"
                    :size="15"
                    color="#ffd21e"
                    void-icon="star"
                    void-color="#eee"
                    allow-half/>
                <p class="content">{{comment.content}}</p>
                <div class="great">
                    <p>{{comment.startTime.slice(0,10)}}</p>
                    <div class="great1">
                        <p class="iconfont-great">&#xe63a;</p>
                        <p>{{comment.approve}}</p>
                    </div>
                    
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import Vue from 'vue';
import { Rate } from 'vant';
Vue.use(Rate);
export default ({
    props:{
    //父组件所传递的评论数据
        comments:{
            type:Array,
            required:true
        },
    },
    mounted(){
        //console.log(this.comments);
    }
})
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/iconfont.styl'
@import '~@/assets/stylus/border1px.styl'
    ul 
        border1px(0 0 1px 0)
        li  
            margin-top .2rem
            display flex
            img 
                height .3rem
                flex 1
                border-radius 50%
                margin-left .2rem
            .text 
                border1px(0 0 1px 0)
                margin-left .2rem
                font-size .12rem
                flex 10
                p 
                    font-size .12rem
                .content 
                    font-size .15rem
                    line-height .2rem
                    padding-right .3rem
                .great
                    margin-bottom .1rem
                    display flex
                    p 
                        display inline-block
                        color #999
                    p:first-child 
                        flex 7
                    div
                        flex 1
                        
                        

            
                
</style>