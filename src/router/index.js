import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Registration'
import Helper from '@/components/Helper'
import Profile from '@/components/Profile'
import Helpneeded from '@/components/Helpneeded'
import Home from '@/components/Home'
import firebase from 'firebase'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/registration',
      name: 'register',
      component: Register
    },{
      path: '/helper',
      name: 'helper',
      component: Helper,
      meta:{
        requiresAuth:true,
      }
    },{
      path: '/helpneeded',
      name: 'Helpneeded',
      component: Helpneeded,
      
    },{
      
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta:{
          requiresAuth:true,
        }
    }
  ]
})




router.beforeEach((to,from,next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state 
    let user = firebase.auth().currentUser
    if(user){
     next()
    }
    else{
      next({ name:'login' });
    }
 
  }
  else{
    next();
  }
 })
export default router;
