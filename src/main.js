import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由
import store from './store'  //状态管理工具
import { Tabbar, TabbarItem , Icon} from 'vant';

import Http from '@/utils/http.js'
import './assets/reset.css'


import '@/filters/img'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.prototype.$http = new Http()  //$符属于规范,定义一个全局的类
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //定义实例写在哪

/* var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //定义实例写在哪

vm
此处可以定义vm，然后调用 */

