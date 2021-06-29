<template>
  <div class="movie-list">
    <ul>
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
  }
}

</script>

<style lang="stylus" scoped>
</style>