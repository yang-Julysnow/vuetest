import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Index from '../views/Index.vue'
import Botnav from '../views/Botnav.vue'
import List from '../views/List.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/Botnav/Index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Botnav',
    name: 'Botnav',
    component: () => import('../views/Botnav.vue'),
    children:[
      {
        path:'Index',
        name:Index,
        component: () => import('../views/Index.vue')
      },
      {
        path:'List',
        name:List,
        component: () => import('../views/List.vue')
      },
      {
        path:'Search',
        name:Search,
        component: () => import('../views/Search.vue')
      },
      {
        path:'Cart',
        name:Cart,
        meta:{
          requireAuth:true, //当有这个字段的时候，就认为这个路由页面是要有登录权限的
        },
        component: () => import('../views/Cart.vue')
      },
      {
        path:'Mine',
        name:Mine,
        meta:{
          requireAuth:true, //当有这个字段的时候，就认为这个路由页面是要有登录权限的
        },
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
