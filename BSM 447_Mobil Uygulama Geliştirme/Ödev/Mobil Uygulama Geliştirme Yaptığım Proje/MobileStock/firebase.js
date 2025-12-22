import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyCGMbTj_oyNCzzEBJcWFP9L7kAJcIvsmRo",
  
    authDomain: "mobileproject-99558.firebaseapp.com",
  
    databaseURL: "https://mobileproject-99558-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "mobileproject-99558",
  
    storageBucket: "mobileproject-99558.appspot.com",
  
    messagingSenderId: "1027767064824",
  
    appId: "1:1027767064824:web:c9d45d7a182834f774030d",
  
    measurementId: "G-C9FWCTSLS5"
  
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}