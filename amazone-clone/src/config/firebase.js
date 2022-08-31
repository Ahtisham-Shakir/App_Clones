// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjOjBDHvmvTampKg_7wvkTt7TvxJC94mw",
  authDomain: "e-clone-af4e2.firebaseapp.com",
  projectId: "e-clone-af4e2",
  storageBucket: "e-clone-af4e2.appspot.com",
  messagingSenderId: "1049960532345",
  appId: "1:1049960532345:web:5748dc7849e68e82b707a8",
  measurementId: "G-FLELP52TVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}