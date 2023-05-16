// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBpWn4quZ9GNHAbA6eATQwGwmH5XMmTzYs",
  authDomain: "devtora-devtora.firebaseapp.com",
  projectId: "devtora-devtora",
  storageBucket: "devtora-devtora.appspot.com",
  messagingSenderId: "536976169166",
  appId: "1:536976169166:web:0763220edcd33ebc3e589f",
  measurementId: "G-MJT2LS35Y9",
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
