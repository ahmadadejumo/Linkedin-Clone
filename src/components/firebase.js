// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDUV10NLROS20lqFtI83XgZy7kjIuRK8E",
  authDomain: "linkedin-clone-5523b.firebaseapp.com",
  projectId: "linkedin-clone-5523b",
  storageBucket: "linkedin-clone-5523b.appspot.com",
  messagingSenderId: "467743616469",
  appId: "1:467743616469:web:d8e4989395686b2745215c",
  measurementId: "G-WKMP3CF23N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
