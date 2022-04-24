// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7HcWq0bMpLW2XqD-Rs5T7EwWcSEHU3xk",
  authDomain: "formulario-taller-web-1.firebaseapp.com",
  projectId: "formulario-taller-web-1",
  storageBucket: "formulario-taller-web-1.appspot.com",
  messagingSenderId: "800040261872",
  appId: "1:800040261872:web:3645e0c1cdbef709c70a35"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}