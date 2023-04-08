import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfQF7GmtSFgQQjIQ0yVF6gb6pDBsFQFTc",
    authDomain: "eshop-d5582.firebaseapp.com",
    projectId: "eshop-d5582",
    storageBucket: "eshop-d5582.appspot.com",
    messagingSenderId: "227901270954",
    appId: "1:227901270954:web:f550d4ce6a9fa69ac599d3",
    measurementId: "G-HML85D6RRP"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
  // const firebaseApp = firebase.intitalizeApp(firebaseConfig);

  // const db = firebaseApp.firestore();

  // const auth = firebaseApp.auth();

  export {db, auth};