import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '@/views/home/movies/Movies.vue'
import CityPicker from '@/views/city-picker/CityPicker.vue'
import InTheaters from '@/views/home/movies/InTheaters.vue'
import ComingSoon from '@/views/home/movies/ComingSoon.vue'
import Theaters from '@/views/home/theaters/Theaters.vue'
import Profile from '@/views/home/profile/profile.vue'
import Detail from '@/views/home/movies/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component :Home,
    children:[
      {
        path: '',
        redirect: 'movies'
      },
      {
        name: 'movies',
        path: 'movies',
        component: Movies,
        children:[
          {
            path:'',
            redirect:'intheaters',
          },
          {
            path:'intheaters',
            name:'intheaters',
            component:InTheaters,
            meta:{
              keepAlive:true,
              from:'',
              x:0,
              y:0,
              scroll:1000,
              limit:12,
              offset:0
            },
            beforeEnter:(to,from,next)=>{
              if(from.name=='detail'){
                to.meta.from=from.name;
              }
              //console.log(to);
              //console.log(from);
              next()
            },

          },
          {
            path:'comingsoon',
            name:'comingsoon',
            component:ComingSoon,
            meta:{
              keepAlive:true,
              from:'',
              x:0,
              y:0
            },
            beforeEnter:(to,from,next)=>{
              if(from.name=='detail'){
                to.meta.from=from.name;
              }
              //console.log(to);
              //console.log(from);
              next()
            }
          },
        ],
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: Theaters,
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
      
    ],
 /*  meta:{
    keepAlive:true
  } */
  },
  {
    path: '/citypicker',
    name: 'citypicker',
    component: CityPicker,

  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
