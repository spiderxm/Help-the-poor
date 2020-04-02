<template>
    <nav >
        <div class="row">
            <router-link :to="{'name':'Home'}" class="brand">Help the Poor</router-link>
            <ul class="main-nav">

                <li><router-link :to="{'name':'login'}" v-if="!user">Login </router-link></li>
                <li><router-link :to="{'name':'register'}" v-if="!user">Register</router-link></li>
                <li><router-link :to="{'name':'helper'}">Want to help</router-link></li>
                <li><router-link :to="{'name':'Helpneeded'}">In need of help</router-link></li>
                <li><a href="http://mrigank.me/Coronavirustracker/index.html" >Coronavirus Statistics </a></li>
                                <li><a @click="logout" v-if="user">Logout</a></li>




            </ul>
        </div>
    </nav>
</template>


<script>
import firebase from 'firebase';
import db from '@/firebase/init';
export default {
    name:'navbar',
    data(){
        return{
user:null
        }
       
    },
         methods:{
logout(){
          firebase.auth().signOut().then(()=>{
              this.$router.push({'name':'login'})
          }).catch(err => console.log(err))
        }
    },
    created(){
      firebase.auth().onAuthStateChanged((user) => {
         if(user){
             this.user = user
             console.log(this.user);
         }
         else{ 
              this.user = null
         }
      })
}
}
</script>

<style scoped>


.brand{
    background-color: black;
      width: auto;
      margin:10px 10px ;
    float: left;
    font-size: 2.5rem;
    color: white;
    padding: 12px;
    text-decoration: none;
}
.brand:hover{
    border-bottom: white 3px solid;
}
.row{
    margin-top: 20px auto;
    width: 100%;
    position: absolute;
    top:0;
    border-bottom-right-radius: 50px;
    left: 0;
    background-color: black;
    color: white;
}
.row a{
    text-decoration: none;
}
.main-nav{
    float: right;
    list-style: none;
    margin-top:30px ;

}
.main-nav li{
    display: inline-block;
    margin-left: 30px;
    margin-right:10px;
    font-size: 18px;
    transition: all .2s ease-in-out;


}
.main-nav li a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 90%;
}
.main-nav li:hover{
transform: scale(1.1) ;
border-bottom: black solid 3px;
}
</style>