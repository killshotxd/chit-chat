// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDr5vhZCwhXF-LE9yS0NrYtI-M5s8VAuLA",
  authDomain: "chitchat-c83aa.firebaseapp.com",
  projectId: "chitchat-c83aa",
  storageBucket: "chitchat-c83aa.appspot.com",
  messagingSenderId: "682893125388",
  appId: "1:682893125388:web:8eaa3b7cf094839a2e4b29",
  measurementId: "G-V31C6FE7C7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
