import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyCzh4ssvSoNGdBUt1InneX44WWA41gw0ys",

  authDomain: "mug23-19001.firebaseapp.com",

  projectId: "mug23-19001",

  storageBucket: "mug23-19001.appspot.com",

  messagingSenderId: "75090662092",

  appId: "1:75090662092:web:844c5787131c08e185e869",

  measurementId: "G-361VPK6C5L"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}