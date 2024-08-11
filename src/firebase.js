// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCFRbhk5YVNBCAxhTiILOJC3uMBc9MKfyU",
  authDomain: "blogg-37437.firebaseapp.com",
  projectId: "blogg-37437",
  storageBucket: "blogg-37437.appspot.com",
  messagingSenderId: "830965737605",
  appId: "1:830965737605:web:859c1e6877b45b2c64a1ec",
  measurementId: "G-8GEMXYBWRP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
