<template>
<div class="index">
     <header class="main">
         <div></div>
          <div class="toper">
         <h2 class="h2">We provide service on the doorstep</h2>
         <h4 class="h4">Just fill out the form provided by us and our fearless boys will be there for help if you need help or there to collect the goods being given by you towards this fight against coronavirus</h4></div>
         <div class="topper">
         <h2 class="h2">Help the poor</h2>
         <h4 class="h4">Help the needful by providing them food necessary comodities during the lockdown this is a small step against the fight with coronavirus</h4></div>
    
    </header>
    <div class="contribute">
        <div class="heding">
 <h2 class="h2 h67" >What all you can provide</h2>        
 </div>
    </div>
    <div class="feedback container">
    <div class="form">
        <form action="" @submit.prevent="feedback" class="card-panel">
            <h2 class="center black-text">Provide your valuable feedback</h2>
            <div class="field">
                <label for="name" class="label">Name</label>
                <input type="name" name="name" v-model="name" placeholder="name" class="input" required>
            </div>
            <div class="field">
                <label for="number" class="label">Phone number</label>
                <input type="tel" id="phone" name="phone" placeholder="9999912345" pattern="[0-9]{10}" required v-model="number" class="input">   
            </div>
            <div class="field">
                <label for="description" class="label">Description</label>
            <textarea rows = "5" cols = "50" name = "description" placeholder="Enter what all you need and specifications" v-model="description" class="input">            </textarea>

            </div>
            <div class="field center"><button class="btn black">Submit</button></div>
        </form>
</div>
</div>
</div>
</template>


<script>
import firebase from 'firebase';
import db from '@/firebase/init';
export default {
    name:'home',
    data(){
        return{
       name:null,
       number:null,
       description:null,
        }
    },
    methods:{
      feedback(){


          db.collection('feedback').add({
              name:this.name,
              number:this.number,
              description:this.description
          }).then(()=> this.$router.push({'name':'Home'})).catch(err => console.log(err));
      }
    }
}
</script>

<style scoped>

.index{
    margin:20px 20px;
}
.main{
     padding: 150px 0;
     background-size: cover;
     background-image:url(../assets/main.jpg);
     height: 95vh;
     background-position: center;
     font: Lato;
     position: relative;
     
}
.topper{
    position: absolute;
    top: 30%;
    left: 63%;
    width: 35%;
}
.toper{
    position: absolute;
    top: 20%;
    left: 1%;
    width: 35%;
}
.h2{
    font-size: 2rem;
    font-family: 'Abril Fatface';
    text-decoration: none;
    text-transform: uppercase;
        animation-name: moveInleft;
        animation-duration: 2s;
}
.h67{
    color: white;
    background-color: rgba(32, 22, 22,.5);
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;

}
.h4{
    font-size:1.5rem;
    font-family: 'Combo';
    text-decoration: none;
    text-transform: capitalize;
 animation-name: moveInright;
        animation-duration: 2s;

}
.heading{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
.contribute{
     background-size: cover;
     background-image:url(../assets/help.jpg);
     height: 95vh;
     position: relative;
     background-position: center;
     font: Lato;
     text-align: center;
     clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);

}

.feedback{
     padding: 150px 0;
     background-size: cover;
     margin-top: -20vh;
     background-image:url(../assets/123.jpg);
     height: 95vh;
     background-position: center;
     font: Lato;
     position: relative;
     clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%);

}

@keyframes moveInright {
    0% {
        opacity: 0;
        transform: translateX(+100px);
        /*to animate in x axis */
    }
    80% {
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
        /* looks the way exactly it is right now */
    }
}
@keyframes moveInleft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
        /*to animate in x axis */
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
        /* looks the way exactly it is right now */
    }
}
.form{
    background-image: linear-gradient(to right bottom, rgba(99, 90, 90,.7),rgb(24, 21, 21,.7));
    position: absolute;
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