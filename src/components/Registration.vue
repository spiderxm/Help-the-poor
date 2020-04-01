<template> 
<div class="signup container">
        <form action="" @submit.prevent="signup" class="card-panel">
            <h2 class="center black-text">Signup</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email" placeholder="abc@gmail.com">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            
            </div>
            <div class="field">
                <label for="number">Phone number</label>
 <input type="tel" id="phone" name="phone" placeholder="9999912345" pattern="[0-9]{10}" required v-model="number">            
 </div>
            <div class="field">
                <label for="alias">Alias</label>
                <input type="text" name="alias" v-model="alias" placeholder="username">
            </div>
            <div class="field">
                <p v-if="feedback" class="center red-text">{{feedback}}</p>
            </div>

            <div class="field center"><button class="btn black">Signup</button></div>
        </form>
</div>
</template>
<script>
import slugify from 'slugify'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name:"signup",
    data(){
        return {
          email:null,
          password:null,
          alias:null,
          feedback: null,
          slug:null,
          number:null,
          lat:null,
          lng:null
        }
    },
    methods:{
        signup(){
            if(this.alias && this.email && this.password && this.number){
                this.feedback = null
                this.slug = slugify(this.alias,{
                    replacement: '-',
                    remove: /[*+~.()'"!:@]/g,
                    lower:true
                })
                let ref = db.collection('users').doc(this.slug);
                ref.get().then(doc => {
                    if(doc.exists){
                        console.log(doc)
                        this.feedback="This alias already exists";
                    }
                    
                    else{
                        if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(pos =>{
                        this.lat = pos.coords.latitude;
                        this.lng = pos.coords.longitude;                
                        console.log(12);
                    }).then(() => console.log("done")).else((err)=>console.log(err));
                }
                        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(cred =>{
                          ref.set({
                              alias: this.alias,
                              geolocation: {
                                  lat:this.lat,
                                  lng:this.lng
                              },
                              user_id:cred.user.uid,
                              number:this.number,

                          }).then( () => this.$router.push({ name:'Home'})
                          )
                        }).catch(err=>
                        {console.log(err)
                        this.feedback = err.message});
                         this.feedback="This alias is free to use";
                         
                    }
                }).catch(err => console.log(err));
            }
            else{
                this.feedback="You must enter all the fields"
            }
        }
    }
}
</script>

<style>
.signup {
    max-width: 500px;
    margin-top: 60px;
}
.signup h2{
    font-size: 2.4em;
}
.signup .field{
    margin-bottom: 16px;
}
.card-panel{
     border-radius: 30px;
 }
</style>