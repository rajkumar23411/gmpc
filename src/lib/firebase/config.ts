// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { app, auth };
