import { initializeApp } from "firebase/app";

let firebaseConfig = {};

export function initFirebaseConfig(config: any) {
    try {
        firebaseConfig = config;
    } catch (error) {
    }
}


// Initialize Firebase
export const app = initializeApp(firebaseConfig);