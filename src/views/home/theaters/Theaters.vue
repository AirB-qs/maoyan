<template>
<main>
  <nav>
    <theaterNav></theaterNav>
  </nav>
  <section>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <theaterList :cinema-list="cinemaList" ></theaterList>
    </van-list>
        
  </section>
  
</main>

</template>

<script>
import theaterNav from '@/views/home/theaters/nav.vue'
import theaterList from '@/views/home/theaters/theaterList.vue'
import { mapState } from "vuex"
export default {
  data() {
    return {
      cinemaList: [],
      hasMore:true,
      offset:0,
      limit:12,
      loading: false,
      finished: false,
    };
  },
  components:{
    theaterNav,
    theaterList
  },
  computed:mapState({
    cityid:state=>state.ci
  }),
  mounted(){
  },
  methods:{
    //定义方法，获取所需要的影院信息
    async request(){
      let result=await this.$http.get({url:'/hostproxy/mmcs/cinema/v1/select/cinemas.json',params:{
        cityId:this.cityid,
        limit:this.limit,
        offset:this.offset,
        channelId:40000
      }
      })
      this.cinemaList.push(...result.data.data.cinemas);
      this.hasMore=result.data.data.paging.hasMore
    },
    async onLoad() {
      // 异步更新数据
      
      await this.request()

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.hasMore===false) {
          this.finished = true;
        }
        this.offset+=this.limit;
      }
    },
  }

</script>

<style lang="stylus" scoped>
main 
  position absolute
  display flex 
  flex-direction column
  height 100%
  width 100%
  section 
    overflow auto
    flex 1
</style>