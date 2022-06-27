import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoGOcAg6GovmGRg_gixWMvA06VvJuwHo4",
    authDomain: "whatsapp-clone-f0773.firebaseapp.com",
    projectId: "whatsapp-clone-f0773",
    storageBucket: "whatsapp-clone-f0773.appspot.com",
    messagingSenderId: "103514241628",
    appId: "1:103514241628:web:2bc45454f96f568a9ec499",
    measurementId: "G-X85FSHSFEE"
  };

const firebase = initializeApp(firebaseConfig);
const db =  getFirestore(firebase);
const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;