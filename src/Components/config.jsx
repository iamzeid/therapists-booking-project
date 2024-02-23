// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0lbPfFDppuMcgDhbgLw4Pp69bMrHaTr4",
  authDomain: "therapists-booking-project.firebaseapp.com",
  projectId: "therapists-booking-project",
  storageBucket: "therapists-booking-project.appspot.com",
  messagingSenderId: "200346815771",
  appId: "1:200346815771:web:ea663df37faf88b2dc97be",
  measurementId: "G-N6H6CV7QKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
