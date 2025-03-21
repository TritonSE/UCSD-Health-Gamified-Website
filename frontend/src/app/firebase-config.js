// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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
