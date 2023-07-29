import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCFT51SO3Be-HKFI0tY6LCm0CX9n0m_2EI",
  authDomain: "linkedin-b572c.firebaseapp.com",
  projectId: "linkedin-b572c",
  storageBucket: "linkedin-b572c.appspot.com",
  messagingSenderId: "786931905375",
  appId: "1:786931905375:web:a0cb60774c7bd91e8cfcea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
