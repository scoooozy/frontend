// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ4sWgyZZ6sL3CdiHneiA7Dkie9fBUvXE",
  authDomain: "timezone-8e61e.firebaseapp.com",
  projectId: "timezone-8e61e",
  storageBucket: "timezone-8e61e.appspot.com",
  messagingSenderId: "535012501813",
  appId: "1:535012501813:web:d24a10bee2b1d09207847c",
  measurementId: "G-52PNECZNVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
