import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXL6pRZBvbO6u_XXqqj4sL3tm94QmjsK4",
  authDomain: "photo-album-fcdf4.firebaseapp.com",
  projectId: "photo-album-fcdf4",
  storageBucket: "photo-album-fcdf4.appspot.com",
  messagingSenderId: "861374185358",
  appId: "1:861374185358:web:bc8eb3de5bd454bc3deedf"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp  };
