
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJxiW3NBmwc0Ciq6rO-tzAdzUeGI5imhM",
  authDomain: "mqh-firebase.firebaseapp.com",
  projectId: "mqh-firebase",
  storageBucket: "mqh-firebase.appspot.com",
  messagingSenderId: "1047559652218",
  appId: "1:1047559652218:web:2cbd1ad28e86ad125d8cc3",
  measurementId: "G-BEBJC38F62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();