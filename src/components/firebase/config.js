// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from ' firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgw_uT5P-LNYF8ak8hCIW2SdPLOqFMcgY",
    authDomain: "pausamarket-d2295.firebaseapp.com",
    projectId: "pausamarket-d2295",
    storageBucket: "pausamarket-d2295.appspot.com",
    messagingSenderId: "478922412894",
    appId: "1:478922412894:web:32f94f33101b3a640fb5cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)