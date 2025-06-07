import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA-IS0Y9WbzuS0RRnbERlbbREt85G8SRmo",
    authDomain: "test-poc-5e324.firebaseapp.com",
    projectId: "test-poc-5e324",
    storageBucket: "test-poc-5e324.firebasestorage.app",
    messagingSenderId: "598083449749",
    appId: "1:598083449749:web:14005bd29041841a39fc9c",
    measurementId: "G-88W1P1DSSS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);