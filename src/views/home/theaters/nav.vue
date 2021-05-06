<template>
    <nav class="theaterNav">
        <router-link to="/citypicker">  
        <div class="city">
            <span>{{city}}</span>
            <span class = "yo-ico">&#xf032;</span>
        </div>
        </router-link>
        
        <span><input class="yo-ico" type="text" :placeholder='icon'></span>
    </nav>
</template>
<script>
import { mapState } from "vuex"
 

export default {
    data(){
        return {
            icon:'\uf067 搜电影'
        }
    },
    computed:mapState({
        city:state=>state.ct
    })
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl'
    .theaterNav
        width 100%
        height .45rem
        background-color #eee
        display flex
        justify-content center
        align-items center
        .city
            width .5rem
            display flex
            justify-content center
            align-items center
            span
                height 100% 
                font-size .12rem
                margin auto
                color #666
                &:first-child
                    width .3rem
                    margin-left .15rem
                    margin-right 0
                &:nth-child(2)
                    margin-left -.1rem
                    margin-right -.1rem

        span
            height 100% 
            font-size .12rem
            margin auto
            display flex
            justify-content center
            align-items center
            flex 1
            text-align center
            input
                width 90%
                height 55%
                border-radius .05rem
                border 1px
            ::-webkit-input-placeholder/* WebKit browsers */
                text-align center


             
</style>