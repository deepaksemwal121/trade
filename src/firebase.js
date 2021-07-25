import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkDRa_b_fA9vYy4I_5nKYGT9oSgbO67t4",
    authDomain: "trade-in-c9f90.firebaseapp.com",
    projectId: "trade-in-c9f90",
    storageBucket: "trade-in-c9f90.appspot.com",
    messagingSenderId: "918684143744",
    appId: "1:918684143744:web:7ea37f859e181212231665",
    measurementId: "G-FX4KLL32M4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;