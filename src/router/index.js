import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QA from '../views/QA.vue'
import Introduction from '../views/Introduction.vue'
import LastYear from '../views/LastYear.vue'
import Course from '../views/Course.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/q&a',
    name: 'QA',
    component: QA
  },
  {
    path: '/2020',
    name: 'LastYear',
    component: LastYear
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  }
]

const router = new VueRouter({
  routes
})

export default router
