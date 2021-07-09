
<template>
    <main>
      <nav class="movie-nav">
        <ul>
          <router-link tag="li" to="/citypicker">{{city}}
            <span class = "yo-ico">&#xf032;</span>           <!--reset中定义的类-->
          </router-link>
          <li>
            <router-link tag="span" active-class="active" to="intheaters">热映</router-link>
            <router-link tag="span" active-class="active" to="comingsoon">待映</router-link>
          </li>
          <li class = "yo-ico">&#xf067;</li>
        </ul>
      </nav>
      <section id="list" class="movie-list">
        <van-skeleton 
        avatar 
        avatar-shape="square"
        :row="3" 
        :loading="load"
        avatar-size="60"
        class="skeleton"
        v-for="i in 7"
        :key="'a'+i"
      >
      </van-skeleton>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
        
        <!-- <keep-alive> -->
          <router-view :movie-list="movieList"></router-view>
        <!-- </keep-alive> -->
          
        </van-list>
      </van-pull-refresh>
      </section>
    </main>
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex';
import { PullRefresh , List , Skeleton} from 'vant';
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Skeleton)

export default({
  data(){
    return {
        movieList:[],
        loading:false,
        finished:false,
        refreshing:false,
        load:true,
        url:'',
        url1:'',
    }
  },
  activated(){
    //在激活keep-alive时触发，将位置定位到上次浏览的位置
    let list=document.getElementById('list');
    list.scrollTo(0,this.$route.meta.scroll)
    //console.log(window.pageYOffset);
    //console.log(this.$router);
  },
  deactivated(){

  },
  created(){
    this.offset = 0;
    this.limit=12;
    this.hasMore=false;
/*     this.refreshing = true;
    this.movieList=[];
    this.onRefresh();
    console.log(1); */
  },
   mounted(){
     //用来监听intheaters和comingsoon组件滚动事件
      let list=document.getElementById('list')
      list.addEventListener('scroll',this.scroll(list))
      
      this.load = false
  },
  computed:mapState({
    city:state=>state.ct,
    cityid:state=>state.ci
  }),
  methods: {
    async loadData(){
      let result = await this.$http.get({url:this.url,
        params:{
          limit: this.limit,
          offset: this.offset,
          ct: this.city,
          ci: this.cityid
        }
      })
      this.movieList.push(...result.data.data.hot,...result.data.data.coming)
      this.hasMore = result.data.data.paging.hasMore
    },
    async onLoad() {
      
      if (this.refreshing) {
        this.movieList = [];
        this.refreshing = false;
      }
      
      await this.loadData();
      this.loading = false;
      
      
      if ( this.hasMore===false) {
          this.finished = true;
      }
      this.offset+=this.limit
    }, 
    onRefresh() {
        this.offset = 0;
        this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
    
      // 清空列表数据
    },
    //监听滚动事件触发的函数，同时加入防抖
    scroll(e){
      let flag=true;
      return ()=>{
          if(!flag) return;
          flag=false
          setTimeout(()=>{
            this.$route.meta.scroll=e.scrollTop;
            this.$route.meta.list=this.movieList
            console.log(this.$route.meta.scroll);
            flag=true
          },500)
      }
    }
  },
  watch:{
    $route:{
      handler(route){
        if(route.name==='intheaters'){
          this.url = '/mmdb/movie/v2/list/hot.json';
          this.limit = 12;
        }else if(route.name==='comingsoon'){
          this.url = '/mmdb/movie/v1/list/wish/order/coming.json';
          this.limit = 30;
        }
        console.log(route);
        if(route.meta.from!='detail'||this.movieList.length==0){
          this.refreshing = true;
          this.onRefresh();
        }else{
          //当从detail返回时，将值赋给movielist
          this.movieList = route.meta.list
          /* let list=document.getElementById('list')
          list.scrollTo(0,route.meta.scroll) */
          //list.scrollBy(0,1000)
        }
        //console.log(1);
        console.log(this.movieList);
      },
      immediate:true
    }
  }
})
  
</script>

<style lang="stylus" scoped>
  @import '~@/assets/stylus/border1px.styl'
    main
      position absolute
      display flex 
      flex-direction column
      height 100%
      width 100%

      .movie-nav
        height .44rem
        border1px(0 0 1px 0)

        ul
          display flex 
          align-items center
          justify-content center
          height 100%
      
          li:first-child
            display flex
            justify-content flex-start
            color #666
            padding-left .15rem
            flex 90
          li:nth-child(2)
            display flex
            flex 231
            justify-content center
            align-items center
            span 
              display inline-block
              width .6rem
              text-align center
              height 100%
              line-height .42rem
              color #666
              &:first-child
                margin-right .3rem
                margin-left -0.35rem
              &.active
                color #cd4c42
                border-bottom solid 2px #cd4c42
                    
          li:last-child
            width .44rem
            border1px(0 0 0 1px)
            font-size .2rem
            color #cd4c42
            text-align center
      .movie-list
        flex 1
        overflow-y scroll 
</style>
