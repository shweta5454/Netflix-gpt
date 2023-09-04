// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsXV8Ia23xE8sf_1ZRRZ8bZgU1jKvcdVU",
  authDomain: "netflixgpt-4bae5.firebaseapp.com",
  projectId: "netflixgpt-4bae5",
  storageBucket: "netflixgpt-4bae5.appspot.com",
  messagingSenderId: "579279445193",
  appId: "1:579279445193:web:a7420715f1c5c88987c118",
  measurementId: "G-XBLDFDX50L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);