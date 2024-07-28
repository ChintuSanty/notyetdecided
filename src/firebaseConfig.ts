// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC8xXp7hyVJDJojoDE0mmv3viGEn4tux4",
  authDomain: "notyetdecided-d5e3c.firebaseapp.com",
  projectId: "notyetdecided-d5e3c",
  storageBucket: "notyetdecided-d5e3c.appspot.com",
  messagingSenderId: "724770055369",
  appId: "1:724770055369:web:b56659698a51b572fc1918",
  measurementId: "G-XBTGNR7JEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db}