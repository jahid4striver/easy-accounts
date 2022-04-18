// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiSlhRdOrtmR0yjPHO-S3JbcRrLvhZCH8",
  authDomain: "easy-accounts-b7a5d.firebaseapp.com",
  projectId: "easy-accounts-b7a5d",
  storageBucket: "easy-accounts-b7a5d.appspot.com",
  messagingSenderId: "184978268496",
  appId: "1:184978268496:web:8d56f2e34de0668a98cc55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;