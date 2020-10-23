import Vue from 'vue'
import Router from 'vue-router'
import rankRouter from './rank'
import searchRouter from './search'
import starRouter from './star'
import commendRouter from './recommend'
import testRouter from './test'
import userRouter from './user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    rankRouter,
    searchRouter,
    starRouter,
    commendRouter,
    testRouter,
    userRouter,
    {
      path:'/*',
      redirect:'/recommend'
    }
  ],
})
