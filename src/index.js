// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGDlKcROupckbsWTFwmNzh7OBvF5DvRPM",
  authDomain: "house-cup-4f064.firebaseapp.com",
  databaseURL: "https://house-cup-4f064-default-rtdb.firebaseio.com",
  projectId: "house-cup-4f064",
  storageBucket: "house-cup-4f064.appspot.com",
  messagingSenderId: "1089006926397",
  appId: "1:1089006926397:web:ea73cb2029225a90d18854",
  measurementId: "G-PXNL9KR97J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);