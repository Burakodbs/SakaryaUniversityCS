import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
export const firestore = firebase.firestore();