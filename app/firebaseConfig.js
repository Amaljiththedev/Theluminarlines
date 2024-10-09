// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import exp from "constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD7lnR2SruCgflysS4FNgDDKs2VLaVwg4",
  authDomain: "luminarylines-7ad9c.firebaseapp.com",
  projectId: "luminarylines-7ad9c",
  storageBucket: "luminarylines-7ad9c.appspot.com",
  messagingSenderId: "398913672786",
  appId: "1:398913672786:web:abfc0306efb0309913b18b",
  measurementId: "G-Y3CJ25G7SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

