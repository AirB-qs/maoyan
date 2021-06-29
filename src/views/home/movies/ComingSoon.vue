<template>
<div class="movie-list">
      <most-expected :movie-list="movieList"></most-expected>
      <ul>
        <router-link tag="li" v-for="mv in movieList" :to="{name:'detail',params:{id:mv.id}}">
            <movie-list :mv="mv"></movie-list>
        </router-link> 
      </ul>
</div>
  

  
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import MostExpected from '@/components/MostExpected.vue';
export default{

  props:{
    movieList:{
      type:Array,
    }
   },
  components:{
    MovieList,
    MostExpected
  },
  
 
}

</script>

<style lang="stylus" scoped>
.movie-list
  .row 
    background-color #eee
    padding-top .1rem
</style>