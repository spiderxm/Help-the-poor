<template>
     
    <div class="login container">
        <div class="form">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center black-text">
                Login
            </h2>
            <div class="field">
                <label for="email" class="label">Email</label>
                <input type="email" name="email" v-model="email" class="input" placeholder="abc@gmail.com" required>
            </div>
            <div class="field">
                <label for="password" class="label">Password</label>
                <input type="password" name="password" v-model="password" class="input" placeholder="*****" required>
            </div>
          <div class="field center">
              <button class=" black btn">Login</button>
          </div>
            <div class="field">
                <p v-if="feedback" class="center red-text" style="text-size:16px">{{feedback}}</p>
            </div>
        </form>
    </div></div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'Login',
    data(){
        return{
           email:null,
           password:null,
           feedback:null
        }
    },
    methods:{
   login(){
       if(this.email && this.email){
           this.feedback= null;
           firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(cred=>{
               this.$router.push({'name':'Home'});
           }).catch(err=> this.feedback=err.message);
       }
       else {
           this.feedback = "please fill in both fields";
       }
   }
    }
}
</script>
<style>

.login{
     padding: 150px 0;
     background-size: cover;
     background-image: url(../assets/3.jpg);
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