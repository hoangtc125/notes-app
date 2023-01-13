// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiFx_infaMZD6o-3BpIsI8nJa3T57R0gg",
  authDomain: "graphql-a7cf1.firebaseapp.com",
  projectId: "graphql-a7cf1",
  storageBucket: "graphql-a7cf1.appspot.com",
  messagingSenderId: "825348474518",
  appId: "1:825348474518:web:a19c7fe3d09feb7c5ca4b7",
  measurementId: "G-8QLPD1LFDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);