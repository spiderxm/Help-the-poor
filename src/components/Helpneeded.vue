<template> 
<div class="signup container">
    <div class="form">
        <form action="" @submit.prevent="submit" class="card-panel">
            <h2 class="center black-text">Fill the form to get help</h2>
            <div class="field">
                <label for="name" class="label">Name</label>
                <input type="name" name="name" v-model="name" placeholder="name" class="input" required>
            </div>
            <div class="field">
                <label for="number" class="label">Phone number</label>
                <input type="tel" id="phone" name="phone" placeholder="9999912345" pattern="[0-9]{10}" required v-model="number" class="input">   
            </div>

            <div class="field">
                <label for="address" class="label">Address</label>
                <input type="text" name="adress" v-model="address" placeholder="address" class="input" required>
            </div>
            <div class="field">
                <label for="city" class="label">City</label>
                <input type="text" name="city" v-model="city" placeholder="city" class="input" required>
            </div>

            <div class="field">
                <label for="description" class="label">Description</label>
            <textarea rows = "5" cols = "50" name = "description" placeholder="Enter what all you need and specifications" v-model="description" class="input">            </textarea>

            </div>
           

            <div class="field center"><button class="btn black">Submit</button></div>
        </form>
</div>
</div>
</template>
<script>
import slugify from 'slugify'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name:"helpneeded",
    data(){
        return {
          name:null,
          number:null,
          description:null,
          address:null,
          city:null,
          lat:null,
          lng:null

        }
    },
    methods:{
        submit(){
            if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(pos =>{
                        this.lat = pos.coords.latitude;
                        this.lng = pos.coords.longitude;                
                        console.log(12);
                    })
                }
            if(this.name && this.number && this.description && this.address && this.city){
        db.collection('inneedofhelp').add({
      name:this.name,
      number:this.number,
      description:this.description,
      address:this.address,
      city:this.city,
      geolocation:{
          lng:this.lng,
          lat:this.lat
      }
  }).then(()=>
  this.$router.push({name:'Home'})
  ).catch(err => console.log(err));
            }
        }
    }
}
</script>

<style>

.signup{
     padding: 150px 0;
     background-size: cover;
     background-image:url(../assets/123.jpg);
     height: 95vh;
     background-position: center;
     font: Lato;
}
.form{
    background-image: linear-gradient(to right bottom, rgba(99, 90, 90,.7),rgb(24, 21, 21,.7));
    border-radius: 10px;
    width: 30%;
    margin: 150px auto;
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