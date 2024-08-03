// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5Lh1HEVpYWw-4_JQprkh7rO8ts8oSCs",
  authDomain: "user-email-password-auth-a03f8.firebaseapp.com",
  projectId: "user-email-password-auth-a03f8",
  storageBucket: "user-email-password-auth-a03f8.appspot.com",
  messagingSenderId: "234782795709",
  appId: "1:234782795709:web:877a2fccfebff10566d4d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
