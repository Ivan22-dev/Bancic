// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFTdAcrM8m6WsCFGbH7W5TgaiXCsGwQGI",
  authDomain: "bancic-a8b90.firebaseapp.com",
  projectId: "bancic-a8b90",
  storageBucket: "bancic-a8b90.appspot.com",
  messagingSenderId: "140689233629",
  appId: "1:140689233629:web:de263c4f97ba5b54fbad34",
  measurementId: "G-KZ77MKFFE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore=getFirestore(app)