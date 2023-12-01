// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI0cT6NMiyEhaRwaIIMrMakvIk7ZCTLDM",
  authDomain: "web-kelas-754ca.firebaseapp.com",
  projectId: "web-kelas-754ca",
  storageBucket: "web-kelas-754ca.appspot.com",
  messagingSenderId: "826568317521",
  appId: "1:826568317521:web:059a0eedd2c19e73cf7670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();