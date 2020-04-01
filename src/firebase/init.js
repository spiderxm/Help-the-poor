import firebase from 'firebase';
import firestore from 'firebase/firestore'
 var firebaseConfig = {
    apiKey: "AIzaSyA7H71bauJgS2nhRlTkl9L8zsij6roqqFU",
    authDomain: "help-the-poor-c9090.firebaseapp.com",
    databaseURL: "https://help-the-poor-c9090.firebaseio.com",
    projectId: "help-the-poor-c9090",
    storageBucket: "help-the-poor-c9090.appspot.com",
    messagingSenderId: "570009879555",
    appId: "1:570009879555:web:34c2b95b898e2478373a36",
    measurementId: "G-B008DGTGQG"
  };
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseapp.firestore();