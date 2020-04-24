import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 同时引入路由页面组件
// import Home from '../views/Home'
// import Classify from '../views/Classify'
// import Hello from '../views/Hello'
// import Favorite from '../views/Hello/Favorite'
// import History from '../views/Hello/History'
// import Login from '../views/Login'
// import My from '../views/My'
// import Ranking from '../views/Ranking'
// import Register from '../views/Register'
// import Search from '../views/Search'
// import SearchResult from '../views/SearchResult'
// import Vip from '../views/Vip'
// import City from '../views/City'

// 异步引入路由页面组件 (路由懒加载)
const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Hello = () => import('../views/Hello')
const Favorite = () => import('../views/Hello/Favorite')
const History = () => import('../views/Hello/History')
const Login = () => import('../views/Login')
const My = () => import('../views/My')
const Ranking = () => import('../views/Ranking')
const Register = () => import('../views/Register')
const Search = () => import('../views/Search')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const City = () => import('../views/City')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { enterActiveClass: '', leaveActiveClass: 'animated dealy-1s' }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/city',
      component: City,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: 'history',
          component: History
        },
        {
          path: '',
          redirect: '/hello/favorite'
        }
      ],
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/my',
      component: My,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/ranking',
      component: Ranking,
      meta: {
        enterActiveClass: 'animated slideInDown',
        leaveActiveClass: 'animated slideOutUp'
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/search-result',
      component: SearchResult,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    {
      path: '/vip',
      component: Vip,
      meta: {
        enterActiveClass: 'animated slideInRight',
        leaveActiveClass: 'animated slideOutRight'
      }
    },
    { path: '/', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断当前是否选择了城市，根据 sessionStoage 或者 store 去判断
  // console.log(to, from)
  // console.log(store)
  if (!store.state.city.curCity && to.path !== '/city') {
    // 先去城市列表页面
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
