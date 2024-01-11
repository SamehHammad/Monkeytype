import "firebase/app";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPNjnptAWixn5bKw-BYAhNUOSrGRDrbic",
  authDomain: "monkeytype1-fdf45.firebaseapp.com",
  projectId: "monkeytype1-fdf45",
  storageBucket: "monkeytype1-fdf45.appspot.com",
  messagingSenderId: "192085612756",
  appId: "1:192085612756:web:c16559c07532d669878341",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export { auth, db, storage, gProvider, fProvider };
