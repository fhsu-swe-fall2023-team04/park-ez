// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'inkland-2e1ec.firebaseapp.com',
	projectId: 'inkland-2e1ec',
	storageBucket: 'inkland-2e1ec.appspot.com',
	messagingSenderId: '512429662298',
	appId: '1:512429662298:web:6609f7bf8ae6cb79297863',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
