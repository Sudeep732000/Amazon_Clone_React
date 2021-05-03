import firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
    apiKey: "Your Firebase Key",
    authDomain: "Your Domain",
    projectId: "Your ID",
    storageBucket: "YOur config",
    messagingSenderId: "Given ID",
    appId: "Your ID",
    measurementId: "ID"
  });
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()


  export { db , auth, provider};
