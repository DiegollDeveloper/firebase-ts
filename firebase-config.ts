import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB1sd57AYqHt5BMAPbUSkkluor-V1rXDBo",
    authDomain: "friends-88e12.firebaseapp.com",
    projectId: "friends-88e12",
    storageBucket: "friends-88e12.firebasestorage.app",
    messagingSenderId: "131696718991",
    appId: "1:131696718991:web:0c07c2a78293bef570ecfa",
    measurementId: "G-1NZ6GVKR4T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);