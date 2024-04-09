// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a8c5c.firebaseapp.com",
  projectId: "mern-auth-a8c5c",
  storageBucket: "mern-auth-a8c5c.appspot.com",
  messagingSenderId: "493817978608",
  appId: "1:493817978608:web:01b993b73dc79ac623ec35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);