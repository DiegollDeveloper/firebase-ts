// Import the functions you need from the SDKs you need

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebase-config'

const auth = getAuth(app);

export async function loginWithEmail(email: string, password: string): Promise<string> {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response.user.uid;
    } catch (error) {
        console.log(error);
        return 'Error';
    }
}
