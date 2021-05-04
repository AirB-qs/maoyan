<template>
<div class="movie-list">
      <movie-list :movie-list="movieList" ></movie-list> 
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
  }
}

</script>

<style lang="stylus" scoped>
</style>