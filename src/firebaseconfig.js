import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDmal9sfdqjDbctgb7mt79bF3jk4QumT68",
    authDomain: "chatmate-b8ed8.firebaseapp.com",
    projectId: "chatmate-b8ed8",
    storageBucket: "chatmate-b8ed8.appspot.com",
    messagingSenderId: "1057835054755",
    appId: "1:1057835054755:web:770a70ec33f02a7970b116",
    measurementId: "G-GT03VH9LXQ"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)
