
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa4u7x5b7-YQiwPnZaJ5cHLwZE-R_pbpI",
  authDomain: "coderhouse-react-54aa5.firebaseapp.com",
  projectId: "coderhouse-react-54aa5",
  storageBucket: "coderhouse-react-54aa5.appspot.com",
  messagingSenderId: "749679374493",
  appId: "1:749679374493:web:3fe551a00f6ef39096a474",
  measurementId: "G-7C79CH7YFN"
};


const app = initializeApp(firebaseConfig);
 
 export const firestoreDb = getFirestore(app)