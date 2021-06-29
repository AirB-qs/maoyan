<template>
         <div :mv="mv" class="list">
            <div class="image">
                <img  :src="mv.img | img('192.270')" :alt="mv.nm">
            </div>
            <div >
                <span class="head">
                    <h1>{{mv.nm}}
                        <movie-version v-if="mv.ver" :ver="mv.ver" ></movie-version>
                    </h1>
                    
                </span>
                
                <div class="content">
                    <p>{{mv.cat}}</p>
                    <p>{{mv.desc}}</p>
                    <p>{{mv.showInfo}}</p>
                </div>
                
            </div>
            <div class = 'evaluate'>
                <span v-if="mv.showst===3">
                    <b>{{mv.sc}}</b>
                    <b>分</b>
                </span>
                <span v-else>
                    <b>{{mv.wish}}</b><b>人想看</b>
                </span>
                
                
                <movie-button :mv="mv" ></movie-button>
            </div>
        </div>
       

</template>

<script>
import MovieButton from '@/components/MovieButton.vue'
import MovieVersion from '@/components/MovieVersion.vue'




export default {
   props:{
        mv:{
           type:Object,
           required:true
        }
   },
    components:{
        MovieButton,
        MovieVersion,
    },
    
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/border1px.styl'
@import '../assets/stylus/ellipsis.styl'
        .list
            width 100%
            height 1.1rem
            display flex 
            justify-content center
            border1px(0 0 1px 0)
            
            div:first-child
                img
                    width .64rem
                    height .9rem
                    font-size:.1rem
                width .8rem
                height 1.3rem
                text-align center
                line-height 1.1rem
            div:nth-child(2)
                flex 225
                .head
                    height .3rem
                    h1
                        max-width  1.5rem
                        font-size .15rem
                        color black
                        display inline-block
                        line-height .22rem
                        margin-top .15rem
                        margin-bottom .1rem
                        ellipsis(100%)
                            
                p
                    ellipsis(100%,1)
                    font-size .12rem
                    color #999
                p:nth-child(2)
                    width 100%
                
                
            .evaluate
                width .9rem
                display block
                margin-right .1rem
                margin-bottom .2rem
                padding-top .1rem
                padding-bottom .2rem
                text-align right 
                span
                    height .4rem
                    b
                        display inline
                        color #FFD815
                    b:first-child
                        font-size .14rem 
                    b:last-child
                        font-size .08rem 
                            
</style>
