<template>
  <div>
    <header>{{topic}}</header>
    <router-view></router-view>
    
    <van-tabbar v-model="active" active-color="#cd4c42" inactive-color="#666" route>
      <van-tabbar-item to="/movies/intheaters">
        <template>
          <van-icon class-prefix="van-icon" name="movies" size="0.22rem"/>
        </template>
        <span>电影</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/theaters">
        <template>
          <van-icon class-prefix="van-icon" name="theaters" size="0.22rem"/>
        </template>
        <span>影院</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile">
        <template>
          <van-icon class-prefix="van-icon" name="profile" size="0.22rem"/>
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
    


    <!-- <nav class="tabbar">
      <ul>
        <router-link tag="li" active-class="active" to="/movies">
          <b class = "iconfont-nav"  >&#xe679;</b>  
          <span >电影</span>
        </router-link>
        <router-link tag="li" active-class="active" to="/theaters">
          <b class = "iconfont-nav">&#xe8c7;</b>
          <span>影院</span>
        </router-link>
        <router-link tag="li" active-class="active" to="/profile">
          <b class = "iconfont-nav">&#xe60d;</b>
          <span>我的</span>
        </router-link>
      </ul>
    </nav> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active:0,
        topic:''
      };
    },
    watch:{
      $route:{
        handler(route){
          if(route.name==='intheaters') this.topic='猫眼电影';
          if(route.name==='theaters') this.topic='影院';
          if(route.name==='profile') this.topic='我的';
          if(route.name==='detail') this.topic='影片详情'
        },
        immediate:true
      }
    },
    mounted(){
      console.log(this.$route);
    }
  };
</script>

<style lang="stylus" scoped>
 @import '~@/assets/stylus/iconfont.styl'

  header 
    text-align center
    background #cd4c42
    color #fff
    font-size .16rem
    height .44rem
    line-height .44rem
    font-weight bold
    &::before
      font-family 'iconfont-nav'
      content:'\e679'                        /**在伪类中用\表示iconfont */
    &::after
      font-family 'iconfont-nav'
      content:'\e679'
  
    
  /* .tabbar
    height .44rem
    border1px(1px 0 0 0)
    ul 
      height 100%
      display flex
      flex-direction row
      li
        display flex
        flex 1
        flex-direction column
        justify-content center
        align-items center
        padding-top .06rem
        color #999
        b
          font-size .21rem
          font-weight normal
          line-height .2rem
        span 
          font-size .12rem
          transform scale(0.9)              /**缩放 */
        /*&.active
            color #cd4c42 */


</style>
