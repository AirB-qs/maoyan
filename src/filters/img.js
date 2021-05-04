import Vue from 'vue'

Vue.filter('img',(value,args)=>{
   return value.replace('w.h',args)         //需要调用返回
})

