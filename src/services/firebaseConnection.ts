import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAy5O386TgXzArVJpiajk5GdQ713S77Gnc",
    authDomain: "reactlinks-a1982.firebaseapp.com",
    projectId: "reactlinks-a1982",
    storageBucket: "reactlinks-a1982.firebasestorage.app",
    messagingSenderId: "913983931201",
    appId: "1:913983931201:web:12c62b8fc5e14ea62f17c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };