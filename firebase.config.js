import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "little-learners-ab9ca.firebaseapp.com",
  projectId: "little-learners-ab9ca",
  storageBucket: "little-learners-ab9ca.firebasestorage.app",
  messagingSenderId: "192098479256",
  appId: "1:192098479256:web:86b6afd6474f9a77d134ed",
  measurementId: "G-W64ZXFSF18"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 