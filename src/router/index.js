import Vue from 'vue' 
import Router from 'vue-router' 
import Window from '../components/Window.vue'
import allWindows from '../components/allWindows.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/window',
        name: 'window',
        component: Window
    },
    {
      path:'/allWindows',
      name:'allWindows',
      component:allWindows
    }
  ]
})