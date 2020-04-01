<template> 
<div class="signup container">
    <div class="form">
        <form action="" @submit.prevent="signup" class="card-panel">
            <div class="field">
            <h2 class="center black-text">Signup</h2></div>
            <div class="field">
                <label for="name" class="label">Name</label>
                <input type="name" name="name" v-model="name" placeholder="spiderxm" class="input" required>
            </div>
            <div class="field">
                <label for="email" class="label">Email</label>
                <input type="email" name="email" v-model="email" placeholder="abc@gmail.com" class="input" required>
            </div>
            <div class="field">
                <label for="password" class="label">Password</label>
                <input type="password" name="password" v-model="password" placeholder="******" class="input" required>
            
            </div>
            <div class="field">
                <label for="number" class="label">Phone number</label>
            <input type="tel" id="phone" name="phone" placeholder="9999912345" pattern="[0-9]{10}" required v-model="number" class="input">   
            </div>

            <div class="field">
                <label for="alias" class="label">Alias</label>
                <input type="text" name="alias" v-model="alias" placeholder="username" class="input" required>
            </div>
            <div class="field">
                <p v-if="feedback" class="center red-text">{{feedback}}</p>
            </div>

            <div class="field center"><button class="btn black">Signup</button></div>
        </form>
</div>
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
                    })
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

<style scoped>

.signup{
     padding: 150px 0;
     background-size: cover;
     background-image:url(../assets/1.jpg);
     height: 95vh;
     background-position: center;
     font: Lato;
}
.form{
    background-image: linear-gradient(to right bottom, rgba(99, 90, 90,.7),rgb(24, 21, 21,.7));
    border-radius: 10px;
    width: 30%;
    margin: auto auto;
    top: 50%;
    color: white;
    left:50%;
    position: absolute;
    transform: translate(-50%,-50%);
    padding: 25px 25px;


}
.center{
    color: white;
    font-family: 'Abril Fatface';font-size: 22px;
    margin: 0 0 20px;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size:30px
    
}
.field{
    margin-bottom: 20px;
    display: block;
}
.input{
    padding: 10px 20px;
    font-family: inherit;
    width: 100%;
    font-size: 16px;
    color: white;
    font-family: 'Combo';font-size: 22px;
    display: block;
    border-radius: 2px;
    margin-left:50%;
    margin-top:10px;
    transform: translateX(-50%);
    border: none;
    border-bottom: #fff 1px solid;
    background: transparent;
    outline: none;

    box-shadow: 0 20px 40px rgba(8, 8, 8,.2);

}
.input::placeholder{
    color: white;
}
.label{
    display: block;
    color: white;
    font-family: 'Elsie Swash Caps';font-size: 22px;
    margin: 0px;
    padding: 0px;
}
.btn{
    padding: 10px 20px;
    border-radius: 10px;
    width: 150px;
    color: white;
    font-family: 'Combo';font-size: 22px;

    border: black solid 3px;
    transition: all .3s ease-in-out;
    background: black;
    font-size:20px;

}
.input:focus{
    outline: none;

}
.btn:hover{
    cursor: pointer;

    transform: translateY(-3px) scale(1.1);
    outline: none;


}

</style>