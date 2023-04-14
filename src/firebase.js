import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDEOVk-iUuANJR9PN0Ypw7WarYyJoWEBuw",
    authDomain: "hackathon-agos-wasp.firebaseapp.com",
    projectId: "hackathon-agos-wasp",
    storageBucket: "hackathon-agos-wasp.appspot.com",
    messagingSenderId: "640893879867",
    appId: "1:640893879867:web:5d112d8cbefd7aac35fe1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()