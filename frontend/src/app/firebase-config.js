// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  measurementId: "G-ZQ963WJQES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log("Firebase successfully connected");
} else {
  console.log("Firebase connection failed");
}

//Initialize Firebase authentication
const auth = getAuth(app);
if (auth) {
  console.log("Firebase authentication connected");
} else {
  console.log("Firebase authentication failed");
}

//Create a user functionality

export const analytics = () => {
  if (typeof window !== "undefined") {
    return getAnalytics(app); // Safe to call in the browser
  } else {
    return null; // Analytics will not be initialized server-side
  }
};

export { app, auth };
