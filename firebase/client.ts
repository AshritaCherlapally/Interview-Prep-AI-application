// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBrPpfMo-kIUYiZUU18SSPES5TF7BWObCQ",
  authDomain: "interview-prep-b0f7d.firebaseapp.com",
  projectId: "interview-prep-b0f7d",
  storageBucket: "interview-prep-b0f7d.firebasestorage.app",
  messagingSenderId: "367239538745",
  appId: "1:367239538745:web:2a11bcea13309ef2c845e8",
  measurementId: "G-QDDHL65B4X",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
