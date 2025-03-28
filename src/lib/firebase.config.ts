import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { FIREBASE_API_KEY } from "./constants";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "mini-games-portal.firebaseapp.com",
  projectId: "mini-games-portal",
  storageBucket: "mini-games-portal.firebasestorage.app",
  appId: "1:978743231737:web:c2b26ab8c6261388b7ce28",
  measurementId: "G-2ML4FTBL0M"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);