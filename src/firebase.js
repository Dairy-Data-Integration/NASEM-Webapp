// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the authentication module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8b0ilCQOyqYf7s-fpITp8sr3VaYeyzzY",
  authDomain: "nasem-react.firebaseapp.com",
  projectId: "nasem-react",
  storageBucket: "nasem-react.firebasestorage.app",
  messagingSenderId: "374290298637",
  appId: "1:374290298637:web:24e4579d10779acd9c2244",
  measurementId: "G-3Q34J2LDSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { auth }; 