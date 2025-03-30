import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { FIREBASE_API_KEY } from "./constants";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "mini-games-portal.firebaseapp.com",
  projectId: "mini-games-portal",
  storageBucket: "mini-games-portal.firebasestorage.app",
  appId: "1:978743231737:web:04609dfc4dfaebecb7ce28",
  measurementId: "G-D36944SBPF"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);