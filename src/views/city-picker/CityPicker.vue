<template>
  <div class="list">
    <van-index-bar :sticky="false" :index-list="indexList">
     <!--  <section v-for="(li,key) in list" :key="key">   //在section中循环，会破坏索引与锚点之间的双向绑定
          <van-index-anchor index="key">{{key}}</van-index-anchor>
          <van-cell v-for="item of li" :title="item.name" />
      </section> -->
      <section>
          <van-index-anchor index="定位" class="color">定位城市</van-index-anchor>
          <van-cell :title="city" />
      </section>
      <section>
          <van-index-anchor index="热门" class="color">热门城市</van-index-anchor>
          <van-cell title="上海" @click="pickCity(ci.name,ci.id)"/>
      </section>
      <section>
        <template v-for="(cities, key) in list" >
          <van-index-anchor :index="key" class="color" :key="key">{{key}}</van-index-anchor>
          <van-cell v-for="ci in cities" :title="ci.name" :key="ci.name" @click="pickCity(ci.name)"/>
        </template>
      </section>
      
    </van-index-bar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {mapState,mapActions} from 'vuex';
  import { IndexBar, IndexAnchor , Cell, CellGroup } from 'vant';

  Vue.use(IndexBar);
  Vue.use(IndexAnchor);
  Vue.use(Cell);
  Vue.use(CellGroup);
  export default {
    data(){
      return {
        list:{},
        indexList:['定位','热门'],
      }
    },
    computed:
      mapState({
        city:state=>state.ct,
        cityid:state=>state.ci
    }),
    //用来制作地点选择地名
    async mounted(){
      let result = await this.$http.get({url:'/cities.json'})
      this.list = result.data.cities;
      this.indexList.push(...Object.keys(result.data.cities));
      this.ciId()
    },
    methods:{
      //通过获取地名找对对应的正确id请求
      async ciId(nm){
        let result = await this.$http.get({
          url:'/hostproxy/dianying/cities.json'
        })
        let list = result.data.cts;
        //console.log(list);
        for(let i=0;i<list.length;i++){
          if(list[i].nm==nm) return list[i].id
        }
      },
      //利用地名获取id之间
      async pickCity(nm){
        let id= await this.ciId(nm);
        await console.log(id);
        let arr = await [nm,id]
        await this.pick(arr)
        await this.$router.back()
      },
      //用来调用store中index的方法
      ...mapActions({
        pick:'picker'
      })
    }
  }
  /* export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
}; */

</script>

<style lang="stylus" scoped>
    .list 
      height 100%
      overflow auto
      section 
        .color 
          background-color #eee


      
</style>