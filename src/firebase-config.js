import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBC5t_63vut_wH1LW3-PKmDdd1KhtrDygY",
    authDomain: "labnotes-demo.firebaseapp.com",
    projectId: "labnotes-demo",
    storageBucket: "labnotes-demo.appspot.com",
    messagingSenderId: "111606782031",
    appId: "1:111606782031:web:c95550c6c9d7a03744323a",
    measurementId: "G-6NWL89VL5N"
  }
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      
      googleAuthProvider,
      fire,
      firebase,
      auth,
      firebaseConfig
  }


  