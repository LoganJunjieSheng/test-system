import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page-index'
import practice from '@/components/page-practice'
import compete from '@/components/page-compete'
import log from '@/components/page-log'
import signup from '@/components/page-signup'
import test from '@/components/page-test'
import testlist from '@/components/page-testlist'
import entrying from '@/components/page-entrying'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/entrying',
      name: 'entrying',
      component: entrying
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    },
    {
      path: '/practice/testlist',
      name: 'testlist',
      component: testlist
    },
    {
      path: '/compete',
      name: 'compete',
      component: compete
    },
    {
      path: '/compete/testlist',
      name: 'testlist',
      component: testlist
    },
    {
      path: '/log',
      name: 'log',
      component: log
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },

  ]
})
