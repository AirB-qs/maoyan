<template>
  <div>
    <h1>近期最受欢迎</h1>
    <ul>
        <li v-for="mov of movieList" :key="mov.id" >
            <img :src="mov.img | img('192.270')"  :alt="mov.nm">
            <h2>{{mov.nm}}</h2>
            <p>{{mov.wish}}人想看</p>
            <p>{{slice(mov.comingTitle)}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    
    
    props:{
        movieList:{
            type:Array,
            required:true
        }
    },
    methods:{
        slice(str){
            return str.slice(0,str.length-2)
        }
    },
        List(arr){
            return arr.slice(0,5)
        }
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl'
@import '~@/assets/stylus/ellipsis.styl'
    div 
        width 100%
        height 2.2rem
        border1px(0 0 1px 0)
        h1 
            position static
            margin-left .2rem
        ul  
            margin-left .1rem 
            display: flex;                              //横向滚动
            height: 1.8rem;
            overflow-x: auto;

            li 
                width .85rem
                margin .1rem
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                /* width: 88px; */
                flex 1
            
                img
                    width .85rem
                    height 1.15rem
                h2
                    ellipsis()                         
                p
                    font-size .12rem
                    color #666
                    ellipsis()
                   
                
</style>