// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUEtPG8FRf0SjAc_c1aiAHXpbV5UCr6QI",
  authDomain: "neo-acessbilidade.firebaseapp.com",
  projectId: "neo-acessbilidade",
  storageBucket: "neo-acessbilidade.appspot.com",
  messagingSenderId: "217429716804",
  appId: "1:217429716804:web:a8c318893c5a596193b111"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/// Firebase/Database__________________________

export const db = getDatabase(app);

/// Firebase/Firestore______________________________

export const dbFirestore = getFirestore();