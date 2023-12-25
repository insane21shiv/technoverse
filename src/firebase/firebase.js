import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNdpcUxAHGy5sfwRsrCpw_09OIMfFeT0Q",
  authDomain: "filmyverse-30cb7.firebaseapp.com",
  projectId: "filmyverse-30cb7",
  storageBucket: "filmyverse-30cb7.appspot.com",
  messagingSenderId: "238521124568",
  appId: "1:238521124568:web:bda6a96851bb9a97d579ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;