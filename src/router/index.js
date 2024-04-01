import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Test from '../components/Test'
import MinioTest from '../components/MinioTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/2',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/minio',
      name: 'MinioTest',
      component: MinioTest
    }
  ]
})
