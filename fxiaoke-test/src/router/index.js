import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FixedHead from  '@/components/FixedHead'
import PullDown from  '@/components/PullDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FixedHead',
      name: 'FixedHead',
      component: FixedHead
    },
    {
      path: '/PullDown',
      name: 'PullDown',
      component: PullDown
    }
  ]
})
