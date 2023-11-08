// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfnwtMuFp1HenLGgMP-TzLgcouNi55xY0",
  authDomain: "park-ez-e8b5a.firebaseapp.com",
  projectId: "park-ez-e8b5a",
  storageBucket: "park-ez-e8b5a.appspot.com",
  messagingSenderId: "645837883605",
  appId: "1:645837883605:web:b6ec5f7237019184c33a5c",
  measurementId: "G-1LWYFLNQCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app