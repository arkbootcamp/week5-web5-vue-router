import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Addpin from '../views/auth/Addpin.vue'
import Auth from '../views/auth/Auth.vue'
import Login2 from '../views/auth/Login2.vue'
import SignUp from '../views/auth/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home Page - Example App' }
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
    path: '/loginb',
    name: 'Loginb',
    component: Login
  },
  {
    path: '/register/:iduser',
    name: 'Register',
    component: Register
  },
  {
    path: '/addpin',
    name: 'Addpin',
    redirect: '/register/risano',
    component: Addpin
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login2,
        meta: {
          title: 'Auth Ewallet'
        }
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Addpin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
