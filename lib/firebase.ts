// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, UserInfo } from "firebase/auth";

// Define a User type that matches what we need
type User = UserInfo & {
  email: string | null;
  emailVerified: boolean;
  uid: string;
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyxr2fg74oNBCJjaWeS1ZlrvFp_DPBdeQ",
  authDomain: "thriftlink-9b1ef.firebaseapp.com",
  projectId: "thriftlink-9b1ef",
  storageBucket: "thriftlink-9b1ef.firebasestorage.app",
  messagingSenderId: "539370717724",
  appId: "1:539370717724:web:bda990b6ffb8adb713d5d9",
  measurementId: "G-REQM4EK35J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics if in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Export the auth functions
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  firebaseSignOut,
  onAuthStateChanged,
  googleProvider,
  facebookProvider,
  signInWithPopup
};

// Export the User type
export type { User };