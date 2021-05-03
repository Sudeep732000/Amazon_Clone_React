import firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdTQm1ffKg47NISMFks-x7Lghrp541b8g",
    authDomain: "clone-9746c.firebaseapp.com",
    projectId: "clone-9746c",
    storageBucket: "clone-9746c.appspot.com",
    messagingSenderId: "56604934938",
    appId: "1:56604934938:web:5f1787383a0d41d483e2a3",
    measurementId: "G-NRYDC7VBNN"
  });
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()


  export { db , auth, provider};