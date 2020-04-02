
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

//wait for firebase auth to init before creating the application
let app = null;

firebase.auth().onAuthStateChanged(()=>{
if(!app){
 app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
 })
}
 

})