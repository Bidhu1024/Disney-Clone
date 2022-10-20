import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAstACCojSLIlK3S2BMhn0FepGvkHhPlO4",
    authDomain: "disneyplus-clone-aae6e.firebaseapp.com",
    projectId: "disneyplus-clone-aae6e",
    storageBucket: "disneyplus-clone-aae6e.appspot.com",
    messagingSenderId: "926226644553",
    appId: "1:926226644553:web:176b3c27f1014e7ad3c998",
    measurementId: "G-8WCLYRQ3N1"
  };

//   // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth,provider,storage};
export default db;