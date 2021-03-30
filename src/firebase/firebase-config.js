import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACn1NRDNcBWze1LlmBAPFU_evZ1_4uLIo",
  authDomain: "react-app1-8df2c.firebaseapp.com",
  projectId: "react-app1-8df2c",
  storageBucket: "react-app1-8df2c.appspot.com",
  messagingSenderId: "243850206629",
  appId: "1:243850206629:web:925f02607dd188af5b5c4c",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
