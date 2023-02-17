// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC4x8y9wAIiTy4sJ4R36wsNJehTy-SmsA",
  authDomain: "job-finder-cd79c.firebaseapp.com",
  projectId: "job-finder-cd79c",
  storageBucket: "job-finder-cd79c.appspot.com",
  messagingSenderId: "5632731820",
  appId: "1:5632731820:web:3c8a9d682309466c2f8d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;