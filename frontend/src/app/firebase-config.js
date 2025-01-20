/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeZLSITKgWEsfr_H_UcBvaUd6amWgKyfQ",
  authDomain: "ucsd-health-2670f.firebaseapp.com",
  projectId: "ucsd-health-2670f",
  storageBucket: "ucsd-health-2670f.firebasestorage.app",
  messagingSenderId: "536664906057",
  appId: "1:536664906057:web:4d5f4960a1f4645bd62298",
  measurementId: "G-ZQ963WJQES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
