// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsFP_rzyrcf3ujlUJg03RNx8-eIIWGm5k",
  authDomain: "pantry-app-demo.firebaseapp.com",
  projectId: "pantry-app-demo",
  storageBucket: "pantry-app-demo.appspot.com",
  messagingSenderId: "866612730332",
  appId: "1:866612730332:web:0a09c0778fc04c20b4d719",
  measurementId: "G-3SH5M4C382",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
