import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-O0eY53EuusWLYpBUjO6_WNCWu4atuGE",
  authDomain: "jlpecco-12e54.firebaseapp.com",
  projectId: "jlpecco-12e54",
  storageBucket: "jlpecco-12e54.appspot.com",
  messagingSenderId: "564845208849",
  appId: "1:564845208849:web:1cf3f473e1761b99ec98b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);