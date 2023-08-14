// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYdyrmW1RrHm-Y5DITO4Li5hjhjMhD8Is",
  authDomain: "ig-reels-76b97.firebaseapp.com",
  projectId: "ig-reels-76b97",
  storageBucket: "ig-reels-76b97.appspot.com",
  messagingSenderId: "472207663182",
  appId: "1:472207663182:web:b596750261ff4a8508a31f",
  measurementId: "G-9BHRC79CH5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// initializeApp(firebaseConfig);

// const db = getFirestore();

// export const reelsRef = collection(db, "reels");
