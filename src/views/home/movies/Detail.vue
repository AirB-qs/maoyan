<template>
    <div>
        <header>
            <div>
                <span onclick="window.history.go(-1)">back</span>
                <h2>{{this.topic}}</h2>
            </div> 
        </header>
        <div class="background">
            <img v-if="info.img" :src="info.img | img('1920.2700')" width="100%" height="100%" :alt="this.info.nm">
        </div>
        <main>
            <div>
                <div class="blur"></div>
                <section class="movie_info"  >
                    <div class="upper">
                        <img v-if="info.img" :src="info.img | img('192.270')" :alt="this.info.nm">
                        <div class="movie_text">
                            <h2>{{info.nm}}</h2>
                            <h3>{{info.enm}}</h3>
                            <div class="movie_want">
                                <star :sc="info.sc" :isnum="info.snum" v-if="info.sc"></star>
                                <p v-else class="movie_wish">{{info.wish}}人想看</p>
                            </div>
                            
                            <div class="movie_intro">
                                <p>{{info.cat}}</p>
                                <p>{{info.src}}/{{info.dur}}</p>
                                <p>{{info.pubDesc}}</p>
                            </div>
                        </div>
                    </div>
                     <div class="lower">
                        <button class="iconfont-love">&#xe602; 想看</button>
                        <button class="iconfont-star">&#xe6b9; 评分</button>
                    </div>
                </section>
            </div>
            
            <!-- 实现简介展开与关闭的切换 -->
            <section :class="click?'movie_brief_close':'movie_brief_on'" class="movie_brief" v-on:click="clickOn()">
                <p >{{info.dra}}</p>
            </section>
            <!-- 演员表制作 -->
            <section class="movie_actor">
                <h2>演职人员</h2>
                <ul v-if="actorList.length">
                    <li v-for="item in actorList" :key="item.cnm">
                        <img  :src="item.avatar | img('128.170')" alt="">
                        <p class="name">{{item.cnm}}</p>
                        <p class="role">{{item.desc}}</p>
                    </li>
                </ul>
            </section>
            <earnings></earnings>
            <comments></comments>
        </main>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Star from '@/components/Star.vue'
import Earnings from '@/views/home/detail/Earnings.vue'
import Comments from '@/views/home/detail/Comments.vue'
export default({
    data(){
        return {
            //获取电影介绍内容url
            url1:'/mmdb/movie/v5/'+this.$route.params.id+'.json',
            //获取演员列表url
            url2:'/mmdb/v7/movie/'+this.$route.params.id+'/celebrities.json',
            topic:'影片详情',
            info:'',
            click:true,
            actorList:[]
        }
    },
    components:{
        Star,Earnings,Comments
    },
    computed:mapState({
        ci:state=>state.ci
    }),
    created(){
        this.loadData();
        this.loadActor();
    },
    mounted(){
        
    },
    methods:{
        //获取电影详情页数据的方法
        async loadData(){
            let result = await this.$http.get({url:this.url1,params:{
                ci:'20'
            }
            })
            this.info=result.data.data.movie;
            //console.log(result);
        },
        //获取演员导演列表
        async loadActor(){
            let result = await this.$http.get({url:this.url2})
            let list = result.data.data;
            for(let i=1;i<list.length;i++){
                for(let j=0;j<list[i].length;j++){
                    this.actorList.push(list[i][j])
                }
            }
        },
        clickOn(){
            this.click=!this.click
        }
    }
})
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/iconfont.styl'

div
    height 100%
    width 100%
    header
        width 100%  
        position fixed
        background #cd4c42
        color #fff
        font-size .16rem
        height .44rem
        line-height .44rem
        font-weight bold       
        div
            position relative
            span 
                position absolute
                z-index 1
                margin-left .1rem
            h2  
                width 100%
                text-align center
                position absolute
                z-index -1
    .background 
        z-index -1
        position absolute
        filter blur(.2rem)
    main  
        position absolute
        top .44rem
        height 100%
        width 100%
        z-index 1
        overflow scroll
        div 
            position relative
            height 2.1rem
            .blur
                position absolute
                width 100%
                height 2.1rem
                z-index 0.5 
                background-color rgba(90,90,90,0.5)
                box-shadow 0 0 .3rem 0 rgba(40,40,40,1) inset
            .movie_info
                //此处在设置透明时要加a
                background-color rgba(0,0,0,0)
                height 2.1rem
                width 100%
                z-index 1
                position absolute
                padding-top .1rem
                display flex
                flex-direction column
                .upper
                    display flex
                    flex-direction row
                    img
                        margin-left .15rem
                        width 1.2rem
                        height 1.5rem
                    .movie_text
                        height 1.55rem
                        margin-left .15rem
                        display flex
                        flex-direction column
                        h2  
                            font-size  .175rem
                            color white
                        h3
                            font-size .13rem
                            color white
                            margin-top -0.06rem
                        p
                            font-size .1rem
                            color white
                        p:nth-child(0)
                            font-size .14rem
                        .movie_want
                            display block
                            height .5rem
                            padding-top .1rem
                            .movie_wish
                                color orange
                                font-size .15rem
                        .movie_intro
                            height .5rem
                            padding-bottom .1rem
                            p
                                font-size .12rem
                                color #eee
                .lower
                    button
                        width 45.5%
                        margin-top .05rem
                        margin-left 3%
                        height .3rem
                        background-color rgba(180,180,180.0.4)
                        border 0px
                        border-radius .05rem
                        color white
                        font-size .12rem
        .movie_brief
            padding .1rem .2rem
        .movie_brief_close
            top 2.1rem
            background-color white
            p
                line-height .25rem
                max-height .75rem
                overflow hidden
            &::after
                content "展开"
                display inline-block
                width 100%
                height .2rem
                text-align center
                font-size .12rem
                color #999
        .movie_brief_on
            top 2.1rem
            background-color white
            p
                line-height .25rem
            &::after
                content "收回"
                display inline-block
                width 100%
                height .2rem
                text-align center
                font-size .12rem
                color #999
                
</style>
<style lang="stylus" scoped>
    .movie_actor
        background-color white
        width 100%
        height 1.8rem
        padding-top .1rem
        
        &::before
            display block
            padding-left -0.1rem
            content ""
            background-color #eee
            width 100%
            height .1rem
        h2
            margin-left .1rem
            margin-top .1rem
        ul  
            margin-left .1rem
            margin-top .1rem
            display flex 
            flex-direction row
            overflow scroll
            li
                margin-right .05rem
                img
                    height .8rem
                    width .6rem
                p   
                    width .6rem 
                    text-align center 
                .name 
                    margin-top .05rem
                    font-size .14rem
                    line-height .15rem
                .role
                    font-size .12rem
                    color #999
                    line-height .15rem

</style>