
// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQIcDALhWWeoYS22GLL1NF9ie7HJWnPuE",
  authDomain: "stackdevelopment-d0d3c.firebaseapp.com",
  projectId: "stackdevelopment-d0d3c",
  storageBucket: "stackdevelopment-d0d3c.appspot.com",
  messagingSenderId: "131489093986",
  appId: "1:131489093986:web:21d4e69d0593d984e7b43b"
};


// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }
// const auth = firebase.auth()

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// initializeApp(firebaseConfig);

export { auth };
