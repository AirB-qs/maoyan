<template>
    <section>
        <h2>票房</h2>
        <ul v-if="mbox">
            <li v-if="mbox.lastDayRank">
                <div>
                    <span>{{mbox.lastDayRank}}</span>
                    <span>昨日票房排行</span>
                </div>
                
            </li>
            <li>
                <div>
                    <span v-if="mbox.firstWeekBox!=0">{{mbox.firstWeekBox}}</span>
                    <span v-else class="without">暂无</span>
                    <span>首周票房(万)</span>
                </div>
            </li>
            <li>
                <div>
                    <span>{{mbox.sumBox}}</span>
                    <span>{{mbox.firstWeekBox?'累计票房(万)':'点映票房(万)'}}</span>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default({
    data(){
        return {
            //获取电影票房相关信息
            url:'/mmdb/movie/'+this.$route.params.id+'/feature/v1/mbox.json',
            mbox:'',
        }
    },
    created(){
        this.loadBox();
    },
    mounted(){
        
    },
    methods:{
        //获取电影详情页数据的方法
        async loadBox(){
            let result = await this.$http.get({url:this.url,params:{
            }
            })
            this.mbox=result.data.mbox;
            console.log(this.mbox);
        },
    }
})
</script>

<style lang="stylus" scoped>
section
    background-color white
    width 100%
    height 1.2rem
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
        display flex
        flex-direction row
        width 100%
        li
            flex 1
            div
                display flex
                flex-direction column
                span 
                    display inline-block
                    text-align center
                    &:first-child
                        color red
                        font-size .2rem
                        font-weight 1
                    &:last-child
                        color #999
                        font-size .12rem
                        font-weight 1.2
                span.without
                    color #aaa
            &:first-child
                margin-left .2rem
            &:last-child
                margin-right .2rem
</style>