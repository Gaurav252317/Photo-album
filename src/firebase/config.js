import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4C9-kfx-FsbfqdGipACpLjOP319MHlKA",
  authDomain: "saras-gaurav-photo-album.firebaseapp.com",
  projectId: "saras-gaurav-photo-album",
  storageBucket: "saras-gaurav-photo-album.appspot.com",
  messagingSenderId: "688708398464",
  appId: "1:688708398464:web:5f16d270909788b03ea565"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp  };