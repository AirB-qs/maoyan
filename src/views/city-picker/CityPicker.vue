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
          <van-cell v-for="ci in cities" :title="ci.name" :key="ci.name" @click="pickCity(ci.name,ci.id)"/>
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
        city:state=>state.ct
    }),
    async mounted(){
      let result = await this.$http.get({url:'/cities.json'})
      this.list = result.data.cities;
      this.indexList.push(...Object.keys(result.data.cities));
      console.log(this.indexList);

    },
    methods:{
      pickCity(val1,val2){
        this.pick(val1,val2)
        this.$router.back()
      },
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