// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myad-1f49f.firebaseapp.com",
  projectId: "myad-1f49f",
  storageBucket: "myad-1f49f.firebasestorage.app",
  messagingSenderId: "528816990932",
  appId: "1:528816990932:web:6030afbd36c469af226941"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);