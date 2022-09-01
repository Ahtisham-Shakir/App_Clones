// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtOBVJomQBQh2b5zwzsuBv9xRaZJYBpLk",
  authDomain: "slack-clone-50439.firebaseapp.com",
  projectId: "slack-clone-50439",
  storageBucket: "slack-clone-50439.appspot.com",
  messagingSenderId: "448185091651",
  appId: "1:448185091651:web:36ecd77585fc9b2334f6f6",
  measurementId: "G-SCWVE609BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
