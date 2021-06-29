<template>
    <section>
        <header>
            <h2>观众评论</h2>
            <comment-list></comment-list>
        </header>
    </section>
</template>
<script>
import CommentList from '@/views/home/detail/CommentList.vue'
export default({
    data(){
        return {
            comments:'',
            url:'/mmdb/comments/movie/v2/'+this.$route.params.id+'.json'
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
            this.comments=result.data.cmts.slice(0,3)
            console.log(this.comments);
        }
    }
})
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl'

section
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
    header
        height .3rem
        border1px(0 0 1px 0)
        h2
            margin-left .1rem
            margin-top .1rem
            
        
        
</style>