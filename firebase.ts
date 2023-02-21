import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBtSghRhjg14H7qaC31dkpqLXrXLVB2Dv0',
	authDomain: 'gpt3-explorer-3f20e.firebaseapp.com',
	projectId: 'gpt3-explorer-3f20e',
	storageBucket: 'gpt3-explorer-3f20e.appspot.com',
	messagingSenderId: '691401857138',
	appId: '1:691401857138:web:a24fa951c4d19605a14aeb',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
