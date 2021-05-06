<template>
<ul>
    <li v-for="cn in cinemaList">
        <div>
            <span>{{cn.nm}}</span>
            <span>{{cn.price}}</span>
            <span>元起</span>
        </div>
        <div>
            <span>{{cn.addr}}</span>
        </div>

    </li>
</ul>
   
</template>
<script>


export default {
    props:{
        //得到父元素请求的结果数组
        cinemaList:{
            type:Array,
            required:true
        },
    },
    
    mounted(){
        console.log(this.cinemaList);
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl'
@import '~@/assets/stylus/ellipsis.styl'
ul 
    li
        height 1rem
        border1px(0 0 1px 0)
        margin-left .1rem
        margin-right .1rem
        div:first-child
            margin-top .12rem
            margin-bottom .1rem
            span:first-child
                font-size .16rem
                font-weight 550
            span:nth-child(2)
                font-size .16rem
                color red
            span:last-child
                color red 
                font-size .12rem
        div:nth-child(2)
            ellipsis(80%)
            color #777

</style>

