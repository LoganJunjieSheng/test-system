import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page-index'
import practice from '@/components/page-practice'
import compete from '@/components/page-compete'
import log from '@/components/page-log'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    },
    {
      path: '/compete',
      name: 'compete',
      component: compete
    },
    {
      path: '/log',
      name: 'log',
      component: log
    },
  ]
})
