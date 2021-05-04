<template>
    <div  :class="ticket" v-if="this.mv.showst===3">购票</div>
    <div  :class="ticket" v-else>预售</div>
</template>

<script>
    export default {
        props:{
            mv:{
                type:Object,
                required:true
            }
        },
        computed:{
            ticket:function(){
                if(this.mv.showst!==3) return "wait";
                return "buy"
            }
        }
    }

</script>

<style lang="stylus" scoped>
    div
        width .6rem
        height .35rem
        line-height .35rem
        text-align center
        color white
        border solid 1px 
        border-radius .05rem
        margin-top .2rem
        margin-left .3rem
    .buy
        background-color #cd4c42
    .wait
        background-color #00ABE9


</style>

/**对于想要修改的全局样式，可以创建多个style */
