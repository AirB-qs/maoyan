<template>
    <section v-if="comments[0]">
        <header>
            <h2>观众评论</h2>
        </header>
        <comment-list :comments="comments" :total="total"></comment-list>
        <p>查看全部{{total}}条观众评论</p>
    </section>
</template>
<script>
import CommentList from '@/views/home/detail/CommentList.vue'
export default({
    data(){
        return {
            //获得的评论数据，因为是展示在详情页，所以只取前三条
            comments:'',
            //请求地址，与id有关
            url:'/mmdb/comments/movie/v2/'+this.$route.params.id+'.json',
            //获取到的评论总数
            total:0
        }
    },
    components:{
        CommentList
    },
    mounted(){
        this.loadComments()
    },
    methods:{
        //获取评论内容
        async loadComments(){
            let result = await this.$http.get({
                url:this.url
            })
            //将评论总数设置为请求结果的total对象
            this.total=result.data.total;
            this.comments=result.data.cmts.slice(0,3)
            //console.log(this.comments);
        }
    }
})
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl'

section
    background-color white
    width 100%
    display flex
    flex-direction column
    //分隔条
    &::before
        display block
        padding-left -0.1rem
        content ""
        background-color #eee
        width 100%
        height .1rem
    //底部空白部分
    &::after
        display block
        padding-left -0.1rem
        content ""
        background-color #eee
        width 100%
        height 1rem
    header
        height .4rem
        border1px(0 0 1px 0)
        h2
            margin-left .1rem
            margin-top .1rem
    p
        text-align center
        line-height .5rem
        color red 
        font-size .15rem
            
        
        
</style>