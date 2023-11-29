// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAMoCzA0ShAeawL-YloTp-2qQ-Q154Q-rA",
    authDomain: "gmpc-1ce42.firebaseapp.com",
    projectId: "gmpc-1ce42",
    storageBucket: "gmpc-1ce42.appspot.com",
    messagingSenderId: "121018777803",
    appId: "1:121018777803:web:ee2d83434419d54cb3db4e",
    measurementId: "G-6MNS0RVLKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { app, auth, firestore };
