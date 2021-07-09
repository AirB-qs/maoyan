<template>
  <div id="list"  class="movie-list">
      <ul >
          <router-link tag="li" v-for="mv in movieList" :to="{name:'detail',params:{id:mv.id}}" >
            <movie-list :mv="mv"></movie-list>
          </router-link>
      </ul>
      
    
  </div>
  
</template>

<script>
import MovieList from '@/components/MovieList.vue'

export default{
  props:{
    movieList:{
      type:Array,
    }
   },
  components:{
    MovieList
  },
  activated(){
    //console.log(4);
  },
  mounted(){
    /* let list=document.getElementById('list');
    list.scrollTo(0,1000) */
  },
}

</script>

<style lang="stylus" scoped>
</style>