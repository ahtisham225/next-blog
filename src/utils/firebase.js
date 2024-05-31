// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHA8o0jqwvRJqGRZVR0g3XU7fWDG0EusM",
  authDomain: "personal-injury-lawyers-a8598.firebaseapp.com",
  projectId: "personal-injury-lawyers-a8598",
  storageBucket: "personal-injury-lawyers-a8598.appspot.com",
  messagingSenderId: "28236833224",
  appId: "1:28236833224:web:e833f7f100d6c22e0da0fd",
  measurementId: "G-D8HX0WDNRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;