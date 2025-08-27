// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeRuOicyOlG5cEe9MiwJjdjNH_XlchUz8",
  authDomain: "businessproject-9d851.firebaseapp.com",
  projectId: "businessproject-9d851",
  storageBucket: "businessproject-9d851.firebasestorage.app",
  messagingSenderId: "822909751593",
  appId: "1:822909751593:web:0c66d630d851dd73e3a738",
  measurementId: "G-H68P77GR07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };