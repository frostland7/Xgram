// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFsqArlLDAFYqTEOmw3vbmfIrzjQFEyp8",
  authDomain: "xgram-80081.firebaseapp.com",
  databaseURL: "https://xgram-80081-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xgram-80081",
  storageBucket: "xgram-80081.firebasestorage.app",
  messagingSenderId: "875987331702",
  appId: "1:875987331702:web:365cd672ea72b8712a0d57",
  measurementId: "G-75NZFVHPKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
