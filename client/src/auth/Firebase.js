// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfOPHBgb7SwUR_AHucWml6HjQqA1hQGjc',
  authDomain: 'estore-project.online',
  projectId: 'estore-project-5731e',
  storageBucket: 'estore-project-5731e.firebasestorage.app',
  messagingSenderId: '54889190141',
  appId: '1:54889190141:web:f1275a1766dac43983e494',
  measurementId: 'G-JH22QP29TX'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
