<template>
<div class="movie-list">
      <most-expected :movie-list="movieList"></most-expected>
      <div class="row"></div>
      <movie-list :movie-list="movieList" ></movie-list> 
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