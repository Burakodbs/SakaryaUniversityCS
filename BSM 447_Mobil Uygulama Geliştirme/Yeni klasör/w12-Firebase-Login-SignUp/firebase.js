// Firebase'i başlatmak için Firebase Config'i kullanıyoruz
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// FireStore
import 'firebase/compat/firestore';

// Kendi firebaseConfig değerlerinizi kopyala/yapıştır yapın. Yoksa uygulama çalışmaz.
const firebaseConfig = {

  apiKey: "AIzaSyDOtXGsHRbk9uUUoAD-iLLrmmRfRLSQ4Vs",

  authDomain: "falt-f2547.firebaseapp.com",

  projectId: "falt-f2547",

  storageBucket: "falt-f2547.firebasestorage.app",

  messagingSenderId: "978801041748",

  appId: "1:978801041748:web:527d4826aa93c8ac7428c1",

  measurementId: "G-DDFXTM2505"

};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

// Firebase Storeage için
export const firestore = firebase.firestore();